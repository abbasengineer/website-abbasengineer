import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Cloud, FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Resume", icon: FileText },
    { path: "/cloudflare-fit", label: "Why Cloudflare?", icon: Cloud },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-display font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-primary text-2xl">⚡</span>
            <span className="tracking-tight">Abbas<span className="text-muted-foreground font-light">Engineer</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location === item.path;
              const Icon = item.icon;
              return (
                <Link key={item.path} href={item.path} className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors group">
                    {isActive && (
                      <motion.div
                        layoutId="nav-bg"
                        className="absolute inset-0 bg-white/5 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={`relative flex items-center gap-2 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}`}>
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-background"
          >
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      location === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-white/5"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <main className="pt-20 pb-12 px-4">
        {children}
      </main>
    </div>
  );
}
