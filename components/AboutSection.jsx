"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import JeffProfileImg from "@/assets/images/Jeff.webp";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Briefcase, GraduationCap, Code2, Sparkles, ArrowRight } from "lucide-react";
import Typewriter from "typewriter-effect";

const AboutSection = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const highlights = [
        {
            icon: Briefcase,
            label: "工作經驗",
            value: "1.5+ 年",
            description: "軟體開發",
        },
        {
            icon: Code2,
            label: "技術領域",
            value: "全端開發",
            description: "MES/CIM 系統",
        },
    ];

    return (
        <section id="about" ref={ref} className="px-8 lg:px-16  pt-32 relative overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Top Section: Photo + Intro */}
                    <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">

                        {/* Left Column: Photo (Smaller & Subtle) */}
                        <div className="lg:col-span-3 lg:col-start-2 flex justify-center lg:justify-end">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative w-full max-w-[200px]"
                            >
                                {/* Image Decor - Backdrop */}
                                <div className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-3 translate-y-3 -z-10" />

                                <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg bg-muted transition-all duration-500">
                                    <AspectRatio ratio={3 / 4}>
                                        <Image
                                            src={JeffProfileImg}
                                            alt="Jeff Profile"
                                            fill
                                            className="object-cover"
                                            priority
                                            placeholder="blur"
                                        />
                                    </AspectRatio>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Text & Highlights (Wider) */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="space-y-4">
                                {/* <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                                >
                                    <Sparkles className="w-4 h-4 text-primary" />
                                    <span>Transformation Journey</span>
                                </motion.div> */}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2">
                                        {t("Iam")}
                                    </h1>
                                    <div className="text-xl md:text-2xl text-muted-foreground font-medium h-[32px] flex items-center">
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    t("nowAs") || "Frontend Developer",
                                                    "Full-Stack Developer",
                                                    "CIM / MES Specialist",
                                                    "Problem Solver"
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                delay: 50,
                                                deleteSpeed: 30,
                                            }}
                                        />
                                    </div>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ delay: 0.5 }}
                                    className="text-lg text-muted-foreground leading-relaxed"
                                >
                                    {t("aboutDes")}
                                </motion.p>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.55 }}
                                    className="flex flex-wrap gap-4 pt-2"
                                >
                                    <Button size="lg" className="rounded-full gap-2" asChild>
                                        <a href="#biography">
                                            View Resume <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </Button>
                                    <Button size="lg" variant="outline" className="rounded-full" asChild>
                                        <a href="#timeline">{t("timeline")}</a>
                                    </Button>
                                </motion.div>
                            </div>

                            {/* Highlights Grid */}
                            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                                {highlights.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                    >
                                        <div className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors h-full">
                                            <item.icon className="h-6 w-6 text-primary mb-3" />
                                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                                                {item.label}
                                            </p>
                                            <p className="font-bold text-foreground">
                                                {item.value}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div> */}
                        </div>
                    </div>

                    {/* Bottom Section: Details Cards */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8 }}
                        >
                            <SpotlightCard
                                className="h-full border-border bg-card p-5"
                                spotlightColor="hsl(var(--primary) / 0.1)"
                            >
                                <CardHeader>
                                    <CardTitle className="text-xl flex items-center gap-3">
                                        <Badge variant="default" className="px-3 py-1">Current</Badge>
                                        {t("currentResponsibilities")}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-muted-foreground space-y-4 leading-relaxed">
                                    <p>
                                        {t("currentDes1")}
                                        <span className="text-foreground font-semibold px-1">{t("currentDes2")}</span>
                                        {t("currentDes3")}
                                    </p>
                                    {/* <div className="flex items-center gap-3 pt-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {t("currentDesEnd")}
                                    </div> */}
                                </CardContent>
                            </SpotlightCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.9 }}
                        >
                            <SpotlightCard
                                className="h-full border-border bg-card p-5"
                                spotlightColor="hsl(var(--primary) / 0.1)"
                            >
                                <CardHeader>
                                    <CardTitle className="text-xl flex items-center gap-3">
                                        <Badge variant="outline" className="px-3 py-1">Growth</Badge>
                                        持續學習與精進
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-muted-foreground space-y-4 leading-relaxed">
                                    <p>{t("aboutnow-1")}</p>
                                    {/* <div className="flex items-center gap-3 pt-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {t("aboutnow-2")}
                                    </div> */}
                                </CardContent>
                            </SpotlightCard>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
