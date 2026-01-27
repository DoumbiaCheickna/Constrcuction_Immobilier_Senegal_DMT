// // "use client";
// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth, db } from "../../firebase/config";
// // import { doc, getDoc } from "firebase/firestore";

// // export default function AdminLogin() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const router = useRouter();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setLoading(true);
// //       try {
// //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
// //       const user = userCredential.user;
// //       // Vérifier si l'utilisateur est un admin dans Firestore
// //       const adminDoc = await getDoc(doc(db, "admins", user.uid));
      
// //       if (adminDoc.exists()) {
// //         router.replace("/admin");
// //       } else {
// //         setError("Vous n'avez pas les droits administrateur.");
// //       }
// //     } catch (err) {
// //       setError("Email ou mot de passe incorrect.");
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
// //       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
// //         <h2 className="text-2xl font-bold mb-6 text-center">Connexion Administrateur</h2>
// //         <form onSubmit={handleLogin} className="space-y-4">
// //           <input
// //             type="email"
// //             placeholder="Email administrateur"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             className="w-full px-4 py-2 border rounded"
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Mot de passe"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             className="w-full px-4 py-2 border rounded"
// //             required
// //           />
// //           {error && <div className="text-red-500 text-sm">{error}</div>}
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
// //             disabled={loading}
// //           >
// //             {loading ? "Connexion..." : "Se connecter"}
// //           </button>
// //         </form>
        
// //         <div className="mt-4 text-center">
// //           <a href="/admin/register" className="text-blue-600 hover:underline">
// //             Pas encore de compte ? Inscrivez-vous
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useState, useEffect } from "react";
// import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "../../firebase/config";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { FaLock, FaEnvelope, FaEye, FaEyeSlash, FaArrowLeft, FaUserShield } from "react-icons/fa";

// export default function AdminLoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [isResetMode, setIsResetMode] = useState(false);
//   const router = useRouter();

//   // Vérifier si déjà connecté
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         // Vérifier si c'est un admin (vous devrez adapter cette logique)
//         router.push("/properties");
//       }
//     });

//     return () => unsubscribe();
//   }, [router]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setMessage("");

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Ici, vous pouvez vérifier si l'utilisateur est admin
//       // Par exemple, en vérifiant son email ou un champ dans Firestore
//       console.log("Utilisateur connecté:", user.email);

//       // Redirection vers la page d'administration
//       router.push("/properties");

//     } catch (err) {
//       console.error("Erreur de connexion:", err);
      
//       let errorMessage = "Erreur de connexion. Veuillez réessayer.";
      
//       switch (err.code) {
//         case "auth/invalid-email":
//           errorMessage = "Adresse email invalide.";
//           break;
//         case "auth/user-disabled":
//           errorMessage = "Ce compte a été désactivé.";
//           break;
//         case "auth/user-not-found":
//           errorMessage = "Aucun compte trouvé avec cette adresse email.";
//           break;
//         case "auth/wrong-password":
//           errorMessage = "Mot de passe incorrect.";
//           break;
//         case "auth/too-many-requests":
//           errorMessage = "Trop de tentatives. Veuillez réessayer plus tard.";
//           break;
//       }
      
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     if (!email) {
//       setError("Veuillez entrer votre adresse email.");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setMessage("");

//     try {
//       await sendPasswordResetEmail(auth, email);
//       setMessage(`Un email de réinitialisation a été envoyé à ${email}`);
//       setIsResetMode(false);
//     } catch (err) {
//       console.error("Erreur de réinitialisation:", err);
      
//       let errorMessage = "Erreur lors de l'envoi de l'email de réinitialisation.";
      
//       switch (err.code) {
//         case "auth/invalid-email":
//           errorMessage = "Adresse email invalide.";
//           break;
//         case "auth/user-not-found":
//           errorMessage = "Aucun compte trouvé avec cette adresse email.";
//           break;
//       }
      
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         {/* Carte de connexion */}
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//           {/* En-tête */}
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h1 className="text-2xl font-bold flex items-center gap-2">
//                   <FaUserShield className="text-2xl" />
//                   {isResetMode ? "Réinitialisation" : "Administration"}
//                 </h1>
//                 <p className="text-blue-100 text-sm mt-1">
//                   {isResetMode 
//                     ? "Réinitialisez votre mot de passe" 
//                     : "Accès réservé aux administrateurs"
//                   }
//                 </p>
//               </div>
//               <div className="bg-white/20 p-3 rounded-full">
//                 <FaLock className="text-xl" />
//               </div>
//             </div>
//           </div>

//           {/* Formulaire */}
//           <div className="p-6">
//             {message && (
//               <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
//                 {message}
//               </div>
//             )}

//             {error && (
//               <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
//                 {error}
//               </div>
//             )}

//             {isResetMode ? (
//               <form onSubmit={handleResetPassword}>
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
//                     <FaEnvelope className="text-gray-500" />
//                     Adresse email
//                   </label>
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     placeholder="admin@example.com"
//                     required
//                     disabled={loading}
//                   />
//                 </div>

//                 <div className="space-y-4">
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50"
//                   >
//                     {loading ? "Envoi en cours..." : "Envoyer le lien de réinitialisation"}
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setIsResetMode(false)}
//                     className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
//                   >
//                     <FaArrowLeft />
//                     Retour à la connexion
//                   </button>
//                 </div>
//               </form>
//             ) : (
//               <form onSubmit={handleLogin}>
//                 {/* Email */}
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
//                     <FaEnvelope className="text-gray-500" />
//                     Adresse email
//                   </label>
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     placeholder="admin@example.com"
//                     required
//                     disabled={loading}
//                   />
//                 </div>

//                 {/* Mot de passe */}
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
//                     <FaLock className="text-gray-500" />
//                     Mot de passe
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12"
//                       placeholder="••••••••"
//                       required
//                       disabled={loading}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                     >
//                       {showPassword ? <FaEyeSlash /> : <FaEye />}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Options */}
//                 <div className="flex items-center justify-between mb-6">
//                   <label className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
//                     />
//                     <span className="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
//                   </label>

//                   <button
//                     type="button"
//                     onClick={() => setIsResetMode(true)}
//                     className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
//                   >
//                     Mot de passe oublié ?
//                   </button>
//                 </div>

//                 {/* Bouton de connexion */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 mb-4"
//                 >
//                   {loading ? (
//                     <div className="flex items-center justify-center gap-2">
//                       <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                       Connexion en cours...
//                     </div>
//                   ) : (
//                     "Se connecter"
//                   )}
//                 </button>

//                 {/* Lien vers le site public */}
//                 <div className="text-center">
//                   <Link 
//                     href="/"
//                     className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
//                   >
//                     <FaArrowLeft />
//                     Retour au site public
//                   </Link>
//                 </div>
//               </form>
//             )}
//           </div>

//           {/* Pied de page */}
//           <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
//             <div className="text-center">
//               <p className="text-xs text-gray-500">
//                 Accès strictement réservé au personnel autorisé.
//                 Toute tentative non autorisée sera enregistrée.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Informations de test (à retirer en production) */}
//         {process.env.NODE_ENV === "development" && (
//           <div className="mt-6 bg-black/20 backdrop-blur-sm rounded-xl p-4 text-white text-sm">
//             <h3 className="font-bold mb-2">📋 Comptes de test :</h3>
//             <div className="space-y-1">
//               <p><span className="opacity-75">Email :</span> admin@example.com</p>
//               <p><span className="opacity-75">Mot de passe :</span> admin123</p>
//             </div>
//             <p className="mt-2 text-xs opacity-75">
//               Ces identifiants ne fonctionnent que si vous avez créé le compte dans Firebase.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash, FaArrowLeft, FaUserShield } from "react-icons/fa";

export default function AdminLoginPage() {
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
          // Set a cookie so middleware recognizes authenticated admin requests
          try {
            document.cookie = `admin_auth=true; path=/; max-age=${60 * 60 * 24}`; // 1 day
          } catch (e) {}
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