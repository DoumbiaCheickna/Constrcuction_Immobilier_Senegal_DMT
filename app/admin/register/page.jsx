"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function AdminRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      const user = cred.user;
      // Enregistrer le rôle admin dans Firestore
      await setDoc(doc(db, "admins", user.uid), {
        email: user.email,
        createdAt: new Date()
      });
      // Set cookie so middleware allows admin routes
      try {
        document.cookie = `admin_auth=true; path=/; max-age=${60 * 60 * 24}`; // 1 day
      } catch (e) {}
      router.push("/admin");
    } catch (err) {
      console.error(err);
      setError(err.message || "Erreur lors de la création du compte");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Créer un compte administrateur</h2>
        {error && <div className="mb-3 text-red-600">{error}</div>}
        <form onSubmit={handleRegister} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full px-4 py-2 border rounded" />
          <input type="password" placeholder="Mot de passe" value={password} onChange={e=>setPassword(e.target.value)} required className="w-full px-4 py-2 border rounded" />
          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded">
            {loading ? "Création..." : "Créer le compte admin"}
          </button>
        </form>
      </div>
    </div>
  );
}
