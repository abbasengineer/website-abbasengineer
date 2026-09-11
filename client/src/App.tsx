import { useState } from "react";
import { motion } from "framer-motion";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SplashScreen from "@/components/SplashScreen";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import Resume from "@/pages/Resume";
import WhyMe from "@/pages/aboutme";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Resume} />
        <Route path="/why-me" component={WhyMe} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  const [splashDone, setSplashDone] = useState(
    () => sessionStorage.getItem("splash-seen") === "true",
  );

  const completeSplash = () => {
    sessionStorage.setItem("splash-seen", "true");
    setSplashDone(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {!splashDone && <SplashScreen onComplete={completeSplash} />}
        <motion.div
          initial={false}
          animate={{
            opacity: splashDone ? 1 : 0,
            scale: splashDone ? 1 : 0.96,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={splashDone ? undefined : "pointer-events-none"}
        >
          <Router />
        </motion.div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
