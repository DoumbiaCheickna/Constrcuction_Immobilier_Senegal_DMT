// import { useState } from 'react';
// export default function Carousel() {
// const images = [
// "/house1.jpg",
// "/house2.jpg",
// "/house3.jpg"
// ];
// const [index, setIndex] = useState(0);


// const next = () => setIndex((index + 1) % images.length);
// const prev = () => setIndex((index - 1 + images.length) % images.length);


// return (
// <div className="relative w-full h-96 overflow-hidden rounded-xl shadow">
// <img src={images[index]} className="w-full h-full object-cover" />
// <button onClick={prev} className="absolute left-4 top-1/2 bg-black/50 text-white px-3 py-2 rounded">◀</button>
// <button onClick={next} className="absolute right-4 top-1/2 bg-black/50 text-white px-3 py-2 rounded">▶</button>
// </div>
// );
// }
"use client";
import { useState } from "react";

export default function Carousel() {
  const images = ["/what_1.png","/what_2.png","/what_3.png","/what_4.png","/what_5.png","/what_6.png",
    "/what_7.png"];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg">
      {/* Image */}
      <img
        src={images[index]}
        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
      />

      {/* Bouton gauche */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 
                   text-white px-3 py-2 rounded-full backdrop-blur-md transition"
      >
        ◀
      </button>

      {/* Bouton droite */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 
                   text-white px-3 py-2 rounded-full backdrop-blur-md transition"
      >
        ▶
      </button>

      {/* Petits points en bas */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
