"use client";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";
export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Un lien de réinitialisation vous a été envoyé par email.");
      setEmail("");
    } catch (err) {
      console.log(err);
      if (err.code === "auth/user-not-found") {
        setError("Aucun compte n’est associé à cet email.");
      } else if (err.code === "auth/invalid-email") {
        setError("Email invalide.");
      } else {
        setError("Une erreur est survenue. Réessayez.");
      }
    }

    setLoading(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6">

        <h1 className="text-xl font-semibold text-center">Réinitialiser le mot de passe</h1>
        <p className="text-gray-600 text-center mt-2">
          Entrez votre email pour recevoir un lien de réinitialisation.
        </p>
        {message && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg">
            {message}
          </div>
        )}
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleReset} className="mt-6 flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="exemple@gmail.com"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition ${
              loading && "opacity-50"
            }`}
          >
            {loading ? "Envoi en cours..." : "Envoyer le lien"}
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="/login" className="text-gray-600 hover:underline">
            Retour à la connexion
          </a>
        </div>

      </div>
    </div>
  );
}
