import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Github, Linkedin, Mail, Phone, ExternalLink, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Import generated images
import heroBg from "@assets/generated_images/abstract_dark_technology_background_with_network_nodes_and_glowing_orange_data_lines.png";
import securityImg from "@assets/generated_images/abstract_visualization_of_cyber_security_and_threat_detection.png";
import mobileImg from "@assets/generated_images/abstract_representation_of_mobile_app_development_and_coding.png";

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto max-w-5xl"
    >
      {/* Hero Header */}
      <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Tech Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">
              {resumeData.name}
            </h1>
            <p className="text-xl text-primary font-medium tracking-wide">
              Sr. Customer Success Engineer | Sales Engineer
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="outline" size="sm" className="gap-2 border-white/20 hover:bg-white/10 hover:text-white" asChild>
                <a href={`mailto:${resumeData.contact.email}`}>
                  <Mail className="w-4 h-4" /> {resumeData.contact.email}
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-2 border-white/20 hover:bg-white/10 hover:text-white" asChild>
                <a href={`tel:${resumeData.contact.phone}`}>
                  <Phone className="w-4 h-4" /> {resumeData.contact.phone}
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-2 border-white/20 hover:bg-white/10 hover:text-white" asChild>
                <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-2 border-white/20 hover:bg-white/10 hover:text-white" asChild>
                <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            {/* Visual element or QR code could go here */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-purple-600 blur-[60px] opacity-40 absolute right-12 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Experience Section */}
          <section>
            <motion.h2 variants={itemVariants} className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Experience
            </motion.h2>

            <div className="space-y-8">
              {resumeData.experience.map((job, index) => (
                <motion.div variants={itemVariants} key={index} className="relative pl-8 border-l border-white/10 group">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background group-hover:scale-125 transition-transform" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{job.company}</h3>
                    <span className="text-sm text-muted-foreground font-mono bg-white/5 px-2 py-1 rounded">{job.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4 text-primary/90 font-medium">
                    <span>{job.role}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span className="text-sm text-muted-foreground font-normal flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {job.points.map((point, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/10 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative images for specific roles */}
                  {index === 0 && (
                    <div className="mt-6 rounded-xl overflow-hidden h-32 relative group/img">
                       <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10" />
                       <img src={securityImg} alt="Security Visualization" className="w-full h-full object-cover opacity-60 group-hover/img:scale-105 transition-transform duration-500" />
                       <div className="absolute bottom-3 left-4 z-20 text-xs font-mono bg-black/50 backdrop-blur px-2 py-1 rounded text-white/80">
                         ASM & Cloud Security Architecture
                       </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="mt-6 rounded-xl overflow-hidden h-32 relative group/img">
                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent z-10" />
                       <img src={mobileImg} alt="Mobile Dev Visualization" className="w-full h-full object-cover opacity-60 group-hover/img:scale-105 transition-transform duration-500" />
                       <div className="absolute bottom-3 left-4 z-20 text-xs font-mono bg-black/50 backdrop-blur px-2 py-1 rounded text-white/80">
                         Mobile Engineering & UX
                       </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <motion.h2 variants={itemVariants} className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Projects
            </motion.h2>
            
            <div className="grid gap-6">
              {resumeData.projects.map((project, index) => (
                <motion.div variants={itemVariants} key={index}>
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                      <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors cursor-pointer group">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{project.name}</h3>
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <Badge variant="outline" className="text-xs border-primary/30 text-primary">{project.role}</Badge>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line mb-4">
                            {project.description}
                          </p>
                          <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                            <span>Check it Out</span>
                            <span>→</span>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ) : (
                    <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-white">{project.name}</h3>
                          <Badge variant="outline" className="text-xs border-primary/30 text-primary">{project.role}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <aside className="space-y-10">
          
          {/* Skills */}
          <motion.section variants={itemVariants}>
            <h3 className="text-lg font-display font-bold mb-4 text-white">Skills & Tools</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider text-xs">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-white/5 hover:bg-white/10 text-white border-transparent">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider text-xs">Frameworks & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-white/10 text-gray-300 hover:border-primary/50 hover:text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Education */}
          <motion.section variants={itemVariants}>
            <h3 className="text-lg font-display font-bold mb-4 text-white">Education</h3>
            <Card className="bg-transparent border-white/10 shadow-none">
              <CardContent className="p-0">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="font-bold text-white">{edu.school}</h4>
                    <p className="text-sm text-primary">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground font-mono">{edu.year}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.section>

          {/* Download/Action */}
          <motion.section variants={itemVariants}>
            <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-primary">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Full PDF Resume</h3>
                  <p className="text-xs text-muted-foreground mt-1">Download the original document</p>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold" asChild>
                  <a href="/Abbas_Engineer_Resume.pdf" download="Abbas_Engineer_Resume.pdf">
                    Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.section>

        </aside>
      </div>
    </motion.div>
  );
}
