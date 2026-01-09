"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const ExperienceSection = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experiences = [
        {
            title: t("job1Title"),
            company: t("job1Company"),
            period: t("job1Period"),
            description: t("job1Role"),
            tags: ["C#", ".NET MVC", "SQL Server", "Git"],
            active: true,
        },
        {
            title: t("job2Title"),
            company: t("job2Company"),
            period: t("job2Period"),
            description: t("job2ProjectDetail1"),
            tags: ["React.js", "JavaScript (ES6+)", "TailwindCSS"],
            active: false,
        },
    ];

    return (
        <section id="experience" className="py-24 bg-slate-900/50" ref={ref}>
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-3xl font-bold mb-16 text-center"
                >
                    {t("workExperience")}
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 border-l-2 border-slate-800"
                        >
                            <div
                                className={`absolute w-4 h-4 rounded-full -left-[9px] top-1 ${exp.active
                                        ? "bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                                        : "bg-slate-700"
                                    }`}
                            ></div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                    <p className="text-sky-400 font-medium">{exp.company}</p>
                                </div>
                                <div className="text-sm text-slate-500 mt-2 md:mt-0 font-mono">
                                    {exp.period}
                                </div>
                            </div>

                            <p className="text-slate-400 mb-4">{exp.description}</p>

                            <div className="flex flex-wrap gap-2 text-xs font-mono">
                                {exp.tags.map((tag, i) => (
                                    <span key={i} className="px-2 py-1 bg-slate-800 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
