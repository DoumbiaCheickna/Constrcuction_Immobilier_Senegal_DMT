// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp, FaSearch, FaTiktok, FaGoogle, FaInstagram } from "react-icons/fa";
// import { auth } from "../firebase/config";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { usePathname } from "next/navigation";
// export default function Navbar() {
//   const [activeItem, setActiveItem] = useState("ACCUEIL");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [profileOpen, setProfileOpen] = useState(false);
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
//     return () => unsub();
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     setProfileOpen(false);
//   };
//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());
//   const [currentDay] = useState(today.getDate());

//   const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//  const pathname = usePathname();
//   const handlePrev = () => {
//     if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(c => c - 1); }
//     else setCurrentMonth(m => m - 1);
//   };

//   const handleNext = () => {
//     if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(c => c + 1); }
//     else setCurrentMonth(m => m + 1);
//   };

//   const menuItems = [
//     { name: "ACCUEIL", href: "/" },
//     { name: "NOUROUDINE", href: "/diass" },
//     { name: "VILLAS & APPARTEMENTS", href: "/villas" },
//     { name: "NOTRE ÉQUIPE", href: "/equipe" },
//     { name: "CONTACTS", href: "/contact" },
//   ];

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white shadow-lg">
//       <div className="hidden md:block bg-[#143F6B] text-white py-2">
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
//           <p className="text-sm font-light">
//             ⭐ Trouvez votre futur appartement, villa ou studio, service professionnel et rapide.
//           </p>
//           <div className="flex items-center gap-3">
//             <FaFacebookF />
//             <FaTwitter />
//             <FaLinkedin />
//             <FaWhatsapp />
//           </div>
//         </div>
//       </div>
// <div className="w-full bg-white border-b border-gray-200">
//   <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
//     <div className="flex-shrink-0 text-center px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm">
//       <div className="text-lg font-bold">{today.getDate()}</div>
//       <div className="text-xs text-gray-600 -mt-1">{monthNames[today.getMonth()]}</div>
//       <div className="text-xs text-gray-500">{today.getFullYear()}</div>
//     </div>
//     <div className="flex gap-2 overflow-x-auto flex-1">
//       {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
//         <div
//           key={day}
//           className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded text-sm transition
//             ${day === currentDay ? "bg-blue-600 text-white font-bold shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
//           aria-current={day === currentDay ? "date" : undefined}
//         >
//           {day}
//         </div>
//       ))}
//     </div>
//     <div className="flex items-center gap-4">
//       <div className="text-sm text-gray-400">{monthNames[(currentMonth - 1 + 12) % 12]}</div>
//       <button
//         onClick={handlePrev}
//         className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded"
//       >
//         <div className="w-0 h-0 border-t-6 border-b-6 border-r-8 border-t-transparent border-b-transparent border-r-gray-800"></div>
//       </button>
//       <div className="text-center leading-tight">
//         <div className="text-xs uppercase font-semibold text-gray-600">{monthNames[currentMonth]}</div>
//         <div className="text-lg font-bold text-gray-900">{currentDay}</div>
//         <div className="text-xs text-gray-500">{currentYear}</div>
//       </div>
//       <button
//         onClick={handleNext}
//         className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded"
//       >
//         <div className="w-0 h-0 border-t-6 border-b-6 border-l-8 border-t-transparent border-b-transparent border-l-gray-800"></div>
//       </button>
//       <div className="text-sm text-gray-400">{monthNames[(currentMonth + 1) % 12]}</div>
//     </div>
//     <div className="border-l border-black h-0 mx-0"></div>
//     <div className="grid grid-cols-2 gap-2">
//       <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:opacity-90 transition">
//         <FaTwitter />
//       </a>
//       <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 text-white hover:opacity-90 transition">
//         <FaInstagram />
//       </a>
//       <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white hover:opacity-90 transition">
//         <FaGoogle />
//       </a>
//       <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:opacity-90 transition">
//         <FaTiktok />
//       </a>
//     </div>

//   </div>
// </div>

//       <div className="bg-[#E8E6E6] border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
//           <div className="flex items-center gap-2 text-sm text-gray-700">
//             <span className="font-semibold">Horaires :</span>
//             <span> Lun - Ven • 08h - 17h</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <Link href="/search" className="flex items-center gap-2 text-sm px-3 py-1 rounded hover:bg-gray-200">
//               <FaSearch /> <span className="hidden sm:inline">Search</span>
//             </Link>
//             {!user && (
//               <div className="hidden md:flex items-center gap-3 text-sm">
//                 <Link href="/login" className="px-3 py-1 rounded hover:bg-gray-200">Login</Link>
//                 <Link href="/register" className="px-3 py-1 rounded  hover:opacity-90">Register</Link>
//               </div>
//             )}
//             {user && (
//               <div className="relative">
//                 <button
//                   onClick={() => setProfileOpen(p => !p)}
//                   className="flex items-center gap-2 rounded-full p-1 hover:bg-gray-200"
//                 >
//                   <img src={user.photoURL || "/User-icon.png"} alt="avatar" className="w-9 h-9 rounded-full object-cover border" />
//                   <span className="hidden md:inline font-semibold">{user.displayName || "Compte"}</span>
//                 </button>

//                 {profileOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg border z-50">
//                     <div className="px-3 py-2">
//                       <p className="font-semibold text-sm">{user.displayName || "Utilisateur"}</p>
//                       <p className="text-xs text-gray-500">{user.email}</p>
//                     </div>
//                     <hr />
//                     <Link href="/profile" className="block px-3 py-2 hover:bg-gray-100">Mon profil</Link>
//                     <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-red-600 hover:bg-gray-100">Déconnexion</button>
//                   </div>
//                 )}
//               </div>
//             )}
//             {!user && (
//               <img src="/default-user.jpg" alt="default" className="w-9 h-9 rounded-full object-cover border md:hidden" />
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//         <img src="/logo.png" alt="logo" className="w-30" />
//            <nav className="hidden md:flex gap-12 text-sm font-semibold">
//       {menuItems.map(item => {
//         const isActive = pathname === item.href;
//         return (
//           <Link
//             key={item.name}
//             href={item.href}
//             className={`px-4 py-2 rounded border-2 transition-all duration-200
//               ${isActive ? "bg-blue-100 border-blue-500" : "border-transparent hover:border-blue-500 hover:bg-blue-50"}`}
//           >
//             {item.name}
//           </Link>
//         );
//       })}
//     </nav>
//         <div className="md:hidden flex items-center gap-2">
//           <button onClick={() => setMobileMenuOpen(m => !m)} className="p-2 rounded bg-gray-100">
//             {mobileMenuOpen ? "✖" : "☰"}
//           </button>
//         </div>
//       </div>
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white border-t shadow-lg">
//           <div className="px-4 py-3">
//             <Link href="/search" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
//               <FaSearch /> <span>Search</span>
//             </Link>
// <nav className="flex flex-col gap-12 mt-3">
//   {menuItems.map(item => (
//     <Link
//       key={item.name}
//       href={item.href}
//       onClick={() => { setActiveItem(item.name); setMobileMenuOpen(false); }}
//       className={`
//         px-3 py-2 rounded border-2 border-transparent
//         hover:border-blue-500
//         hover:bg-blue-50
//         transition-all duration-200
//       `}
//     >
//       {item.name}
//     </Link>
//   ))}
// </nav>



//             <div className="mt-4 border-t pt-3">
//               {!user ? (
//                 <>
//                   <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100">Login</Link>
//                   <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 mt-2 rounded bg-blue-600 text-white text-center">Register</Link>
//                 </>
//               ) : (
//                 <>
//                   <Link href="/profile" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100">Mon profil</Link>
//                   <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 text-red-600">Déconnexion</button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//     </header>
//   );
// }
// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp, FaSearch, FaTiktok, FaGoogle, FaInstagram } from "react-icons/fa";
// import { auth } from "../firebase/config";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [activeItem, setActiveItem] = useState("ACCUEIL");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [profileOpen, setProfileOpen] = useState(false);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
//     return () => unsub();
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     setProfileOpen(false);
//   };

//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());
//   const [currentDay] = useState(today.getDate());

//   const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//   const pathname = usePathname();

//   const handlePrev = () => {
//     if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(c => c - 1); }
//     else setCurrentMonth(m => m - 1);
//   };

//   const handleNext = () => {
//     if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(c => c + 1); }
//     else setCurrentMonth(m => m + 1);
//   };

//   const menuItems = [
//     { name: "ACCUEIL", href: "/" },
//     { name: "NOUROUDINE", href: "/diass" },
//     { name: "VILLAS & APPARTEMENTS", href: "/villas" },
//     { name: "NOTRE ÉQUIPE", href: "/equipe" },
//     { name: "CONTACTS", href: "/contact" },
//   ];

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white shadow-lg">
//       <div className="hidden md:block bg-[#143F6B] text-white py-2">
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
//           <p className="text-sm font-light">
//             ⭐ Trouvez votre futur appartement, villa ou studio, service professionnel et rapide.
//           </p>
//           <div className="flex items-center gap-3">
//   <a href="https://facebook.com/tonCompte" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
//     <FaFacebookF />
//   </a>
//   <a href="https://twitter.com/tonCompte" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
//     <FaTwitter />
//   </a>
//   <a href="https://linkedin.com/in/tonCompte" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
//     <FaLinkedin />
//   </a>
//   <a href="https://wa.me/tonNumero" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
//     <FaWhatsapp />
//   </a>
// </div>

//         </div>
//       </div>
//       <div className="w-full bg-white border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
//           <div className="flex-shrink-0 text-center px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm">
//             <div className="text-lg font-bold">{today.getDate()}</div>
//             <div className="text-xs text-gray-600 -mt-1">{monthNames[today.getMonth()]}</div>
//             <div className="text-xs text-gray-500">{today.getFullYear()}</div>
//           </div>
//           <div className="flex gap-2 overflow-x-auto flex-1">
//             {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
//               <div
//                 key={day}
//                 className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded text-sm transition
//                   ${day === currentDay ? "bg-blue-600 text-white font-bold shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
//                 aria-current={day === currentDay ? "date" : undefined}
//               >
//                 {day}
//               </div>
//             ))}
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="text-sm text-gray-200">{monthNames[(currentMonth - 1 + 12) % 12]}</div>
//             <button
//               onClick={handlePrev}
//               className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded"
//             >
//               <div className="w-0 h-0 border-t-6 border-b-6 border-r-8 border-t-transparent border-b-transparent border-r-gray-800"></div>
//             </button>
//             <div className="text-center leading-tight">
//               <div className="text-xs uppercase font-semibold text-gray-600">{monthNames[currentMonth]}</div>
//               <div className="text-lg font-bold text-gray-900">{currentDay}</div>
//               <div className="text-xs text-gray-500">{currentYear}</div>
//             </div>
//             <button
//               onClick={handleNext}
//               className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded"
//             >
//               <div className="w-0 h-0 border-t-6 border-b-6 border-l-8 border-t-transparent border-b-transparent border-l-gray-800"></div>
//             </button>
//             <div className="text-sm text-gray-400">{monthNames[(currentMonth + 1) % 12]}</div>
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//   <a href="https://twitter.com/tonCompte" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white hover:opacity-90 transition">
//     <FaTwitter />
//   </a>
//   <a href="https://instagram.com/tonCompte" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-500 text-white hover:opacity-90 transition">
//     <FaInstagram />
//   </a>
//   <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white hover:opacity-90 transition">
//     <FaGoogle />
//   </a>
//   <a href="https://tiktok.com/@tonCompte" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-5 h-5 rounded-full bg-black text-white hover:opacity-90 transition">
//     <FaTiktok />
//   </a>
// </div>

//         </div>
//       </div>

//       {/* Middle info bar */}
//       <div className="bg-[#E8E6E6] border-b border-gray-80">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
//           <div className="flex items-center gap-2 text-sm text-gray-700">
//             <span className="font-semibold">Horaires :</span>
//             <span> Lun - Ven • 08h - 17h</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <Link href="/search" className="flex items-center gap-2 text-sm px-3 py-1 rounded hover:bg-gray-200">
//               <FaSearch /> <span className="hidden sm:inline">Search</span>
//             </Link>
//             {!user && (
//               <div className="hidden md:flex items-center gap-3 text-sm">
//                 <Link href="/login" className="px-3 py-1 rounded hover:bg-gray-200">Login</Link>
//                 <Link href="/register" className="px-3 py-1 rounded hover:opacity-90">Register</Link>
//               </div>
//             )}
//             {user && (
//               <div className="relative">
//                 <button
//                   onClick={() => setProfileOpen(p => !p)}
//                   className="flex items-center gap-2 rounded-full p-1 hover:bg-gray-200"
//                 >
//                   <img src={user.photoURL || "/User-icon.png"} alt="avatar" className="w-9 h-9 rounded-full object-cover border" />
//                   <span className="hidden md:inline font-semibold">{user.displayName || "Compte"}</span>
//                 </button>
//                 {profileOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg border z-50">
//                     <div className="px-3 py-2">
//                       <p className="font-semibold text-sm">{user.displayName || "Utilisateur"}</p>
//                       <p className="text-xs text-gray-500">{user.email}</p>
//                     </div>
//                     <hr />
//                     <Link href="/profile" className="block px-3 py-2 hover:bg-gray-100">Mon profil</Link>
//                     <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-red-600 hover:bg-gray-100">Déconnexion</button>
//                   </div>
//                 )}
//               </div>
//             )}
//             {!user && <img src="/default-user.jpg" alt="default" className="w-9 h-9 rounded-full object-cover border md:hidden" />}
//           </div>
//         </div>
//       </div>

//       {/* Main navbar */}
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//         <img src="/logo.png" alt="logo" className="w-30" />
//         <nav className="hidden md:flex gap-12 text-sm font-semibold">
//           {menuItems.map(item => {
//             const isActive = pathname === item.href;
//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`px-4 py-2 rounded border-2 transition-all duration-200
//                   ${isActive ? "bg-blue-100 border-blue-500" : "border-transparent hover:border-blue-500 hover:bg-blue-50"}`}
//               >
//                 {item.name}
//               </Link>
//             );
//           })}
//         </nav>
//         <div className="md:hidden flex items-center gap-2">
//           <button onClick={() => setMobileMenuOpen(m => !m)} className="p-2 rounded bg-gray-100">
//             {mobileMenuOpen ? "✖" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white border-t shadow-lg">
//           <div className="px-4 py-3">
//             <Link href="/search" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
//               <FaSearch /> <span>Search</span>
//             </Link>
//             <nav className="flex flex-col gap-2 mt-3">
//               {menuItems.map(item => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => { setActiveItem(item.name); setMobileMenuOpen(false); }}
//                   className="block w-full px-3 py-2 rounded border-2 border-transparent hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </nav>
//             <div className="mt-4 border-t pt-3">
//               {!user ? (
//                 <>
//                   <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100">Login</Link>
//                   <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 mt-2 rounded bg-blue-600 text-white text-center">Register</Link>
//                 </>
//               ) : (
//                 <>
//                   <Link href="/profile" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100">Mon profil</Link>
//                   <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 text-red-600">Déconnexion</button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//     </header>
//   );
// }
// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp, FaSearch, FaTiktok, FaGoogle, FaInstagram, FaUser, FaSignOutAlt, FaCaretDown } from "react-icons/fa";
// import { auth } from "../firebase/config";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
//     return () => unsub();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     setProfileOpen(false);
//   };

//   const menuItems = [
//     { name: "ACCUEIL", href: "/" },
//      {
//     name: "NOS ACTIVITÉS",
//     children: [
//       { name: "NOUROUDINE", href: "/diass" },
//       { name: "VILLAS & APPARTEMENTS", href: "/villas" },
//       { name: "TERRAINS", href: "/terrains" },
//       { name: "CONSTRUCTIONS", href: "/construction" },
//     ],
//   },
//     { name: "VILLAS & APPARTEMENTS", href: "/villas" },
//     { name: "NOTRE ÉQUIPE", href: "/equipe" },
//     { name: "CONTACTS", href: "/contact" },
//   ];

//   const socialLinks = [
//     { icon: FaFacebookF, href: "https://facebook.com", color: "bg-blue-600 hover:bg-blue-700" },
//     { icon: FaTwitter, href: "https://twitter.com", color: "bg-sky-500 hover:bg-sky-600" },
//     { icon: FaLinkedin, href: "https://linkedin.com", color: "bg-blue-700 hover:bg-blue-800" },
//     { icon: FaWhatsapp, href: "https://wa.me", color: "bg-green-500 hover:bg-green-600" },
//   ];

//   const pathname = usePathname();

//   return (
//     <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${
//       scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-white border-b border-gray-100"
//     }`}>
//        {/* <div className="hidden md:block bg-[#143F6B] text-white py-2">
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
//            <p className="text-sm font-light">
//             ⭐ Trouvez votre futur appartement, villa ou studio, service professionnel et rapide.
//          </p>
//          </div></div> */}
//          <div className="hidden md:block bg-[#143F6B] text-white py-2 overflow-hidden">
//   <div className="max-w-7xl mx-auto px-4">
//     <div className="whitespace-nowrap animate-marquee text-sm font-light">
//       ⭐ Trouvez votre futur appartement, villa ou studio, service professionnel et rapide.
//     </div>
//   </div>
// </div>

//       {/* Top Compact Bar */}
//       <div className="border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img 
//               src="/logo.png" 
//               alt="DMT Construction" 
//               className="h-10 w-auto hover:scale-105 transition-transform duration-300 cursor-pointer" 
//             />
//           </div>

//           {/* Desktop Navigation - Compact */}
//           <nav className="hidden lg:flex items-center gap-1">
//             {menuItems.map((item, index) => {
//               const isActive = pathname === item.href;
//               return (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={`relative px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 group overflow-hidden min-w-[100px] text-center
//                     ${isActive 
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25" 
//                       : "text-gray-700 hover:text-blue-700 bg-transparent hover:bg-blue-50 border border-transparent"}`}
//                 >
//                   {/* Hover Effect */}
//                   <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
//                     isActive ? "scale-x-100" : ""
//                   }`}></div>
                  
//                   <span className="relative z-10 flex items-center justify-center gap-1">
//                     {item.name}
//                     {isActive && (
//                       <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
//                     )}
//                   </span>

//                   {/* Bottom Border Animation */}
//                   {!isActive && (
//                     <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 transform -translate-x-1/2 rounded-full"></div>
//                   )}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Right Section - Compact */}
//           <div className="flex items-center gap-3">
//             {/* Social Links - Compact */}
//             <div className="hidden md:flex items-center gap-2">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`w-7 h-7 rounded-lg ${social.color} text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-md`}
//                 >
//                   <social.icon className="text-xs" />
//                 </a>
//               ))}
//             </div>

//             {/* Search */}
//             <Link 
//               href="/search" 
//               className="p-2 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300 group"
//             >
//               <FaSearch className="text-sm" />
//             </Link>

//             {/* Auth Section */}
//             {!user ? (
//               <div className="hidden md:flex items-center gap-2">
//                 <Link 
//                   href="/login" 
//                   className="px-3 py-1.5 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium"
//                 >
//                   Connexion
//                 </Link>
//                 <Link 
//                   href="/register" 
//                   className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
//                 >
//                   S'inscrire
//                 </Link>
//               </div>
//             ) : (
//               <div className="relative">
//                 <button
//                   onClick={() => setProfileOpen(p => !p)}
//                   className="flex items-center gap-2 bg-white rounded-xl px-3 py-1.5 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all duration-300 group"
//                 >
//                   <img 
//                     src={user.photoURL || "/User-icon.png"} 
//                     alt="avatar" 
//                     className="w-7 h-7 rounded-full object-cover border border-gray-300 group-hover:border-blue-500 transition-colors" 
//                   />
//                   <span className="hidden md:inline text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
//                     {user.displayName?.split(' ')[0] || "Compte"}
//                   </span>
//                   <FaCaretDown className={`text-gray-500 text-xs transition-transform duration-300 ${profileOpen ? "rotate-180" : ""}`} />
//                 </button>
                
//                 {profileOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden animate-in fade-in slide-in-from-top-5 duration-300">
//                     <div className="p-3 border-b border-gray-100">
//                       <p className="font-semibold text-gray-800 text-sm">{user.displayName || "Utilisateur"}</p>
//                       <p className="text-xs text-gray-500 truncate">{user.email}</p>
//                     </div>
//                     <Link 
//                       href="/profile" 
//                       onClick={() => setProfileOpen(false)}
//                       className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-blue-50 transition-colors duration-200 group"
//                     >
//                       <FaUser className="text-gray-500 group-hover:text-blue-600 transition-colors text-sm" />
//                       <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Mon profil</span>
//                     </Link>
//                     <button 
//                       onClick={handleLogout} 
//                       className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200 group"
//                     >
//                       <FaSignOutAlt className="group-hover:scale-110 transition-transform text-sm" />
//                       <span>Déconnexion</span>
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Mobile Menu Button */}
//             <button 
//               onClick={() => setMobileMenuOpen(m => !m)} 
//               className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
//             >
//               {mobileMenuOpen ? "✕" : "☰"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-in slide-in-from-top duration-300">
//           <div className="px-4 py-4">
//             {/* Mobile Search */}
//             <Link 
//               href="/search" 
//               onClick={() => setMobileMenuOpen(false)}
//               className="flex items-center gap-3 px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 mb-3"
//             >
//               <FaSearch className="text-gray-500 text-sm" />
//               <span className="text-gray-700 text-sm">Rechercher</span>
//             </Link>

//             {/* Mobile Navigation */}
//             <nav className="flex flex-col gap-1">
//               {menuItems.map(item => {
//                 const isActive = pathname === item.href;
//                 return (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     onClick={() => setMobileMenuOpen(false)}
//                     className={`px-3 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:translate-x-2
//                       ${isActive 
//                         ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md" 
//                         : "text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-transparent hover:border-blue-200"}`}
//                   >
//                     {item.name}
//                   </Link>
//                 );
//               })}
//             </nav>

//             {/* Mobile Social Links */}
//             <div className="flex justify-center gap-3 mt-4 pt-4 border-t border-gray-200">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`w-8 h-8 rounded-lg ${social.color} text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-md`}
//                 >
//                   <social.icon className="text-xs" />
//                 </a>
//               ))}
//             </div>

//             {/* Mobile Auth */}
//             <div className="mt-4 pt-4 border-t border-gray-200">
//               {!user ? (
//                 <div className="flex flex-col gap-2">
//                   <Link 
//                     href="/login" 
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="px-3 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-center text-sm font-semibold hover:bg-gray-200 transition-colors"
//                   >
//                     Connexion
//                   </Link>
//                   <Link 
//                     href="/register" 
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="px-3 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center text-sm font-semibold shadow-md hover:shadow-lg transition-all"
//                   >
//                     S'inscrire
//                   </Link>
//                 </div>
//               ) : (
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-xl">
//                     <img src={user.photoURL || "/User-icon.png"} alt="avatar" className="w-8 h-8 rounded-full border-2 border-blue-500" />
//                     <div>
//                       <p className="font-semibold text-gray-800 text-sm">{user.displayName || "Utilisateur"}</p>
//                       <p className="text-xs text-gray-500">{user.email}</p>
//                     </div>
//                   </div>
//                   <Link 
//                     href="/profile" 
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="block px-3 py-2.5 rounded-xl text-gray-700 text-sm hover:bg-blue-50 transition-colors"
//                   >
//                     Mon profil
//                   </Link>
//                   <button 
//                     onClick={() => { handleLogout(); setMobileMenuOpen(false); }} 
//                     className="w-full text-left px-3 py-2.5 rounded-xl text-red-600 text-sm hover:bg-red-50 transition-colors font-semibold"
//                   >
//                     Déconnexion
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import {
//   FaFacebookF, FaTwitter, FaLinkedin,
//   FaWhatsapp, FaSearch, FaTiktok,
//   FaGoogle, FaInstagram
// } from "react-icons/fa";

// import { auth } from "../firebase/config";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { usePathname } from "next/navigation";

// /* ---------------------------------------------------------
//    NAVBAR PRINCIPALE
// ---------------------------------------------------------- */
// export default function Navbar() {
//   const pathname = usePathname();

//   const [activeItem, setActiveItem] = useState("ACCUEIL");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);

//   const [user, setUser] = useState(null);

//   /* --- Auth Firebase --- */
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
//     return () => unsub();
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     setProfileOpen(false);
//   };

//   /* --- Calendrier --- */
//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());
//   const [currentDay] = useState(today.getDate());

//   const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//   const handlePrev = () => {
//     if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
//     else setCurrentMonth(m => m - 1);
//   };

//   const handleNext = () => {
//     if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
//     else setCurrentMonth(m => m + 1);
//   };

//   /* --- Items menu --- */
//   const menuItems = [
//     { name: "ACCUEIL", href: "/" },
//     { name: "NOUROUDINE", href: "/diass" },
//     { name: "VILLAS & APPARTEMENTS", href: "/villas" },
//     { name: "NOTRE ÉQUIPE", href: "/equipe" },
//     { name: "CONTACTS", href: "/contact" },
//   ];

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white shadow-lg">

//       {/* ─────────────────────────────── */}
//       {/* Bandeau bleu top bar             */}
//       {/* ─────────────────────────────── */}
//       <div className="hidden md:block bg-[#143F6B] text-white py-2">
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
//           <p className="text-sm font-light">
//             ⭐ Trouvez votre futur appartement, villa ou studio, service professionnel et rapide.
//           </p>

//           <div className="flex items-center gap-3">
//             <FaFacebookF /><FaTwitter /><FaLinkedin /><FaWhatsapp />
//           </div>
//         </div>
//       </div>

//       {/* ─────────────────────────────── */}
//       {/* CALENDRIER MODERNE              */}
//       {/* ─────────────────────────────── */}
//       <div className="w-full bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">

//           {/* Aujourd'hui */}
//           <div className="flex-shrink-0 text-center px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm">
//             <div className="text-lg font-bold">{today.getDate()}</div>
//             <div className="text-xs text-gray-600 -mt-1">{monthNames[today.getMonth()]}</div>
//             <div className="text-xs text-gray-500">{today.getFullYear()}</div>
//           </div>

//           {/* GRID JOURS */}
//           <div className="flex gap-2 overflow-x-auto flex-1">
//             {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
//               <div
//                 key={day}
//                 className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded text-sm transition
//                 ${day === currentDay ? "bg-blue-600 text-white font-bold shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
//               >
//                 {day}
//               </div>
//             ))}
//           </div>

//           {/* Navigation Mois */}
//           <div className="flex items-center gap-4">

//             <div className="text-sm text-gray-400">
//               {monthNames[(currentMonth - 1 + 12) % 12]}
//             </div>

//             <button onClick={handlePrev} className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded">
//               <div className="w-0 h-0 border-t-6 border-b-6 border-r-8 border-transparent border-r-gray-800"></div>
//             </button>

//             <div className="text-center leading-tight">
//               <div className="text-xs uppercase font-semibold text-gray-600">{monthNames[currentMonth]}</div>
//               <div className="text-lg font-bold text-gray-900">{currentDay}</div>
//               <div className="text-xs text-gray-500">{currentYear}</div>
//             </div>

//             <button onClick={handleNext} className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded">
//               <div className="w-0 h-0 border-t-6 border-b-6 border-l-8 border-transparent border-l-gray-800"></div>
//             </button>

//             <div className="text-sm text-gray-400">
//               {monthNames[(currentMonth + 1) % 12]}
//             </div>
//           </div>

//           {/* Réseaux sociaux ronds */}
//           <div className="grid grid-cols-2 gap-2">
//             <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white"><FaTwitter /></div>
//             <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white"><FaInstagram /></div>
//             <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white"><FaGoogle /></div>
//             <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white"><FaTiktok /></div>
//           </div>

//         </div>
//       </div>

//       {/* ─────────────────────────────── */}
//       {/* SECTION HORAIRES / SEARCH / LOGIN */}
//       {/* ─────────────────────────────── */}
//       <div className="bg-[#E8E6E6] border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">

//           <div className="flex items-center gap-2 text-sm text-gray-700">
//             <span className="font-semibold">Horaires :</span>
//             <span>Lun - Ven • 08h - 17h</span>
//           </div>

//           <div className="flex items-center gap-4">

//             {/* Search */}
//             <Link href="/search" className="flex items-center gap-2 text-sm px-3 py-1 rounded hover:bg-gray-200">
//               <FaSearch /> <span className="hidden sm:inline">Search</span>
//             </Link>

//             {/* Login / Register */}
//             {!user && (
//               <div className="hidden md:flex items-center gap-3 text-sm">
//                 <Link href="/login" className="px-3 py-1 rounded hover:bg-gray-200">Login</Link>
//                 <Link href="/register" className="px-3 py-1 rounded bg-blue-600 text-white hover:opacity-90">Register</Link>
//               </div>
//             )}

//             {/* Profil connecté */}
//             {user && (
//               <div className="relative">
//                 <button
//                   onClick={() => setProfileOpen(p => !p)}
//                   className="flex items-center gap-2 rounded-full p-1 hover:bg-gray-200"
//                 >
//                   <img
//                     src={user.photoURL || "/User-icon.png"}
//                     className="w-9 h-9 rounded-full object-cover border"
//                   />
//                   <span className="hidden md:inline font-semibold">{user.displayName || "Compte"}</span>
//                 </button>

//                 {profileOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg border z-50">
//                     <div className="px-3 py-2">
//                       <p className="font-semibold text-sm">{user.displayName || "Utilisateur"}</p>
//                       <p className="text-xs text-gray-500">{user.email}</p>
//                     </div>
//                     <hr />
//                     <Link href="/profile" className="block px-3 py-2 hover:bg-gray-100">Mon profil</Link>
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-3 py-2 text-red-600 hover:bg-gray-100"
//                     >
//                       Déconnexion
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Avatar mobile */}
//             {!user && (
//               <img src="/default-user.jpg" className="w-9 h-9 rounded-full object-cover border md:hidden" />
//             )}

//           </div>
//         </div>
//       </div>

//       {/* ─────────────────────────────── */}
//       {/* MENU PRINCIPAL DESKTOP          */}
//       {/* ─────────────────────────────── */}
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//         <img src="/logo.png" className="w-36" />

//         <nav className="hidden md:flex gap-12 text-sm font-semibold">
//           {menuItems.map(item => {
//             const isActive = pathname === item.href;
//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`px-4 py-2 rounded border-2 transition-all duration-200
//                   ${isActive
//                     ? "bg-blue-100 border-blue-500"
//                     : "border-transparent hover:border-blue-500 hover:bg-blue-50"
//                   }`}
//               >
//                 {item.name}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Mobile toggle */}
//         <button
//           onClick={() => setMobileMenuOpen(v => !v)}
//           className="md:hidden p-2 rounded bg-gray-100"
//         >
//           {mobileMenuOpen ? "✖" : "☰"}
//         </button>
//       </div>

//       {/* ─────────────────────────────── */}
//       {/* MENU MOBILE                     */}
//       {/* ─────────────────────────────── */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white border-t shadow-lg">
//           <div className="px-4 py-3">

//             {/* Search */}
//             <Link
//               href="/search"
//               onClick={() => setMobileMenuOpen(false)}
//               className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
//             >
//               <FaSearch /> <span>Search</span>
//             </Link>

//             {/* Liens du menu */}
//             <nav className="flex flex-col gap-3 mt-3">
//               {menuItems.map(item => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="px-3 py-2 rounded border-2 border-transparent hover:border-blue-500 hover:bg-blue-50 transition"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </nav>

//             <div className="mt-4 border-t pt-3">
//               {!user ? (
//                 <>
//                   <Link href="/login" className="block px-3 py-2 rounded hover:bg-gray-100">Login</Link>
//                   <Link
//                     href="/register"
//                     className="block px-3 py-2 mt-2 rounded bg-blue-600 text-white text-center"
//                   >
//                     Register
//                   </Link>
//                 </>
//               ) : (
//                 <>
//                   <Link href="/profile" className="block px-3 py-2 rounded hover:bg-gray-100">
//                     Mon profil
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left px-3 py-2 text-red-600"
//                   >
//                     Déconnexion
//                   </button>
//                 </>
//               )}
//             </div>

//           </div>
//         </div>
//       )}

//     </header>
//   );
// }

"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp, FaSearch, 
  FaUser, FaSignOutAlt, FaCaretDown 
} from "react-icons/fa";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return () => unsub();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut(auth);
    setProfileOpen(false);
  };

  // MENU + DROPDOWN
  const menuItems = [
    { name: "ACCUEIL", href: "/" },

    {
      name: "NOS ACTIVITÉS",
      dropdown: true,
      children: [
        { name: "NOUROUDINE", href: "/diass" },
        { name: "VILLAS & APPARTEMENTS", href: "/villas" },
        { name: "TERRAINS", href: "/terrassement" },
        { name: "CONSTRUCTIONS", href: "/construction" },
      ],
    },

    { name: "NOTRE ÉQUIPE", href: "/equipe" },
    { name: "CONTACTS", href: "/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: FaTwitter, href: "https://twitter.com", color: "bg-sky-500 hover:bg-sky-600" },
    { icon: FaLinkedin, href: "https://linkedin.com", color: "bg-blue-700 hover:bg-blue-800" },
    { icon: FaWhatsapp, href: "https://wa.me", color: "bg-green-500 hover:bg-green-600" },
  ];

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
               : "bg-white border-b border-gray-100"
    }`}>

      {/* Bandeau défilant */}
      <div className="hidden md:block bg-[#143F6B] text-white py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="whitespace-nowrap animate-marquee text-sm font-light">
            ⭐ Trouvez votre futur appartement, villa ou studio, service professionnel et rapide.
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <img 
            src="/logo.png" 
            alt="DMT Construction" 
            className="h-10 w-auto hover:scale-105 transition-transform cursor-pointer"
          />
          <nav className="hidden lg:flex items-center gap-1">

            {menuItems.map((item) => {

              // DROPDOWN
              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className="px-4 py-2 rounded-xl font-semibold text-sm text-gray-700 
                                 hover:text-blue-700 hover:bg-blue-50 transition-all flex items-center gap-1"
                    >
                      {item.name}
                      <FaCaretDown className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* LISTE DÉROULANTE */}
                    {dropdownOpen && (
                      <div className="absolute left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-200 animate-fade-down z-50">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // ITEMS SIMPLES
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl font-semibold text-sm transition-all 
                  ${isActive ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                             : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* DROITE */}
          <div className="flex items-center gap-3">

            {/* Social Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} target="_blank" className={`w-7 h-7 ${s.color} rounded-lg flex items-center justify-center text-white`}>
                  <s.icon className="text-xs" />
                </a>
              ))}
            </div>

            {/* Search */}
            <Link href="/search" className="p-2 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600">
              <FaSearch className="text-sm" />
            </Link>

            {/* Auth */}
            {!user ? (
              <div className="hidden md:flex items-center gap-2">
                <Link href="/login" className="px-3 py-1.5 rounded-lg text-gray-700 hover:bg-blue-50">Connexion</Link>
                <Link href="/register" className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow">S'inscrire</Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen((p) => !p)}
                  className="flex items-center gap-2 bg-white rounded-xl px-3 py-1.5 shadow border hover:border-blue-300"
                >
                  <img src={user.photoURL || "/User-icon.png"} className="w-7 h-7 rounded-full object-cover" />
                  <span className="hidden md:inline text-sm font-semibold">{user.displayName || "Compte"}</span>
                  <FaCaretDown className={`text-xs transition-transform ${profileOpen ? "rotate-180" : ""}`} />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl border rounded-xl z-50 p-2">
                    <Link href="/profile" className="block px-3 py-2 text-sm hover:bg-blue-50">Mon profil</Link>
                    <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50">Déconnexion</button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile */}            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t p-4">
          <nav className="flex flex-col gap-2">

            {menuItems.map((item) => (
              <div key={item.name}>

                {/* DROPDOWN MOBILE */}
                {item.dropdown ? (
                  <>
                    <p className="font-bold text-gray-800 mt-2">{item.name}</p>
                    {item.children.map((sub) => (
                      <Link key={sub.name} href={sub.href} className="block pl-4 py-2 text-gray-700 hover:bg-blue-50">
                        {sub.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-3 text-gray-700 rounded-lg hover:bg-blue-50"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
