// // "use client";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // export default function AdminLayout({ children }) {
// //   const pathname = usePathname();
// //   const linkClass = (path) =>
// //     `block px-3 py-2 rounded-md transition ${
// //       pathname === path ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-100"
// //     }`;
// //   return (
// //     <div className="flex min-h-screen bg-gray-100">
// //       <aside className="w-64 bg-white shadow">
// //         <div className="p-4 text-xl font-bold border-b">DMT Construction Admin</div>

// //         <nav className="flex flex-col gap-2 p-4">
// //           <Link href="/admin" className={linkClass("/admin")}>Dashboard</Link>
// //           <Link href="/admin/properties" className={linkClass("/admin/properties")}>🏠 Biens immobiliers</Link>
// //           <Link href="/admin/visitors" className={linkClass("/admin/visitors")}>👤 Visiteurs</Link>
// //           <Link href="/admin/messages" className={linkClass("/admin/messages")}>💬 Messages</Link>
// //         </nav>
// //       </aside>

// //       <main className="flex-1 p-6 overflow-auto">
// //         {children}
// //       </main>
// //     </div>
// //   );
// // }
// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import useAuth from "../hooks/useAuth";
// import { auth } from "../firebase/config";

// export default function AdminLayout({ children }) {
//   const [activeItem, setActiveItem] = useState("Dashboard");
//   const { user, isAdmin, loading } = useAuth();
//   const router = useRouter();
//   const [authError, setAuthError] = useState("");
//   const [shouldRedirect, setShouldRedirect] = useState(false);

//   // Tous les hooks doivent être appelés inconditionnellement au début
//   useEffect(() => {
//     // Ne rien faire côté client, la protection se fait par Firebase Auth + Firestore
//   }, []);

//   // Gestion de la redirection dans un useEffect
//   useEffect(() => {
//     if (!loading && !user) {
//       router.replace("/admin/login");
//     }
//   }, [user, loading, router]);

//   // Si l'utilisateur est connecté mais n'est pas admin, rediriger vers /admin/login
//   useEffect(() => {
//     if (!loading && user && !isAdmin) {
//       try {
//         // on garde l'utilisateur connecté mais on empêche l'accès à l'admin
//         router.replace("/admin/login");
//       } catch (e) {
//         console.error("Redirect error:", e);
//       }
//     }
//   }, [user, isAdmin, loading, router]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="text-lg">Chargement...</div>
//       </div>
//     );
//   }

//   // SUPPRIME ce bloc problématique :
//   // if (!user) {
//   //   useEffect(() => {  // ❌ MAUVAIS: useEffect conditionnel
//   //     router.replace("/admin/login");
//   //   }, [router]);
//   //   return null;
//   // }

//   // Si pas d'utilisateur, retourne null (la redirection se fera via useEffect)
//   if (!user) {
//     return null;
//   }

//   if (!isAdmin) {
//     // non-admin: la redirection est gérée par useEffect ci-dessus
//     return null;
//   }
//   const menuItems = [
//     { name: "Dashboard", href: "/admin" },
//     { name: "Biens immobiliers", href: "/admin/properties" },
//     { name: "Visiteurs", href: "/admin/visitors" },
//     { name: "Messages", href: "/admin/messages" },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow flex flex-col">
//         <div className="p-4 text-xl font-bold border-b">DMT Construction Admin</div>
//         <nav className="flex flex-col p-4 gap-2">
//           {menuItems.map(item => (
//             <Link
//               key={item.name}
//               href={item.href}
//               onClick={() => setActiveItem(item.name)}
//               className={`px-3 py-2 rounded hover:bg-blue-100 ${
//                 activeItem === item.name ? "bg-blue-200 font-bold" : "text-gray-700"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//           <button
//             onClick={async () => {
//               try {
//                 await auth.signOut();
//               } catch (e) {
//                 console.error("Sign-out error:", e);
//               }
//               router.replace('/admin/login');
//             }}
//             className="mt-4 px-3 py-2 text-left text-sm bg-red-100 text-red-700 rounded"
//           >
//             Déconnexion
//           </button>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
import { auth } from "../firebase/config";

export default function AdminLayout({ children }) {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname(); // Pour connaître la page actuelle
  const isLoginPage = pathname === "/admin/login"; // Vérifie si on est sur la page de login

  // Menu items - NE PAS inclure login ici
  const menuItems = [
    { name: "Dashboard", href: "/admin" },
    { name: "Biens immobiliers", href: "/admin/properties" },
    { name: "Visiteurs", href: "/admin/visitors" },
    { name: "Messages", href: "/admin/messages" },
  ];

  // Redirection si non authentifié et pas sur la page de login
  useEffect(() => {
    if (!loading && !user && !isLoginPage) {
      router.replace("/admin/login");
    }
  }, [user, loading, router, isLoginPage]);

  // Si sur la page de login, afficher seulement le contenu sans sidebar
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-lg">Chargement...</div>
      </div>
    );
  }

  // Si pas d'utilisateur (et pas sur login), ne rien afficher (redirection en cours)
  if (!user) {
    return null;
  }

  // Si l'utilisateur n'est pas admin, afficher un message d'erreur
  if (!isAdmin) {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-64 bg-white shadow flex flex-col">
          <div className="p-4 text-xl font-bold border-b">DMT Construction Admin</div>
          <nav className="flex flex-col p-4 gap-2">
            <button
              onClick={async () => {
                try {
                  await auth.signOut();
                } catch (e) {
                  console.error("Sign-out error:", e);
                }
                router.replace('/admin/login');
              }}
              className="mt-4 px-3 py-2 text-left text-sm bg-red-100 text-red-700 rounded"
            >
              Déconnexion
            </button>
          </nav>
        </aside>
        <main className="flex-1 p-6 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Accès refusé</h1>
            <p className="text-gray-700 mb-6">
              Vous n'avez pas les permissions nécessaires pour accéder à cette section.
            </p>
            <button
              onClick={async () => {
                await auth.signOut();
                router.replace('/admin/login');
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Retour à la connexion
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow flex flex-col">
        <div className="p-4 text-xl font-bold border-b">DMT Construction Admin</div>
        <nav className="flex flex-col p-4 gap-2">
          {menuItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`px-3 py-2 rounded hover:bg-blue-100 ${
                activeItem === item.name ? "bg-blue-200 font-bold" : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={async () => {
              try {
                await auth.signOut();
                router.replace('/admin/login');
              } catch (e) {
                console.error("Sign-out error:", e);
              }
            }}
            className="mt-4 px-3 py-2 text-left text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
          >
            Déconnexion
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}