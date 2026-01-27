"use client";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import RequireAuth from "../components/RequireAuth";
import useAuth from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Profile() {
  const { user } = useAuth();
  const [uploading, setUploading] = useState(false);

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
              <p className="text-xl font-bold">{user?.displayName || "Nom non défini"}</p>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>
        </div>
        <Footer />
        <WhatsAppButton />
      </>
    </RequireAuth>
  );
}
