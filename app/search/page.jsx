// "use client";
// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Link from "next/link";

// export default function SearchPage() {
//   const [filters, setFilters] = useState({
//     type: "",
//     location: "",
//     minPrice: "",
//     maxPrice: "",
//     rooms: "",
//     furnished: false,
//     swimmingPool: false,
//   });

//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {

//     const PROPERTIES = [
//   {
//     id: 1,
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
//     id: 2,
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
//     id: 3,
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
//     id: 4,
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
//     id: 5,
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
//     id: 6,
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
//     id: 7,
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
//     id: 8,
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
//     const filtered = PROPERTIES.filter(item =>
//       (!filters.type || item.type.includes(filters.type)) &&
//       (!filters.location || item.location.toLowerCase().includes(filters.location.toLowerCase()))
//     );

//     setResults(filtered);
//   };

//   return (
//      <>
//         <Navbar />
//     <div className="max-w-7xl mx-auto px-6 py-10">
//       <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
//         🔎 Rechercher un bien immobilier
//       </h1>

//       {/* ▬▬▬ FORMULAIRE DE RECHERCHE ▬▬▬ */}
//       <div className="bg-white p-6 rounded-xl shadow-md space-y-6 border">

//         {/* Localisation */}
//         <div>
//           <label className="block font-semibold text-sm mb-1">Localisation</label>
//           <input
//             type="text"
//             placeholder="Ex: Almadies, Ouest Foire, Diamniadio..."
//             className="w-full border px-4 py-2 rounded"
//             onChange={(e) => setFilters({ ...filters, location: e.target.value })}
//           />
//         </div>

//         {/* Type */}
//         <div>
//           <label className="block font-semibold text-sm mb-1">Type de bien</label>
//           <select
//             className="w-full border px-4 py-2 rounded"
//             onChange={(e) => setFilters({ ...filters, type: e.target.value })}
//           >
//             <option value="">-- Choisir un type --</option>
//             <option value="Villa">Villa</option>
//             <option value="Appartement">Appartement</option>
//             <option value="Studio">Studio</option>
//             <option value="Chambre">Chambre</option>
//             <option value="Terrain">Terrain</option>
//             <option value="Meublé">Meublé</option>
//           </select>
//         </div>

//         {/* Prix */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block font-semibold text-sm mb-1">Prix minimum</label>
//             <input
//               type="number"
//               className="w-full border px-4 py-2 rounded"
//               onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
//             />
//           </div>
//           <div>
//             <label className="block font-semibold text-sm mb-1">Prix maximum</label>
//             <input
//               type="number"
//               className="w-full border px-4 py-2 rounded"
//               onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
//             />
//           </div>
//         </div>

//         {/* Chambres */}
//         <div>
//           <label className="block font-semibold text-sm mb-1">Nombre de chambres</label>
//           <select
//             className="w-full border px-4 py-2 rounded"
//             onChange={(e) => setFilters({ ...filters, rooms: e.target.value })}
//           >
//             <option value="">-- Indifférent --</option>
//             <option value="1">1 chambre</option>
//             <option value="2">2 chambres</option>
//             <option value="3">3 chambres</option>
//             <option value="4">4 chambres</option>
//             <option value="5">5+ chambres</option>
//           </select>
//         </div>

//         {/* Options */}
//         <div className="flex gap-6 text-sm">
//           <label className="flex items-center gap-2">
//             <input type="checkbox"
//               onChange={(e) => setFilters({ ...filters, furnished: e.target.checked })}
//             />
//             Meublé
//           </label>

//           <label className="flex items-center gap-2">
//             <input type="checkbox"
//               onChange={(e) => setFilters({ ...filters, swimmingPool: e.target.checked })}
//             />
//             Piscine
//           </label>
//         </div>

//         {/* Bouton */}
//         <button
//           onClick={handleSearch}
//           className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
//         >
//           Rechercher maintenant
//         </button>

//       </div>

//       {/* ▬▬▬ RÉSULTATS ▬▬▬ */}
//       <div className="mt-10">
//         <h2 className="text-xl font-bold mb-4">Résultats :</h2>

//         {results.length === 0 ? (
//           <p className="text-gray-600">Aucun résultat pour le moment.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {results.map(item => (
//               <div key={item.id} className="bg-white border rounded-xl shadow hover:shadow-lg transition">
//                 <img src={item.image} className="rounded-t-xl h-48 w-full object-cover" />
//                 <div className="p-4">
//                   <h3 className="font-bold text-lg">{item.title}</h3>
//                   <p className="text-sm text-gray-600">{item.location}</p>
//                   <p className="text-blue-700 font-bold mt-2">
//                     {item.price?.toLocaleString()} FCFA
//                   </p>
//                   <Link
//                     href={`/biens/${item.id}`}
//                     className="inline-block mt-3 text-sm bg-blue-700 text-white px-4 py-2 rounded-lg"
//                   >
//                     Voir détails
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </div>
//        <Footer />
//     </>
//   );
// }
"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import WhatsAppButton from '../components/WhatsAppButton';
export default function SearchPage() {
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    minPrice: "",
    maxPrice: "",
    rooms: "",
    furnished: false,
    swimmingPool: false,
  });

  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    // Données mockées pour test (plus tard tu mettras Firebase)
    const PROPERTIES = [
      {
        id: 1,
        img: "/simple1.avif",
        prix: "35000000",
        quartier: "Plateau",
        type: "Appartement",
        adresse: "Avenue Blaise Diagne",
        salon: 1,
        chambres: 2,
        toilettes: 2,
        cuisine: 1,
        couleur: "bg-emerald-50",
        furnished: true,
        swimmingPool: false,
      },
      {
        id: 2,
        img: "/simple4.avif",
        prix: "120000000",
        quartier: "Almadies",
        type: "Villa",
        adresse: "Zone Résidentielle Almadies",
        salon: 2,
        chambres: 5,
        toilettes: 4,
        cuisine: 2,
        couleur: "bg-yellow-50",
        furnished: false,
        swimmingPool: true,
      },
      {
        id: 3,
        img: "/simple5.avif",
        prix: "12500000",
        quartier: "Mermoz",
        type: "Studio",
        adresse: "Mermoz Sacré-Cœur",
        salon: 0,
        chambres: 1,
        toilettes: 1,
        cuisine: 1,
        couleur: "bg-pink-50",
        furnished: true,
        swimmingPool: false,
      },
      {
        id: 4,
        img: "/simple6.avif",
        prix: "58000000",
        quartier: "Keur Gorgui",
        type: "Duplex",
        adresse: "Cité Keur Gorgui",
        salon: 1,
        chambres: 4,
        toilettes: 3,
        cuisine: 1,
        couleur: "bg-indigo-50",
        furnished: false,
        swimmingPool: false,
      },
    ];

    // 🔍 Filtrage
    const filtered = PROPERTIES.filter((item) => {
      const price = parseInt(item.prix);

      return (
        (!filters.type || item.type.toLowerCase().includes(filters.type.toLowerCase())) &&
        (!filters.location || item.quartier.toLowerCase().includes(filters.location.toLowerCase())) &&
        (!filters.minPrice || price >= parseInt(filters.minPrice)) &&
        (!filters.maxPrice || price <= parseInt(filters.maxPrice)) &&
        (!filters.rooms || item.chambres >= parseInt(filters.rooms)) &&
        (!filters.furnished || item.furnished === true) &&
        (!filters.swimmingPool || item.swimmingPool === true)
      );
    });

    setResults(filtered);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          🔎 Rechercher un bien immobilier
        </h1>

        {/* ▬▬▬ FORMULAIRE ▬▬▬ */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-6 border">

          {/* Localisation */}
          <div>
            <label className="block font-semibold text-sm mb-1">Localisation</label>
            <input
              type="text"
              placeholder="Ex: Almadies, Mermoz..."
              className="w-full border px-4 py-2 rounded"
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
          </div>

          {/* Type */}
          <div>
            <label className="block font-semibold text-sm mb-1">Type de bien</label>
            <select
              className="w-full border px-4 py-2 rounded"
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">-- Choisir un type --</option>
              <option value="Villa">Villa</option>
              <option value="Appartement">Appartement</option>
              <option value="Studio">Studio</option>
              <option value="Duplex">Duplex</option>
              <option value="Maison">Maison</option>
            </select>
          </div>

          {/* Prix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-sm mb-1">Prix minimum</label>
              <input
                type="number"
                className="w-full border px-4 py-2 rounded"
                onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
              />
            </div>

            <div>
              <label className="block font-semibold text-sm mb-1">Prix maximum</label>
              <input
                type="number"
                className="w-full border px-4 py-2 rounded"
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              />
            </div>
          </div>

          {/* Chambres */}
          <div>
            <label className="block font-semibold text-sm mb-1">Nombre de chambres</label>
            <select
              className="w-full border px-4 py-2 rounded"
              onChange={(e) => setFilters({ ...filters, rooms: e.target.value })}
            >
              <option value="">Indifférent</option>
              <option value="1">1 chambre</option>
              <option value="2">2 chambres</option>
              <option value="3">3 chambres</option>
              <option value="4">4 chambres</option>
              <option value="5">5+ chambres</option>
            </select>
          </div>

          {/* Options */}
          <div className="flex flex-wrap gap-6 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={(e) => setFilters({ ...filters, furnished: e.target.checked })}
              />
              Meublé
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={(e) => setFilters({ ...filters, swimmingPool: e.target.checked })}
              />
              Piscine
            </label>
          </div>

          {/* Bouton */}
          <button
            onClick={handleSearch}
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Rechercher maintenant
          </button>
        </div>

        {/* ▬▬▬ RÉSULTATS ▬▬▬ */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Résultats :</h2>

          {results.length === 0 ? (
            <p className="text-gray-600">Aucun résultat pour le moment.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border rounded-xl shadow hover:shadow-lg transition"
                >
                  <img
                    src={item.img}
                    className="rounded-t-xl h-48 w-full object-cover"
                    alt={item.type}
                  />

                  <div className="p-4">
                    <h3 className="font-bold text-lg">{item.type}</h3>
                    <p className="text-sm text-gray-600">{item.quartier}</p>

                    <p className="text-blue-700 font-bold mt-2">
                      {parseInt(item.prix).toLocaleString()} FCFA
                    </p>

                    <Link
                      href={`/biens/${item.id}`}
                      className="inline-block mt-3 text-sm bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                      Voir détails
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
        <WhatsAppButton />
    </>
  );
}
