// "use client";
// import Footer from "../components/Footer";
// import ImageGrid from "../components/ImageGrid";
// import Navbar from "../components/Navbar";
// import Image from "next/image";
// import WhatsAppButton from '../components/WhatsAppButton';
// import Carousels from "../components/Carousels";
// import MediaCarousel from "../components/MediaCarousel";
// export default function DiassPage() {
//     const projects = [
//     // { type: "image", src: "/immobilier1.png", alt: "Projet 1", title: "Maison Moderne", description: "Maison moderne à Diass avec jardin spacieux" },
//     // { type: "image", src: "/immobilier2.jpg", alt: "Projet 2", title: "Villa Luxueuse", description: "Villa avec piscine et terrasse panoramique" },
//     { type: "video", src: "/video_1.mp4", alt: "Vidéo Projet 1", title: "Présentation Vidéo", description: "Visite virtuelle du projet résidentiel" },
//     // { type: "image", src: "/immobilier3.png", alt: "Projet 3", title: "Appartement Moderne", description: "Appartement design au centre-ville" },
//     // { type: "video", src: "/video_projet2.mp4", alt: "Vidéo Projet 2", title: "Vidéo Commercial", description: "Présentation du bâtiment commercial" },
//   ];
//   return (
//     <>
//       <Navbar />

//       <main className="max-w-7xl mx-auto px-6 py-16">
//        <Carousels />
//          <MediaCarousel items={projects} />
//         {/* <ImageGrid filter="diass" /> */}

//         <div className="min-h-screen bg-gray-50 text-gray-800">
//           {/* CONTENT */}
//           <section className="max-w-5xl mx-auto px-4 py-10 space-y-10">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                 Qu’est-ce que l’immobilier ?
//               </h2>
//               <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//                 L’immobilier désigne l’ensemble des activités liées à l’achat, la vente, la location et 
//                 la gestion de biens tels que les maisons, les appartements, les terrains et les immeubles
//                 commerciaux.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <Image
//                 src="/immobilier2.jpg"   // ✅ corrigé
//                 width={600}
//                 height={400}
//                 className="rounded-xl shadow"
//                 alt="Maison moderne"
//               />
//               <div>
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                   Pourquoi investir dans l’immobilier ?
//                 </h2>
//                 <ul className="list-disc ml-5 text-gray-700 space-y-2 text-sm md:text-base">
//                   <li>Un secteur stable et sécurisé.</li>
//                   <li>Une forte demande en logement.</li>
//                   <li>Revenus passifs grâce à la location.</li>
//                   <li>La valeur augmente dans le temps.</li>
//                 </ul>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                 Les différents types de biens immobiliers
//               </h2>
//               <div className="grid md:grid-cols-3 gap-6">
//                 <div className="bg-white p-5 rounded-xl shadow">
//                   <h3 className="font-bold text-lg mb-2">Résidentiel</h3>
//                   <p className="text-gray-600 text-sm">
//                     Appartements, villas, studios, maisons.
//                   </p>
//                 </div>

//                 <div className="bg-white p-5 rounded-xl shadow">
//                   <h3 className="font-bold text-lg mb-2">Commercial</h3>
//                   <p className="text-gray-600 text-sm">
//                     Boutiques, bureaux, entrepôts.
//                   </p>
//                 </div>

//                 <div className="bg-white p-5 rounded-xl shadow">
//                   <h3 className="font-bold text-lg mb-2">Terrains</h3>
//                   <p className="text-gray-600 text-sm">
//                     Terrains constructibles ou agricoles.
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </section>

//         </div>
//       </main>

//       <Footer />
//         <WhatsAppButton />
//     </>
//   );
// }
"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Carousels from "../components/Carousels";
import MediaCarousel from "../components/MediaCarousel";
import WhatsAppButton from "../components/WhatsAppButton";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DiassPage() {
  const projects = [
    { type: "video", src: "/video_1.mp4", alt: "Vidéo Projet 1", title: "Présentation Vidéo" },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="w-full bg-gray-900">
        <Carousels />
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">

        {/* SECTION 1 – PRESENTATION IMMOBILIER */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
            L’Immobilier : Votre Porte Vers l’Avenir
          </h1>

          <p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Notre expertise vous accompagne dans tous vos projets immobiliers : que vous souhaitiez 
            acheter, vendre ou investir, nous vous offrons un service professionnel et personnalisé.
          </p>

          <div className="mt-10">
            <MediaCarousel items={projects} />
          </div>
        </motion.section>

        {/* SECTION 2 – POURQUOI INVESTIR ? */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-2xl shadow-xl"
        >
          <Image
            src="/immobilier3.png"
            width={600}
            height={400}
            alt="Investissement immobilier"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi investir dans l’immobilier ?
            </h2>

            <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
              <li>🏡 Un secteur robuste et sécurisé.</li>
              <li>📈 Une valorisation continue dans le temps.</li>
              <li>💰 Revenus passifs grâce à la location.</li>
              <li>🔐 Meilleure protection contre l’inflation.</li>
              <li>🌍 Un besoin permanent sur le marché africain.</li>
            </ul>
          </div>
        </motion.section>

        {/* SECTION 3 – TYPES DE BIENS */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nos catégories de biens
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Résidentiel", desc: "Villas, appartements, studios", img: "/page_9.png" },
              { title: "Commercial", desc: "Immoble", img: "/pro11.png" },
              { title: "Terrains", desc: "Terrains constructibles ou agricoles", img: "/pagees_1.png" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 4 – STATS */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-8 text-center py-10 bg-[#143F6B] text-white rounded-2xl shadow-xl"
        >
          {[
            { value: "12+", label: "Années d'expérience" },
            { value: "350+", label: "Projets réalisés" },
            { value: "120+", label: "Clients satisfaits" },
            { value: "20+", label: "Experts disponibles" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-extrabold">{stat.value}</p>
              <p className="mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.section>

        {/* SECTION 5 – NOUS CHOISIR */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Pourquoi nous choisir ?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🏅", title: "Professionnalisme", desc: "Une équipe expérimentée et fiable." },
              { icon: "🤝", title: "Accompagnement", desc: "Du premier contact jusqu’à la finalisation." },
              { icon: "🔍", title: "Transparence", desc: "Des informations claires et vérifiées." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-3 font-bold text-xl">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* WHATSAPP CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center py-12 bg-[#0D2340] text-white rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-3">Besoin de plus d’informations ?</h2>
          <p className="text-gray-200 mb-6">Notre équipe est disponible 24/7 pour répondre à vos questions.</p>

          <a
            href="https://wa.me/221771234567"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            📞 Discuter sur WhatsApp
          </a>
        </motion.section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
