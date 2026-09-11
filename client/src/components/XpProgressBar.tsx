import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";

interface XpProgressBarProps {
  totalXp: number;
  level: number;
  levelTitle: string;
  xpGainFlash: number;
  isWhyMe: boolean;
}

export default function XpProgressBar({
  totalXp,
  level,
  levelTitle,
  xpGainFlash,
  isWhyMe,
}: XpProgressBarProps) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-background/90 backdrop-blur-md"
      role="progressbar"
      aria-valuenow={totalXp}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Portfolio exploration progress: ${totalXp} percent`}
    >
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1.5 shrink-0">
            <Zap className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-bold text-white tabular-nums">Lvl {level}</span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2 text-[11px]">
              <span className="truncate font-medium text-muted-foreground">{levelTitle}</span>
              <span className="shrink-0 font-mono text-primary tabular-nums">{totalXp} XP</span>
            </div>
          </div>

          <AnimatePresence>
            {xpGainFlash > 0 && (
              <motion.span
                key={xpGainFlash}
                initial={{ opacity: 0, y: 6, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8 }}
                className="flex items-center gap-1 text-xs font-bold text-primary shrink-0"
              >
                <Sparkles className="h-3 w-3" />+{xpGainFlash}
              </motion.span>
            )}
          </AnimatePresence>

          {isWhyMe && (
            <span className="hidden sm:inline text-[10px] font-medium uppercase tracking-wider text-primary/80 shrink-0">
              1.25× XP
            </span>
          )}
        </div>

        <div className="relative h-2.5 overflow-hidden rounded-full border border-white/10 bg-white/5 cartoon-shadow-sm">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-orange-400 to-amber-300"
            initial={false}
            animate={{ width: `${totalXp}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-white/30"
            initial={false}
            animate={{ width: `${totalXp}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
            }}
          />
        </div>

        <p className="mt-1.5 hidden sm:block text-[10px] text-muted-foreground/70 text-center">
          Scroll to explore · Why Me sections earn bonus XP
        </p>
      </div>
    </div>
  );
}
