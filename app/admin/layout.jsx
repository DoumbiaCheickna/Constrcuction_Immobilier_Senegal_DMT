// // "use client";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // export default function AdminLayout({ children }) {
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export default function AdminLayout({ children }) {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  const menuItems = [
    { name: "Dashboard", href: "/admin" },
    { name: "Biens immobiliers", href: "/admin/properties" },
    { name: "Visiteurs", href: "/admin/visitors" },
    { name: "Messages", href: "/admin/messages" },
  ];

  useEffect(() => {
    if (!loading && !user && !isLoginPage) router.replace("/admin/login");
  }, [user, loading, router, isLoginPage]);

  if (isLoginPage) return <>{children}</>;
  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-lg">Chargement...</div>
    </div>
  );
  if (!user) return null;

  const signOutAndClear = async () => {
    try {
      try { await fetch('/api/session', { method: 'DELETE' }); } catch (e) { console.warn('clear session failed', e); }
      await signOut(auth);
    } catch (e) {
      console.error('Sign-out error:', e);
    } finally {
      try { window.location.href = '/'; } catch (e) { router.replace('/admin/login'); }
    }
  };

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-64 bg-white shadow flex flex-col">
          <div className="p-4 text-xl font-bold border-b">DMT Construction Admin</div>
          <nav className="flex flex-col p-4 gap-2">
            <button onClick={signOutAndClear} className="mt-4 px-3 py-2 text-left text-sm bg-red-100 text-red-700 rounded">Déconnexion</button>
          </nav>
        </aside>
        <main className="flex-1 p-6 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Accès refusé</h1>
            <p className="text-gray-700 mb-6">Vous n'avez pas les permissions nécessaires pour accéder à cette section.</p>
            <button onClick={signOutAndClear} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Retour à la connexion</button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile header */}
      <div className="lg:hidden bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded bg-blue-600 text-white"
          >
            ☰
          </button>
          <div className="font-bold">DMT Construction Admin</div>
          <button onClick={signOutAndClear} className="px-3 py-1 rounded bg-red-100 text-red-700">Déconnexion</button>
        </div>
      </div>

      <div className="flex">
        {/* Desktop aside */}
        <aside className="hidden lg:flex w-64 bg-white shadow flex-col">
          <div className="p-4 text-xl font-bold border-b">DMT Construction Admin</div>
          <nav className="flex flex-col p-4 gap-2">
            {menuItems.map(item => (
              <Link key={item.name} href={item.href} onClick={() => setActiveItem(item.name)} className={`px-3 py-2 rounded hover:bg-blue-100 ${activeItem === item.name ? "bg-blue-200 font-bold" : "text-gray-700"}`}>
                {item.name}
              </Link>
            ))}
            <button onClick={signOutAndClear} className="mt-4 px-3 py-2 text-left text-sm bg-red-100 text-red-700 rounded hover:bg-red-200">Déconnexion</button>
          </nav>
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div className="w-64 bg-white shadow p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="font-bold">DMT Construction</div>
                <button onClick={() => setSidebarOpen(false)} className="p-2">✕</button>
              </div>
              <nav className="flex flex-col gap-2">
                {menuItems.map(item => (
                  <Link key={item.name} href={item.href} onClick={() => { setActiveItem(item.name); setSidebarOpen(false); }} className={`px-3 py-2 rounded hover:bg-blue-50 ${activeItem === item.name ? "bg-blue-100 font-bold" : "text-gray-700"}`}>
                    {item.name}
                  </Link>
                ))}
                <button onClick={() => { signOutAndClear(); setSidebarOpen(false); }} className="mt-4 px-3 py-2 text-left text-sm bg-red-100 text-red-700 rounded">Déconnexion</button>
              </nav>
            </div>
            <div className="flex-1 bg-black/30" onClick={() => setSidebarOpen(false)} />
          </div>
        )}

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}