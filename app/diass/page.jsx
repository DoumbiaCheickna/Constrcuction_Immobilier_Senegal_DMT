// "use client";
// import Footer from "../components/Footer";
// import ImageGrid from "../components/ImageGrid";
// import Navbar from "../components/Navbar";
// import Image from "next/image";
// export default function DiassPage() {
//   return (
//      <>
//     <Navbar />
//     <main className="max-w-7xl mx-auto px-6 py-16">
//       <h1 className="text-3xl font-bold mb-8">Biens à Diass</h1>

//       <ImageGrid filter="diass" />
//        <div className="min-h-screen bg-gray-50 text-gray-800">
      
//       {/* HERO */}
//       <section className="relative w-full h-[320px] md:h-[420px]">
//         <Image
//           src="immobilier1.jpg"
//           alt="Immobilier"
//           fill
//           className="object-cover brightness-75"
//         />

//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
//           <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
//             L’immobilier : Un secteur dynamique et essentiel
//           </h1>
//           <p className="text-gray-200 mt-3 max-w-2xl text-sm md:text-lg">
//             Découvrez les enjeux, les avantages et les opportunités du marché immobilier moderne.
//           </p>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <section className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//             Qu’est-ce que l’immobilier ?
//           </h2>
//           <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//             L’immobilier désigne l’ensemble des activités liées à l’achat, la vente, la location et 
//             la gestion de biens tels que les maisons, les appartements, les terrains et les immeubles
//             commerciaux. C’est un secteur clé de l’économie, influencé par l’évolution démographique,
//             l’urbanisation, les politiques publiques et les innovations technologiques.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <Image
//             src="immobilier2.jpg"
//             width={600}
//             height={400}
//             className="rounded-xl shadow"
//             alt="Maison moderne"
//           />
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//               Pourquoi investir dans l’immobilier ?
//             </h2>
//             <ul className="list-disc ml-5 text-gray-700 space-y-2 text-sm md:text-base">
//               <li>Un secteur stable et sécurisé.</li>
//               <li>Une forte demande en logement dans les zones urbaines.</li>
//               <li>La possibilité de générer des revenus passifs (location).</li>
//               <li>Une valeur du patrimoine qui progresse avec le temps.</li>
//               <li>Une diversification idéale pour les investisseurs.</li>
//             </ul>
//           </div>
//         </div>

//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//             Les différents types de biens immobiliers
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="bg-white p-5 rounded-xl shadow">
//               <h3 className="font-bold text-lg mb-2">Résidentiel</h3>
//               <p className="text-gray-600 text-sm">
//                 Appartements, villas, studios, maisons — destinés à l’habitation.
//               </p>
//             </div>

//             <div className="bg-white p-5 rounded-xl shadow">
//               <h3 className="font-bold text-lg mb-2">Commercial</h3>
//               <p className="text-gray-600 text-sm">
//                 Boutiques, bureaux, entrepôts, hôtels — pour les activités économiques.
//               </p>
//             </div>

//             <div className="bg-white p-5 rounded-xl shadow">
//               <h3 className="font-bold text-lg mb-2">Terrains</h3>
//               <p className="text-gray-600 text-sm">
//                 Terrains nus, agricoles ou constructibles — idéal pour les projets de long terme.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white p-8 rounded-xl shadow">
//           <h2 className="text-2xl md:text-3xl font-bold mb-3">
//             L’avenir de l’immobilier
//           </h2>
//           <p className="text-sm md:text-base">
//             Le secteur immobilier continue de se transformer grâce au digital, à l’intelligence
//             artificielle et aux innovations dans la construction durable. Les plateformes modernes
//             facilitent la recherche de biens, la gestion locative et la prise de décision pour les
//             investisseurs comme pour les particuliers.
//           </p>
//         </div>

//       </section>

//     </div>
//     </main>
//     <Footer />
//     </>
//   );
// }
// // "use client";

// // import Image from "next/image";

// // export default function ImmobilierPage() {
// //   return (
// //     <div className="min-h-screen bg-gray-50 text-gray-800">
      
// //       {/* HERO */}
// //       <section className="relative w-full h-[320px] md:h-[420px]">
// //         <Image
// //           src="/immobilier-banner.jpg"
// //           alt="Immobilier"
// //           fill
// //           className="object-cover brightness-75"
// //         />

// //         <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
// //           <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
// //             L’immobilier : Un secteur dynamique et essentiel
// //           </h1>
// //           <p className="text-gray-200 mt-3 max-w-2xl text-sm md:text-lg">
// //             Découvrez les enjeux, les avantages et les opportunités du marché immobilier moderne.
// //           </p>
// //         </div>
// //       </section>

// //       {/* CONTENT */}
// //       <section className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        
// //         <div>
// //           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// //             Qu’est-ce que l’immobilier ?
// //           </h2>
// //           <p className="text-gray-700 leading-relaxed text-sm md:text-base">
// //             L’immobilier désigne l’ensemble des activités liées à l’achat, la vente, la location et 
// //             la gestion de biens tels que les maisons, les appartements, les terrains et les immeubles
// //             commerciaux. C’est un secteur clé de l’économie, influencé par l’évolution démographique,
// //             l’urbanisation, les politiques publiques et les innovations technologiques.
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-8 items-center">
// //           <Image
// //             src="/modern-house.jpg"
// //             width={600}
// //             height={400}
// //             className="rounded-xl shadow"
// //             alt="Maison moderne"
// //           />
// //           <div>
// //             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// //               Pourquoi investir dans l’immobilier ?
// //             </h2>
// //             <ul className="list-disc ml-5 text-gray-700 space-y-2 text-sm md:text-base">
// //               <li>Un secteur stable et sécurisé.</li>
// //               <li>Une forte demande en logement dans les zones urbaines.</li>
// //               <li>La possibilité de générer des revenus passifs (location).</li>
// //               <li>Une valeur du patrimoine qui progresse avec le temps.</li>
// //               <li>Une diversification idéale pour les investisseurs.</li>
// //             </ul>
// //           </div>
// //         </div>

// //         <div>
// //           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
// //             Les différents types de biens immobiliers
// //           </h2>
// //           <div className="grid md:grid-cols-3 gap-6">
// //             <div className="bg-white p-5 rounded-xl shadow">
// //               <h3 className="font-bold text-lg mb-2">Résidentiel</h3>
// //               <p className="text-gray-600 text-sm">
// //                 Appartements, villas, studios, maisons — destinés à l’habitation.
// //               </p>
// //             </div>

// //             <div className="bg-white p-5 rounded-xl shadow">
// //               <h3 className="font-bold text-lg mb-2">Commercial</h3>
// //               <p className="text-gray-600 text-sm">
// //                 Boutiques, bureaux, entrepôts, hôtels — pour les activités économiques.
// //               </p>
// //             </div>

// //             <div className="bg-white p-5 rounded-xl shadow">
// //               <h3 className="font-bold text-lg mb-2">Terrains</h3>
// //               <p className="text-gray-600 text-sm">
// //                 Terrains nus, agricoles ou constructibles — idéal pour les projets de long terme.
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white p-8 rounded-xl shadow">
// //           <h2 className="text-2xl md:text-3xl font-bold mb-3">
// //             L’avenir de l’immobilier
// //           </h2>
// //           <p className="text-sm md:text-base">
// //             Le secteur immobilier continue de se transformer grâce au digital, à l’intelligence
// //             artificielle et aux innovations dans la construction durable. Les plateformes modernes
// //             facilitent la recherche de biens, la gestion locative et la prise de décision pour les
// //             investisseurs comme pour les particuliers.
// //           </p>
// //         </div>

// //       </section>

// //     </div>
// //   );
// // }
"use client";
import Footer from "../components/Footer";
import ImageGrid from "../components/ImageGrid";
import Navbar from "../components/Navbar";
import Image from "next/image";
import WhatsAppButton from '../components/WhatsAppButton';
import Carousels from "../components/Carousels";
export default function DiassPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Biens à Diass</h1>
       <Carousels />
        <ImageGrid filter="diass" />

        <div className="min-h-screen bg-gray-50 text-gray-800">

          {/* HERO */}
          <section className="relative w-full h-[320px] md:h-[420px]">
            <Image
              src="/immobilier1.jpg"   // ✅ corrigé
              alt="Immobilier"
              fill
              className="object-cover brightness-75"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                L’immobilier : Un secteur dynamique et essentiel
              </h1>
              <p className="text-gray-200 mt-3 max-w-2xl text-sm md:text-lg">
                Découvrez les enjeux, les avantages et les opportunités du marché immobilier moderne.
              </p>
            </div>
          </section>

          {/* CONTENT */}
          <section className="max-w-5xl mx-auto px-4 py-10 space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Qu’est-ce que l’immobilier ?
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                L’immobilier désigne l’ensemble des activités liées à l’achat, la vente, la location et 
                la gestion de biens tels que les maisons, les appartements, les terrains et les immeubles
                commerciaux.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Image
                src="/immobilier2.jpg"   // ✅ corrigé
                width={600}
                height={400}
                className="rounded-xl shadow"
                alt="Maison moderne"
              />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Pourquoi investir dans l’immobilier ?
                </h2>
                <ul className="list-disc ml-5 text-gray-700 space-y-2 text-sm md:text-base">
                  <li>Un secteur stable et sécurisé.</li>
                  <li>Une forte demande en logement.</li>
                  <li>Revenus passifs grâce à la location.</li>
                  <li>La valeur augmente dans le temps.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Les différents types de biens immobiliers
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl shadow">
                  <h3 className="font-bold text-lg mb-2">Résidentiel</h3>
                  <p className="text-gray-600 text-sm">
                    Appartements, villas, studios, maisons.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                  <h3 className="font-bold text-lg mb-2">Commercial</h3>
                  <p className="text-gray-600 text-sm">
                    Boutiques, bureaux, entrepôts.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                  <h3 className="font-bold text-lg mb-2">Terrains</h3>
                  <p className="text-gray-600 text-sm">
                    Terrains constructibles ou agricoles.
                  </p>
                </div>
              </div>
            </div>

          </section>

        </div>
      </main>

      <Footer />
        <WhatsAppButton />
    </>
  );
}
