"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "./component/LoadingScreen";
import Header from "./component/Header"; 
import Hero from "./component/sections/Hero";
import About from "./component/sections/About";
import Services from "./component/sections/Services";
import Team from "./component/sections/Team";
import Projects from "./component/sections/Projects";
import Pricing from "./component/sections/Pricing";
import Contact from "./component/sections/Contact";
import Footer from "./component/Footer";
import "./globals.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Team />
            <Projects />
            <Pricing />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}