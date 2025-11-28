// // "use client";
// // import { useState } from "react";
// // import Image from "next/image";

// // export default function Carousels() {
// //   const images = [
// //     "/pro1.jpeg",
// //     "/pro2.jpeg",
// //     "/pro3.jpeg",
// //      "/pro4.jpeg",
// //     "/pro5.jpeg",
// //     "/pro6.jpeg",
// //      "/pro7.jpeg",
// //     "/pro8.jpeg",
// //     "/pro9.jpeg",
// //      "/pro10.jpeg",
// //     "/pro11.jpeg",
// //     "/pro12.jpeg",
// //      "/pro13.jpeg",
// //      "/pro14.jpeg",
// //     "/pro15.jpeg",
// //     "/pro16.jpeg",
// //      "/pro17.jpeg",
// //     "/pro18.jpeg",
// //     "/pro19.jpeg",
// //     "/pro20.jpeg",
// //     "/pro21.jpeg",
// //     "/pro22.jpeg",
// //      "/pro23.jpeg",
// //      "/pro24.jpeg",
// //     "/pro25.jpeg",
// //     "/pro26.jpeg",
// //      "/pro27.jpeg",
// //     "/pro28.jpeg",
// //     "/pro29.jpeg",
// //     "/pro30.jpeg",
// //     "/pro31.jpeg",
// //     "/pro32.jpeg",
// //   ];

// //   const [index, setIndex] = useState(0);

// //   const next = () =>
// //     setIndex((prev) => (prev + 1) % images.length);

// //   const prev = () =>
// //     setIndex((prev) => (prev - 1 + images.length) % images.length);

// //   return (
// //     <div className="relative w-full h-[260px] md:h-[380px] overflow-hidden rounded-xl mb-10">
// //       <Image
// //         src={images[index]}
// //         alt="carousel"
// //         fill
// //         className="object-cover transition-all duration-500"
// //       />

// //       {/* Left Button */}
// //       <button
// //         onClick={prev}
// //         className="absolute left-3 top-1/2 -translate-y-1/2
// //         bg-black/50 text-white px-3 py-2 rounded-full"
// //       >
// //         ‹
// //       </button>

// //       {/* Right Button */}
// //       <button
// //         onClick={next}
// //         className="absolute right-3 top-1/2 -translate-y-1/2
// //         bg-black/50 text-white px-3 py-2 rounded-full"
// //       >
// //         ›
// //       </button>
// //     </div>
// //   );
// // }
// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Carousels() {
//   const images = [
//     "/pro1.jpeg","/pro2.jpeg","/pro3.jpeg","/pro4.jpeg","/pro5.jpeg","/pro6.jpeg",
//     "/pro7.jpeg","/pro8.jpeg","/pro9.jpeg","/pro10.jpeg","/pro11.jpeg","/pro12.jpeg",
//     "/pro13.jpeg","/pro14.jpeg","/pro15.jpeg","/pro16.jpeg","/pro17.jpeg","/pro18.jpeg",
//     "/pro19.jpeg","/pro20.jpeg","/pro21.jpeg","/pro22.jpeg","/pro23.jpeg","/pro24.jpeg",
//     "/pro25.jpeg","/pro26.jpeg","/pro27.jpeg","/pro28.jpeg","/pro29.jpeg","/pro30.jpeg",
//     "/pro31.jpeg","/pro32.jpeg",
//   ];

//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((prev) => (prev + 1) % images.length);
//   const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

//   // 🔁 Auto scroll toutes les 30 secondes
//   useEffect(() => {
//     const timer = setInterval(next, 30000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full h-[260px] md:h-[380px] overflow-hidden rounded-xl mb-10">

//       {/* IMAGE */}
//       <Image
//         src={images[index]}
//         alt="carousel"
//         fill
//         className="object-cover brightness-75 transition-all duration-500"
//       />

//       {/* TEXTE GENERAL SUR L’IMAGE */}
//       <div className="absolute inset-0 flex flex-col justify-end pb-6 px-6 bg-gradient-to-t from-black/50 via-transparent">
//         <h2 className="text-white text-xl md:text-3xl font-bold drop-shadow-lg">
//           DMTC Construction – Excellence & Qualité
//         </h2>
//         <p className="text-gray-200 text-sm md:text-lg max-w-2xl">
//           Découvrez nos réalisations professionnelles et nos projets modernes.
//         </p>
//       </div>

//       {/* BUTTON GAUCHE */}
//       <button
//         onClick={prev}
//         className="absolute left-3 top-1/2 -translate-y-1/2
//         bg-black/50 text-white px-3 py-2 rounded-full backdrop-blur"
//       >
//         ‹
//       </button>

//       {/* BUTTON DROITE */}
//       <button
//         onClick={next}
//         className="absolute right-3 top-1/2 -translate-y-1/2
//         bg-black/50 text-white px-3 py-2 rounded-full backdrop-blur"
//       >
//         ›
//       </button>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Carousels() {
  const images = [
    "/pro1.png","/pro2.png","/pro3.png","/pro4.png","/pro5.png","/pro6.png",
    "/pro7.png","/pro8.png","/pro9.png","/pro10.png","/pro11.png","/pro12.png",
    "/pro13.png","/pro14.png","/pro15.png","/pro16.png","/pro17.png","/pro18.png",
    "/pro19.png","/pro20.png","/pro21.png","/pro22.png","/pro23.png",
    "/pro25.png","/pro29.png","/pro30.png",
    "/pro31.png","/pro32.png",
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[260px] md:h-[380px] overflow-hidden rounded-xl mb-10">
      <Image
        src={images[index]}
        alt="carousel"
        fill
        className="object-cover brightness-75 transition-all duration-500"
      />
<div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 mb-10">
  <h2 className="text-white text-xl md:text-4xl font-extrabold drop-shadow-xl">
    DMTC Construction – Excellence & Qualité
  </h2>
  <p className="text-gray-200 text-sm md:text-lg mt-2 max-w-2xl drop-shadow-lg">
    Découvrez nos réalisations modernes et notre savoir-faire professionnel.
  </p>
</div>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2
        bg-black/50 text-white px-3 py-2 rounded-full backdrop-blur"
      >
        ‹
      </button>

      {/* BOUTON DROITE */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2
        bg-black/50 text-white px-3 py-2 rounded-full backdrop-blur"
      >
        ›
      </button>
    </div>
  );
}
