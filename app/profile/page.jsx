"use client";
import { useState } from "react";
import { updateProfile, updateEmail } from "firebase/auth";
import RequireAuth from "../components/RequireAuth";
import useAuth from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Profile() {
  const { user } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        await updateProfile(user, { photoURL: reader.result });
      } catch (err) {
        console.error(err);
        alert("Impossible de mettre à jour la photo");
      }
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <RequireAuth>
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 py-16 px-6">
          <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Mon Profil</h1>
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <img src={user?.photoURL || "/default-user.jpg"} alt="Photo profil" className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg" />
                <label className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full cursor-pointer">
                  <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                  {uploading ? "..." : "📸"}
                </label>
              </div>
              <div className="w-full max-w-sm">
                <label className="block text-sm font-medium text-gray-700 mt-4">Nom</label>
                <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="w-full px-4 py-2 border rounded-lg" />

                <label className="block text-sm font-medium text-gray-700 mt-3">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg" />

                <div className="flex items-center justify-between mt-4">
                  <button onClick={async () => {
                    setSaving(true); setMessage("");
                    try {
                      if (displayName !== (user?.displayName || "")) {
                        await updateProfile(user, { displayName });
                      }
                      if (email && email !== (user?.email || "")) {
                        try {
                          await updateEmail(user, email);
                        } catch (err) {
                          if (err.code === 'auth/requires-recent-login') {
                            setMessage("La modification de l'email nécessite une reconnexion récente. Déconnectez-vous puis reconnectez-vous, puis réessayez.");
                            setSaving(false);
                            return;
                          }
                          throw err;
                        }
                      }
                      setMessage('Profil mis à jour avec succès.');
                    } catch (err) {
                      console.error('Erreur mise à jour profil:', err);
                      setMessage('Erreur lors de la sauvegarde. Vérifiez les droits et réessayez.');
                    } finally { setSaving(false); }
                  }} disabled={saving} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50">{saving ? 'Enregistrement...' : 'Enregistrer'}</button>
                  <button onClick={() => { navigator.clipboard?.writeText(user?.email || ''); setMessage('Email copié'); }} className="text-sm text-gray-500">Copier email</button>
                </div>

                {message && (<div className="mt-3 text-sm text-gray-700">{message}</div>)}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <WhatsAppButton />
      </>
    </RequireAuth>
  );
}
