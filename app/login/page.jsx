"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../firebase/config"; 
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard"); 
    } catch (err) {
      setError("Email ou mot de passe incorrect.");
    }
    setLoading(false);
  };
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/dashboard");
    } catch (err) {
      setError("Échec de la connexion Google.");
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-white/40 animate-fadeIn">

          <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-6 drop-shadow-sm">
            Connexion
          </h2>

          {error && (
            <p className="mb-4 text-red-600 text-center font-semibold bg-red-100 p-2 rounded-lg">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-5">
            <input
              placeholder="Adresse email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white/70"
            />

            <input
              placeholder="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white/70"
            />

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white p-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl disabled:bg-blue-400"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>

            <div className="text-right">
              <a
                href="/reset"
                className="text-sm text-blue-600 font-semibold hover:underline"
              >
                Mot de passe oublié ?
              </a>
            </div>
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="flex items-center justify-center w-full border border-gray-300 p-3 rounded-xl shadow-sm hover:shadow-lg transition-all mt-2 bg-white font-semibold disabled:opacity-50"
            >
              <FcGoogle className="mr-2 text-2xl" />
              Se connecter avec Google
            </button>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Pas encore de compte ?{" "}
            <a
              href="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              S'inscrire
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
