// "use client";
// import { useEffect, useRef, useState } from "react";
// const IMAGES = [
//   "page_6.png",
//   "page_7.png",
//   "page_8.png",
//   "page_9.png",
//   "page_10.png",
//   "page_11.png",
//   "page_12.png",
//   "page_13.png",
//   "page_14.png",
//   "page_15.png",
//   "page_16.png",
//   "page_17.png",
//   "page_18.png",
//   "page_19.png",
//   "page_20.png",
//     "page_21.png",
//   "page_22.png",
//   "page_23.png",
//   "page_24.png",
//   "page_25.png",
//   "page_26.png",
//   "page_27.png",
//   "page_28.png",
//   "page_29.png",
//   "page_30.png",
//   "page_31.png",
//   "page_32.png",
// ];

// export default function HeroCarousel() {
//   const [index, setIndex] = useState(0);
//   const timer = useRef();

//   useEffect(() => {
//     timer.current = setInterval(() => {
//       setIndex(i => (i + 1) % IMAGES.length);
//     }, 5000);
//     return () => clearInterval(timer.current);
//   }, []);

//   return (
//     <section className="w-full flex justify-center">
//   <div className="relative max-w-6xl w-full overflow-hidden rounded-lg shadow-lg">
//     <div className="relative h-[360px] md:h-[300px]">
//       {IMAGES.map((src, i) => (
//         <img
//           key={src}
//           src={src}
//           alt={`hero-${i}`}
//           loading="lazy"
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
//             i === index ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         />
//       ))}
// <img
//   key={src}
//   src={src}
//   alt={`hero-${i}`}
//   loading="lazy"
//   className={`absolute inset-0 w-full h-full object-contain bg-black transition-opacity duration-700 ${
//     i === index ? "opacity-100 z-10" : "opacity-0 z-0"
//   }`}
// />

//       {/* overlay texte */}
//       <div className="absolute left-6 top-1/2 -translate-y-1/2 text-left max-w-md">
//         <h1 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
//           DMT Construction
//         </h1>
//         <p className="mt-3 text-white drop-shadow-sm">
//           Bâtissons ensemble vos rêves immobiliers.
//         </p>
//         <div className="mt-5">
//           <a
//             href="#contact"
//             className="inline-block bg-white text-blue-700 px-4 py-2 rounded shadow font-semibold hover:shadow-lg transition"
//           >
//             Contactez-nous
//           </a>
//         </div>
//       </div>
//       <div className="absolute right-4 bottom-4 flex gap-3">
//         <button
//           onClick={() => setIndex(i => (i - 1 + IMAGES.length) % IMAGES.length)}
//           className="bg-white/90 p-2 rounded shadow"
//         >
//           ‹
//         </button>
//         <button
//           onClick={() => setIndex(i => (i + 1) % IMAGES.length)}
//           className="bg-white/90 p-2 rounded shadow"
//         >
//           ›
//         </button>
//       </div>
//     </div>
//     <div className="flex justify-center gap-3 mt-4 pb-4">
//       {IMAGES.map((_, i) => (
//         <button
//           key={i}
//           onClick={() => setIndex(i)}
//           className={`w-3 h-3 rounded-full ${
//             i === index ? "bg-blue-700" : "bg-gray-300"
//           }`}
//         />
//       ))}
//     </div>
//   </div>
// </section>

//     // <section className="w-full overflow-hidden relative">
//     //   <div className="relative h-[360px] md:h-[520px]">
//     //     {IMAGES.map((src, i) => (
//     //       <img
//     //         key={src}
//     //         src={src}
//     //         alt={`hero-${i}`}
//     //         loading="lazy"
//     //         className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
//     //       />
//     //     ))}

//     //     {/* overlay texte */}
//     //     <div className="absolute left-8 top-1/3 md:top-1/2 transform -translate-y-1/2 md:left-16 text-left max-w-xl">
//     //       <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">DMT Construction</h1>
//     //       <p className="mt-3 text-white max-w-md drop-shadow-sm">Bâtissons ensemble vos rêves immobiliers — maisons, villas et appartements haut de gamme.</p>
//     //       <div className="mt-6">
//     //         <a href="#contact" className="inline-block bg-white text-blue-700 px-5 py-3 rounded shadow-sm font-semibold hover:shadow-lg transition">Contactez-nous</a>
//     //       </div>
//     //     </div>

//     //     {/* controls */}
//     //     <div className="absolute right-6 bottom-6 flex gap-3">
//     //       <button onClick={() => setIndex(i => (i - 1 + IMAGES.length) % IMAGES.length)} className="bg-white/90 p-2 rounded shadow">‹</button>
//     //       <button onClick={() => setIndex(i => (i + 1) % IMAGES.length)} className="bg-white/90 p-2 rounded shadow">›</button>
//     //     </div>
//     //   </div>

//     //   {/* indicators */}
//     //   <div className="flex justify-center gap-3 mt-4">
//     //     {IMAGES.map((_, i) => (
//     //       <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? "bg-blue-700" : "bg-gray-300"}`} />
//     //     ))}
//     //   </div>
//     // </section>
//   );
// }



// "use client";
// import { useEffect, useRef, useState } from "react";

// const IMAGES = [
//    "what_1.png",
//    "what_2.png",
//    "what_3.png",
//    "what_4.png",
//    "what_5.png",
//    "what_6.png",
//    "what_7.png",
//    "what_8.png",
//    "what_9.png",
//   "page_6.png",
//   "page_7.png",
//   "page_8.png",
//   "page_9.png",
//   "page_10.png",
//   "page_11.png",
//   "page_16.png",
//   "page_17.png",
// ];

// export default function HeroCarousel() {
//   const [index, setIndex] = useState(0);
//   const timer = useRef();

//   useEffect(() => {
//     timer.current = setInterval(() => {
//       setIndex(i => (i + 1) % IMAGES.length);
//     }, 5000);

//     return () => clearInterval(timer.current);
//   }, []);

//   return (
//     <section className="w-full flex justify-center">
//       <div className="relative max-w-6xl w-full overflow-hidden rounded-lg shadow-xl">

//         <div className="relative h-[360px] md:h-[420px]">

//           {IMAGES.map((src, i) => (
//             <img
//               key={src}
//               src={src}
//               alt={`hero-${i}`}
//               loading="lazy"
//               className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out ${
//                 i === index
//                   ? "opacity-100 scale-105"  // léger zoom esthétique pour éviter vide
//                   : "opacity-0 scale-100"
//               }`}
//             />
//           ))}

//           {/* Texte */}
//           <div className="absolute left-6 top-1/2 -translate-y-1/2 text-left max-w-md">
//             <h1 className="text-white text-2xl md:text-4xl font-bold drop-shadow-xl">
//               DMT Construction
//             </h1>

//             <p className="mt-3 text-white text-sm md:text-lg drop-shadow-lg">
//               Bâtissons ensemble vos rêves immobiliers.
//             </p>

//             <div className="mt-5">
//               <a
//                 href="#contact"
//                 className="inline-block bg-white text-blue-700 px-4 py-2 rounded shadow font-semibold hover:shadow-xl transition"
//               >
//                 Contactez-nous
//               </a>
//             </div>
//           </div>

//           {/* Boutons navigation */}
//           <div className="absolute right-4 bottom-4 flex gap-3">
//             <button
//               onClick={() =>
//                 setIndex(i => (i - 1 + IMAGES.length) % IMAGES.length)
//               }
//               className="bg-white/90 p-2 rounded shadow hover:bg-white"
//             >
//               ‹
//             </button>

//             <button
//               onClick={() => setIndex(i => (i + 1) % IMAGES.length)}
//               className="bg-white/90 p-2 rounded shadow hover:bg-white"
//             >
//               ›
//             </button>
//           </div>
//         </div>

//         {/* Points indicateurs */}
//         <div className="flex justify-center gap-3 mt-4 pb-4">
//           {IMAGES.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className={`w-3 h-3 rounded-full transition ${
//                 i === index ? "bg-blue-700" : "bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { FaSearch, FaHome, FaMapMarkerAlt, FaTag, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const IMAGES = [
//   "what_1.png",
//   "what_2.png",
//   "what_3.png",
//   "what_4.png",
//   "what_5.png",
//   "what_6.png",
//   "what_7.png",
//   "what_8.png",
//   "what_9.png",
//   "page_6.png",
//   "page_7.png",
//   "page_8.png",
//   "page_9.png",
//   "page_10.png",
//   "page_11.png",
//   "page_16.png",
//   "page_17.png",
// ];

// export default function HeroCarousel() {
//   const [index, setIndex] = useState(0);
//   const [filters, setFilters] = useState({
//     pays: "",
//     typeBien: "",
//     statut: ""
//   });
//   const timer = useRef();

//   const paysOptions = ["Sénégal", "Côte d'Ivoire", "Mali", "Gabon", "Cameroun"];
//   const typeBienOptions = ["Appartement", "Villa", "Studio", "Duplex", "Terrain", "Bureau"];
//   const statutOptions = ["À vendre", "À louer", "Nouveau", "Promotion"];

//   useEffect(() => {
//     timer.current = setInterval(() => {
//       setIndex(i => (i + 1) % IMAGES.length);
//     }, 5000);

//     return () => clearInterval(timer.current);
//   }, []);

//   const handleFilterChange = (field, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleSearch = () => {
//     console.log("Recherche avec filtres:", filters);
//     // Implémentez votre logique de recherche ici
//   };

//   return (
//     <section className="w-full flex justify-center">
//       <div className="relative max-w-6xl w-full overflow-hidden rounded-lg shadow-xl">

//         {/* Filtre intégré au carousel */}
//         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-4xl px-4">
//           <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 border border-white/20">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
//               {/* Recherche par pays */}
//               <div>
//                 <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
//                   Recherche par pays
//                 </label>
//                 <div className="relative">
//                   <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//                   <select
//                     value={filters.pays}
//                     onChange={(e) => handleFilterChange("pays", e.target.value)}
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white"
//                   >
//                     <option value="">Tous les pays</option>
//                     {paysOptions.map(pays => (
//                       <option key={pays} value={pays}>{pays}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Type de bien */}
//               <div>
//                 <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
//                   Type de bien
//                 </label>
//                 <div className="relative">
//                   <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//                   <select
//                     value={filters.typeBien}
//                     onChange={(e) => handleFilterChange("typeBien", e.target.value)}
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white"
//                   >
//                     <option value="">Tous les types</option>
//                     {typeBienOptions.map(type => (
//                       <option key={type} value={type}>{type}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Statut */}
//               <div>
//                 <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
//                   Statut
//                 </label>
//                 <div className="relative">
//                   <FaTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//                   <select
//                     value={filters.statut}
//                     onChange={(e) => handleFilterChange("statut", e.target.value)}
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white"
//                   >
//                     <option value="">Tous les statuts</option>
//                     {statutOptions.map(statut => (
//                       <option key={statut} value={statut}>{statut}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Bouton Rechercher */}
//               <div>
//                 <button
//                   onClick={handleSearch}
//                   className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 px-6 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
//                 >
//                   <FaSearch className="text-sm" />
//                   Rechercher
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="relative h-[360px] md:h-[420px]">

//           {IMAGES.map((src, i) => (
//             <img
//               key={src}
//               src={src}
//               alt={`hero-${i}`}
//               loading="lazy"
//               className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out ${
//                 i === index
//                   ? "opacity-100 scale-105"
//                   : "opacity-0 scale-100"
//               }`}
//             />
//           ))}

//           {/* Overlay sombre pour mieux voir le texte */}
//           <div className="absolute inset-0 bg-black/20"></div>

//           {/* Texte */}
//           <div className="absolute left-6 top-1/2 -translate-y-1/2 text-left max-w-md z-10">
//             <h1 className="text-white text-2xl md:text-4xl font-bold drop-shadow-2xl">
//               DMT Construction
//             </h1>

//             <p className="mt-3 text-white text-sm md:text-lg drop-shadow-2xl">
//               Bâtissons ensemble vos rêves immobiliers.
//             </p>

//             <div className="mt-5">
//               <a
//                 href="#contact"
//                 className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg shadow-lg font-semibold hover:shadow-xl transition-all hover:scale-105"
//               >
//                 Contactez-nous
//               </a>
//             </div>
//           </div>

//           {/* Boutons navigation - Positionnés à droite au même niveau que le filtre */}
//           <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-20">
//             <button
//               onClick={() => setIndex(i => (i - 1 + IMAGES.length) % IMAGES.length)}
//               className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
//             >
//               <FaChevronLeft className="text-gray-700" />
//             </button>

//             <button
//               onClick={() => setIndex(i => (i + 1) % IMAGES.length)}
//               className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
//             >
//               <FaChevronRight className="text-gray-700" />
//             </button>
//           </div>
//         </div>

//         {/* Points indicateurs */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-3 z-10">
//           {IMAGES.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 i === index 
//                   ? "bg-white scale-125" 
//                   : "bg-white/60 hover:bg-white/80"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect, useRef, useState } from "react";
import { FaSearch, FaHome, FaMapMarkerAlt, FaTag, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const IMAGES = [
  "what_1.png",
  "what_2.png",
  "what_3.png",
  "what_4.png",
  "what_5.png",
  "what_6.png",
  "what_7.png",
  "what_8.png",
  "what_9.png",
  "page_6.png",
  "page_7.png",
  "page_8.png",
  "page_9.png",
  "page_10.png",
  "page_11.png",
  "page_16.png",
  "page_17.png",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [filters, setFilters] = useState({
    pays: "",
    typeBien: "",
    statut: ""
  });
  const [showFilters, setShowFilters] = useState(false);
  const timer = useRef();

  const paysOptions = ["Sénégal"];
  const typeBienOptions = ["Appartement", "Villa", "Studio", "Duplex", "Terrain", "Bureau"];
  const statutOptions = ["À vendre", "À louer", "Nouveau", "Promotion"];

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex(i => (i + 1) % IMAGES.length);
    }, 5000);

    return () => clearInterval(timer.current);
  }, []);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    console.log("Recherche avec filtres:", filters);
    // Implémentez votre logique de recherche ici
  };

  return (
    <section className="w-full relative">
      {/* Filtre pour desktop - visible seulement sur grand écran */}
      <div className="hidden lg:block absolute top-4 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-4xl px-4">
        <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
            {/* Recherche par pays */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Recherche par pays
              </label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  value={filters.pays}
                  onChange={(e) => handleFilterChange("pays", e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white"
                >
                  <option value="">Tous les pays</option>
                  {paysOptions.map(pays => (
                    <option key={pays} value={pays}>{pays}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Type de bien */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Type de bien
              </label>
              <div className="relative">
                <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  value={filters.typeBien}
                  onChange={(e) => handleFilterChange("typeBien", e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white"
                >
                  <option value="">Tous les types</option>
                  {typeBienOptions.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Statut */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Statut
              </label>
              <div className="relative">
                <FaTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  value={filters.statut}
                  onChange={(e) => handleFilterChange("statut", e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white"
                >
                  <option value="">Tous les statuts</option>
                  {statutOptions.map(statut => (
                    <option key={statut} value={statut}>{statut}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bouton Rechercher */}
            <div>
              <button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 px-6 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
              >
                <FaSearch className="text-sm" />
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton filtre mobile */}
      <div className="lg:hidden absolute top-4 right-4 z-20">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-3 border border-white/20 hover:bg-white transition-all"
        >
          <FaSearch className="text-gray-700" />
        </button>
      </div>

      {/* Filtre mobile - apparaît quand on clique sur le bouton */}
      {showFilters && (
        <div className="lg:hidden absolute top-16 left-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-4 border border-white/20">
          <div className="space-y-4">
            {/* Recherche par pays */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Recherche par pays
              </label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  value={filters.pays}
                  onChange={(e) => handleFilterChange("pays", e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white"
                >
                  <option value="">Tous les pays</option>
                  {paysOptions.map(pays => (
                    <option key={pays} value={pays}>{pays}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Type de bien */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Type de bien
              </label>
              <div className="relative">
                <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  value={filters.typeBien}
                  onChange={(e) => handleFilterChange("typeBien", e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white"
                >
                  <option value="">Tous les types</option>
                  {typeBienOptions.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Statut */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                Statut
              </label>
              <div className="relative">
                <FaTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  value={filters.statut}
                  onChange={(e) => handleFilterChange("statut", e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none bg-white"
                >
                  <option value="">Tous les statuts</option>
                  {statutOptions.map(statut => (
                    <option key={statut} value={statut}>{statut}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bouton Rechercher mobile */}
            <button
              onClick={() => {
                handleSearch();
                setShowFilters(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 px-6 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
            >
              <FaSearch className="text-sm" />
              Rechercher
            </button>
          </div>
        </div>
      )}

      {/* Carousel pleine largeur */}
      <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh]">
        {IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`hero-${i}`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out ${
              i === index
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          />
        ))}

        {/* Overlay sombre pour mieux voir le texte */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Texte - Adapté pour mobile */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-left max-w-md z-10 px-2">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-2xl leading-tight">
            DMT Construction
          </h1>

          <p className="mt-3 text-white text-sm md:text-lg lg:text-xl drop-shadow-2xl">
            Bâtissons ensemble vos rêves immobiliers.
          </p>

          <div className="mt-5">
            <a
              href="#contact"
              className="inline-block bg-white text-blue-700 px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg font-semibold hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base"
            >
              Contactez-nous
            </a>
          </div>
        </div>

        {/* Boutons navigation - Positionnés différemment sur mobile */}
        <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 md:gap-3 z-20">
          <button
            onClick={() => setIndex(i => (i - 1 + IMAGES.length) % IMAGES.length)}
            className="bg-white/90 p-2 md:p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
          >
            <FaChevronLeft className="text-gray-700 text-sm md:text-base" />
          </button>

          <button
            onClick={() => setIndex(i => (i + 1) % IMAGES.length)}
            className="bg-white/90 p-2 md:p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
          >
            <FaChevronRight className="text-gray-700 text-sm md:text-base" />
          </button>
        </div>

        {/* Points indicateurs - Positionnés plus bas sur mobile */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 md:gap-3 z-10">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                i === index 
                  ? "bg-white scale-125" 
                  : "bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}