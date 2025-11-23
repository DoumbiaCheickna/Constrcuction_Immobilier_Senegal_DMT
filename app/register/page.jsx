// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// export default function Register() {
// return (
// <>
// <Navbar />
// <div className="px-6 py-10 max-w-lg mx-auto">
// <h2 className="text-3xl font-bold mb-6">Créer un compte</h2>
// <input placeholder="Nom complet" className="w-full border p-3 rounded mb-4" />
// <input placeholder="Email" className="w-full border p-3 rounded mb-4" />
// <input placeholder="Mot de passe" type="password" className="w-full border p-3 rounded mb-4" />
// <button className="w-full bg-blue-600 text-white p-3 rounded">S'inscrire</button>
// </div>
// <Footer />
// </>
// );
// }     git config --global user.email "cheicknadevdot@gmail.com"
  //     git config --global user.name "DoumbiaCheickna"
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Inscription email + mot de passe
  const handleRegister = async () => {
    setError("");
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/dashboard"); // redirection
    } catch (err) {
      setError("Impossible de créer votre compte.");
    }

    setLoading(false);
  };

  // 🔹 Inscription via Google
  const handleGoogleRegister = async () => {
    setError("");
    setLoading(true);

    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/dashboard");
    } catch (err) {
      setError("Erreur avec Google.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 flex items-center justify-center px-6 py-16">
        
        <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-white/50 animate-fadeIn">

          <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-6 drop-shadow-md">
            Créer un compte
          </h2>

          {error && (
            <p className="text-center mb-4 p-2 bg-red-100 text-red-600 font-semibold rounded-lg">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-5">

            <input
              placeholder="Nom complet"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />

            <input
              placeholder="Adresse email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />

            <input
              placeholder="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />

            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all disabled:bg-blue-400"
            >
              {loading ? "Création du compte..." : "S'inscrire"}
            </button>

            {/* Google Register */}
            <button
              onClick={handleGoogleRegister}
              disabled={loading}
              className="flex items-center justify-center w-full border border-gray-300 p-3 rounded-xl bg-white shadow-sm hover:shadow-lg font-semibold transition-all disabled:opacity-50"
            >
              <FcGoogle className="mr-2 text-2xl" />
              Continuer avec Google
            </button>
          </div>

          <p className="mt-8 text-center text-gray-700">
            Vous avez déjà un compte ?{" "}
            <a href="/login" className="text-blue-600 font-bold hover:underline">
              Se connecter
            </a>
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
}
