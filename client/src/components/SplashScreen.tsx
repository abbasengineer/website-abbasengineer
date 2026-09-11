import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import MascotCharacter from "@/components/MascotCharacter";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          window.clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 50);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 100) return;

    const timer = window.setTimeout(() => setVisible(false), 400);
    return () => window.clearTimeout(timer);
  }, [progress]);

  const handleEnter = () => setVisible(false);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border-2 border-primary/20"
                style={{
                  width: 80 + i * 60,
                  height: 80 + i * 60,
                  left: "50%",
                  top: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
            <motion.div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl"
              animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
            >
              <MascotCharacter size={140} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-6 space-y-3"
            >
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
                  Welcome
                </span>
                <Sparkles className="h-5 w-5 text-primary" />
              </div>

              <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                Abbas<span className="text-primary">Engineer</span>
              </h1>

              <p className="max-w-sm text-muted-foreground">
                Security engineer. Customer success leader. Builder of things that ship.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 240 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-8 h-3 overflow-hidden rounded-full border-2 border-primary/30 bg-white/5 cartoon-shadow-sm"
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-orange-300"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-3 text-xs font-mono text-muted-foreground"
            >
              Loading portfolio… {progress}%
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-8"
            >
              <Button
                onClick={handleEnter}
                className="cartoon-btn gap-2 rounded-full bg-primary px-8 font-bold text-white hover:bg-primary/90"
              >
                Enter Site
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}