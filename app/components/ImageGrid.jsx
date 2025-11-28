"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import Lightbox from "./Lightbox";
const PROPERTIES_STATIC = [
  {
    id: "s1",
    img: "/page_6.png",
    prix: "35 000 000 FCFA",
    quartier: "Plateau",
    type: "Appartement",
    adresse: "Avenue Blaise Diagne",
    salon: 1,
    chambres: 2,
    toilettes: 2,
    cuisine: 1,
    couleur: "bg-emerald-50",
  },
  {
    id: "s2",
    img: "/page_7.png",
    prix: "120 000 000 FCFA",
    quartier: "Almadies",
    type: "Villa Haut Standing",
    adresse: "Zone Résidentielle Almadies",
    salon: 2,
    chambres: 5,
    toilettes: 4,
    cuisine: 2,
    couleur: "bg-yellow-50",
  },
  {
    id: "s3",
    img: "/page_8.png",
    prix: "12 500 000 FCFA",
    quartier: "Mermoz",
    type: "Studio Meublé",
    adresse: "Mermoz Sacré-Cœur",
    salon: 0,
    chambres: 1,
    toilettes: 1,
    cuisine: 1,
    couleur: "bg-pink-50",
  },
  {
    id: "s4",
    img: "/page_9.png",
    prix: "58 000 000 FCFA",
    quartier: "Keur Gorgui",
    type: "Duplex Contemporain",
    adresse: "Cité Keur Gorgui",
    salon: 1,
    chambres: 4,
    toilettes: 3,
    cuisine: 1,
    couleur: "bg-indigo-50",
  },
  {
    id: "s5",
    img: "/page_10.png",
    prix: "85 000 000 FCFA",
    quartier: "Point E",
    type: "Appartement Luxe",
    adresse: "Rue 10 — Point E",
    salon: 1,
    chambres: 3,
    toilettes: 3,
    cuisine: 1,
    couleur: "bg-rose-50",
  },
  {
    id: "s6",
    img: "/page_11.png",
    prix: "230 000 000 FCFA",
    quartier: "Ngor",
    type: "Villa Bord de Mer",
    adresse: "Corniche des Almadies",
    salon: 2,
    chambres: 5,
    toilettes: 4,
    cuisine: 1,
    couleur: "bg-cyan-50",
  },
  {
    id: "s7",
    img: "/page_16.png",
    prix: "42 000 000 FCFA",
    quartier: "Yoff",
    type: "Maison Familiale",
    adresse: "Yoff Tonghor",
    salon: 1,
    chambres: 3,
    toilettes: 2,
    cuisine: 1,
    couleur: "bg-lime-50",
  },
  {
    id: "s8",
    img: "/page_13.png",
    prix: "30 500 000 FCFA",
    quartier: "Diamniadio",
    type: "Résidence Moderne",
    adresse: "Cité du Parc – Diamniadio",
    salon: 1,
    chambres: 2,
    toilettes: 2,
    cuisine: 1,
    couleur: "bg-violet-50",
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
  console.log("Filter ",filter)
  useEffect(() => {
    loadFirestore();
  }, []);
  const filtered = filter
  ? properties.filter((p) => {
      const type = p.type.toLowerCase();
      const quartier = p.quartier.toLowerCase();
      const f = filter.toLowerCase();

      // Si le filtre est "appartement", inclure aussi TOUTES les villas
      if (f === "appartement") {
        return (
          type.includes("appartement") ||
          type.includes("villa") // prend Villa, Villa Haut Standing, Villa Bord de Mer, etc.
        );
      }

      // Filtrage classique sinon
      return type.includes(f) || quartier.includes(f);
    })
  : properties;

  // const filtered = filter
  // ? properties.filter((p) => {
  //     const type = p.type.toLowerCase();
  //     const quartier = p.quartier.toLowerCase();
  //     const f = filter.toLowerCase();

  //     // Si le filtre est "appartement", inclure aussi les villas
  //     if (f === "appartement") {
  //       return type.includes("appartement") || type.includes("villa");
  //     }

  //     // Sinon filtrer normalement par type ou quartier
  //     return type.includes(f) || quartier.includes(f);
  //   })
  // : properties;

  // const filtered = filter
  //   ? properties.filter((p) =>
  //       p.type.toLowerCase().includes(filter.toLowerCase()) ||
  //       p.quartier.toLowerCase().includes(filter.toLowerCase())
  //     )
  //   : properties;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Nos réalisations
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((item, i) => (
          <article
            key={item.id}
            className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <div className="relative overflow-hidden">

              <img
                src={item.img}
                alt={item.type}
                className="w-full h-44 md:h-48 object-cover transition-transform duration-500 transform hover:scale-105 cursor-pointer"
                onClick={() => { setIdx(i); setOpen(true); }}
              />

              <div className={`absolute left-4 top-4 px-3 py-1 rounded-full text-sm font-semibold text-gray-800 ${item.couleur ?? "bg-gray-100"}`}>
                {item.prix}
              </div>

              <div className="absolute right-4 top-4 px-3 py-1 rounded-full text-xs font-medium bg-white/80 backdrop-blur">
                {item.type}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 truncate">
                {item.quartier} — <span className="font-medium text-gray-600">{item.adresse}</span>
              </h3>

              <p className="mt-2 text-sm text-gray-500">{item.type}</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
                <span>🛋 {item.salon} Salon</span>
                <span>🛏 {item.chambres} Chambres</span>
                <span>🚿 {item.toilettes} Toilettes</span>
                <span>🍽 {item.cuisine} Cuisine</span>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <a
                  href={`https://wa.me/221338254340?text=${encodeURIComponent(
                    `Bonjour, je suis intéressé par la propriété: ${item.type} à ${item.quartier} (${item.prix})`
                  )}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-sm font-semibold shadow hover:scale-105 transition"
                >
                  💬 Contacter
                </a>

                <button
                  onClick={() => { setIdx(i); setOpen(true); }}
                  className="text-sm font-semibold text-gray-600 hover:underline"
                >
                  Voir
                </button>
              </div>
            </div>
          </article>
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
