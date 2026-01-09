"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ExternalLink, Github, Folder } from "lucide-react";

const ProjectsSection = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            id: "02",
            titleKey: "project02",
            descKey: "project02des1",
            tech: ["Azure", "SignalR", "WebSocket"],
            links: { demo: "#", github: "#" },
        },
        {
            id: "03",
            titleKey: "project03",
            descKey: "project03des1",
            tech: [".NET API", "Docker", "Azure", "JWT"],
            links: { demo: "#", github: "#" },
        },
        {
            id: "05",
            titleKey: "project05",
            descKey: "project05des1",
            tech: ["Mobile UI", "Animation", "UX"],
            links: { demo: "#", github: "#" },
        },
    ];

    return (
        <section id="projects" ref={ref} className="py-24 bg-background">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("protfolio")}</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            個人 Side Projects 與技術實驗
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <SpotlightCard
                                    className="h-full flex flex-col group border-border bg-card"
                                    spotlightColor="hsl(var(--primary) / 0.1)"
                                >
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2.5 rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                                <Folder className="h-5 w-5" />
                                            </div>
                                            <Badge variant="outline" className="font-mono text-xs border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors">
                                                {project.id}
                                            </Badge>
                                        </div>
                                        <CardTitle className="line-clamp-1">{t(project.titleKey)}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <CardDescription className="line-clamp-4 text-justify mb-6 text-muted-foreground">
                                            {t(project.descKey)}
                                        </CardDescription>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tech.map((tech) => (
                                                <Badge key={tech} variant="secondary" className="text-xs bg-muted hover:bg-muted-foreground/10 text-muted-foreground">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="pt-4 border-t border-border bg-muted/20 gap-3">
                                        <Button variant="ghost" size="sm" className="w-full gap-2 cursor-pointer hover:bg-background hover:text-primary border border-transparent hover:border-border transition-all">
                                            <Github className="h-4 w-4" />
                                            Code
                                        </Button>
                                        <Button variant="ghost" size="sm" className="w-full gap-2 cursor-pointer hover:bg-background hover:text-primary border border-transparent hover:border-border transition-all">
                                            <ExternalLink className="h-4 w-4" />
                                            Demo
                                        </Button>
                                    </CardFooter>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
