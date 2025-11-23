
// "use client";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useState } from "react";

// export default function Contact() {
//   const [loading, setLoading] = useState(false);

//   const handleSend = () => {
//     setLoading(true);
//     setTimeout(() => setLoading(false), 2000);
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 py-16">
        
//         <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-8 animate-fadeIn">
          
//           <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-8 drop-shadow-md">
//             Contactez-nous
//           </h2>

//           <div className="flex flex-col gap-5">
//             <input
//               placeholder="Votre nom"
//               className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition"
//             />

//             <input
//               placeholder="Votre email"
//               type="email"
//               className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition"
//             />

//             <textarea
//               placeholder="Votre message"
//               rows="5"
//               className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
//             ></textarea>

//             <button
//               onClick={handleSend}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all"
//             >
//               {loading ? "Envoi..." : "Envoyer"}
//             </button>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import toast from "react-hot-toast";


import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // 🔥 Envoi du message dans Firestore
  const handleSend = async () => {
    if (!name || !email || !message)
      return toast.error("Veuillez remplir tous les champs.");

    setLoading(true);

    try {
      await addDoc(collection(db, "messages_contact_siteweb"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });

      toast.success("Message envoyé avec succès !");
      setName("");
      setEmail("");
      setMessage("");

    } catch (err) {
      console.error(err);
      toast.error("Une erreur est survenue.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 py-16">
        
        <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-8 animate-fadeIn">
          
          <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-8 drop-shadow-md">
            Contactez-nous
          </h2>

          <div className="flex flex-col gap-5">
            
            <input
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />

            <input
              placeholder="Votre email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />

            <textarea
              placeholder="Votre message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
            ></textarea>

            <button
              onClick={handleSend}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all disabled:bg-blue-300"
            >
              {loading ? "Envoi..." : "Envoyer"}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
