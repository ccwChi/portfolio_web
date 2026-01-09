"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
        alert("Message sent! (This is a demo)");
    };

    const socialLinks = [
        { name: "GitHub", icon: "🐙", url: "https://github.com/ccwChi" },
        { name: "LinkedIn", icon: "💼", url: "#" },
        { name: "Email", icon: "📧", url: "mailto:your@email.com" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section id="contact" className="section-full" ref={ref}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="container-custom"
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Have a project in mind or just want to say hi? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                Let's work together
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                I'm always excited to take on new challenges and collaborate on
                                interesting projects. Whether you have a question, a proposal,
                                or just want to connect, I'd love to hear from you.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={itemVariants}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className="flex items-center gap-4 p-4 rounded-xl glass-card-subtle group"
                                >
                                    <span className="text-2xl">{link.icon}</span>
                                    <div>
                                        <div className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                                            {link.name}
                                        </div>
                                        <div className="text-sm text-gray-500">Connect with me</div>
                                    </div>
                                    <svg className="w-5 h-5 text-gray-500 ml-auto group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.a>
                            ))}
                        </div>

                        {/* Location */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-4 p-4 rounded-xl glass-card-subtle"
                        >
                            <span className="text-2xl">📍</span>
                            <div>
                                <div className="text-white font-medium">Location</div>
                                <div className="text-sm text-gray-500">Taiwan, Remote Available</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Name
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Email
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.01 }}
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Message
                                </label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.01 }}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                        />
                                        Sending...
                                    </span>
                                ) : (
                                    "Send Message"
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mt-20 pt-8 border-t border-white/5"
                >
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Jeff Chi. Built with{" "}
                        <span className="text-pink-400">♥</span> using Next.js & Framer Motion
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
