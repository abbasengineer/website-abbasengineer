import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "portfolio-xp-state";
const RESUME_SCROLL_MAX = 38;
const WHYME_SCROLL_MAX = 47;
const SECTION_BONUS_EACH = 2.5;
const MAX_XP = 100;

interface XpState {
  resumeScroll: number;
  whyMeScroll: number;
  whyMeSections: string[];
}

const DEFAULT_STATE: XpState = {
  resumeScroll: 0,
  whyMeScroll: 0,
  whyMeSections: [],
};

function loadState(): XpState {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_STATE;
  }
}

function saveState(state: XpState) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getScrollDepth(): number {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollHeight <= 0) return 1;
  return Math.min(1, window.scrollY / scrollHeight);
}

function calcTotalXp(state: XpState): number {
  const sectionBonus = state.whyMeSections.length * SECTION_BONUS_EACH;
  return Math.min(
    MAX_XP,
    Math.round(state.resumeScroll + state.whyMeScroll + sectionBonus),
  );
}

function getLevel(xp: number) {
  if (xp >= 100) return { level: 5, title: "Portfolio Master" };
  if (xp >= 75) return { level: 4, title: "Deep Diver" };
  if (xp >= 50) return { level: 3, title: "Why Me Explorer" };
  if (xp >= 25) return { level: 2, title: "Resume Reader" };
  if (xp >= 10) return { level: 1, title: "Just Arrived" };
  return { level: 0, title: "New Visitor" };
}

export function usePortfolioXp(pathname: string) {
  const [state, setState] = useState<XpState>(loadState);
  const [xpGainFlash, setXpGainFlash] = useState(0);
  const prevXp = useRef(calcTotalXp(loadState()));

  const totalXp = calcTotalXp(state);
  const { level, title: levelTitle } = getLevel(totalXp);

  const bumpFlash = useCallback((gain: number) => {
    if (gain <= 0) return;
    setXpGainFlash(gain);
    window.setTimeout(() => setXpGainFlash(0), 1200);
  }, []);

  useEffect(() => {
    const gain = totalXp - prevXp.current;
    if (gain > 0) bumpFlash(gain);
    prevXp.current = totalXp;
  }, [totalXp, bumpFlash]);

  useEffect(() => {
    const updateScrollXp = () => {
      const depth = getScrollDepth();
      setState((prev) => {
        const next = { ...prev };
        if (pathname === "/") {
          next.resumeScroll = Math.max(prev.resumeScroll, depth * RESUME_SCROLL_MAX);
        } else if (pathname === "/why-me") {
          next.whyMeScroll = Math.max(prev.whyMeScroll, depth * WHYME_SCROLL_MAX);
        }
        if (
          next.resumeScroll === prev.resumeScroll &&
          next.whyMeScroll === prev.whyMeScroll
        ) {
          return prev;
        }
        saveState(next);
        return next;
      });
    };

    updateScrollXp();
    window.addEventListener("scroll", updateScrollXp, { passive: true });
    window.addEventListener("resize", updateScrollXp);

    return () => {
      window.removeEventListener("scroll", updateScrollXp);
      window.removeEventListener("resize", updateScrollXp);
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/why-me") return;

    const sections = document.querySelectorAll<HTMLElement>("[data-xp-section]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("data-xp-section");
          if (!id) return;

          setState((prev) => {
            if (prev.whyMeSections.includes(id)) return prev;
            const next = {
              ...prev,
              whyMeSections: [...prev.whyMeSections, id],
            };
            saveState(next);
            return next;
          });
        });
      },
      { threshold: 0.35 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return {
    totalXp,
    level,
    levelTitle,
    xpGainFlash,
    isWhyMe: pathname === "/why-me",
  };
}
