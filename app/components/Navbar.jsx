// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// export default function Navbar() {
//   const [activeItem, setActiveItem] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());
//   const [currentDay] = useState(today.getDate());

//   const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//   const handlePrev = () => {
//     setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
//     if (currentMonth === 0) setCurrentYear(currentYear - 1);
//   };
//   const handleNext = () => {
//     setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
//     if (currentMonth === 11) setCurrentYear(currentYear + 1);
//   };

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white shadow">
      
//       {/* ▬▬▬▬ BARRE TOP MARKETING ▬▬▬▬ */}
//       <div className="bg-[#143F6B] text-white py-2">
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          
//           {/* Texte marketing */}
//           <p className="text-xs md:text-sm font-light tracking-wide">
//             ⭐ Trouvez votre futur <span className="font-bold">appartement, villa ou studio</span> en toute confiance avec nous.
//           </p>

//           {/* Réseaux sociaux */}
//           <div className="hidden md:flex items-center gap-3 text-white">
//             <FaFacebookF className="cursor-pointer hover:text-blue-300" />
//             <FaTwitter className="cursor-pointer hover:text-blue-300" />
//             <FaLinkedin className="cursor-pointer hover:text-blue-300" />
//             <FaWhatsapp className="cursor-pointer hover:text-green-400" />
//           </div>
//         </div>
//       </div>

//       {/* ▬▬▬▬ CALENDRIER ▬▬▬▬ */}
//       <div className="w-full bg-white border-b border-gray-300">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

//           {/* GRID DES JOURS */}
//           <div className="flex gap-1 overflow-x-auto flex-1">
//             {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
//               <div
//                 key={day}
//                 className={`w-7 h-7 flex items-center justify-center rounded text-sm ${
//                   day === currentDay 
//                     ? "bg-blue-600 text-white font-bold" 
//                     : "bg-gray-200 text-gray-700"
//                 }`}
//               >
//                 {day}
//               </div>
//             ))}
//           </div>

//           {/* Mois / année */}
//           <div className="flex items-center gap-2 text-black font-bold text-lg border-2 border-blue-600 rounded-xl px-4 py-2 mx-2">
//             <button onClick={handlePrev} className="hover:bg-gray-200 px-2 py-1 rounded">{'<'}</button>
//             <div className="flex flex-col items-center leading-tight">
//               <div>{monthNames[currentMonth]}</div>
//               <div className="text-sm font-light">{currentYear}</div>
//             </div>
//             <button onClick={handleNext} className="hover:bg-gray-200 px-2 py-1 rounded">{'>'}</button>
//           </div>

//         </div>
//       </div>
//       <div className="bg-[#E8E6E6] border-b border-gray-300">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

//           <div className="flex items-center gap-2 text-sm text-gray-700">
//             <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
//               <path stroke="gray" strokeWidth="1.5"
//                 d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
//             </svg>
//             <span className="font-semibold">Lun - Ven :</span> 08h - 17h
//           </div>

//           <div className="flex items-center gap-4 text-sm">
//             <Link href="/search" className="hover:underline">Search</Link>
//             <Link href="/login" className="hover:underline">Login</Link>
//             <Link href="/register" className="hover:underline">Register</Link>
//           </div>

//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
//         <img src="/logo.png" alt="logo" className="w-40" />
//         <nav className="hidden md:flex gap-10 text-sm font-semibold text-gray-700">
//           {[
//             { name: "ACCUEIL", href: "/" },
//             { name: "NOUROUDINE", href: "/diass" },
//             { name: "VILLAS & APPARTEMENTS", href: "/villas" },
//             { name: "NOTRE ÉQUIPE", href: "/equipe" },
//             { name: "CONTACTS", href: "/contact" }
//           ].map(item => (
//             <Link
//               key={item.name}
//               href={item.href}
//               onClick={() => setActiveItem(item.name)}
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
//         <div className="hidden md:flex items-center gap-3">
//           <div className="bg-blue-700 p-3 rounded shadow text-white">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M21 16.5v3a1.5 1.5 0 0 1-1.5 1.5 17.5 17.5 0 0 1-15.5-15.5A1.5 1.5 0 0 1 3.5 4h3"
//                 stroke="white" strokeWidth="1.6" strokeLinecap="round"
//               />
//             </svg>
//           </div>
//           <div className="text-gray-700 text-sm leading-tight">
//             <div className="text-xs">Tèl.</div>
//             <div className="text-blue-700 font-bold">33 825 43 40</div>
//           </div>
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

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentDay] = useState(today.getDate());

  const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handlePrev = () => {
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    if (currentMonth === 0) setCurrentYear(currentYear - 1);
  };
  const handleNext = () => {
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    if (currentMonth === 11) setCurrentYear(currentYear + 1);
  };

  const menuItems = [
    { name: "ACCUEIL", href: "/" },
    { name: "NOUROUDINE", href: "/diass" },
    { name: "VILLAS & APPARTEMENTS", href: "/villas" },
    { name: "NOTRE ÉQUIPE", href: "/equipe" },
    { name: "CONTACTS", href: "/contact" }
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow">

      {/* ▬▬▬▬ BARRE TOP MARKETING ▬▬▬▬ */}
      <div className="bg-[#143F6B] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <p className="text-xs md:text-sm font-light tracking-wide">
            ⭐ Trouvez votre futur <span className="font-bold">appartement, villa ou studio</span> en toute confiance avec nous.
          </p>
          <div className="hidden md:flex items-center gap-3 text-white">
            <FaFacebookF className="cursor-pointer hover:text-blue-300" />
            <FaTwitter className="cursor-pointer hover:text-blue-300" />
            <FaLinkedin className="cursor-pointer hover:text-blue-300" />
            <FaWhatsapp className="cursor-pointer hover:text-green-400" />
          </div>
        </div>
      </div>

      {/* ▬▬▬▬ CALENDRIER ▬▬▬▬ */}
      <div className="w-full bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

          {/* GRID DES JOURS */}
          <div className="flex gap-1 overflow-x-auto flex-1">
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
              <div
                key={day}
                className={`w-7 h-7 flex items-center justify-center rounded text-sm ${
                  day === currentDay 
                    ? "bg-blue-600 text-white font-bold" 
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Mois / année */}
          <div className="flex items-center gap-2 text-black font-bold text-lg border-2 border-blue-600 rounded-xl px-4 py-2 mx-2">
            <button onClick={handlePrev} className="hover:bg-gray-200 px-2 py-1 rounded">{'<'}</button>
            <div className="flex flex-col items-center leading-tight">
              <div>{monthNames[currentMonth]}</div>
              <div className="text-sm font-light">{currentYear}</div>
            </div>
            <button onClick={handleNext} className="hover:bg-gray-200 px-2 py-1 rounded">{'>'}</button>
          </div>

        </div>
      </div>

      {/* ▬▬▬▬ INFO & LIENS ▬▬▬▬ */}
      <div className="bg-[#E8E6E6] border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path stroke="gray" strokeWidth="1.5"
                d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
            </svg>
            <span className="font-semibold">Lun - Ven :</span> 08h - 17h
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/search" className="hover:underline">Search</Link>
            <Link href="/login" className="hover:underline">Login</Link>
            <Link href="/register" className="hover:underline">Register</Link>
          </div>
        </div>
      </div>

      {/* ▬▬▬▬ LOGO + NAVIGATION PRINCIPALE ▬▬▬▬ */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <img src="/logo.png" alt="logo" className="w-40" />

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-10 text-sm font-semibold text-gray-700">
          {menuItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
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

        {/* Menu mobile (hamburger) */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded bg-gray-200"
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Contact téléphonique */}
        <div className="hidden md:flex items-center gap-3">
          <div className="bg-blue-700 p-3 rounded shadow text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 16.5v3a1.5 1.5 0 0 1-1.5 1.5 17.5 17.5 0 0 1-15.5-15.5A1.5 1.5 0 0 1 3.5 4h3"
                stroke="white" strokeWidth="1.6" strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="text-gray-700 text-sm leading-tight">
            <div className="text-xs">Tèl.</div>
            <div className="text-blue-700 font-bold">33 825 43 40</div>
          </div>
        </div>

      </div>

      {/* ▬▬▬▬ MENU MOBILE OUVERT ▬▬▬▬ */}
      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col gap-2 px-4 py-4 bg-white shadow-lg border-t border-gray-300">
          {menuItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => { setActiveItem(item.name); setMobileMenuOpen(false); }}
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
      )}

    </header>
  );
}
