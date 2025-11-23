// export default function AdminLayout({ children }) {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <aside className="w-64 bg-white shadow">
//         <div className="p-4 text-xl font-bold">DMT Construction Admin</div>

//         <nav className="flex flex-col gap-2 p-4">
//           <a href="/admin" className="text-gray-700 hover:text-black">Dashboard</a>
//           <a href="/admin/properties" className="text-gray-700 hover:text-black">🏠 Biens immobiliers</a>
//           <a href="/admin/visitors" className="text-gray-700 hover:text-black">👤 Visiteurs</a>
//           <a href="/admin/messages" className="text-gray-700 hover:text-black">💬 Messages</a>
//         </nav>
//       </aside>

//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   );
// }
// "use client";

// import Link from "next/link";

// export default function AdminLayout({ children }) {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
      
//       <aside className="w-64 bg-white shadow">
//         <div className="p-4 text-xl font-bold">DMT Construction Admin</div>

//         <nav className="flex flex-col gap-2 p-4">
//           <Link href="/admin" className="text-gray-700 hover:text-black">
//             Dashboard
//           </Link>

//           <Link href="/admin/properties" className="text-gray-700 hover:text-black">
//             🏠 Biens immobiliers
//           </Link>

//           <Link href="/admin/visitors" className="text-gray-700 hover:text-black">
//             👤 Visiteurs
//           </Link>

//           <Link href="/admin/messages" className="text-gray-700 hover:text-black">
//             💬 Messages
//           </Link>
//         </nav>
//       </aside>

//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const linkClass = (path) =>
    `block px-3 py-2 rounded-md transition ${
      pathname === path ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow">
        <div className="p-4 text-xl font-bold border-b">DMT Construction Admin</div>

        <nav className="flex flex-col gap-2 p-4">
          <Link href="/admin" className={linkClass("/admin")}>Dashboard</Link>
          <Link href="/admin/properties" className={linkClass("/admin/properties")}>🏠 Biens immobiliers</Link>
          <Link href="/admin/visitors" className={linkClass("/admin/visitors")}>👤 Visiteurs</Link>
          <Link href="/admin/messages" className={linkClass("/admin/messages")}>💬 Messages</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}
