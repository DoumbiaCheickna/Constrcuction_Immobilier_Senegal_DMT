// "use client";
// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// export default function MediaCarousel({ items }) {
//   const [index, setIndex] = useState(0);
//   const timer = useRef();

//   useEffect(() => {
//     timer.current = setInterval(() => {
//       setIndex(i => (i + 1) % items.length);
//     }, 6000);

//     return () => clearInterval(timer.current);
//   }, [items.length]);

//   const next = () => setIndex((index + 1) % items.length);
//   const prev = () => setIndex((index - 1 + items.length) % items.length);

//   return (
//     <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl shadow-2xl">
//       {/* Carrousel */}
//       <div className="relative h-[360px] md:h-[480px]">
//         {items.map((item, i) => (
//           <div
//             key={i}
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
//               i === index ? "opacity-100 z-10 scale-105" : "opacity-0 z-0 scale-100"
//             }`}
//           >
//             {item.type === "image" ? (
//               <Image
//                 src={item.src}
//                 alt={item.alt}
//                 fill
//                 className="object-cover rounded-xl"
//               />
//             ) : (
//               <video
//                 src={item.src}
//                 className="w-full h-full object-cover rounded-xl"
//                 autoPlay={i === index}
//                 muted
//                 loop
//                 controls={i === index}
//               />
//             )}

//             {/* Overlay description */}
//             <div className="absolute bottom-6 left-6 bg-black/50 text-white p-4 rounded-md max-w-md">
//               <h3 className="font-bold text-lg md:text-xl">{item.title}</h3>
//               <p className="text-sm md:text-base mt-1">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation flèches */}
//       <div className="absolute right-4 bottom-4 flex gap-3">
//         <button
//           onClick={prev}
//           className="bg-white/90 p-2 rounded shadow hover:bg-white transition"
//         >
//           ‹
//         </button>
//         <button
//           onClick={next}
//           className="bg-white/90 p-2 rounded shadow hover:bg-white transition"
//         >
//           ›
//         </button>
//       </div>

//       {/* Points indicateurs */}
//       <div className="flex justify-center gap-2 mt-4 pb-4">
//         {items.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`w-3 h-3 rounded-full transition ${
//               i === index ? "bg-blue-700" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function MediaCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex(i => (i + 1) % items.length);
    }, 6000);

    return () => clearInterval(timer.current);
  }, [items.length]);

  const next = () => setIndex((index + 1) % items.length);
  const prev = () => setIndex((index - 1 + items.length) % items.length);

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl shadow-2xl">
      {/* Carrousel */}
      <div className="relative h-[360px] md:h-[480px]">
        {items.map((item, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              i === index ? "opacity-100 z-10 scale-105" : "opacity-0 z-0 scale-100"
            }`}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover rounded-xl"
              />
            ) : (
                // <video
//   src={item.src}
//   className="w-full h-full object-cover rounded-xl"
//   autoPlay={i === index}   // lecture auto
//   loop
//   playsInline
//   controls
//   onPlay={e => e.target.volume = 0.5} // régler volume dès lecture
// />
              <video
                src={item.src}
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline
              />
            )}

            {/* Overlay description */}
            <div className="absolute bottom-6 left-6 bg-black/50 text-white p-4 rounded-md max-w-md">
              <h3 className="font-bold text-lg md:text-xl">{item.title}</h3>
              <p className="text-sm md:text-base mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation flèches */}
      <div className="absolute right-4 bottom-4 flex gap-3">
        <button
          onClick={prev}
          className="bg-white/90 p-2 rounded shadow hover:bg-white transition"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="bg-white/90 p-2 rounded shadow hover:bg-white transition"
        >
          ›
        </button>
      </div>

      {/* Points indicateurs */}
      <div className="flex justify-center gap-2 mt-4 pb-4">
        {items.map((_, i) => (
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
  );
}
