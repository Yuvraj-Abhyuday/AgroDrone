// Your updated Navigation component

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next"; // <-- Import useTranslation
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher"; // <-- Import LanguageSwitcher

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(); // <-- Initialize the hook

  // Use the 't' function to get translated strings
  const navItems = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.features"), href: "#features" },
    { name: t("nav.specifications"), href: "#specs" },
    { name: t("nav.gallery"), href: "#gallery" },
    { name: t("nav.mission"), href: "#mission" },
    { name: t("nav.why_us"), href: "#usp" },
    { name: t("nav.contact"), href: "#enquiry" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center gap-2"
            aria-label="Abhyuday Drones Home"
          >
            <img src="src/assets/logo.png" alt="Abhyuday Drones Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-primary hidden sm:inline">
              {t("brand_name")}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4"> {/* Adjusted gap for switcher */}
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => scrollToSection("#enquiry")}
            >
              {t("buttons.enquire_now")}
            </Button>
            <LanguageSwitcher /> {/* <-- Add the language switcher here */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <LanguageSwitcher /> {/* <-- Also add to mobile view */}
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                className="w-full"
                onClick={() => scrollToSection("#enquiry")}
              >
                {t("buttons.enquire_now")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;