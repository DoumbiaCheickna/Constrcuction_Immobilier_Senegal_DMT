
// "use client";
// import { useEffect, useState } from "react";

// export default function Lightbox({ properties = [], open, setOpen, startIndex = 0 }) {
//   const [index, setIndex] = useState(startIndex);

//   useEffect(() => {
//     setIndex(startIndex);
//   }, [startIndex]);

//   useEffect(() => {
//     function onKey(e) {
//       if (!open) return;
//       if (e.key === "Escape") setOpen(false);
//       if (e.key === "ArrowRight") setIndex(i => (i + 1) % properties.length);
//       if (e.key === "ArrowLeft") setIndex(i => (i - 1 + properties.length) % properties.length);
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [open, properties.length, setOpen]);

//   if (!open) return null;
//   const item = properties[index];

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
//       <div className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl">
//         <button
//           onClick={() => setOpen(false)}
//           className="absolute right-4 top-4 z-50 bg-white rounded-full p-2 shadow"
//           aria-label="Fermer"
//         >
//           ✕
//         </button>

//         <div className="md:flex">
//           <div className="md:w-1/2">
//             <img src={item.img} alt={item.type} className="w-full h-80 md:h-full object-cover" />
//           </div>

//           <div className="md:w-1/2 p-6">
//             <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{item.type}</h3>
//             <p className="text-xl font-bold text-pink-600 mb-2">{item.prix}</p>
//             <p className="text-sm text-gray-500 mb-4">{item.quartier} — {item.adresse}</p>

//             <div className="grid grid-cols-3 gap-3 my-4">
//               <div className="bg-pink-50 p-3 rounded-lg text-center">
//                 <div className="text-sm text-gray-500">Salon</div>
//                 <div className="font-semibold text-gray-800">{item.salon}</div>
//               </div>
//               <div className="bg-yellow-50 p-3 rounded-lg text-center">
//                 <div className="text-sm text-gray-500">Chambres</div>
//                 <div className="font-semibold text-gray-800">{item.chambres}</div>
//               </div>
//               <div className="bg-cyan-50 p-3 rounded-lg text-center">
//                 <div className="text-sm text-gray-500">Toilettes</div>
//                 <div className="font-semibold text-gray-800">{item.toilettes}</div>
//               </div>
//             </div>

//             <p className="text-sm text-gray-600 mb-6">Cuisine : <span className="font-semibold text-gray-800">{item.cuisine}</span></p>

//             <div className="flex gap-3">
//               <a
//                 href={`https://wa.me/221338254340?text=${encodeURIComponent("Bonjour, je souhaite plus d'infos sur: " + item.type + " à " + item.quartier + " (" + item.prix + ").")}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold shadow hover:opacity-90 transition"
//               >
//                 💬 Contacter sur WhatsApp
//               </a>

//               <button
//                 onClick={() => setIndex((index + 1) % properties.length)}
//                 className="px-4 py-2 rounded-full bg-gray-100 font-semibold"
//               >
//                 Suivant →
//               </button>
//             </div>

//             <p className="text-xs text-gray-400 mt-4">ID annonce: #{item.id}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";

export default function Lightbox({ properties = [], open, setOpen, startIndex = 0 }) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIndex(i => (i + 1) % properties.length);
      if (e.key === "ArrowLeft") setIndex(i => (i - 1 + properties.length) % properties.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, properties.length, setOpen]);

  if (!open) return null;
  const item = properties[index];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2 sm:p-4">
      <div className="relative bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        {/* Bouton fermer */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-50 bg-white rounded-full p-2 shadow"
          aria-label="Fermer"
        >
          ✕
        </button>

        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
          <img src={item.img} alt={item.type} className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none" />
        </div>

        {/* Contenu */}
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1">{item.type}</h3>
            <p className="text-lg md:text-xl font-bold text-pink-600 mb-1">{item.prix}</p>
            <p className="text-sm text-gray-500 mb-4">{item.quartier} — {item.adresse}</p>

            <div className="grid grid-cols-3 gap-2 md:gap-3 my-3">
              <div className="bg-pink-50 p-2 rounded-lg text-center">
                <div className="text-xs md:text-sm text-gray-500">Salon</div>
                <div className="font-semibold text-gray-800">{item.salon}</div>
              </div>
              <div className="bg-yellow-50 p-2 rounded-lg text-center">
                <div className="text-xs md:text-sm text-gray-500">Chambres</div>
                <div className="font-semibold text-gray-800">{item.chambres}</div>
              </div>
              <div className="bg-cyan-50 p-2 rounded-lg text-center">
                <div className="text-xs md:text-sm text-gray-500">Toilettes</div>
                <div className="font-semibold text-gray-800">{item.toilettes}</div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">Cuisine : <span className="font-semibold text-gray-800">{item.cuisine}</span></p>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-3 mt-2">
            <a
              href={`https://wa.me/221338254340?text=${encodeURIComponent("Bonjour, je souhaite plus d'infos sur: " + item.type + " à " + item.quartier + " (" + item.prix + ").")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold shadow hover:opacity-90 transition text-center w-full md:w-auto"
            >
              💬 Contacter sur WhatsApp
            </a>

            <button
              onClick={() => setIndex((index + 1) % properties.length)}
              className="px-4 py-2 rounded-full bg-gray-100 font-semibold w-full md:w-auto"
            >
              Suivant →
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-2 md:mt-4">ID annonce: #{item.id}</p>
        </div>
      </div>
    </div>
  );
}
