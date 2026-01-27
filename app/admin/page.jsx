"use client";

import Link from "next/link";
import RequireAuth from "../components/RequireAuth";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export default function AdminIndex() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.replace("/");
    } catch (e) {
      console.error("Erreur lors de la déconnexion:", e);
    }
  };

  return (
    <RequireAuth adminOnly>
      <div className="min-h-screen p-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-1">Tableau de bord — Administration</h1>
              <p className="text-gray-600">Gérez les propriétés, messages et visiteurs.</p>
            </div>
            <div className="flex items-center gap-4">
              {user && (
                <div className="text-sm text-gray-700">Connecté en tant que <strong>{user.email}</strong></div>
              )}
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Déconnexion
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/admin/properties" className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-lg font-semibold">Biens (Properties)</h2>
              <p className="text-sm text-gray-500 mt-2">Ajouter / modifier / supprimer des biens</p>
            </Link>

            <Link href="/admin/messages" className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-lg font-semibold">Messages</h2>
              <p className="text-sm text-gray-500 mt-2">Consulter et répondre aux messages</p>
            </Link>

            <Link href="/admin/visitors" className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-lg font-semibold">Visiteurs</h2>
              <p className="text-sm text-gray-500 mt-2">Historique des visiteurs</p>
            </Link>
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}
