"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import Link from "next/link";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash, FaArrowLeft, FaUserShield } from "react-icons/fa";

export default function LoginRedirectPage() {
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Vérifier si l'utilisateur est dans la collection 'admins' (par UID ou email)
        let isAdmin = false;
        try {
          const d = await getDoc(doc(db, "admins", user.uid));
          if (d.exists()) {
            isAdmin = true;
          } else {
            const adminsRef = collection(db, "admins");
            const q = query(adminsRef, where("email", "==", user.email));
            const qs = await getDocs(q);
            isAdmin = qs.size > 0;
          }
        } catch (e) {
          console.error("Erreur vérification admin:", e);
          isAdmin = false;
        }

        if (isAdmin) {
          router.push("/admin");
        } else {
          // Déconnecter l'utilisateur si pas admin
          setError("Compte non autorisé pour l'accès administrateur.");
          // Optionnel: sign out
          try { await auth.signOut(); } catch(e){}
        }
    } catch (err) {
      console.error("Erreur de connexion:", err);
      
      let errorMessage = "Erreur de connexion. Veuillez réessayer.";
      
      switch (err.code) {
        case "auth/invalid-email":
          errorMessage = "Adresse email invalide.";
          break;
        case "auth/user-disabled":
          errorMessage = "Ce compte a été désactivé.";
          break;
        case "auth/user-not-found":
          errorMessage = "Aucun compte trouvé avec cette adresse email.";
          break;
        case "auth/wrong-password":
          errorMessage = "Mot de passe incorrect.";
          break;
        case "auth/too-many-requests":
          errorMessage = "Trop de tentatives. Veuillez réessayer plus tard.";
          break;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };




  return (
       <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  <FaUserShield className="text-2xl" />
                  Administration DMT
                </h1>
                <p className="text-blue-100 text-sm mt-1">
                  Accès réservé aux administrateurs
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <FaLock className="text-xl" />
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="p-6">
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin}>
              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FaEnvelope className="text-gray-500" />
                  Adresse email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="admin@example.com"
                  required
                  disabled={loading}
                />
              </div>

              {/* Mot de passe */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FaLock className="text-gray-500" />
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12"
                    placeholder="••••••••"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Bouton de connexion */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 mb-4"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Connexion en cours...
                  </div>
                ) : (
                  "Se connecter"
                )}
              </button>

              {/* Lien vers le site public */}
              <div className="text-center">
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <FaArrowLeft />
                  Retour au site public
                </Link>
              </div>
            </form>
          </div>

          {/* Pied de page */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} DMT Construction. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
