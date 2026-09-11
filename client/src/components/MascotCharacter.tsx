import { motion } from "framer-motion";

interface MascotCharacterProps {
  className?: string;
  animate?: boolean;
  size?: number;
}

export default function MascotCharacter({
  className = "",
  animate = true,
  size = 120,
}: MascotCharacterProps) {
  const body = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <ellipse cx="60" cy="108" rx="28" ry="6" fill="hsl(var(--primary))" opacity="0.25" />

      <rect x="38" y="68" width="44" height="36" rx="12" fill="#1a2233" stroke="hsl(var(--primary))" strokeWidth="3" />
      <rect x="48" y="78" width="24" height="16" rx="4" fill="hsl(var(--primary))" opacity="0.35" />
      <circle cx="54" cy="86" r="2" fill="hsl(var(--primary))" />
      <circle cx="66" cy="86" r="2" fill="hsl(var(--primary))" />

      <motion.g
        animate={animate ? { y: [0, -3, 0] } : undefined}
        transition={animate ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" } : undefined}
      >
        <circle cx="60" cy="44" r="26" fill="#243044" stroke="hsl(var(--primary))" strokeWidth="3" />
        <circle cx="50" cy="42" r="5" fill="white" />
        <circle cx="70" cy="42" r="5" fill="white" />
        <circle cx="51" cy="43" r="2.5" fill="#1a2233" />
        <circle cx="71" cy="43" r="2.5" fill="#1a2233" />
        <path d="M52 54 Q60 60 68 54" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        <path
          d="M34 28 L60 14 L86 28 L82 36 L38 36 Z"
          fill="hsl(var(--primary))"
          stroke="#e85d04"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M56 14 L64 14 L62 22 L58 22 Z" fill="#ffb347" />

        <motion.g
          animate={animate ? { rotate: [0, 8, -8, 0] } : undefined}
          transition={animate ? { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 } : undefined}
          style={{ originX: "92px", originY: "72px" }}
        >
          <rect x="78" y="62" width="18" height="10" rx="3" fill="hsl(var(--primary))" stroke="#e85d04" strokeWidth="2" />
          <path d="M96 67 L108 67" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
        </motion.g>
      </motion.g>

      <motion.g
        animate={animate ? { rotate: [0, 12, 0] } : undefined}
        transition={animate ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : undefined}
        style={{ originX: "24px", originY: "72px" }}
      >
        <rect x="8" y="62" width="18" height="10" rx="3" fill="hsl(var(--primary))" stroke="#e85d04" strokeWidth="2" />
      </motion.g>
    </svg>
  );

  return body;
}
