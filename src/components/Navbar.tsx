import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300",
        isScrolled
          ? "bg-vincero-darkBlue/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="group">
              <img
                src="/lovable-uploads/ee944ce6-8fe0-4d80-90e2-830739859656.png"
                alt="Vincero"
                className="h-8 transition-all duration-300 hover:opacity-90"
              />
              <span className="block h-0.5 w-0 group-hover:w-full bg-vincero-lightBlue transition-all duration-300"></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/#how-it-works"
              className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Cómo funciona
            </a>
            <a
              href="/#benefits"
              className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Beneficios
            </a>
            <a
              href="/#security"
              className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Seguridad
            </a>
            <a
              href="https://app.vincero.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Cuenta
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfvYxwGtn9eYxJY1AbW_6lu8rFZdCa381Zou6Jo9kisOYdYQw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-vincero-orange hover:bg-vincero-orange/90 text-white px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium transform hover:translate-y-[-2px]"
            >
              Solicitar Demo
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 px-6 py-4 bg-vincero-darkBlue/95 backdrop-blur-xl transition-all duration-300 ease-in-out",
            mobileMenuOpen
              ? "top-full opacity-100"
              : "-top-96 opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="/#how-it-works"
              className="text-white/90 hover:text-white transition-colors duration-300 py-2 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cómo funciona
            </a>
            <a
              href="/#benefits"
              className="text-white/90 hover:text-white transition-colors duration-300 py-2 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beneficios
            </a>
            <a
              href="/#security"
              className="text-white/90 hover:text-white transition-colors duration-300 py-2 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Seguridad
            </a>
            <a
              href="https://app.vincero.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors duration-300 py-2 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cuenta
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfvYxwGtn9eYxJY1AbW_6lu8rFZdCa381Zou6Jo9kisOYdYQw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-vincero-orange text-white py-2 rounded-md text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
