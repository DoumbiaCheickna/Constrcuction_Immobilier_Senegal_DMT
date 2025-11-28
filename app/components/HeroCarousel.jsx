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
"use client";
import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "page_6.png",
  "page_7.png",
  "page_8.png",
  "page_9.png",
  "page_10.png",
  "page_11.png",
  "page_12.png",
  "page_13.png",
  "page_14.png",
  "page_15.png",
  "page_16.png",
  "page_17.png",
  "page_18.png",
  "page_19.png",
  "page_20.png",
  "page_21.png",
  "page_22.png",
  "page_23.png",
  "page_24.png",
  "page_25.png",
  "page_26.png",
  "page_27.png",
  "page_28.png",
  "page_29.png",
  "page_30.png",
  "page_31.png",
  "page_32.png",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex(i => (i + 1) % IMAGES.length);
    }, 5000);

    return () => clearInterval(timer.current);
  }, []);

  return (
    <section className="w-full flex justify-center">
      <div className="relative max-w-6xl w-full overflow-hidden rounded-lg shadow-xl">

        <div className="relative h-[360px] md:h-[420px]">

          {IMAGES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`hero-${i}`}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out ${
                i === index
                  ? "opacity-100 scale-105"  // léger zoom esthétique pour éviter vide
                  : "opacity-0 scale-100"
              }`}
            />
          ))}

          {/* Texte */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-left max-w-md">
            <h1 className="text-white text-2xl md:text-4xl font-bold drop-shadow-xl">
              DMT Construction
            </h1>

            <p className="mt-3 text-white text-sm md:text-lg drop-shadow-lg">
              Bâtissons ensemble vos rêves immobiliers.
            </p>

            <div className="mt-5">
              <a
                href="#contact"
                className="inline-block bg-white text-blue-700 px-4 py-2 rounded shadow font-semibold hover:shadow-xl transition"
              >
                Contactez-nous
              </a>
            </div>
          </div>

          {/* Boutons navigation */}
          <div className="absolute right-4 bottom-4 flex gap-3">
            <button
              onClick={() =>
                setIndex(i => (i - 1 + IMAGES.length) % IMAGES.length)
              }
              className="bg-white/90 p-2 rounded shadow hover:bg-white"
            >
              ‹
            </button>

            <button
              onClick={() => setIndex(i => (i + 1) % IMAGES.length)}
              className="bg-white/90 p-2 rounded shadow hover:bg-white"
            >
              ›
            </button>
          </div>
        </div>

        {/* Points indicateurs */}
        <div className="flex justify-center gap-3 mt-4 pb-4">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-blue-700" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
