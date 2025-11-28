"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import Lightbox from "./Lightbox";
import { FaBed, FaRulerCombined, FaBuilding, FaMapMarkerAlt, FaEye, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
const PROPERTIES_STATIC = [
  {
    id: "s1",
    img: "/what_1.png",
    titre: "Résidence Djamal",
    prix: "38 Millions FCFA",
    quartier: "Keur Massar",
    type: "Villas",
    description:
      "Un programme résidentiel moderne situé à Keur Massar, offrant un cadre calme et sécurisé, idéal pour les familles.",
    superficie: "200 m²",
    etages: "R+1",
    chambres: 3,
    tags: ["Villas", "Moderne"],
    badge: "DISPONIBLE",
    badgeColor: "bg-green-600",
  },
  {
    id: "s2",
    img: "/what_2.png",
    titre: "Lumina Towers",
    prix: "75 Millions FCFA",
    quartier: "Point E",
    type: "Appartements",
    description:
      "Un immeuble haut standing avec ascenseur, parking sous-terrain et finition premium au cœur du Point E.",
    superficie: "720 m²",
    etages: "R+15",
    chambres: 4,
    tags: ["Appartements", "Haut Standing"],
    badge: "NOUVEAU",
    badgeColor: "bg-purple-600",
  },
  {
    id: "s3",
    img: "/what_3.png",
    titre: "Villa Safran",
    prix: "59 Millions FCFA",
    quartier: "Diamniadio",
    type: "Villas",
    description:
      "Une villa contemporaine située dans la nouvelle ville de Diamniadio, proche des commodités et axes principaux.",
    superficie: "320 m²",
    etages: "R+1",
    chambres: 4,
    tags: ["Villas", "Moderne"],
    badge: "PROMO",
    badgeColor: "bg-yellow-500",
  },
  {
    id: "s4",
    img: "/what_4.png",
    titre: "Résidence Ataya",
    prix: "52 Millions FCFA",
    quartier: "Ouakam",
    type: "Appartements",
    description:
      "Située dans un quartier calme près des Mamelles, cette résidence offre une atmosphère conviviale et sécurisée.",
    superficie: "480 m²",
    etages: "R+8",
    chambres: 3,
    tags: ["Appartements", "Famille"],
    badge: "NOUVEAU",
    badgeColor: "bg-red-500",
  },
  {
    id: "s5",
    img: "/what_5.png",
    titre: "Villa Niaye",
    prix: "30 Millions FCFA",
    quartier: "Rufisque",
    type: "Villas",
    description:
      "Villa accessible avec un excellent rapport qualité-prix, parfaite pour un premier investissement immobilier.",
    superficie: "140 m²",
    etages: "R",
    chambres: 2,
    tags: ["Villas", "Économique"],
    badge: "DISPONIBLE",
    badgeColor: "bg-green-600",
  },
  {
    id: "s6",
    img: "/what_6.png",
    titre: "Immeuble Sutura",
    prix: "49 Millions FCFA",
    quartier: "Yoff",
    type: "Appartements",
    description:
      "Résidence neuve avec ascenseur, système de vidéosurveillance et matériaux de finition haut de gamme.",
    superficie: "550 m²",
    etages: "R+10",
    chambres: 3,
    tags: ["Appartements", "Sécurité"],
    badge: "LANCEMENT",
    badgeColor: "bg-blue-600",
  },
  {
    id: "s7",
    img: "/what_7.png",
    titre: "Les Jardins du Lac Rose",
    prix: "42 Millions FCFA",
    quartier: "Lac Rose",
    type: "Villas",
    description:
      "Un lotissement résidentiel à quelques minutes du Lac Rose, offrant un environnement naturel et paisible.",
    superficie: "260 m²",
    etages: "R+1",
    chambres: 3,
    tags: ["Villas", "Résidentiel"],
    badge: "COUP DE CŒUR",
    badgeColor: "bg-pink-600",
  },
  {
    id: "s8",
    img: "/what_8.png",
    titre: "Saly Resort Homes",
    prix: "85 Millions FCFA",
    quartier: "Saly",
    type: "Villas",
    description:
      "Des villas luxueuses en bord de mer, idéales pour résidence secondaire ou location touristique premium.",
    superficie: "410 m²",
    etages: "R+1",
    chambres: 4,
    tags: ["Villas", "Luxe"],
    badge: "PRESTIGE",
    badgeColor: "bg-indigo-700",
  },
  {
    id: "s9",
    img: "/what_9.png",
    titre: "Teranga Residence",
    prix: "40 Millions FCFA",
    quartier: "Parcelles Assainies U",
    type: "Appartements",
    description:
      "Résidence moderne pour jeunes actifs, bien située et proche de tous les services essentiels.",
    superficie: "310 m²",
    etages: "R+5",
    chambres: 2,
    tags: ["Appartements", "Moderne"],
    badge: "DISPONIBLE",
    badgeColor: "bg-green-600",
  }
];

export default function ImageGrid({ filter }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [properties, setProperties] = useState([]);

  const loadFirestore = async () => {
    const snap = await getDocs(collection(db, "properties"));
    const firestore = snap.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProperties([...firestore, ...PROPERTIES_STATIC]);
  };

  useEffect(() => {
    loadFirestore();
  }, []);

  // const filtered = filter
  //   ? properties.filter((p) => {
  //       const type = p.type?.toLowerCase() || '';
  //       const quartier = p.quartier?.toLowerCase() || '';
  //       const titre = p.titre?.toLowerCase() || '';
  //       const f = filter.toLowerCase();

  //       if (f === "appartement" || f === "appartements") {
  //         return type.includes("appartement");
  //       }

  //       if (f === "villa") {
  //         return type.includes("villa");
  //       }

  //       if (f === "foncier" || f === "terrains") {
  //         return type.includes("foncier") || p.tags?.includes("Terrains");
  //       }

  //       return type.includes(f) || quartier.includes(f) || titre.includes(f);
  //     })
  //   : properties;

  // return (
  //   <section className="max-w-7xl mx-auto px-6 py-16">
  //     <div className="flex items-center justify-between mb-8">
  //       <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
  //         Nos programmes
  //       </h2>
  //     </div>

  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //       {filtered.map((item, i) => (
  //         <div
  //           key={item.id}
  //           className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group"
  //         >
  //           {/* Container image avec overlay */}
  //           <div className="relative overflow-hidden">
  //             {/* Image avec effet de zoom */}
  //             <img
  //               src={item.img}
  //               alt={item.titre}
  //               className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
  //               onClick={() => { setIdx(i); setOpen(true); }}
  //             />
              
  //             {/* Overlay gradient au survol */}
  //             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
  //             {/* Badge en haut à gauche */}
  //             <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold ${item.badgeColor} shadow-lg`}>
  //               {item.badge}
  //             </div>

  //             {/* Tags en bas de l'image avec fond sombre */}
  //             <div className="absolute bottom-4 left-4 right-4">
  //               <div className="flex flex-wrap gap-2">
  //                 {item.tags?.map((tag, index) => (
  //                   <span
  //                     key={index}
  //                     className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20"
  //                   >
  //                     {tag}
  //                   </span>
  //                 ))}
  //               </div>
  //             </div>

  //             {/* Icône de localisation */}
  //             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
  //               <FaMapMarkerAlt className="text-red-500 text-sm" />
  //             </div>
  //           </div>

  //           {/* Contenu */}
  //           <div className="p-6">
  //             {/* Titre et Prix */}
  //             <div className="mb-4">
  //               <h3 className="text-xl font-bold text-gray-900 mb-2">
  //                 {item.titre}
  //               </h3>
  //               <p className="text-lg font-bold text-purple-600">
  //                 {item.description}
  //               </p>
  //               <p className="text-sm text-gray-500 mt-1">
  //                 {item.quartier}
  //               </p>
  //             </div>

  //             {/* Description */}
  //             <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
  //               {item.description}
  //             </p>

  //             {/* Icônes de caractéristiques en bas */}
  //             <div className="flex items-center justify-between border-t border-gray-100 pt-4">
  //               <div className="flex items-center gap-6">
  //                 {/* Chambres */}
  //                 <div className="flex items-center gap-2 text-gray-600">
  //                   <FaBed className="text-blue-500" />
  //                   <span className="text-sm font-medium">{item.chambres} ch.</span>
  //                 </div>

  //                 {/* Superficie */}
  //                 <div className="flex items-center gap-2 text-gray-600">
  //                   <FaRulerCombined className="text-green-500" />
  //                   <span className="text-sm font-medium">{item.superficie}</span>
  //                 </div>

  //                 {/* Étages */}
  //                 <div className="flex items-center gap-2 text-gray-600">
  //                   <FaBuilding className="text-orange-500" />
  //                   <span className="text-sm font-medium">{item.etages}</span>
  //                 </div>
  //               </div>

  //               {/* Bouton d'action */}
  //               <button
  //                 onClick={() => { setIdx(i); setOpen(true); }}
  //                 className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
  //               >
  //                 <span className="text-sm">👁️</span>
  //               </button>
  //             </div>

  //             <div>
  //               <a
  //                  href={`tel:+221338254340`}
  //                  className="flex-1 inline-flex items-center justify-center gap-2 border border-[#e6d6e9] bg-[#fff7fb] text-[#8b3aa7] py-3 rounded-full text-sm font-semibold hover:shadow-md transition-all duration-300 hover:scale-105"
  //                >
  //                  <span className="text-lg">📞</span>
  //                  <span>Call</span>
  //               </a>

            
  //                <a
  //                  href={`mailto:contact@sabluximmobilier.com?subject=Demande d'information - ${item.titre}&body=Bonjour, je suis intéressé par le programme ${item.titre} à ${item.quartier} (${item.prix})`}
  //                  className="flex-1 inline-flex items-center justify-center gap-2 border border-[#e6d6e9] bg-[#fff7fb] text-[#8b3aa7] py-3 rounded-full text-sm font-semibold hover:shadow-md transition-all duration-300 hover:scale-105"
  //                >
  //                  <span className="text-lg">✉️</span>
  //                  <span>Email</span>
  //                </a>

  //                {/* Bouton WhatsApp */}
  //               <a
  //                  href={`https://wa.me/221338254340?text=${encodeURIComponent(
  //                    `Bonjour, je suis intéressé par le programme ${item.titre} à ${item.quartier} (${item.prix})\n\n${item.description}`
  //                  )}`}
  //                  target="_blank"
  //                  rel="noopener noreferrer"
  //                 className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r  to-emerald-600 text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
  //               >
  //                  <span className="text-lg">💬</span>
  //                </a>
  //              </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>

  //     <Lightbox
  //       properties={properties}
  //       open={open}
  //       setOpen={setOpen}
  //       startIndex={idx}
  //     />
  //   </section>
  const filtered = filter
    ? properties.filter((p) => {
        const type = p.type?.toLowerCase() || '';
        const quartier = p.quartier?.toLowerCase() || '';
        const titre = p.titre?.toLowerCase() || '';
        const f = filter.toLowerCase();

        if (f === "appartement" || f === "appartements") {
          return type.includes("appartement");
        }

        if (f === "villa") {
          return type.includes("villa");
        }

        if (f === "foncier" || f === "terrains") {
          return type.includes("foncier") || p.tags?.includes("Terrains");
        }

        return type.includes(f) || quartier.includes(f) || titre.includes(f);
      })
    : properties;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Nos programmes
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group"
          >
            {/* Container image avec overlay */}
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.titre}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                onClick={() => { setIdx(i); setOpen(true); }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold ${item.badgeColor} shadow-lg`}>
                {item.badge}
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-wrap gap-2">
                  {item.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <FaMapMarkerAlt className="text-red-500 text-sm" />
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.titre}
                </h3>
                <p className="text-lg font-bold text-purple-600">
                  {item.prix}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {item.quartier}
                </p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4 mb-4">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaBed className="text-blue-500" />
                    <span className="text-sm font-medium">{item.chambres} ch.</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <FaRulerCombined className="text-green-500" />
                    <span className="text-sm font-medium">{item.superficie}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <FaBuilding className="text-orange-500" />
                    <span className="text-sm font-medium">{item.etages}</span>
                  </div>
                </div>

                <button
                  onClick={() => { setIdx(i); setOpen(true); }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <FaEye className="text-sm" />
                </button>
              </div>
              <div className="flex gap-2">
                <a
                  href={`tel:+221338254340`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-green-50 border border-green-200 text-green-700 py-3 px-4 rounded-xl text-sm font-semibold hover:bg-green-100 hover:shadow-md transition-all duration-300 hover:scale-105 group"
                >
                  <FaPhone className="text-green-600 group-hover:scale-110 transition-transform" />
                  <span>Appeler</span>
                </a>
                <a
                  href={`mailto:contact@sabluximmobilier.com?subject=Demande d'information - ${item.titre}&body=Bonjour, je suis intéressé par le programme ${item.titre} à ${item.quartier} (${item.prix})`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 py-3 px-4 rounded-xl text-sm font-semibold hover:bg-blue-100 hover:shadow-md transition-all duration-300 hover:scale-105 group"
                >
                  <FaEnvelope className="text-blue-600 group-hover:scale-110 transition-transform" />
                  <span>Email</span>
                </a>

                {/* Bouton WhatsApp */}
                <a
                  href={`https://wa.me/221338254340?text=${encodeURIComponent(
                    `Bonjour, je suis intéressé par le programme ${item.titre} à ${item.quartier} (${item.prix})\n\n${item.description}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
                </a>
              </div> 
              {/* <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="flex gap-3">
                  <a
                    href={`tel:+221338254340`}
                    className="p-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 hover:scale-105 transition-all duration-300"
                    title="Appeler"
                  >
                    <FaPhone className="text-sm" />
                  </a>
                  <a
                    href={`mailto:contact@sabluximmobilier.com`}
                    className="p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300"
                    title="Envoyer un email"
                  >
                    <FaEnvelope className="text-sm" />
                  </a>
                </div>
                
                <a
                  href={`https://wa.me/221338254340`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
                  title="Contact WhatsApp"
                >
                  <FaWhatsapp className="text-sm" />
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        properties={properties}
        open={open}
        setOpen={setOpen}
        startIndex={idx}
      />
    </section>
  );
}