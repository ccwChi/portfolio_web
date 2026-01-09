"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { CardContent } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Calendar, TrendingUp, CircleDot, ArrowRight } from "lucide-react";

const TimelineSection = () => {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const timelineData = [
        { date: "2023.01", key: "2023.01", milestone: true },
        // { date: "2023.04", key: "2023.04" },
        // { date: "2023.06", key: "2023.06" },
        { date: "2023.08", key: "2023.08", milestone: true },
        // { date: "2024.01", key: "2024.01" },
        // { date: "2024.03", key: "2024.03" },
        { date: "2024.07", key: "2024.07", milestone: true },
        // { date: "2024.09", key: "2024.09" },
        { date: "2025.01", key: "2025.01", milestone: true },
    ];

    return (
        <section id="timeline" className="px-8 lg:px-16 py-24 relative overflow-hidden bg-muted/30">
            <div className="container mx-auto relative z-10" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                            {t("timeline")}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            從材料科學到軟體工程的轉職歷程
                        </p>
                    </div>

                    <div className="relative">
                        {/* Animated Timeline Line (Desktop) - Monochrome Gradient */}
                        <div className="absolute left-9 top-0 bottom-0 w-px bg-border hidden md:block">
                            <motion.div
                                className="w-full bg-gradient-to-b from-primary/80 to-primary/20 origin-top"
                                style={{ height: lineHeight }}
                            />
                        </div>

                        <div className="space-y-10">
                            {timelineData.map((item, index) => (
                                <motion.div
                                    key={item.key}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="relative pl-4 md:pl-0"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-9 top-8 w-px h-full -translate-x-1/2 hidden md:block" />
                                    <div
                                        className={`absolute left-9 top-8 w-5 h-5 rounded-full -translate-x-1/2 border-4 border-background hidden md:flex items-center justify-center z-10 ${item.milestone
                                            ? "bg-primary shadow-[0_0_0_4px_hsl(var(--muted))]"
                                            : "bg-muted-foreground/30"
                                            }`}
                                    >
                                        {item.milestone && <div className="w-1.5 h-1.5 rounded-full bg-background" />}
                                    </div>

                                    {/* Content Card */}
                                    <SpotlightCard
                                        className={`md:ml-24 group transition-all duration-300 border-border bg-card ${item.milestone ? "border-primary/30" : "hover:border-primary/20"}`}
                                        spotlightColor="hsl(var(--primary) / 0.1)"
                                    >
                                        <CardContent className="p-6 md:p-8">
                                            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                                                <div className="flex items-center gap-3 shrink-0 min-w-[120px]">
                                                    <div className={`p-2 rounded-lg bg-secondary border border-border ${item.milestone ? "text-primary" : "text-muted-foreground"}`}>
                                                        <Calendar className="h-4 w-4" />
                                                    </div>
                                                    <span className={`font-mono font-bold text-lg ${item.milestone ? "text-primary" : "text-muted-foreground"}`}>
                                                        {item.date}
                                                    </span>
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-start gap-3">
                                                        {item.milestone && <CircleDot className="h-5 w-5 mt-0.5 shrink-0 text-primary" />}
                                                        <p className={`leading-relaxed ${item.milestone ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                                                            {t(item.key)}
                                                        </p>
                                                    </div>
                                                </div>

                                                {item.milestone && (
                                                    <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                                        <ArrowRight className="h-5 w-5 text-muted-foreground" />
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </SpotlightCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Vision Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-16 md:ml-24"
                    >
                        <SpotlightCard
                            className="border-t-4 border-t-primary shadow-sm bg-card"
                            spotlightColor="hsl(var(--primary) / 0.1)"
                        >
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-secondary text-primary">
                                        <TrendingUp className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-foreground">Next Chapter</h3>
                                        <div className="space-y-3 text-muted-foreground leading-relaxed">
                                            <p>{t("aboutnow-1")}</p>
                                            <p className="text-sm font-medium text-foreground/80 pt-2 border-t border-border">{t("aboutnow-2")}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </SpotlightCard>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TimelineSection;
