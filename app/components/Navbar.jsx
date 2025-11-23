
// // "use client";
// // import Link from "next/link";
// // import { useState } from "react";
// // import { FaFacebookF, FaTwitter } from "react-icons/fa";
// // export default function Navbar() {
// //   const [activeItem, setActiveItem] = useState(null);
// //   const handleClick = (itemName) => {
// //     setActiveItem(itemName);
// //     console.log("Item cliqué:", itemName);
// //   };
// //    const today = new Date();
// //   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
// //   const [currentYear, setCurrentYear] = useState(today.getFullYear());
// //   const [currentDay] = useState(today.getDate());

// //   const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
// //   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

// //   const handlePrev = () => {
// //     if (currentMonth === 0) {
// //       setCurrentMonth(11);
// //       setCurrentYear(currentYear - 1);
// //     } else {
// //       setCurrentMonth(currentMonth - 1);
// //     }
// //   };
// //   const handleNext = () => {
// //     if (currentMonth === 11) {
// //       setCurrentMonth(0);
// //       setCurrentYear(currentYear + 1);
// //     } else {
// //       setCurrentMonth(currentMonth + 1);
// //     }
// //   };
// //   return (
// //  <>
// //   <div className="w-full bg-gray-100 border-b border-gray-300 fixed top-0 left-0 z-[9999]">
// //       <div className="flex items-center justify-between px-4 py-2">

// //         {/* GRID des jours à gauche */}
// //         <div className="flex gap-1 overflow-x-auto">
// //           {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
// //             <div
// //               key={day}
// //               className={`w-6 h-6 flex items-center justify-center rounded text-sm ${
// //                 day === currentDay ? "bg-gray-400 text-white font-bold" : "bg-gray-200 text-gray-700"
// //               }`}
// //             >
// //               {day}
// //             </div>
// //           ))}
// //         </div>

// //         {/* Bloc central mois/jour/année avec chevrons */}
// //         <div className="flex items-center gap-2 text-black font-bold text-lg">
// //           <button onClick={handlePrev} className="hover:bg-gray-200 px-2 py-1 rounded">{'<'}</button>
// //           <div className="flex flex-col items-center">
// //             <div>{monthNames[currentMonth]}</div>
// //             <div>{currentDay}</div>
// //             <div className="text-sm text-gray-700">{currentYear}</div>
// //           </div>
// //           <button onClick={handleNext} className="hover:bg-gray-200 px-2 py-1 rounded">{'>'}</button>
// //         </div>

// //         {/* Réseaux sociaux à droite */}
// //         <div className="flex items-center gap-2">
// //           <FaFacebookF className="text-gray-700 hover:text-blue-600 cursor-pointer" />
// //           <FaTwitter className="text-gray-700 hover:text-blue-400 cursor-pointer" />
// //         </div>
// //       </div>
// //     </div>
// //       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between bg-gray-100">

// //         <div className="flex items-center gap-4">
// //         </div>
// //         <div className="flex items-center gap-8">
// //           <div className="hidden md:flex text-sm text-700 items-center gap-2">
// //             <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
// //               <path
// //                 stroke="gray"
// //                 strokeWidth="1.5"
// //                 d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
// //               />
// //             </svg>
// //             Lun - Vend : <span className="font-semibold ml-1 text-700">08h - 17h</span>
// //           </div>
// //           <div className="text-700">
// //              <Link href="/login" className="hover:underline">search</Link>
// //           </div>
// //           <div className="flex gap-4 text-sm font-semibold text-700">
// //             <Link href="/login" className="hover:underline">Login</Link>
// //             <Link href="/register" className="hover:underline">Register</Link>
// //           </div>
// //         </div>
// //       </div>
    
// //     <header className="w-full bg-white shadow-sm sticky top-0 z-40">
// //       <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
// //         <div className="flex items-center gap-6">
// //           <img src="logo.png" alt="logo" className="w-36 object-contain" />
// //         </div>
// //         <nav className="hidden md:flex gap-10 text-sm font-semibold text-gray-700 items-center">
// //   {[
// //     { name: "ACCUEIL", href: "/" },
// //     { name: "NOUROUDINE", href: "/diass" },
// //     { name: "VILLAS ET APPARTEMENTS", href: "/villas" },
// //     { name: "NOTRE ÉQUIPE", href: "/equipe" },
// //     { name: "CONTACTS", href: "/contact" },
// //   ].map((item) => (
// //     <Link
// //       key={item.name}
// //       href={item.href}
// //       onClick={() => handleClick(item.name)}
// //       className={`
// //         px-5 py-2 rounded transition 
// //         ${activeItem === item.name ? "border-2 border-blue-700 bg-blue-100" : "hover:border-blue-700 hover:bg-blue-50"}
// //       `}
// //     >
// //       {item.name}
// //     </Link>
// //   ))}
// // </nav>
// //         <div className="hidden md:flex items-center gap-3">
// //           <div className="bg-blue-700 p-3 rounded shadow text-white">
// //             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="">
// //               <path d="M21 16.5v3a1.5 1.5 0 0 1-1.5 1.5 17.5 17.5 0 0 1-15.5-15.5A1.5 1.5 0 0 1 3.5 4h3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
// //             </svg>
// //           </div>
// //           <div className="text-gray-700 text-sm leading-tight">
// //             <div className="text-xs">Tèl.</div>
// //             <div className="text-blue-700 font-bold">33 825 43 40</div>
// //           </div>
// //         </div>
// //         <div className="md:hidden">
// //           <button className="p-2 rounded bg-gray-100">
// //             <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h18" stroke="#333" strokeWidth="1.6" strokeLinecap="round"/></svg>
// //           </button>
// //         </div>
// //       </div>
// //     </header>
// //     </>
// //   );
// // }
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { FaFacebookF, FaTwitter } from "react-icons/fa";

// export default function Navbar() {
//   const [activeItem, setActiveItem] = useState(null);
//   const handleClick = (itemName) => setActiveItem(itemName);

//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());
//   const [currentDay] = useState(today.getDate());

//   const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//   const handlePrev = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
//       {/* ---------------------------
//           Top Fixed Bar : calendrier + réseaux
//       --------------------------- */}
//       <div className="w-full bg-gray-100 border-b border-gray-300">
//         <div className="flex items-center justify-between px-4 py-2">

//           {/* Jours du mois */}
//           <div className="flex gap-1 overflow-x-auto">
//             {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
//               <div
//                 key={day}
//                 className={`w-6 h-6 flex items-center justify-center rounded text-sm ${
//                   day === currentDay
//                     ? "bg-gray-400 text-white font-bold"
//                     : "bg-gray-200 text-gray-700"
//                 }`}
//               >
//                 {day}
//               </div>
//             ))}
//           </div>

//           {/* Bloc central mois/jour/année avec chevrons et border arrondi top-right */}
//           <div className="flex items-center gap-2 text-black font-bold text-lg
//                           border-t-4 border-b-4 border-blue-500 rounded-tr-lg px-4 py-2">
//             <button onClick={handlePrev} className="hover:bg-gray-200 px-2 py-1 rounded">{'<'}</button>
//             <div className="flex flex-col items-center">
//               <div>{monthNames[currentMonth]}</div>
//               <div>{currentDay}</div>
//               <div className="text-sm text-gray-700">{currentYear}</div>
//             </div>
//             <button onClick={handleNext} className="hover:bg-gray-200 px-2 py-1 rounded">{'>'}</button>
//           </div>

//           {/* Réseaux sociaux */}
//           <div className="flex items-center gap-2">
//             <FaFacebookF className="text-gray-700 hover:text-blue-600 cursor-pointer" />
//             <FaTwitter className="text-gray-700 hover:text-blue-400 cursor-pointer" />
//           </div>
//         </div>
//       </div>

//       {/* ---------------------------
//           Info horaires + search + login/register
//       --------------------------- */}
//       <div className="w-full bg-gray-100 border-b border-gray-300">
//         <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

//           {/* Horaires */}
//           <div className="hidden md:flex items-center gap-2 text-sm text-gray-700">
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
//               <path
//                 stroke="gray"
//                 strokeWidth="1.5"
//                 d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
//               />
//             </svg>
//             Lun - Ven : <span className="font-semibold ml-1 text-gray-700">08h - 17h</span>
//           </div>

//           {/* Search */}
//           <div className="text-gray-700">
//             <Link href="/search" className="hover:underline">Search</Link>
//           </div>

//           {/* Login / Register */}
//           <div className="flex gap-4 text-sm font-semibold text-gray-700">
//             <Link href="/login" className="hover:underline">Login</Link>
//             <Link href="/register" className="hover:underline">Register</Link>
//           </div>
//         </div>
//       </div>

//       {/* ---------------------------
//           Navbar principale
//       --------------------------- */}
//       <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-6">
//           <img src="logo.png" alt="logo" className="w-36 object-contain" />
//         </div>

//         {/* Menu desktop */}
//         <nav className="hidden md:flex gap-10 text-sm font-semibold text-gray-700 items-center">
//           {[
//             { name: "ACCUEIL", href: "/" },
//             { name: "NOUROUDINE", href: "/diass" },
//             { name: "VILLAS ET APPARTEMENTS", href: "/villas" },
//             { name: "NOTRE ÉQUIPE", href: "/equipe" },
//             { name: "CONTACTS", href: "/contact" },
//           ].map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               onClick={() => handleClick(item.name)}
//               className={`px-5 py-2 rounded transition ${
//                 activeItem === item.name
//                   ? "border-2 border-blue-700 bg-blue-100"
//                   : "hover:border-blue-700 hover:bg-blue-50"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Contact téléphone */}
//         <div className="hidden md:flex items-center gap-3">
//           <div className="bg-blue-700 p-3 rounded shadow text-white">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M21 16.5v3a1.5 1.5 0 0 1-1.5 1.5 17.5 17.5 0 0 1-15.5-15.5A1.5 1.5 0 0 1 3.5 4h3"
//                 stroke="white"
//                 strokeWidth="1.6"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//           <div className="text-gray-700 text-sm leading-tight">
//             <div className="text-xs">Tèl.</div>
//             <div className="text-blue-700 font-bold">33 825 43 40</div>
//           </div>
//         </div>

//         {/* Menu mobile */}
//         <div className="md:hidden">
//           <button className="p-2 rounded bg-gray-100">
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//               <path d="M3 12h18M3 6h18M3 18h18" stroke="#333" strokeWidth="1.6" strokeLinecap="round"/>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { FaFacebookF, FaTwitter,FaLinkedin,FaWhatsapp } from "react-icons/fa";

// export default function Navbar() {
//   const [activeItem, setActiveItem] = useState(null);
//   const handleClick = (itemName) => setActiveItem(itemName);

//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());
//   const [currentDay] = useState(today.getDate());

//   const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//   const handlePrev = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white shadow-sm">

//       {/* ---------------------------
//           Top Fixed Bar : jours + calendrier
//       --------------------------- */}
//       <div className="w-full bg-white-100 border-b border-white-300">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

//           {/* Jours du mois */}
//           <div className="flex gap-1 overflow-x-auto">
//             {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
//               <div
//                 key={day}
//                 className={`w-6 h-6 flex items-center justify-center rounded text-sm ${
//                   day === currentDay ? "bg-gray-400 text-white font-bold" : "bg-gray-200 text-gray-700"
//                 }`}
//               >
//                 {day}
//               </div>
//             ))}
//           </div>

//           {/* Bloc central mois/jour/année avec chevrons */}
//           <div className="flex items-center gap-2 text-black font-bold text-lg
//                           border-t-4 border-b-4 border-blue-500 rounded-tr-lg px-4 py-2">
//             <button onClick={handlePrev} className="hover:bg-gray-200 px-2 py-1 rounded">{'<'}</button>
//             <div className="flex flex-col items-center">
//               <div>{monthNames[currentMonth]}</div>
//               <div>{currentDay}</div>
//               <div className="text-sm text-gray-700">{currentYear}</div>
//             </div>
//             <button onClick={handleNext} className="hover:bg-gray-200 px-2 py-1 rounded">{'>'}</button>
//           </div>

//           {/* Réseaux sociaux */}
//           <div className="flex items-center gap-2">
//             <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
//             <FaTwitter className="hover:text-blue-400 cursor-pointer" />
//              <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
//               <FaWhatsapp className="hover:text-blue-400 cursor-pointer" />
//           </div>
//         </div>
//       </div>

//       {/* ---------------------------
//           Barre inférieure sous le calendrier
//           horaires + search + login/register à droite
//       --------------------------- */}
//       <div className="w-full bg-blue-100 border-b border-gray-300">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center gap-6">

//           {/* Horaires */}
//           <div className="hidden md:flex items-center gap-2 text-sm text-gray-700">
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
//               <path
//                 stroke="gray"
//                 strokeWidth="1.5"
//                 d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
//               />
//             </svg>
//             Lun - Ven : <span className="font-semibold ml-1">08h - 17h</span>
//           </div>

//           {/* Search */}
//           <Link href="/search" className="hover:underline text-sm text-gray-700">Search</Link>

//           {/* Login / Register */}
//           <div className="flex gap-2 font-semibold text-gray-700 text-sm">
//             <Link href="/login" className="hover:underline">Login</Link>
//             <Link href="/register" className="hover:underline">Register</Link>
//           </div>
//         </div>
//       </div>

//       {/* ---------------------------
//           Navbar principale
//       --------------------------- */}
//       <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-6">
//           <img src="logo.png" alt="logo" className="w-36 object-contain" />
//         </div>

//         {/* Menu desktop */}
//         <nav className="hidden md:flex gap-10 text-sm font-semibold text-gray-700 items-center">
//           {[
//             { name: "ACCUEIL", href: "/" },
//             { name: "NOUROUDINE", href: "/diass" },
//             { name: "VILLAS ET APPARTEMENTS", href: "/villas" },
//             { name: "NOTRE ÉQUIPE", href: "/equipe" },
//             { name: "CONTACTS", href: "/contact" },
//           ].map(item => (
//             <Link
//               key={item.name}
//               href={item.href}
//               onClick={() => handleClick(item.name)}
//               className={`px-5 py-2 rounded transition ${
//                 activeItem === item.name
//                   ? "border-2 border-blue-700 bg-blue-100"
//                   : "hover:border-blue-700 hover:bg-blue-50"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Contact téléphone */}
//         <div className="hidden md:flex items-center gap-3">
//           <div className="bg-blue-700 p-3 rounded shadow text-white">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M21 16.5v3a1.5 1.5 0 0 1-1.5 1.5 17.5 17.5 0 0 1-15.5-15.5A1.5 1.5 0 0 1 3.5 4h3"
//                 stroke="white"
//                 strokeWidth="1.6"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//           <div className="text-gray-700 text-sm leading-tight">
//             <div className="text-xs">Tèl.</div>
//             <div className="text-blue-700 font-bold">33 825 43 40</div>
//           </div>
//         </div>

//         {/* Menu mobile */}
//         <div className="md:hidden">
//           <button className="p-2 rounded bg-gray-100">
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//               <path d="M3 12h18M3 6h18M3 18h18" stroke="#333" strokeWidth="1.6" strokeLinecap="round"/>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// export default function Navbar() {
//   const [activeItem, setActiveItem] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const handleClick = (itemName) => setActiveItem(itemName);

//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());
//   const [currentDay] = useState(today.getDate());

//   const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//   const handlePrev = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white shadow-sm">

//       {/* Top Fixed Bar : jours + calendrier */}
//       <div className="w-full bg-white border-b border-gray-300">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

//           {/* Jours du mois (scrollable sur mobile) */}
//           <div className="flex gap-1 overflow-x-auto flex-1">
//             {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
//               <div
//                 key={day}
//                 className={`w-6 h-6 flex items-center justify-center rounded text-sm ${
//                   day === currentDay ? "bg-gray-400 text-white font-bold" : "bg-gray-200 text-gray-700"
//                 }`}
//               >
//                 {day}
//               </div>
//             ))}
//           </div>

//           {/* Bloc central mois/jour/année avec chevrons */}
//           <div className="flex items-center gap-2 text-black font-bold text-lg
//                           border-t-4 border-b-4 border-blue-500 rounded-tr-lg px-4 py-2 mx-2">
//             <button onClick={handlePrev} className="hover:bg-gray-200 px-2 py-1 rounded">{'<'}</button>
//             <div className="flex flex-col items-center">
//               <div>{monthNames[currentMonth]}</div>
//               <div>{currentDay}</div>
//               <div className="text-sm text-gray-700">{currentYear}</div>
//             </div>
//             <button onClick={handleNext} className="hover:bg-gray-200 px-2 py-1 rounded">{'>'}</button>
//           </div>

//           {/* Réseaux sociaux (masqués sur mobile) */}
//           <div className="hidden md:flex items-center gap-2">
//             <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
//             <FaTwitter className="hover:text-blue-400 cursor-pointer" />
//             <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
//             <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
//           </div>
//         </div>
//       </div>

//       {/* Barre inférieure sous le calendrier */}
//       <div className="w-full bg-blue-100 border-b border-gray-300">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center gap-4">

//           {/* Horaires */}
//           <div className="hidden md:flex items-center gap-2 text-sm text-gray-700">
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
//               <path
//                 stroke="gray"
//                 strokeWidth="1.5"
//                 d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
//               />
//             </svg>
//             Lun - Ven : <span className="font-semibold ml-1">08h - 17h</span>
//           </div>

//           {/* Search */}
//           <Link href="/search" className="hover:underline text-sm text-gray-700">Search</Link>

//           {/* Login / Register */}
//           <div className="hidden md:flex gap-2 font-semibold text-gray-700 text-sm">
//             <Link href="/login" className="hover:underline">Login</Link>
//             <Link href="/register" className="hover:underline">Register</Link>
//           </div>
//         </div>
//       </div>

//       {/* Navbar principale */}
//       <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center gap-6">
//           <img src="logo.png" alt="logo" className="w-36 object-contain" />
//         </div>

//         {/* Menu desktop */}
//         <nav className="hidden md:flex gap-10 text-sm font-semibold text-gray-700 items-center">
//           {[
//             { name: "ACCUEIL", href: "/" },
//             { name: "NOUROUDINE", href: "/diass" },
//             { name: "VILLAS ET APPARTEMENTS", href: "/villas" },
//             { name: "NOTRE ÉQUIPE", href: "/equipe" },
//             { name: "CONTACTS", href: "/contact" },
//           ].map(item => (
//             <Link
//               key={item.name}
//               href={item.href}
//               onClick={() => handleClick(item.name)}
//               className={`px-5 py-2 rounded transition ${
//                 activeItem === item.name
//                   ? "border-2 border-blue-700 bg-blue-100"
//                   : "hover:border-blue-700 hover:bg-blue-50"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Contact téléphone */}
//         <div className="hidden md:flex items-center gap-3">
//           <div className="bg-blue-700 p-3 rounded shadow text-white">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M21 16.5v3a1.5 1.5 0 0 1-1.5 1.5 17.5 17.5 0 0 1-15.5-15.5A1.5 1.5 0 0 1 3.5 4h3"
//                 stroke="white"
//                 strokeWidth="1.6"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//           <div className="text-gray-700 text-sm leading-tight">
//             <div className="text-xs">Tèl.</div>
//             <div className="text-blue-700 font-bold">33 825 43 40</div>
//           </div>
//         </div>

//         {/* Menu mobile burger */}
//         <div className="md:hidden relative">
//           <button
//             className="p-2 rounded bg-gray-100"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//               <path d="M3 12h18M3 6h18M3 18h18" stroke="#333" strokeWidth="1.6" strokeLinecap="round"/>
//             </svg>
//           </button>

//           {mobileMenuOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded border border-gray-200 flex flex-col">
//               {[
//                 { name: "ACCUEIL", href: "/" },
//                 { name: "NOUROUDINE", href: "/diass" },
//                 { name: "VILLAS ET APPARTEMENTS", href: "/villas" },
//                 { name: "NOTRE ÉQUIPE", href: "/equipe" },
//                 { name: "CONTACTS", href: "/contact" },
//               ].map(item => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => { handleClick(item.name); setMobileMenuOpen(false); }}
//                   className="px-4 py-2 hover:bg-blue-50"
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               {/* Login/Register mobile */}
//               <Link href="/login" className="px-4 py-2 hover:bg-blue-50">Login</Link>
//               <Link href="/register" className="px-4 py-2 hover:bg-blue-50">Register</Link>
//             </div>
//           )}
//         </div>

//       </div>
//     </header>
//   );
// }
"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleClick = (itemName) => setActiveItem(itemName);

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentDay] = useState(today.getDate());

  const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handlePrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">

      {/* ---------------------------
          Top Fixed Bar : jours + calendrier + réseaux sociaux
      --------------------------- */}
      <div className="w-full bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

          {/* Jours du mois (scrollable sur mobile) */}
          <div className="flex gap-1 overflow-x-auto flex-1">
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
              <div
                key={day}
                className={`w-6 h-6 flex items-center justify-center rounded text-sm ${
                  day === currentDay ? "bg-gray-400 text-white font-bold" : "bg-gray-200 text-gray-700"
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Bloc central mois/jour/année avec chevrons */}
          <div className="flex items-center gap-2 text-black font-bold text-lg
                          border-t-4 border-b-4 border-blue-500 rounded-tr-lg px-4 py-2 mx-2">
            <button onClick={handlePrev} className="hover:bg-gray-200 px-2 py-1 rounded">{'<'}</button>
            <div className="flex flex-col items-center">
              <div>{monthNames[currentMonth]}</div>
              <div>{currentDay}</div>
              <div className="text-sm text-gray-700">{currentYear}</div>
            </div>
            <button onClick={handleNext} className="hover:bg-gray-200 px-2 py-1 rounded">{'>'}</button>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
            <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* ---------------------------
          Barre inférieure sous le calendrier
          horaires + search + login/register
      --------------------------- */}
      <div className="w-full bg-blue-100 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4 overflow-x-auto">

          {/* Horaires */}
          {/* <div className="flex items-center gap-2 text-sm text-gray-700 min-w-max">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path
                stroke="gray"
                strokeWidth="1.5"
                d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
              />
            </svg>
            Lun - Ven : <span className="font-semibold ml-1">08h - 17h</span>
          </div> */}
{/* ---------------------------
    Barre inférieure sous le calendrier
    horaires + search + login/register à l'extrémité droite
--------------------------- */}
<div className="w-full bg-blue-100 border-b border-gray-300">
  <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center gap-4 overflow-x-auto">

    {/* Horaires */}
    <div className="flex items-center gap-2 text-sm text-gray-700 min-w-max">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path
          stroke="gray"
          strokeWidth="1.5"
          d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
        />
      </svg>
      Lun - Ven : <span className="font-semibold ml-1">08h - 17h</span>
    </div>

    {/* Search */}
    <Link href="/search" className="hover:underline text-sm text-gray-700 min-w-max">
      Search
    </Link>

    {/* Login / Register */}
    <div className="flex gap-2 font-semibold text-gray-700 text-sm min-w-max">
      <Link href="/login" className="hover:underline">Login</Link>
      <Link href="/register" className="hover:underline">Register</Link>
    </div>

  </div>
</div>

          {/* Search */}
          <Link href="/search" className="hover:underline text-sm text-gray-700 min-w-max">
            Search
          </Link>

          {/* Login / Register */}
          <div className="flex gap-2 font-semibold text-gray-700 text-sm min-w-max">
            <Link href="/login" className="hover:underline">Login</Link>
            <Link href="/register" className="hover:underline">Register</Link>
          </div>
        </div>
      </div>

      {/* ---------------------------
          Navbar principale
      --------------------------- */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-6">
          <img src="logo.png" alt="logo" className="w-36 object-contain" />
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-10 text-sm font-semibold text-gray-700 items-center">
          {[
            { name: "ACCUEIL", href: "/" },
            { name: "NOUROUDINE", href: "/diass" },
            { name: "VILLAS ET APPARTEMENTS", href: "/villas" },
            { name: "NOTRE ÉQUIPE", href: "/equipe" },
            { name: "CONTACTS", href: "/contact" },
          ].map(item => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleClick(item.name)}
              className={`px-5 py-2 rounded transition ${
                activeItem === item.name
                  ? "border-2 border-blue-700 bg-blue-100"
                  : "hover:border-blue-700 hover:bg-blue-50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact téléphone */}
        <div className="hidden md:flex items-center gap-3">
          <div className="bg-blue-700 p-3 rounded shadow text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 16.5v3a1.5 1.5 0 0 1-1.5 1.5 17.5 17.5 0 0 1-15.5-15.5A1.5 1.5 0 0 1 3.5 4h3"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-gray-700 text-sm leading-tight">
            <div className="text-xs">Tèl.</div>
            <div className="text-blue-700 font-bold">33 825 43 40</div>
          </div>
        </div>

        {/* Menu mobile burger */}
        <div className="md:hidden relative">
          <button
            className="p-2 rounded bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="#333" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>

          {mobileMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded border border-gray-200 flex flex-col z-50">
              {[
                { name: "ACCUEIL", href: "/" },
                { name: "NOUROUDINE", href: "/diass" },
                { name: "VILLAS ET APPARTEMENTS", href: "/villas" },
                { name: "NOTRE ÉQUIPE", href: "/equipe" },
                { name: "CONTACTS", href: "/contact" },
              ].map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => { handleClick(item.name); setMobileMenuOpen(false); }}
                  className="px-4 py-2 hover:bg-blue-50"
                >
                  {item.name}
                </Link>
              ))}

              {/* Login/Register mobile */}
              <Link href="/login" className="px-4 py-2 hover:bg-blue-50">Login</Link>
              <Link href="/register" className="px-4 py-2 hover:bg-blue-50">Register</Link>

              {/* Search mobile */}
              <Link href="/search" className="px-4 py-2 hover:bg-blue-50">Search</Link>

              {/* Horaires mobile */}
              <div className="px-4 py-2 flex items-center gap-2 text-gray-700 text-sm">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="gray"
                    strokeWidth="1.5"
                    d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"
                  />
                </svg>
                Lun - Ven : <span className="font-semibold ml-1">08h - 17h</span>
              </div>

            </div>
          )}
        </div>

      </div>
    </header>
  );
}
