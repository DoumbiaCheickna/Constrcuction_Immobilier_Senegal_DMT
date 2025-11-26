import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppButton from '../components/WhatsAppButton';
export const metadata = {
  title: "Notre Équipe Immobilière",
  description: "DMTC Construction avance avec une seule priorité : la qualité du travail. Chaque projet représente pour nous une responsabilité et une promesse envers nos clients.Je remercie tous ceux qui nous accompagnent dans cette vision. Ensemble, construisons solide, durable et avec confiance.",
};
export default function EquipePage() {
    const team = [
    {
      name: "Tidjane Diawara",
      role: "Le Président Directeur Général de DMTC Construction",
      desc: "Visionnaire et déterminé, il dirige DMTC Construction avec rigueur, en plaçant la qualité, la confiance et le respect des délais au centre de chaque projet. Son leadership dynamique fait de l’entreprise un acteur fiable et performant du secteur BTP.",
      img: "/photo_convertie.png",
    },
    {
      name: "Awa Ndiaye",
      role: "Conseillère Immobilier",
      desc: "Spécialiste en vente et location, elle accompagne les clients dans la recherche de biens adaptés à leurs besoins.",
      img: "/personne5.jpg",
    },
    {
      name: "Mamadou Diop",
      role: "Expert en Gestion Locative",
      desc: "Il gère la relation entre propriétaires et locataires, garantissant une expérience fluide et professionnelle.",
      img: "/personne7.jpg",
    },
    {
      name: "Fatou Sy",
      role: "Chargée de Marketing Immobilier",
      desc: "Responsable de la visibilité des biens, elle utilise des stratégies digitales modernes pour maximiser leur impact.",
      img: "/personne4.jpg",
    },
    {
      name: "Cheikh Kane",
      role: "Responsable Visites & Terrain",
      desc: "Expert du terrain, il organise les visites, fait les évaluations et assure le suivi de chaque client.",
      img: "/personne6.jpg",
    },
  ];
  return (
     <>
       <Navbar />
    <main className="max-w-7xl mx-auto px-6 py-16">
       <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">
          Notre Équipe Immobilière
        </h1>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
         DMTC Construction avance avec une seule priorité : la qualité du travail. Chaque projet représente pour nous une responsabilité et une promesse envers nos clients.Je remercie tous ceux qui nous accompagnent dans cette vision. Ensemble, construisons solide, durable et avec confiance. <span className="font-semibold">DMTC</span>,
          nous mettons en avant un service professionnel fondé sur l’écoute,
          la transparence et l’expertise.
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((person, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <div className="w-full h-48 rounded-lg bg-gray-200 overflow-hidden">
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-gray-800">
              {person.name}
            </h3>
            <p className="text-indigo-600 font-semibold">{person.role}</p>
            <p className="text-gray-600 mt-2 leading-relaxed">{person.desc}</p>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-800">Notre Mission</h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Offrir à chaque client un accompagnement personnalisé, qu’il s’agisse 
          de l’achat, la location, la vente ou la gestion de biens immobiliers.  
          Notre équipe s'engage à garantir professionnalisme, sécurité, 
          transparence et résultats.
        </p>
      </div>
    </div>
    </main>
        <Footer />
          <WhatsAppButton />
    </>
  );
}


// export default function EquipePage() {
//   const team = [
//     {
//       name: "Awa Ndiaye",
//       role: "Conseillère Immobilier",
//       desc: "Spécialiste en vente et location, elle accompagne les clients dans la recherche de biens adaptés à leurs besoins.",
//       img: "/equipe1.jpg",
//     },
//     {
//       name: "Mamadou Diop",
//       role: "Expert en Gestion Locative",
//       desc: "Il gère la relation entre propriétaires et locataires, garantissant une expérience fluide et professionnelle.",
//       img: "/equipe2.jpg",
//     },
//     {
//       name: "Fatou Sy",
//       role: "Chargée de Marketing Immobilier",
//       desc: "Responsable de la visibilité des biens, elle utilise des stratégies digitales modernes pour maximiser leur impact.",
//       img: "/equipe3.jpg",
//     },
//     {
//       name: "Cheikh Kane",
//       role: "Responsable Visites & Terrain",
//       desc: "Expert du terrain, il organise les visites, fait les évaluations et assure le suivi de chaque client.",
//       img: "/equipe4.jpg",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen py-16 px-6">
//       {/* Header */}
//       <div className="max-w-4xl mx-auto text-center mb-16">
//         <h1 className="text-4xl font-bold text-gray-800">
//           Notre Équipe Immobilière
//         </h1>
//         <p className="text-gray-600 mt-4 text-lg leading-relaxed">
//           Derrière chaque projet immobilier réussi, il y a une équipe passionnée, 
//           disponible et engagée. Chez <span className="font-semibold">DaboImmo</span>,
//           nous mettons en avant un service professionnel fondé sur l’écoute,
//           la transparence et l’expertise.
//         </p>
//       </div>

//       {/* Team Section */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {team.map((person, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
//           >
//             <div className="w-full h-48 rounded-lg bg-gray-200 overflow-hidden">
//               <img
//                 src={person.img}
//                 alt={person.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-xl font-bold mt-4 text-gray-800">
//               {person.name}
//             </h3>
//             <p className="text-indigo-600 font-semibold">{person.role}</p>
//             <p className="text-gray-600 mt-2 leading-relaxed">{person.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* Mission */}
//       <div className="max-w-4xl mx-auto text-center mt-20">
//         <h2 className="text-3xl font-bold text-gray-800">Notre Mission</h2>
//         <p className="mt-4 text-gray-600 text-lg leading-relaxed">
//           Offrir à chaque client un accompagnement personnalisé, qu’il s’agisse 
//           de l’achat, la location, la vente ou la gestion de biens immobiliers.  
//           Notre équipe s'engage à garantir professionnalisme, sécurité, 
//           transparence et résultats.
//         </p>
//       </div>
//     </div>
//   );
// }
