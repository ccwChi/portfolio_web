"use client";

import { useTranslation } from "react-i18next";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          {/* Quote */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg italic text-muted-foreground">
              {t("autobiographyP4").split("。")[0]}。
            </p>
          </div>

          <Separator />

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/ccwChi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            {/* <Button variant="outline" size="icon" asChild>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button> */}
            {/* <Button variant="outline" size="icon" asChild>
              <a href="mailto:example@email.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button> */}
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              © {currentYear} {t("Iam").split("我是")[1]}
            </p>
            <p className="flex items-center justify-center gap-1">
              Built with using Next.js & shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
