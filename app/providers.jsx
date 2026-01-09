"use client";

import "../utils/i18n"; // Initialize i18n
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
}
