"use client";

import "../utils/i18n";

import Navigation from "../components/Navigation";
import AboutSection from "../components/AboutSection";
import TimelineSection from "../components/TimelineSection";
import BiographySection from "../components/BiographySection";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <AboutSection />
        <BiographySection />
        <TimelineSection />
        {/* <ProjectsSection /> */}
      </main>
      <Footer />
    </>
  );
}
