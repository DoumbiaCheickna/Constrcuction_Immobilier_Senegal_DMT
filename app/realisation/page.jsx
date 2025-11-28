"use client";
import { useState } from "react";
import { FaSearch, FaFilter, FaBuilding, FaHome, FaCity, FaMapMarkerAlt, FaExpand, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const REALISATIONS = [
  {
    id: 1,
    title: "Résidence Azalée",
    type: "Appartements",
    location: "Amitié II, Dakar",
    description: "Résidence haut standing de 12 étages comprenant 54 appartements modernes avec services premium.",
    images: [
      "/what_10.png",
      "/what_11.png",
      "/what_12.png"
    ],
    features: ["Ascenseur", "Parking souterrain", "Sécurité 24h/24", "Piscine"],
    year: "2024",
    surface: "650 m²",
    status: "Livré"
  },
  {
    id: 2,
    title: "Villa Mélia",
    type: "Villa",
    location: "Bambilor",
    description: "Programme de villas économiques offrant un excellent rapport qualité-prix dans un cadre paisible.",
    images: [
      "/what_11.png",
      "/what_14.png"
    ],
    features: ["Jardin privatif", "Garage", "Clôture sécurisée"],
    year: "2023",
    surface: "150 m²",
    status: "En cours"
  },
  {
    id: 3,
    title: "Résidence Florea",
    type: "Appartements",
    location: "Dieuppeul, Dakar",
    description: "Résidence moderne de 12 étages située sur les allées Khalifa Ababacar Sy.",
    images: [
      "/what_12.png",
      "/what_16.png"
    ],
    features: ["Vue panoramique", "Espaces verts", "Salle de sport"],
    year: "2024",
    surface: "590 m²",
    status: "Livré"
  },
  {
    id: 4,
    title: "Immeuble Impérial Business",
    type: "Bureaux",
    location: "Avenue Cheikh Anta Diop",
    description: "Immeuble de prestige de 13 étages dédié aux professionnels, situé sur un axe stratégique.",
    images: [
      "/what_17.png",
      "/what_18.png"
    ],
    features: ["Plateaux modulables", "Fibre optique", "Salles de réunion", "Cafétéria"],
    year: "2023",
    surface: "2500 m²",
    status: "Livré"
  },
  {
    id: 5,
    title: "Résidence Djamal",
    type: "Villas",
    location: "Keur Massar",
    description: "Programme résidentiel moderne offrant un cadre calme et sécurisé pour les familles.",
    images: [
      "/page_18.png",
      "/page_20.png"
    ],
    features: ["École à proximité", "Marché", "Transport public"],
    year: "2023",
    surface: "200 m²",
    status: "Livré"
  },
  {
    id: 6,
    title: "Lumina Towers",
    type: "Appartements",
    location: "Point E, Dakar",
    description: "Immeuble haut standing avec ascenseur et parking souterrain au cœur du Point E.",
    images: [
      "/page_19.png",
      "/page_21.png"
    ],
    features: ["Finition premium", "Vue mer", "Jardin suspendu"],
    year: "2024",
    surface: "720 m²",
    status: "En cours"
  },
   {
    id: 7,
    title: "Lumina Towers",
    type: "Appartements",
    location: "Point E, Dakar",
    description: "Immeuble haut standing avec ascenseur et parking souterrain au cœur du Point E.",
    images: [
      "/page_20.png",
      "/page_21.png"
    ],
    features: ["Finition premium", "Vue mer", "Jardin suspendu"],
    year: "2024",
    surface: "720 m²",
    status: "En cours"
  },
   {
    id: 8,
    title: "Lumina Towers",
    type: "Appartements",
    location: "Point E, Dakar",
    description: "Immeuble haut standing avec ascenseur et parking souterrain au cœur du Point E.",
    images: [
      "/page_26.png",
      "/page_21.png"
    ],
    features: ["Finition premium", "Vue mer", "Jardin suspendu"],
    year: "2024",
    surface: "720 m²",
    status: "En cours"
  }, {
    id: 9,
    title: "Lumina Towers",
    type: "Appartements",
    location: "Point E, Dakar",
    description: "Immeuble haut standing avec ascenseur et parking souterrain au cœur du Point E.",
    images: [
      "/page_22.png",
      "/page_21.png"
    ],
    features: ["Finition premium", "Vue mer", "Jardin suspendu"],
    year: "2024",
    surface: "720 m²",
    status: "En cours"
  },
   {
    id: 10,
    title: "Lumina Towers",
    type: "Appartements",
    location: "Point E, Dakar",
    description: "Immeuble haut standing avec ascenseur et parking souterrain au cœur du Point E.",
    images: [
      "/page_23.png",
      "/page_21.png"
    ],
    features: ["Finition premium", "Vue mer", "Jardin suspendu"],
    year: "2024",
    surface: "720 m²",
    status: "En cours"
  },
   {
    id: 11,
    title: "Lumina Towers",
    type: "Appartements",
    location: "Point E, Dakar",
    description: "Immeuble haut standing avec ascenseur et parking souterrain au cœur du Point E.",
    images: [
      "/page_24.png",
      "/page_21.png"
    ],
    features: ["Finition premium", "Vue mer", "Jardin suspendu"],
    year: "2024",
    surface: "720 m²",
    status: "En cours"
  },
   {
    id: 12,
    title: "Lumina Towers",
    type: "Appartements",
    location: "Point E, Dakar",
    description: "Immeuble haut standing avec ascenseur et parking souterrain au cœur du Point E.",
    images: [
      "/page_25.png",
      "/page_21.png"
    ],
    features: ["Finition premium", "Vue mer", "Jardin suspendu"],
    year: "2024",
    surface: "720 m²",
    status: "En cours"
  },
   {
    id: 13,
    title: "Lumina Towers",
    type: "Appartements",
    location: "Point E, Dakar",
    description: "Immeuble haut standing avec ascenseur et parking souterrain au cœur du Point E.",
    images: [
      "/page_27.png",
      "/page_21.png"
    ],
    features: ["Finition premium", "Vue mer", "Jardin suspendu"],
    year: "2024",
    surface: "720 m²",
    status: "En cours"
  },
  {
    id: 14,
    title: "Lumina Towers",
    type: "Appartements",
    location: "Point E, Dakar",
    description: "Immeuble haut standing avec ascenseur et parking souterrain au cœur du Point E.",
    images: [
      "/pages_1.png",
      "/page_21.png"
    ],
    features: ["Finition premium", "Vue mer", "Jardin suspendu"],
    year: "2024",
    surface: "720 m²",
    status: "En cours"
  },
  {
    id: 16,
    title: "Lumina Towers",
    type: "Appartements",
    location: "Point E, Dakar",
    description: "Immeuble haut standing avec ascenseur et parking souterrain au cœur du Point E.",
    images: [
      "/page_30.png",
      "/page_21.png"
    ],
    features: ["Finition premium", "Vue mer", "Jardin suspendu"],
    year: "2024",
    surface: "720 m²",
    status: "En cours"
  }
];

export default function RealisationsPage() {
  const [selectedType, setSelectedType] = useState("Tous");
  const [selectedStatus, setSelectedStatus] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const types = ["Tous", ...new Set(REALISATIONS.map(p => p.type))];
  const statuses = ["Tous", ...new Set(REALISATIONS.map(p => p.status))];

  const filteredRealisations = REALISATIONS.filter(project => {
    const matchesType = selectedType === "Tous" || project.type === selectedType;
    const matchesStatus = selectedStatus === "Tous" || project.status === selectedStatus;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesType && matchesStatus && matchesSearch;
  });

  const openLightbox = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        (prev - 1 + selectedProject.images.length) % selectedProject.images.length
      );
    }
  };

  return (
     <>
     <Navbar/>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos Réalisations</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Découvrez notre portfolio de projets immobiliers qui témoignent de notre expertise et de notre engagement qualité.
          </p>
        </div>
      </section>

      {/* Filtres et Recherche */}
      <section className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Barre de recherche */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rechercher un projet
              </label>
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Nom du projet, localisation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Filtre par type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de projet
              </label>
              <div className="relative">
                <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Filtre par statut */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Statut
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Résultats */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredRealisations.length} projet(s) trouvé(s)
          </div>
        </div>
      </section>

      {/* Grille des réalisations */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRealisations.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              {/* Carousel d'images */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay avec informations */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openLightbox(project)}
                    className="bg-white/90 text-gray-800 p-3 rounded-full hover:scale-110 transition-transform"
                  >
                    <FaExpand className="text-lg" />
                  </button>
                </div>

                {/* Badge statut */}
                {/* <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
                  project.status === "Livré" ? "bg-green-500" : 
                  project.status === "En cours" ? "bg-blue-500" : "bg-orange-500"
                }`}>
                  {project.status}
                </div> */}

                {/* Indicateur multiple images */}
                {/* {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                    +{project.images.length - 1}
                  </div>
                )} */}
              </div>

              {/* Contenu */}
              {/* <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-purple-600 font-semibold">{project.type}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  {project.location}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Surface: <strong>{project.surface}</strong></span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{project.features.length - 3}
                      </span>
                    )}
                  </div>
                </div>

          
                <button
                  onClick={() => openLightbox(project)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  Voir les détails
                </button>
              </div> */}
            </div>
          ))}
        </div>

        {filteredRealisations.length === 0 && (
          <div className="text-center py-16">
            <FaSearch className="text-gray-300 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucun projet trouvé
            </h3>
            <p className="text-gray-500">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        )}
      </section>

      {/* Lightbox */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            {/* En-tête */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <button
                onClick={closeLightbox}
                className="bg-white/90 text-gray-800 p-2 rounded-full hover:scale-110 transition-transform"
              >
                ✕
              </button>
            </div>

            {/* Contenu */}
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Images */}
              <div className="relative h-80 lg:h-full">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation images */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-2 rounded-full hover:scale-110 transition-transform"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-2 rounded-full hover:scale-110 transition-transform"
                    >
                      <FaChevronRight />
                    </button>
                    
                    {/* Indicateurs */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Détails */}
              <div className="p-8 overflow-y-auto">
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold text-white ${
                    selectedProject.status === "Livré" ? "bg-green-500" : 
                    selectedProject.status === "En cours" ? "bg-blue-500" : "bg-orange-500"
                  }`}>
                    {selectedProject.status}
                  </span>
                  <span className="ml-2 bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                    {selectedProject.year}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedProject.title}
                </h2>

                <div className="flex items-center text-gray-600 mb-4">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  {selectedProject.location}
                </div>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Type</div>
                    <div className="font-semibold text-gray-900">{selectedProject.type}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Surface</div>
                    <div className="font-semibold text-gray-900">{selectedProject.surface}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Demander un projet similaire
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}