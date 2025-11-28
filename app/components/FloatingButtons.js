"use client";
import { useState, useEffect } from "react";
import { FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const openEmail = () => {
    window.open("mailto:contact@sabluximmobilier.com", "_blank");
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 space-y-4">
      {/* Bouton Email */}
      <button
        onClick={openEmail}
        className={`w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:shadow-2xl ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Nous contacter par email"
      >
        <FaEnvelope className="text-xl" />
      </button>

      {/* Bouton Retour en haut */}
      <button
        onClick={scrollToTop}
        className={`w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:shadow-2xl ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Retour en haut de la page"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </div>
  );
}