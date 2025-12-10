import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, Globe, Zap, Users, Code, Server } from "lucide-react";

import networkImg from "@assets/generated_images/global_network_visualization_with_cloudflare_inspired_orange_accents.png";

export default function CloudflareFit() {
  const reasons = [
    {
      icon: Users,
      title: "The Perfect Bridge",
      description: "My background uniquely combines deep technical engineering (Java, Python, K8s) with customer-facing success. I speak both 'Engineer' and 'Executive', crucial for Cloudflare's enterprise adoption.",
    },
    {
      icon: Shield,
      title: "Security Native",
      description: "Coming from Censys (ASM) and Darktrace (AI Security), I understand the threat landscape intimately. I don't just know what a WAF or Zero Trust architecture is—I've deployed them.",
    },
    {
      icon: Code,
      title: "Automation First",
      description: "I build tools to solve problems. My experience automating workflows with Python and APIs aligns perfectly with Cloudflare's developer-first philosophy (Workers, Pages, API-first).",
    },
    {
      icon: Globe,
      title: "Network Expertise",
      description: "DNS, BGP, TLS/SSL aren't just acronyms to me; they are my daily tools. I've optimized multi-cloud deployments specifically for assets secured by Cloudflare.",
    },
  ];

  const techStack = [
    "Zero Trust", "WAF", "DDoS Protection", "Workers", "Pages", "DNS", "Magic Transit", "Access", "Tunnel"
  ];

  return (
    <div className="container mx-auto max-w-5xl">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 space-y-6"
      >
        <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1 text-sm uppercase tracking-widest mb-4">
          Candidate Analysis
        </Badge>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
          Why <span className="text-primary">Cloudflare</span>?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          It's not just about finding a job. It's about finding the place where my obsession with 
          <span className="text-white font-medium"> performance</span>, 
          <span className="text-white font-medium"> security</span>, and 
          <span className="text-white font-medium"> customer success</span> converges.
        </p>
      </motion.div>

      {/* Visual Break */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative rounded-3xl overflow-hidden aspect-[21/9] mb-16 border border-white/10 shadow-2xl group"
      >
        <img src={networkImg} alt="Cloudflare Network" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-2">Helping Build a Better Internet</h3>
              <p className="text-primary/90 font-medium">Aligned with the mission from Day 1.</p>
            </div>
            <div className="hidden md:flex gap-2">
              {techStack.slice(0, 4).map(tech => (
                <Badge key={tech} className="bg-black/50 backdrop-blur border-white/10 text-white hover:bg-primary hover:text-white transition-colors">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* The 4 Pillars */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
            >
              <Card className="h-full bg-white/5 border-white/10 hover:border-primary/50 transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Technical Alignment */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-white/5 to-transparent rounded-2xl p-8 border border-white/10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-white">Technical Alignment</h2>
            <p className="text-muted-foreground">
              I don't need to learn the stack. I've been optimizing it for years.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center md:justify-end max-w-lg">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-sm bg-black/40 hover:bg-primary hover:text-white transition-colors border border-white/5">
                <Check className="w-3 h-3 mr-1.5" />
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
}
