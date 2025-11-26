"use client";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { Mail, User, MessageSquare } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  return (
     < >
     <Navbar/>
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('/bg-contact.jpg')`, // 🔥 Mets ton image ici
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Contenu */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-lg w-full p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
          <h1 className="text-3xl font-bold text-white text-center drop-shadow-lg">
            Contactez-nous
          </h1>
          <p className="text-gray-200 text-center mt-2 mb-6">
            Nous vous répondrons dans les plus brefs délais.
          </p>

          {/* FORM */}
          <form className="space-y-5">
            {/* Nom */}
            <div className="flex items-center gap-3 bg-white/20 p-3 rounded-xl border border-white/30">
              <User className="text-white" />
              <input
                type="text"
                placeholder="Votre nom"
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-200"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 bg-white/20 p-3 rounded-xl border border-white/30">
              <Mail className="text-white" />
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-200"
              />
            </div>

            {/* Message */}
            <div className="flex items-start gap-3 bg-white/20 p-3 rounded-xl border border-white/30">
              <MessageSquare className="text-white mt-1" />
              <textarea
                placeholder="Votre message"
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-200 h-28 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

// // // // "use client";
// // // // import Navbar from "../components/Navbar";
// // // // import Footer from "../components/Footer";
// // // // import { useState } from "react";
// // // // import toast from "react-hot-toast";
// // // // import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// // // // import { db } from "../firebase/config";
// // // // export default function Contact() {
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [name, setName] = useState("");
// // // //   const [email, setEmail] = useState("");
// // // //   const [message, setMessage] = useState("");
// // // //   const handleSend = async () => {
// // // //     if (!name || !email || !message)
// // // //       return toast.error("Veuillez remplir tous les champs.");

// // // //     setLoading(true);

// // // //     try {
// // // //       await addDoc(collection(db, "messages_contact_siteweb"), {
// // // //         name,
// // // //         email,
// // // //         message,
// // // //         createdAt: serverTimestamp(),
// // // //       });

// // // //       toast.success("Message envoyé avec succès !");
// // // //       setName("");
// // // //       setEmail("");
// // // //       setMessage("");

// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       toast.error("Une erreur est survenue.");
// // // //     }

// // // //     setLoading(false);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <Navbar />

// // // //       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 py-16">
        
// // // //         <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-8 animate-fadeIn">
          
// // // //           <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-8 drop-shadow-md">
// // // //             Contactez-nous
// // // //           </h2>

// // // //           <div className="flex flex-col gap-5">
            
// // // //             <input
// // // //               placeholder="Votre nom"
// // // //               value={name}
// // // //               onChange={(e) => setName(e.target.value)}
// // // //               className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition"
// // // //             />

// // // //             <input
// // // //               placeholder="Votre email"
// // // //               type="email"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //               className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition"
// // // //             />

// // // //             <textarea
// // // //               placeholder="Votre message"
// // // //               rows="5"
// // // //               value={message}
// // // //               onChange={(e) => setMessage(e.target.value)}
// // // //               className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
// // // //             ></textarea>

// // // //             <button
// // // //               onClick={handleSend}
// // // //               disabled={loading}
// // // //               className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all disabled:bg-blue-300"
// // // //             >
// // // //               {loading ? "Envoi..." : "Envoyer"}
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // }
// // // "use client";
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";
// // // import { useState } from "react";
// // // import toast from "react-hot-toast";
// // // import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// // // import { db } from "../firebase/config";
// // // import { Mail, User, MessageSquare } from "lucide-react";

// // // export default function Contact() {
// // //   const [loading, setLoading] = useState(false);
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [message, setMessage] = useState("");

// // //   const handleSend = async () => {
// // //     if (!name || !email || !message)
// // //       return toast.error("Veuillez remplir tous les champs.");

// // //     setLoading(true);

// // //     try {
// // //       await addDoc(collection(db, "messages_contact_siteweb"), {
// // //         name,
// // //         email,
// // //         message,
// // //         createdAt: serverTimestamp(),
// // //       });

// // //       toast.success("Message envoyé avec succès !");
// // //       setName("");
// // //       setEmail("");
// // //       setMessage("");

// // //     } catch (err) {
// // //       console.error(err);
// // //       toast.error("Une erreur est survenue.");
// // //     }

// // //     setLoading(false);
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-6 py-20">

// // //         <div className="w-full max-w-xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-10 animate-fadeIn">
          
// // //           <h2 className="text-4xl font-bold text-center text-blue-700 mb-10 tracking-tight drop-shadow-sm">
// // //             Contactez-nous
// // //           </h2>

// // //           <div className="flex flex-col gap-6">

// // //             {/* NOM */}
// // //             <div className="relative">
// // //               <User className="absolute left-4 top-3.5 text-blue-500" size={20} />
// // //               <input
// // //                 placeholder="Votre nom"
// // //                 value={name}
// // //                 onChange={(e) => setName(e.target.value)}
// // //                 className="w-full pl-12 border border-gray-200 p-3.5 rounded-2xl shadow-sm bg-white/60 
// // //                 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 transition-all"
// // //               />
// // //             </div>

// // //             {/* EMAIL */}
// // //             <div className="relative">
// // //               <Mail className="absolute left-4 top-3.5 text-blue-500" size={20} />
// // //               <input
// // //                 placeholder="Votre email"
// // //                 type="email"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //                 className="w-full pl-12 border border-gray-200 p-3.5 rounded-2xl shadow-sm bg-white/60 
// // //                 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 transition-all"
// // //               />
// // //             </div>

// // //             {/* MESSAGE */}
// // //             <div className="relative">
// // //               <MessageSquare className="absolute left-4 top-3.5 text-blue-500" size={20} />
// // //               <textarea
// // //                 placeholder="Votre message"
// // //                 rows="5"
// // //                 value={message}
// // //                 onChange={(e) => setMessage(e.target.value)}
// // //                 className="w-full pl-12 border border-gray-200 p-3.5 rounded-2xl shadow-sm bg-white/60 
// // //                 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 transition-all resize-none"
// // //               ></textarea>
// // //             </div>

// // //             {/* BOUTON */}
// // //             <button
// // //               onClick={handleSend}
// // //               disabled={loading}
// // //               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
// // //               text-white p-3.5 rounded-2xl text-lg font-semibold shadow-md hover:shadow-xl 
// // //               transition-all active:scale-[0.97] disabled:opacity-50"
// // //             >
// // //               {loading ? "Envoi en cours..." : "Envoyer le message"}
// // //             </button>

// // //           </div>
// // //         </div>
// // //       </div>

// // //       <Footer />
// // //     </>
// // //   );
// // // }
// // "use client";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import { useState } from "react";
// // import toast from "react-hot-toast";
// // import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// // import { db } from "../firebase/config";
// // import { Mail, User, MessageSquare } from "lucide-react";

// // export default function Contact() {
// //   const [loading, setLoading] = useState(false);
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [message, setMessage] = useState("");

// //   const handleSend = async () => {
// //     if (!name || !email || !message)
// //       return toast.error("Veuillez remplir tous les champs.");

// //     setLoading(true);

// //     try {
// //       await addDoc(collection(db, "messages_contact_siteweb"), {
// //         name,
// //         email,
// //         message,
// //         createdAt: serverTimestamp(),
// //       });

// //       toast.success("Message envoyé avec succès !");
// //       setName("");
// //       setEmail("");
// //       setMessage("");

// //     } catch (err) {
// //       console.error(err);
// //       toast.error("Une erreur est survenue.");
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <>
// //       <Navbar />

// //       <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-6 py-20">

// //         <div className="w-full max-w-xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-10 animate-fadeIn">
          
// //           <h2 className="text-4xl font-bold text-center text-blue-700 mb-10 tracking-tight drop-shadow-sm">
// //             Contactez-nous
// //           </h2>

// //           <div className="flex flex-col gap-6">

// //             {/* NOM */}
// //             <div className="relative">
// //               <User className="absolute left-4 top-3.5 text-blue-500" size={20} />
// //               <input
// //                 placeholder="Votre nom"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 className="w-full pl-12 border border-gray-200 p-3.5 rounded-2xl shadow-sm bg-white/60 
// //                 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 transition-all"
// //               />
// //             </div>

// //             {/* EMAIL */}
// //             <div className="relative">
// //               <Mail className="absolute left-4 top-3.5 text-blue-500" size={20} />
// //               <input
// //                 placeholder="Votre email"
// //                 type="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 className="w-full pl-12 border border-gray-200 p-3.5 rounded-2xl shadow-sm bg-white/60 
// //                 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 transition-all"
// //               />
// //             </div>

// //             {/* MESSAGE */}
// //             <div className="relative">
// //               <MessageSquare className="absolute left-4 top-3.5 text-blue-500" size={20} />
// //               <textarea
// //                 placeholder="Votre message"
// //                 rows="5"
// //                 value={message}
// //                 onChange={(e) => setMessage(e.target.value)}
// //                 className="w-full pl-12 border border-gray-200 p-3.5 rounded-2xl shadow-sm bg-white/60 
// //                 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 transition-all resize-none"
// //               ></textarea>
// //             </div>

// //             {/* BOUTON */}
// //             <button
// //               onClick={handleSend}
// //               disabled={loading}
// //               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
// //               text-white p-3.5 rounded-2xl text-lg font-semibold shadow-md hover:shadow-xl 
// //               transition-all active:scale-[0.97] disabled:opacity-50"
// //             >
// //               {loading ? "Envoi en cours..." : "Envoyer le message"}
// //             </button>

// //           </div>
// //         </div>
// //       </div>

// //       <Footer />
// //     </>
// //   );
// // }
// "use client";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { db } from "../firebase/config";

// export default function Contact() {
//   const [loading, setLoading] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSend = async () => {
//     if (!name || !email || !message)
//       return toast.error("Veuillez remplir tous les champs.");

//     setLoading(true);

//     try {
//       await addDoc(collection(db, "messages_contact_siteweb"), {
//         name,
//         email,
//         message,
//         createdAt: serverTimestamp(),
//       });

//       toast.success("Message envoyé avec succès !");
//       setName("");
//       setEmail("");
//       setMessage("");
//     } catch (err) {
//       toast.error("Une erreur est survenue.");
//     }

//     setLoading(false);
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-white to-[#dbeafe] flex items-center justify-center px-6 py-20">

//         {/* CARD */}
//         <div className="w-full max-w-lg p-8 rounded-3xl backdrop-blur-3xl bg-white/40 shadow-[0_0_40px_rgba(0,0,0,0.1)] border border-white/60 relative overflow-hidden">

//           {/* GLOW EFFECT */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl opacity-40"></div>

//           <h2 className="text-4xl font-black text-blue-700 relative z-10 text-center mb-10 tracking-tight">
//             Contactez-nous
//           </h2>

//           <div className="flex flex-col gap-6 relative z-10">

//             {/* NOM */}
//             <div className="relative">
//               <span className="absolute left-4 top-3 text-blue-600">
//                 {/* USER ICON */}
//                 <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
//                   <circle cx="10" cy="6" r="4" />
//                   <path d="M2 18c1-4 4-6 8-6s7 2 8 6" />
//                 </svg>
//               </span>

//               <input
//                 placeholder="Votre nom"
//                 className="w-full pl-12 border border-gray-300 p-3 rounded-xl bg-white/70 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             {/* EMAIL */}
//             <div className="relative">
//               <span className="absolute left-4 top-3 text-blue-600">
//                 {/* MAIL ICON */}
//                 <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M4 4h12v12H4z" />
//                   <path d="m4 4 6 6 6-6" />
//                 </svg>
//               </span>

//               <input
//                 type="email"
//                 placeholder="Votre email"
//                 className="w-full pl-12 border border-gray-300 p-3 rounded-xl bg-white/70 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             {/* MESSAGE */}
//             <div className="relative">
//               <span className="absolute left-4 top-3 text-blue-600">
//                 {/* MESSAGE ICON */}
//                 <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M4 4h12v10H7l-3 3z" />
//                 </svg>
//               </span>

//               <textarea
//                 placeholder="Votre message"
//                 rows="5"
//                 className="w-full pl-12 border border-gray-300 p-3 rounded-xl bg-white/70 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               ></textarea>
//             </div>

//             <button
//               onClick={handleSend}
//               disabled={loading}
//               className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white p-3 rounded-xl text-lg font-semibold shadow-lg transition-all disabled:bg-blue-300"
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
