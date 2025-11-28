"use client";
import { useState, useEffect } from "react";
import { FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Afficher le bouton après 300px de scroll
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
    window.location.href = "mailto:contact@sabluximmobilier.com";
  };

  return (
    <>
      {/* Bouton Email qui apparaît au scroll */}
      {isVisible && (
        <button
          onClick={openEmail}
          className="fixed right-6 bottom-24 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Envoyer un email"
        >
          <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" />
          {/* Bulle d'information */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Nous contacter
          </div>
        </button>
      )}

      {/* Bouton Retour en haut */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 w-14 h-14 bg-gray-800 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Retour en haut"
        >
          <FaArrowUp className="text-xl group-hover:-translate-y-1 transition-transform" />
          {/* Bulle d'information */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Haut de page
          </div>
        </button>
      )}
    </>
  );
}