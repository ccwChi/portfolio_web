"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { Menu, Globe, Sun, Moon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { t, i18n } = useTranslation();
    const { theme, setTheme } = useTheme();

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = [
        { id: "about", label: t("headerAbout") },
        { id: "timeline", label: t("headerTimeline") },
        { id: "biography", label: t("headerBiography") },
        // { id: "projects", label: t("headerPortfolio") }, // Hidden as section is hidden
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const top = element.offsetTop - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
        setIsOpen(false);
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "zh" : "en";
        i18n.changeLanguage(newLang);
        if (typeof window !== "undefined") {
            localStorage.setItem("selectedLanguage", newLang);
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="px-4">
                <div className="flex items-center justify-end h-16">
                    {/* Logo */}
                    {/* <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="text-lg font-bold tracking-tight hover:text-primary transition-colors flex items-center gap-2"
                    >
                        <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
                            JC
                        </div>
                        <span>{t("Iam").split("我是")[1] || "Jeff"}</span>
                    </button> */}

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-full border mr-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background rounded-full transition-all"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleLanguage}
                            className="gap-2"
                        >
                            <Globe className="h-4 w-4" />
                            {i18n.language === "en" ? "中文" : "EN"}
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </div>

                    {/* Mobile Menu (Sheet) */}
                    <div className="md:hidden flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </Button>

                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] px-5">
                                <SheetHeader>
                                    <SheetTitle className="text-left py-4">導覽選單</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-2 mt-4">
                                    {navItems.map((item) => (
                                        <Button
                                            key={item.id}
                                            variant="ghost"
                                            className="justify-start text-base py-6"
                                            onClick={() => scrollToSection(item.id)}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}

                                    <Separator className="my-4" />

                                    <Button
                                        variant="outline"
                                        className="justify-start gap-2"
                                        onClick={toggleLanguage}
                                    >
                                        <Globe className="h-4 w-4" />
                                        {i18n.language === "en" ? "切換至中文" : "Switch to English"}
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navigation;
