import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Code2, Shield, Zap, Cpu, Rocket } from "lucide-react";

const floatingItems = [
  { Icon: Cloud, x: "8%", y: "18%", delay: 0, size: 28 },
  { Icon: Shield, x: "88%", y: "22%", delay: 0.5, size: 32 },
  { Icon: Code2, x: "12%", y: "72%", delay: 1, size: 26 },
  { Icon: Zap, x: "82%", y: "68%", delay: 0.3, size: 30 },
  { Icon: Cpu, x: "72%", y: "12%", delay: 0.8, size: 24 },
  { Icon: Rocket, x: "22%", y: "42%", delay: 1.2, size: 22 },
];

const blobs = [
  { color: "bg-primary/10", x: "-10%", y: "10%", w: 320, h: 320 },
  { color: "bg-orange-400/8", x: "70%", y: "60%", w: 280, h: 280 },
  { color: "bg-purple-500/8", x: "40%", y: "-5%", w: 240, h: 240 },
];

export default function FloatingBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${blob.color}`}
          style={{ left: blob.x, top: blob.y, width: blob.w, height: blob.h }}
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -15, 10, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="absolute inset-0"
        style={{ x: mouse.x, y: mouse.y }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      >
        {floatingItems.map(({ Icon, x, y, delay, size }, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
            style={{ left: x, top: y }}
            animate={{
              y: [0, -18, 0, 14, 0],
              rotate: [0, 8, -6, 0],
            }}
            transition={{
              duration: 5 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          >
            <div className="cartoon-float-icon rounded-2xl border-2 border-primary/15 bg-white/5 p-3 backdrop-blur-sm">
              <Icon style={{ width: size, height: size }} strokeWidth={1.75} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_75%)]" />
    </div>
  );
}
