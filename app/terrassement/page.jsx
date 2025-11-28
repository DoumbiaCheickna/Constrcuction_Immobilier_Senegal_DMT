"use client";
import { useState } from "react";
import { FaTruck, FaMountain, FaRoad, FaWater, FaTree, FaCheckCircle, FaHardHat  } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TerrassementPresentation() {
  const [activeService, setActiveService] = useState("preparation");

  const services = {
    preparation: {
      title: "Préparation de Terrain",
      icon: FaHardHat ,
      description: "Préparation complète des terrains pour la construction",
      projects: [
        {
          name: "Terrassement ZAC Kolda",
          location: "Kolda, Sénégal",
          volume: "15,000 m³",
          status: "Terminé",
          duration: "3 mois",
          image: "/terrassement-kolda.jpg"
        },
        {
          name: "Aménagement Kaolack",
          location: "Kaolack, Sénégal",
          volume: "8,500 m³",
          status: "Terminé",
          duration: "2 mois",
          image: "/amenagement-kaolack.jpg"
        }
      ]
    },
    bassins: {
      title: "Bassins de Rétention",
      icon: FaWater,
      description: "Construction de bassins pour la gestion des eaux pluviales",
      projects: [
        {
          name: "Bassin Dalhar Libage",
          location: "Thiès, Sénégal",
          volume: "25,000 m³",
          status: "Terminé",
          duration: "4 mois",
          image: "/bassin-dalhar.jpg"
        },
        {
          name: "Bassin Wourouwaye",
          location: "Banlieue de Dakar",
          volume: "18,000 m³",
          status: "Terminé",
          duration: "3 mois",
          image: "/bassin-wourouwaye.jpg"
        }
      ]
    },
    infrastructures: {
      title: "Infrastructures",
      icon: FaRoad,
      description: "Terrassement pour infrastructures routières et urbaines",
      projects: [
        {
          name: "Aménagement Autoroute",
          location: "Péage de Dakar",
          volume: "35,000 m³",
          status: "En cours",
          duration: "6 mois",
          image: "/autoroute-peage.jpg"
        },
        {
          name: "Réseau Assainissement",
          location: "Bagdad, Dakar",
          volume: "12,000 m³",
          status: "Terminé",
          duration: "2 mois",
          image: "/reseau-assainissement.jpg"
        }
      ]
    }
  };

  const equipment = [
    { name: "Chargeurs", quantity: "3", icon: FaTruck },
    { name: "Bulldozers", quantity: "2", icon: FaMountain },
    { name: "Camions 16m³", quantity: "4", icon: FaTruck },
    { name: "Compacteurs", quantity: "2", icon: FaTree }
  ];

  const stats = [
    { value: "50+", label: "Projets de terrassement", icon: FaHardHat  },
    { value: "100,000+", label: "m³ de terre déplacés", icon: FaMountain },
    { value: "15+", label: "Régions couvertes", icon: FaRoad },
    { value: "100%", label: "Conformité technique", icon: FaCheckCircle }
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-lg mb-6">
            <FaHardHat  className="text-3xl text-green-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Expertise en Terrassement
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Spécialistes du terrassement, préparation de terrain et aménagement de bassins de rétention
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
                <stat.icon className="text-2xl text-green-600" />
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(services).map(([key, service]) => {
            const Icon = service.icon;
            const isActive = activeService === key;
            return (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-2xl shadow-green-500/30"
                    : "bg-white text-gray-700 shadow-lg hover:shadow-xl border border-gray-200"
                }`}
              >
                <Icon className="text-xl" />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Service Description */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center">
              {/* <services[activeService].icon className="text-2xl text-white" /> */}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{services[activeService].title}</h2>
              <p className="text-gray-600">{services[activeService].description}</p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services[activeService].projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                    {project.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Terminé" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaRoad className="text-green-500" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaMountain className="text-green-500" />
                    <span>Volume: {project.volume}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-green-500" />
                    <span>Durée: {project.duration}</span>
                  </div>
                </div>

                <div className="h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Voir le projet
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Section */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Notre Parc Matériel</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300"
              >
                <item.icon className="text-3xl text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800 mb-1">{item.quantity}</div>
                <div className="text-sm text-gray-600 font-medium">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-700 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin de Terrassement ?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est prête à réaliser vos projets de terrassement dans les délais et selon les normes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              🚜 Demander un Devis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors duration-300">
              📞 Nous Contacter
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}