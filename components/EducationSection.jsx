"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const EducationSection = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const education = [
        {
            degree: t("educationPhD"),
            period: t("educationPhDPeriod"),
            highlight: true,
        },
        {
            degree: t("educationMaster"),
            period: t("educationMasterPeriod"),
            highlight: false,
        },
        {
            degree: t("educationBachelor"),
            period: t("educationBachelorPeriod"),
            highlight: false,
        },
    ];

    return (
        <section className="py-24 bg-slate-900/50" ref={ref}>
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    {t("education")}
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`glass p-6 rounded-2xl ${edu.highlight ? "border-t-2 border-sky-500" : "border-t-2 border-slate-700"
                                }`}
                        >
                            <h4 className="font-bold text-white mb-1">{edu.degree.split("|")[1]}</h4>
                            <p className="text-sm text-sky-400 mb-2">{edu.degree.split("|")[0]}</p>
                            <p className="text-xs text-slate-500">{edu.period}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
