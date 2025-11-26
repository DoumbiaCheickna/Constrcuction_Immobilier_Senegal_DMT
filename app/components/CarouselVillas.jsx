// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function CarouselsVillas() {
//   const images = [
//     "/villa1.jpeg",
//     "/villa2.jpeg",
//     "/villa3.jpeg",
//     "/appart1.jpeg",
//     "/appart2.jpeg",
//     "/appart3.jpeg",
//   ];

//   const texts = [
//     "Découvrez nos villas modernes",
//     "Confort et élégance réunis",
//     "Espaces lumineux et bien pensés",
//     "Appartements de qualité supérieure",
//     "Un cadre idéal pour vivre sereinement",
//     "Votre futur logement vous attend",
//   ];

//   const [index, setIndex] = useState(0);

//   const next = () =>
//     setIndex((i) => (i + 1) % images.length);

//   const prev = () =>
//     setIndex((i) => (i - 1 + images.length) % images.length);

//   // Rotation auto toutes les 30 secondes
//   useEffect(() => {
//     const timer = setInterval(next, 30000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full h-[250px] md:h-[360px] rounded-xl overflow-hidden mb-10">

//       {/* IMAGE */}
//       <Image
//         src={images[index]}
//         alt="carousel"
//         fill
//         className="object-cover transition-all duration-700"
//       />

//       {/* TEXT OVERLAY */}
//       <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center">
//         <h2 className="text-white text-xl md:text-3xl font-bold drop-shadow-xl">
//           {texts[index]}
//         </h2>
//       </div>

//       {/* LEFT BUTTON */}
//       <button
//         onClick={prev}
//         className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
//       >
//         ‹
//       </button>

//       {/* RIGHT BUTTON */}
//       <button
//         onClick={next}
//         className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
//       >
//         ›
//       </button>
//     </div>
//   );
// }
// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../firebase/config";
// const PROPERTIES_STATIC = [
//   {
//     id: "s1",
//     img: "/simple1.avif",
//     prix: "35 000 000 FCFA",
//     quartier: "Plateau",
//     type: "Appartement",
//     adresse: "Avenue Blaise Diagne",
//     salon: 1,
//     chambres: 2,
//     toilettes: 2,
//     cuisine: 1,
//     couleur: "bg-emerald-50",
//   },
//   {
//     id: "s2",
//     img: "/simple4.avif",
//     prix: "120 000 000 FCFA",
//     quartier: "Almadies",
//     type: "Villa Haut Standing",
//     adresse: "Zone Résidentielle Almadies",
//     salon: 2,
//     chambres: 5,
//     toilettes: 4,
//     cuisine: 2,
//     couleur: "bg-yellow-50",
//   },
//   {
//     id: "s3",
//     img: "/simple5.avif",
//     prix: "12 500 000 FCFA",
//     quartier: "Mermoz",
//     type: "Studio Meublé",
//     adresse: "Mermoz Sacré-Cœur",
//     salon: 0,
//     chambres: 1,
//     toilettes: 1,
//     cuisine: 1,
//     couleur: "bg-pink-50",
//   },
//   {
//     id: "s4",
//     img: "/simple6.avif",
//     prix: "58 000 000 FCFA",
//     quartier: "Keur Gorgui",
//     type: "Duplex Contemporain",
//     adresse: "Cité Keur Gorgui",
//     salon: 1,
//     chambres: 4,
//     toilettes: 3,
//     cuisine: 1,
//     couleur: "bg-indigo-50",
//   },
//   {
//     id: "s5",
//     img: "/simple7.avif",
//     prix: "85 000 000 FCFA",
//     quartier: "Point E",
//     type: "Appartement Luxe",
//     adresse: "Rue 10 — Point E",
//     salon: 1,
//     chambres: 3,
//     toilettes: 3,
//     cuisine: 1,
//     couleur: "bg-rose-50",
//   },
//   {
//     id: "s6",
//     img: "/simple8.avif",
//     prix: "230 000 000 FCFA",
//     quartier: "Ngor",
//     type: "Villa Bord de Mer",
//     adresse: "Corniche des Almadies",
//     salon: 2,
//     chambres: 5,
//     toilettes: 4,
//     cuisine: 1,
//     couleur: "bg-cyan-50",
//   },
//   {
//     id: "s7",
//     img: "/simple9.avif",
//     prix: "42 000 000 FCFA",
//     quartier: "Yoff",
//     type: "Maison Familiale",
//     adresse: "Yoff Tonghor",
//     salon: 1,
//     chambres: 3,
//     toilettes: 2,
//     cuisine: 1,
//     couleur: "bg-lime-50",
//   },
//   {
//     id: "s8",
//     img: "/simple2.avif",
//     prix: "30 500 000 FCFA",
//     quartier: "Diamniadio",
//     type: "Résidence Moderne",
//     adresse: "Cité du Parc – Diamniadio",
//     salon: 1,
//     chambres: 2,
//     toilettes: 2,
//     cuisine: 1,
//     couleur: "bg-violet-50",
//   }
// ];

// export default function CarouselsVillas() {
//   const [properties, setProperties] = useState([]);
//   const [index, setIndex] = useState(0);
//   const cleanUrl = (url) => decodeURIComponent(url);
//   const loadProperties = async () => {
//     try {
//       const snap = await getDocs(collection(db, "properties"));
//       const firestoreProps = snap.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       // Combiner Firestore + statiques (optionnel)
//       const allProperties = [...firestoreProps, ...PROPERTIES_STATIC];

//       // Filtrer uniquement villas et appartements
//       const filtered = allProperties.filter(
//         (p) =>
//           p.type.toLowerCase().includes("villa") ||
//           p.type.toLowerCase().includes("appartement")
//       );

//       setProperties(filtered);
//     } catch (error) {
//       console.error("Erreur lors du chargement des propriétés :", error);
//     }
//   };

//   useEffect(() => {
//     loadProperties();
//   }, []);

//   const next = () => setIndex((i) => (i + 1) % properties.length);
//   const prev = () => setIndex((i) => (i - 1 + properties.length) % properties.length);

//   // Rotation auto toutes les 30 secondes
//   useEffect(() => {
//     const timer = setInterval(next, 30000);
//     return () => clearInterval(timer);
//   }, [properties]);

//   if (properties.length === 0) return <p>Chargement des villas et appartements...</p>;

//   return (
//     <div className="relative w-full h-[250px] md:h-[360px] rounded-xl overflow-hidden mb-10">
//       {/* IMAGE */}
//       {/* <Image
//         src={properties[index].img}
//         alt={properties[index].type}
//         fill
//         className="object-cover transition-all duration-700"
//       /> */}
//         <Image
//         src={cleanUrl(properties[index].img)}
//         alt={properties[index].type}
//         fill
//         className="object-cover transition-all duration-700"
//         unoptimized
//         />

//       {/* TEXT OVERLAY */}
//       <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center">
//         <h2 className="text-white text-xl md:text-3xl font-bold drop-shadow-xl">
//           {properties[index].type} — {properties[index].quartier} — {properties[index].prix}
//         </h2>
//       </div>

//       {/* LEFT BUTTON */}
//       <button
//         onClick={prev}
//         className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
//       >
//         ‹
//       </button>

//       {/* RIGHT BUTTON */}
//       <button
//         onClick={next}
//         className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
//       >
//         ›
//       </button>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
const PROPERTIES_STATIC = [
  {
    id: "s1",
    img: "/simple1.avif",
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
    img: "/simple4.avif",
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
    img: "/simple5.avif",
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
    img: "/simple6.avif",
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
    img: "/simple7.avif",
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
    img: "/simple8.avif",
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
    img: "/simple9.avif",
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
    img: "/simple2.avif",
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

export default function CarouselsVillas() {
  const [properties, setProperties] = useState([]);
  const [index, setIndex] = useState(0);

  const loadProperties = async () => {
    try {
      const snap = await getDocs(collection(db, "properties"));
      const firestoreProps = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Combiner Firestore + statiques si tu veux
      const allProperties = [...firestoreProps, ...PROPERTIES_STATIC];

      // Filtrer uniquement villas et appartements (insensible à la casse)
      const filtered = allProperties.filter((p) =>
        p.type.toLowerCase().includes("villa") ||
        p.type.toLowerCase().includes("appartement")
      );

      setProperties(filtered);
    } catch (error) {
      console.error("Erreur lors du chargement des propriétés :", error);
    }
  };

  useEffect(() => {
    loadProperties();
  }, []);

  const next = () => setIndex((i) => (i + 1) % properties.length);
  const prev = () => setIndex((i) => (i - 1 + properties.length) % properties.length);

  // Rotation automatique toutes les 30 secondes
  useEffect(() => {
    const timer = setInterval(next, 30000);
    return () => clearInterval(timer);
  }, [properties]);

  if (properties.length === 0) return <p>Chargement des villas et appartements...</p>;

  return (
    <div className="relative w-full h-[250px] md:h-[360px] rounded-xl overflow-hidden mb-10">
      {/* IMAGE */}
      <Image
        src={properties[index].img}
        alt={properties[index].type}
        fill
        className="object-cover transition-all duration-700"
        unoptimized // obligatoire pour les images Firebase
      />

      {/* TEXT OVERLAY */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center">
        <h2 className="text-white text-xl md:text-3xl font-bold drop-shadow-xl">
          {properties[index].type} — {properties[index].quartier} — {properties[index].prix}
        </h2>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ‹
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
