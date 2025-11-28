"use client";
import { useState } from "react";
import { FaHome, FaBuilding, FaCity, FaRulerCombined, FaCalendarAlt, FaCheckCircle, FaHardHat } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ConstructionsPresentation() {
  const [activeCategory, setActiveCategory] = useState("villas");

  const categories = {
    villas: {
      title: "Villas de Standing",
      icon: FaHome,
      projects: [
        {
          name: "Villa Almadies",
          location: "Almadies, Dakar",
          surface: "450 m²",
          status: "Livré",
          image: "/villa-almadies.jpg",
          description: "Villa moderne avec piscine et jardin paysager"
        },
        {
          name: "Villa Cerf Volant",
          location: "Cerf Volant, Dakar",
          surface: "380 m²",
          status: "Livré",
          image: "/villa-cerf-volant.jpg",
          description: "Architecture contemporaine avec vue mer"
        },
        {
          name: "Villa VDN",
          location: "VDN, Dakar",
          surface: "520 m²",
          status: "En cours",
          image: "/villa-vdn.jpg",
          description: "Résidence haut de gamme avec équipements premium"
        }
      ]
    },
    appartements: {
      title: "Appartements",
      icon: FaBuilding,
      projects: [
        {
          name: "Résidence Les Almadies",
          location: "Almadies, Dakar",
          surface: "120 m²",
          status: "Livré",
          image: "/residence-almadies.jpg",
          description: "Appartements 3-4 pièces avec standing"
        },
        {
          name: "Complexe Sacré Cœur",
          location: "Sacré Cœur, Dakar",
          surface: "85 m²",
          status: "Livré",
          image: "/complexe-sacre-coeur.jpg",
          description: "Studios et 2 pièces en centre ville"
        }
      ]
    },
    sociaux: {
      title: "Logements Sociaux",
      icon: FaCity,
      projects: [
        {
          name: "Programme Tivaouane Peulh",
          location: "Tivaouane Peulh-Niaga",
          surface: "65 m²",
          status: "Livré",
          image: "/logements-tivaouane.jpg",
          description: "100 logements sociaux livrés en 4 mois"
        },
        {
          name: "Cité Malika",
          location: "Malika, Dakar",
          surface: "70 m²",
          status: "Livré",
          image: "/cite-malika.jpg",
          description: "67 logements sociaux modernes"
        }
      ]
    }
  };

  const stats = [
    { value: "35+", label: "Villas construites", icon: FaHome },
    { value: "200+", label: "Logements sociaux", icon: FaCity },
    { value: "100%", label: "Satisfaction client", icon: FaCheckCircle },
    { value: "4 mois", label: "Délai record", icon: FaCalendarAlt }
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-lg mb-6">
            <FaHardHat className="text-3xl text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nos Réalisations en Construction
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre expertise en construction de villas, appartements et logements sociaux au Sénégal
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="text-2xl text-blue-600" />
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(categories).map(([key, category]) => {
            const Icon = category.icon;
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/30"
                    : "bg-white text-gray-700 shadow-lg hover:shadow-xl border border-gray-200"
                }`}
              >
                <Icon className="text-xl" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories[activeCategory].projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Livré" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaRulerCombined className="text-blue-500" />
                    <span>Surface: {project.surface}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaBuilding className="text-blue-500" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Voir les détails
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à Constrire Votre Projet ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Confiez-nous votre projet de construction et bénéficiez de l'expertise d'une entreprise certifiée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              📞 Demander un Devis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors duration-300">
              📋 Voir nos Références
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}