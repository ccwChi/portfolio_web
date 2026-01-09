"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const SkillsSection = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skills = [
        {
            title: t("backendFullStack"),
            icon: (
                <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                </svg>
            ),
            items: [t("skillBackend1"), "ASP.NET MVC / WebAPI", t("skillBackend2"), t("skillBackend3")],
            color: "sky",
        },
        {
            title: t("frontend"),
            icon: (
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
            ),
            items: [t("skillFrontend1"), t("skillFrontend2"), "Next.js (持續進修)"],
            color: "indigo",
        },
        {
            title: t("manufacturingIntegration"),
            icon: (
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
            ),
            items: [t("skillManufacturing1"), t("skillManufacturing2"), t("skillManufacturing3"), "NFC / 機邊電腦應用"],
            color: "emerald",
        },
        {
            title: t("engineeringPractice"),
            icon: (
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
            ),
            items: [t("skillEngineering1"), t("skillEngineering2"), t("skillEngineering3")],
            color: "amber",
        },
    ];

    return (
        <section id="skills" className="py-24" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto px-6 text-center mb-16"
            >
                <h2 className="text-3xl font-bold mb-4">{t("coreSkills")}</h2>
                <p className="text-slate-400">精準的全端開發能力與深厚的工業系統整合經驗</p>
            </motion.div>

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass p-8 rounded-2xl"
                    >
                        <div className={`w-12 h-12 bg-${skill.color}-500/10 rounded-lg flex items-center justify-center mb-6`}>
                            {skill.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-4">{skill.title}</h3>
                        <ul className="text-slate-400 space-y-2 text-sm">
                            {skill.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
