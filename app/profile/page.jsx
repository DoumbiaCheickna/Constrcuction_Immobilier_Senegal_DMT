"use client";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/login");
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 🔹 Changer la photo de profil
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    // Convert file → base64
    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        await updateProfile(auth.currentUser, {
          photoURL: reader.result,
        });
        setUser({ ...auth.currentUser });
      } catch (err) {
        console.error(err);
        alert("Impossible de mettre à jour la photo");
      }
      setUploading(false);
    };

    reader.readAsDataURL(file);
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Chargement...
      </div>
    );
  }

  return (
    <>
     <Navbar />
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Mon Profil
        </h1>

        <div className="flex flex-col items-center gap-4">
          {/* PHOTO PROFIL */}
          <div className="relative">
            <img
              src={user?.photoURL || "/default-user.jpg"}
              alt="Photo profil"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />

            {/* Bouton upload */}
            <label className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full cursor-pointer">
              <input type="file" accept="image/*" hidden onChange={handleImageChange} />
              {uploading ? "..." : "📸"}
            </label>
          </div>

          {/* NOM + EMAIL */}
          <p className="text-xl font-bold">{user?.displayName || "Nom non défini"}</p>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {/* BOUTON DECONNEXION */}
        <button
          onClick={handleLogout}
          className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
        >
          Se déconnecter
        </button>

      </div>
    </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
