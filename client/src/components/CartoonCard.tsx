import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CartoonCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function CartoonCard({ children, className, delay = 0 }: CartoonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{
        y: -6,
        scale: 1.02,
        rotate: 0.5,
        transition: { type: "spring", stiffness: 400, damping: 12 },
      }}
      whileTap={{ scale: 0.98 }}
      className={cn("cartoon-card", className)}
    >
      {children}
    </motion.div>
  );
}
