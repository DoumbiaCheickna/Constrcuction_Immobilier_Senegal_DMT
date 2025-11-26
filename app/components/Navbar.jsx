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
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp, FaSearch, FaTiktok, FaGoogle, FaInstagram } from "react-icons/fa";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("ACCUEIL");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setProfileOpen(false);
  };

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentDay] = useState(today.getDate());

  const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const pathname = usePathname();

  const handlePrev = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(c => c - 1); }
    else setCurrentMonth(m => m - 1);
  };

  const handleNext = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(c => c + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const menuItems = [
    { name: "ACCUEIL", href: "/" },
    { name: "NOUROUDINE", href: "/diass" },
    { name: "VILLAS & APPARTEMENTS", href: "/villas" },
    { name: "NOTRE ÉQUIPE", href: "/equipe" },
    { name: "CONTACTS", href: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-lg">

      {/* Top bar desktop */}
      <div className="hidden md:block bg-[#143F6B] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <p className="text-sm font-light">
            ⭐ Trouvez votre futur appartement, villa ou studio, service professionnel et rapide.
          </p>
          {/* <div className="flex items-center gap-3">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedin />
            <FaWhatsapp />
          </div> */}
          <div className="flex items-center gap-3">
  <a href="https://facebook.com/tonCompte" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
    <FaFacebookF />
  </a>
  <a href="https://twitter.com/tonCompte" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
    <FaTwitter />
  </a>
  <a href="https://linkedin.com/in/tonCompte" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
    <FaLinkedin />
  </a>
  <a href="https://wa.me/tonNumero" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
    <FaWhatsapp />
  </a>
</div>

        </div>
      </div>

      {/* Calendar section */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
          
          {/* Date */}
          <div className="flex-shrink-0 text-center px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm">
            <div className="text-lg font-bold">{today.getDate()}</div>
            <div className="text-xs text-gray-600 -mt-1">{monthNames[today.getMonth()]}</div>
            <div className="text-xs text-gray-500">{today.getFullYear()}</div>
          </div>

          {/* Days grid */}
          <div className="flex gap-2 overflow-x-auto flex-1">
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
              <div
                key={day}
                className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded text-sm transition
                  ${day === currentDay ? "bg-blue-600 text-white font-bold shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                aria-current={day === currentDay ? "date" : undefined}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Month navigation */}
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-200">{monthNames[(currentMonth - 1 + 12) % 12]}</div>
            <button
              onClick={handlePrev}
              className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded"
            >
              <div className="w-0 h-0 border-t-6 border-b-6 border-r-8 border-t-transparent border-b-transparent border-r-gray-800"></div>
            </button>
            <div className="text-center leading-tight">
              <div className="text-xs uppercase font-semibold text-gray-600">{monthNames[currentMonth]}</div>
              <div className="text-lg font-bold text-gray-900">{currentDay}</div>
              <div className="text-xs text-gray-500">{currentYear}</div>
            </div>
            <button
              onClick={handleNext}
              className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded"
            >
              <div className="w-0 h-0 border-t-6 border-b-6 border-l-8 border-t-transparent border-b-transparent border-l-gray-800"></div>
            </button>
            <div className="text-sm text-gray-400">{monthNames[(currentMonth + 1) % 12]}</div>
          </div>

          {/* Social icons */}
          {/* <div className="grid grid-cols-2 gap-2">
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:opacity-90 transition"><FaTwitter /></a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 text-white hover:opacity-90 transition"><FaInstagram /></a>
            <a href="" className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white hover:opacity-90 transition"><FaGoogle /></a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:opacity-90 transition"><FaTiktok /></a>
          </div> */}
          <div className="grid grid-cols-2 gap-2">
  <a href="https://twitter.com/tonCompte" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white hover:opacity-90 transition">
    <FaTwitter />
  </a>
  <a href="https://instagram.com/tonCompte" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-500 text-white hover:opacity-90 transition">
    <FaInstagram />
  </a>
  <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white hover:opacity-90 transition">
    <FaGoogle />
  </a>
  <a href="https://tiktok.com/@tonCompte" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-5 h-5 rounded-full bg-black text-white hover:opacity-90 transition">
    <FaTiktok />
  </a>
</div>

        </div>
      </div>

      {/* Middle info bar */}
      <div className="bg-[#E8E6E6] border-b border-gray-80">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span className="font-semibold">Horaires :</span>
            <span> Lun - Ven • 08h - 17h</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/search" className="flex items-center gap-2 text-sm px-3 py-1 rounded hover:bg-gray-200">
              <FaSearch /> <span className="hidden sm:inline">Search</span>
            </Link>
            {!user && (
              <div className="hidden md:flex items-center gap-3 text-sm">
                <Link href="/login" className="px-3 py-1 rounded hover:bg-gray-200">Login</Link>
                <Link href="/register" className="px-3 py-1 rounded hover:opacity-90">Register</Link>
              </div>
            )}
            {user && (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(p => !p)}
                  className="flex items-center gap-2 rounded-full p-1 hover:bg-gray-200"
                >
                  <img src={user.photoURL || "/User-icon.png"} alt="avatar" className="w-9 h-9 rounded-full object-cover border" />
                  <span className="hidden md:inline font-semibold">{user.displayName || "Compte"}</span>
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg border z-50">
                    <div className="px-3 py-2">
                      <p className="font-semibold text-sm">{user.displayName || "Utilisateur"}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <hr />
                    <Link href="/profile" className="block px-3 py-2 hover:bg-gray-100">Mon profil</Link>
                    <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-red-600 hover:bg-gray-100">Déconnexion</button>
                  </div>
                )}
              </div>
            )}
            {!user && <img src="/default-user.jpg" alt="default" className="w-9 h-9 rounded-full object-cover border md:hidden" />}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <img src="/logo.png" alt="logo" className="w-30" />
        <nav className="hidden md:flex gap-12 text-sm font-semibold">
          {menuItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded border-2 transition-all duration-200
                  ${isActive ? "bg-blue-100 border-blue-500" : "border-transparent hover:border-blue-500 hover:bg-blue-50"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setMobileMenuOpen(m => !m)} className="p-2 rounded bg-gray-100">
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3">
            <Link href="/search" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
              <FaSearch /> <span>Search</span>
            </Link>
            <nav className="flex flex-col gap-2 mt-3">
              {menuItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => { setActiveItem(item.name); setMobileMenuOpen(false); }}
                  className="block w-full px-3 py-2 rounded border-2 border-transparent hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 border-t pt-3">
              {!user ? (
                <>
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100">Login</Link>
                  <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 mt-2 rounded bg-blue-600 text-white text-center">Register</Link>
                </>
              ) : (
                <>
                  <Link href="/profile" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-100">Mon profil</Link>
                  <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 text-red-600">Déconnexion</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
