"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Briefcase,
    GraduationCap,
    Target,
    Code,
    Database,
    Globe,
    Wrench,
    CheckCircle2
} from "lucide-react";

const BiographySection = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skillCategories = {
        backend: {
            icon: Database,
            title: t("backendFullStack"),
            skills: [t("skillBackend1"), t("skillBackend2"), t("skillBackend3")],
        },
        frontend: {
            icon: Globe,
            title: t("frontend"),
            skills: [t("skillFrontend1"), t("skillFrontend2")],
        },
        manufacturing: {
            icon: Wrench,
            title: t("manufacturingIntegration"),
            skills: [t("skillManufacturing1"), t("skillManufacturing2"), t("skillManufacturing3")],
        },
        engineering: {
            icon: Code,
            title: t("engineeringPractice"),
            skills: [t("skillEngineering1"), t("skillEngineering2"), t("skillEngineering3")],
        },
    };

    const projects = [
        { title: t("job1Project3Title"), details: [t("job1Project3Detail1"), t("job1Project3Detail2")] },
        { title: t("job1Project2Title"), details: [t("job1Project2Detail1"), t("job1Project2Detail2")] },
        { title: t("job1Project1Title"), details: [t("job1Project1Detail1"), t("job1Project1Detail2")] },
        { title: t("job1Project5Title"), details: [t("job1Project5Detail1"), t("job1Project5Detail2")] },
        { title: t("job1Project4Title"), details: [t("job1Project4Detail1"), t("job1Project4Detail2")] },
    ];

    return (
        <section id="biography" ref={ref} className="px-8 lg:px-16 py-20 bg-muted/30">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("biography")}</h2>
                        <p className="text-muted-foreground">完整的工作經歷與技能說明</p>
                    </div>

                    <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-4 mb-8">
                            <TabsTrigger value="overview">概覽</TabsTrigger>
                            <TabsTrigger value="experience">經歷</TabsTrigger>
                            <TabsTrigger value="skills">技能</TabsTrigger>
                            <TabsTrigger value="education">學歷</TabsTrigger>
                        </TabsList>

                        {/* Overview Tab */}
                        <TabsContent value="overview" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Target className="h-5 w-5" />
                                        <CardTitle>{t("jobRequirements")}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-sm font-medium mb-2 text-muted-foreground">{t("desiredPosition")}</p>
                                        <p className="font-medium">{t("desiredPositionValue")}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium mb-2 text-muted-foreground">{t("expectedSalary")}</p>
                                        <p className="font-medium">{t("expectedSalaryValue")}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium mb-2 text-muted-foreground">{t("desiredIndustry")}</p>
                                        <p className="font-medium">{t("desiredIndustryValue")}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium mb-2 text-muted-foreground">{t("availableDate")}</p>
                                        <p className="font-medium">{t("availableDateValue")}</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">{t("autobiography")}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 text-muted-foreground">
                                    <p className="leading-relaxed">{t("autobiographyP1")}</p>
                                    <p className="leading-relaxed">{t("autobiographyP2")}</p>
                                    <div>
                                        <p className="font-medium text-foreground mb-2">{t("autobiographyP3")}</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                                                <span>{t("autobiographyAchievement1")}</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                                                <span>{t("autobiographyAchievement2")}</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 mt-1 text-primary shrink-0" />
                                                <span>{t("autobiographyAchievement3")}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <p className="leading-relaxed">{t("autobiographyP4")}</p> */}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Experience Tab */}
                        <TabsContent value="experience" className="space-y-6">
                            {/* Job 1 */}
                            <Card>
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-primary/10">
                                                <Briefcase className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl">{t("job1Title")}</CardTitle>
                                                <CardDescription className="mt-1">{t("job1Company")}</CardDescription>
                                            </div>
                                        </div>
                                        <Badge className="shrink-0">{t("job1Period")}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <p className="text-sm font-medium mb-2">{t("techStack")}</p>
                                        <p className="text-sm text-muted-foreground">{t("job1TechStack")}</p>
                                    </div>

                                    <Separator />

                                    <div>
                                        <p className="text-sm font-medium mb-4">主要專案</p>
                                        <div className="space-y-4">
                                            {projects.map((project, index) => (
                                                <div key={index} className="pl-4 border-l-2 border-muted">
                                                    <p className="font-medium mb-2">{project.title}</p>
                                                    <ul className="text-sm text-muted-foreground space-y-1">
                                                        {project.details.map((detail, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <span className="text-primary mt-1">•</span>
                                                                <span>{detail}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Job 2 */}
                            <Card>
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-muted">
                                                <Briefcase className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl">{t("job2Title")}</CardTitle>
                                                <CardDescription className="mt-1">{t("job2Company")}</CardDescription>
                                            </div>
                                        </div>
                                        <Badge variant="outline" className="shrink-0">{t("job2Period")}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground">{t("job2ProjectDetail1")}</p>
                                    <div>
                                        <p className="text-sm font-medium mb-2">{t("techStack")}</p>
                                        <p className="text-sm text-muted-foreground">{t("job2TechStack")}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Skills Tab */}
                        <TabsContent value="skills" className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                {Object.values(skillCategories).map((category, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Card>
                                            <CardHeader>
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-lg bg-primary/10">
                                                        <category.icon className="h-5 w-5 text-primary" />
                                                    </div>
                                                    <CardTitle className="text-lg">{category.title}</CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex flex-wrap gap-2">
                                                    {category.skills.map((skill, i) => (
                                                        <Badge key={i} variant="secondary">
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">{t("continuousLearning")}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{t("skillLearning")}</p>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Education Tab */}
                        <TabsContent value="education" className="space-y-4">
                            {[
                                { degree: t("educationPhD"), period: t("educationPhDPeriod"), highlight: true },
                                { degree: t("educationMaster"), period: t("educationMasterPeriod") },
                                { degree: t("educationBachelor"), period: t("educationBachelorPeriod") },
                            ].map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className={edu.highlight ? "border-primary/50" : ""}>
                                        <CardContent className="p-6">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-start gap-3">
                                                    <div className={`p-2 rounded-lg ${edu.highlight ? "bg-primary/10" : "bg-muted"}`}>
                                                        <GraduationCap className={`h-5 w-5 ${edu.highlight ? "text-primary" : ""}`} />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">{edu.degree}</p>
                                                    </div>
                                                </div>
                                                <Badge variant={edu.highlight ? "default" : "secondary"}>
                                                    {edu.period}
                                                </Badge>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
        </section>
    );
};

export default BiographySection;
