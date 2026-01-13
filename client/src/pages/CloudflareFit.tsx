import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Target, Lightbulb, TrendingUp, Rocket, Heart, Code2, BarChart3, Brain, Sparkles } from "lucide-react";

import networkImg from "@assets/generated_images/global_network_visualization_with_cloudflare_inspired_orange_accents.png";

export default function WhyMe() {
  const coreValues = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "I measure success by impact, not activity. Whether it's reducing time-to-value by 40% or influencing $8M+ in revenue, I focus on metrics that matter to the business. Every project starts with 'What problem are we solving?' and ends with 'How do we measure success?'",
    },
    {
      icon: Brain,
      title: "AI-Powered Security Expertise",
      description: "At Darktrace, I worked hands-on with AI-powered threat detection systems, guiding security executives on adoption and deployment. I understand how machine learning models detect anomalies, how AI systems scale, and how to translate complex AI capabilities into business value. This experience gives me a unique perspective on the intersection of AI and security.",
    },
    {
      icon: Sparkles,
      title: "AI-Augmented Development",
      description: "I leverage AI tools like Cursor and modern AI coding assistants to accelerate development while maintaining code quality. I've integrated AI into my workflow to automate repetitive tasks, generate boilerplate code, and enhance problem-solving—not as a crutch, but as a force multiplier that lets me focus on architecture and innovation.",
    },
    {
      icon: Lightbulb,
      title: "Systems Thinker",
      description: "I don't just fix symptoms—I architect solutions. When I see repetitive tasks, I build automation. When I see knowledge gaps, I create documentation and training. When I see inefficiencies, I redesign workflows. This mindset led me to build MoneyRank from scratch while excelling in enterprise roles.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Learner",
      description: "The tech landscape evolves daily, and so do I. I've transitioned from mobile development to security engineering to customer success—not by accident, but by intentional learning. I'm currently a Subject Matter Expert in ASM, but I'm always building the next skill set.",
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "I've spent years translating between technical teams and business stakeholders. I understand that the best technical solution is worthless if customers can't use it. That's why I build with empathy, test with real users, and iterate based on feedback—not assumptions.",
    },
  ];

  const workStyle = [
    {
      icon: Rocket,
      title: "Self-Directed & Proactive",
      description: "I don't wait for permission to solve problems. At Censys, I created automation scripts that weren't requested but became standard practice. At Darktrace, I led enablement initiatives that scaled across regions. As MoneyRank's founder, I built an entire platform solo—from concept to launch.",
    },
    {
      icon: Code2,
      title: "Full-Stack Problem Solver",
      description: "I'm comfortable anywhere in the stack. Need a Python script to automate SSO? Done. Need a React frontend with TypeScript? Built it. Need to optimize Kubernetes deployments? Architected it. This versatility means I can own projects end-to-end without handoffs.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decision Maker",
      description: "I make decisions based on evidence, not opinions. At MoneyRank, I iterate based on real user engagement data. In enterprise roles, I've used analytics to identify optimization opportunities that others missed. I speak the language of metrics because that's how you prove value.",
    },
  ];

  const problemSolvingExamples = [
    {
      challenge: "Enterprise clients struggling with complex multi-cloud deployments",
      solution: "Architected standardized deployment patterns and automation workflows, reducing implementation time by 40% and creating reusable templates for future engagements",
      impact: "Scaled solution across 30+ customer deployments"
    },
    {
      challenge: "Knowledge silos preventing team enablement",
      solution: "Created comprehensive documentation, training materials, and led cross-regional enablement as ASM Subject Matter Expert",
      impact: "Mentored 30+ engineers and improved customer satisfaction by 25%"
    },
    {
      challenge: "Users making suboptimal financial decisions without guidance",
      solution: "Built MoneyRank—a platform with scoring algorithms and risk-grading systems that provide instant, actionable feedback",
      impact: "Active user base with data-driven product iterations"
    },
  ];

  const moneyRankProject = {
    name: "MoneyRank",
    role: "Founder & Builder",
    period: "2025–Present",
    tagline: "Consumer Finance Decision Platform",
    story: "I built MoneyRank because I saw a gap: people make financial decisions daily without understanding the quality of their choices. I wanted to create something that helps users evaluate and rank real-world financial decisions through interactive scenarios.",
    achievements: [
      "Architected and developed a consumer-facing platform enabling users to evaluate and rank financial decisions (investing, debt management, insurance, housing) through interactive daily scenarios",
      "Engineered sophisticated scoring algorithms, percentile ranking systems, and risk-grading mechanisms that provide instant, actionable feedback on decision quality and risk assessment capabilities",
      "Launched with open access architecture and implemented optional user accounts featuring progress tracking, advanced analytics dashboards, and engagement streaks to drive user retention",
      "Achieved active user adoption and iterated product features based on real-time engagement metrics, usage analytics, and user feedback to optimize user experience and platform value",
    ],
    tech: ["React", "TypeScript", "Node.js", "Supabase/Postgres", "Authentication", "Analytics"],
    whyItMatters: "This project showcases my ability to identify market opportunities, execute full-stack development, and iterate based on real user data—all while maintaining excellence in my day job."
  };

  const metrics = [
    { label: "Time-to-Value Reduction", value: "40%", description: "Through automation and standardization" },
    { label: "Revenue Influenced", value: "$8M+", description: "Renewals and expansions in enterprise sales" },
    { label: "Engineers Mentored", value: "30+", description: "Cross-regional enablement leadership" },
    { label: "Technical Cases Resolved", value: "2,000+", description: "Customer issues and technical support" },
  ];

  return (
    <div className="container mx-auto max-w-5xl">
      {/* Hero Section - More Personal */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 space-y-6"
      >
        <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1 text-sm uppercase tracking-widest mb-4">
          Value Proposition
        </Badge>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
          Why <span className="text-primary">Me</span>?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I'm not just an engineer who can code. I'm a 
          <span className="text-white font-medium"> problem-solver</span> who builds systems, 
          a <span className="text-white font-medium">leader</span> who enables teams, and an 
          <span className="text-white font-medium"> entrepreneur</span> who ships products.
        </p>
      </motion.div>

      {/* Metrics Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
      >
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-white/5 border-white/10 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground font-medium mb-1">{metric.label}</div>
              <div className="text-xs text-muted-foreground/70">{metric.description}</div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Core Values - What Drives Me */}
      <div className="mb-16">
        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">What Drives Me</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
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
                    <CardTitle className="text-xl font-bold text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* How I Work */}
      <div className="mb-16">
        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">How I Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {workStyle.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
              >
                <Card className="h-full bg-white/5 border-white/10 hover:border-primary/50 transition-colors group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg font-bold text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
        </div>
      </div>

      {/* Problem-Solving Examples */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Problem → Solution → Impact</h2>
        <div className="space-y-6">
          {problemSolvingExamples.map((example, index) => (
            <Card key={index} className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Challenge</div>
                    <p className="text-white font-medium">{example.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Solution</div>
                    <p className="text-muted-foreground">{example.solution}</p>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Impact</div>
                    <p className="text-primary font-medium">{example.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* MoneyRank Project - Featured */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Building Beyond the Day Job</h2>
        <Card className="bg-gradient-to-r from-primary/10 via-white/5 to-transparent border-primary/20">
          <CardHeader>
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <CardTitle className="text-2xl font-bold text-white">
                    {moneyRankProject.name}
                  </CardTitle>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    {moneyRankProject.role}
                  </Badge>
                </div>
                <p className="text-primary font-medium mb-1">{moneyRankProject.tagline} • {moneyRankProject.period}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3 max-w-2xl">
                  {moneyRankProject.story}
            </p>
          </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Key Achievements</h4>
              <ul className="space-y-3">
                {moneyRankProject.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-sm text-muted-foreground italic mb-4">{moneyRankProject.whyItMatters}</p>
              <div className="flex flex-wrap gap-2">
                {moneyRankProject.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-sm bg-black/40 hover:bg-primary hover:text-white transition-colors border border-white/5">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="text-center space-y-4 mb-16"
      >
        <Card className="bg-gradient-to-r from-white/5 to-transparent border-white/10">
          <CardContent className="p-8">
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I'm looking for opportunities where I can combine my 
              <span className="text-white font-medium"> technical depth</span>, 
              <span className="text-white font-medium"> customer success expertise</span>, and 
              <span className="text-white font-medium"> entrepreneurial mindset</span> to solve meaningful problems and drive measurable impact.
            </p>
          </CardContent>
        </Card>
      </motion.div>

    </div>
  );
}
