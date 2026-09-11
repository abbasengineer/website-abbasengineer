import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Experience } from "@/data/resume";

interface ExperienceJobCardProps {
  job: Experience;
  index: number;
  decorativeImage?: React.ReactNode;
}

export default function ExperienceJobCard({
  job,
  index,
  decorativeImage,
}: ExperienceJobCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={cn(
        "relative pl-8 border-l border-white/10 group",
        expanded && "border-l-primary/50",
      )}
    >
      <motion.div
        className={cn(
          "absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ring-4 ring-background transition-colors",
          expanded ? "bg-primary scale-125" : "bg-primary/70 group-hover:bg-primary group-hover:scale-125",
        )}
        layout
      />

      <motion.button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls={`job-details-${index}`}
        className={cn(
          "w-full text-left rounded-xl -ml-2 pl-2 pr-3 py-3 transition-colors cursor-pointer",
          "hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
          expanded && "bg-white/[0.03]",
        )}
        whileTap={{ scale: 0.995 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <h3 className="text-xl font-bold text-white">{job.company}</h3>
          <span className="text-sm text-muted-foreground font-mono bg-white/5 px-2 py-1 rounded w-fit">
            {job.period}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-3 text-primary/90 font-medium">
          <span>{job.role}</span>
          <span className="w-1 h-1 bg-white/20 rounded-full" />
          <span className="text-sm text-muted-foreground font-normal flex items-center gap-1">
            <MapPin className="w-3 h-3" /> {job.location}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {!expanded ? (
            <motion.p
              key="summary"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="text-muted-foreground leading-relaxed pr-8"
            >
              {job.summary}
            </motion.p>
          ) : null}
        </AnimatePresence>

        <div
          className={cn(
            "mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
            expanded
              ? "border-primary/40 bg-primary/10 text-primary"
              : "border-white/15 bg-white/5 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary",
          )}
        >
          <span>{expanded ? "Click to collapse" : "Click to expand"}</span>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.span>
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`job-details-${index}`}
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.ul
              className="space-y-3 pt-4 pb-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
            >
              {job.points.map((point, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="text-muted-foreground leading-relaxed flex items-start gap-3"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  {point}
                </motion.li>
              ))}
            </motion.ul>

            {decorativeImage && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.35 }}
              >
                {decorativeImage}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
