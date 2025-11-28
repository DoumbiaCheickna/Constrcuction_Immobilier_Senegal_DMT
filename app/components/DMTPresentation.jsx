// // // pages/index.js
// // "use client";
// // import Head from 'next/head'
// // import { useState } from 'react'

// // export default function DMTPresentation() {
// //   const [activeSection, setActiveSection] = useState('presentation')

// //   const companyData = {
// //     presentation: {
// //       title: "Présentation de l'Entreprise",
// //       content: `Dynamics Matériaux Travaux de Construction (DMTC) est une SUARL (Société Unipersonnelle A Responsabilité Limitée) au capital de 10.000.000 de francs CFA, spécialisée dans les travaux de génie civil, l'assainissement, les travaux publics, le terrassement et le génie rural.`
// //     },
// //     realisations: {
// //       title: "Nos Réalisations",
// //       projects: [
// //         "Construction de 100 logements sociaux en 4 mois",
// //         "35 villas grand standing à Mariste",
// //         "Bassins de rétention",
// //         "Écoles et centres de santé",
// //         "Infrastructures publiques"
// //       ]
// //     },
// //     organisation: {
// //       title: "Organisation",
// //       structure: {
// //         "Direction Générale": ["Directeur Général", "Directrice Générale Adjointe", "Secrétaire Général"],
// //         "Direction Administrative et Financière": ["Service Comptabilité", "Service Informatique", "Service Approvisionnement"],
// //         "Direction Technique": ["Service Études", "Service Dessin", "Service Réalisation"]
// //       }
// //     },
// //     certifications: {
// //       title: "Certifications et Reconnaissances",
// //       items: [
// //         "Promoteur agréé par l'État du Sénégal",
// //         "Félicité par l'État dans le programme Tawfekh Yaakaar 2013",
// //         "Première entreprise à terminer le lot parmi les 20 entreprises retenues"
// //       ]
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
// //       <nav className="bg-blue-800 text-white sticky top-0 z-10">
// //         <div className="container mx-auto px-4">
// //           <div className="flex overflow-x-auto space-x-8 py-4">
// //             {Object.keys(companyData).map((section) => (
// //               <button
// //                 key={section}
// //                 onClick={() => setActiveSection(section)}
// //                 className={`whitespace-nowrap px-4 py-2 rounded-lg transition-all ${
// //                   activeSection === section 
// //                     ? 'bg-white text-blue-800 font-semibold' 
// //                     : 'hover:bg-blue-700'
// //                 }`}
// //               >
// //                 {companyData[section].title}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </nav>
// //       <main className="container mx-auto px-4 py-8">
// //         {activeSection === 'presentation' && (
// //           <div className="bg-white rounded-2xl shadow-xl p-8">
// //             <h2 className="text-3xl font-bold text-gray-800 mb-6">Présentation de l'Entreprise</h2>
            
// //             <div className="grid md:grid-cols-2 gap-8">
// //               <div>
// //                 <h3 className="text-xl font-semibold text-blue-800 mb-4">Notre Histoire</h3>
// //                 <p className="text-gray-700 leading-relaxed mb-6">
// //                   {companyData.presentation.content}
// //                 </p>
// //                 <p className="text-gray-700 leading-relaxed">
// //                   Ayant commencé son activité par la réalisation de bassins de rétention, 
// //                   l'entreprise a véritablement trouvé ses marques dans les travaux de Génie Civil 
// //                   et de construction de bâtiments.
// //                 </p>
// //               </div>
              
// //               <div className="bg-blue-50 rounded-xl p-6">
// //                 <h3 className="text-xl font-semibold text-blue-800 mb-4">Nos Spécialités</h3>
// //                 <ul className="space-y-3">
// //                   {[
// //                     "Travaux de génie civil",
// //                     "Assainissement",
// //                     "Travaux publics", 
// //                     "Terrassement",
// //                     "Génie rural",
// //                     "Construction de bâtiments"
// //                   ].map((specialty, index) => (
// //                     <li key={index} className="flex items-center">
// //                       <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
// //                       <span className="text-gray-700">{specialty}</span>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>

// //             {/* Resources Humaines */}
// //             <div className="mt-12">
// //               <h3 className="text-2xl font-bold text-gray-800 mb-6">Ressources Humaines</h3>
// //               <div className="grid md:grid-cols-3 gap-6">
// //                 <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-white rounded-xl shadow-md">
// //                   <div className="text-4xl font-bold text-blue-800 mb-2">100+</div>
// //                   <div className="text-gray-700">Employés permanents</div>
// //                 </div>
// //                 <div className="text-center p-6 bg-gradient-to-br from-green-100 to-white rounded-xl shadow-md">
// //                   <div className="text-4xl font-bold text-green-800 mb-2">Équipe</div>
// //                   <div className="text-gray-700">Pluridisciplinaire et qualifiée</div>
// //                 </div>
// //                 <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-white rounded-xl shadow-md">
// //                   <div className="text-4xl font-bold text-purple-800 mb-2">Experts</div>
// //                   <div className="text-gray-700">Ingénieurs et techniciens spécialisés</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Réalisations Section */}
// //         {activeSection === 'realisations' && (
// //           <div className="bg-white rounded-2xl shadow-xl p-8">
// //             <h2 className="text-3xl font-bold text-gray-800 mb-8">Nos Réalisations</h2>
            
// //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
// //               {companyData.realisations.projects.map((project, index) => (
// //                 <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md border border-blue-100">
// //                   <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
// //                     <span className="text-white font-bold text-lg">✓</span>
// //                   </div>
// //                   <h3 className="font-semibold text-gray-800 mb-2">{project}</h3>
// //                   <div className="text-sm text-green-600 font-medium">✓ Livré et réceptionné</div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Stats */}
// //             <div className="bg-gray-50 rounded-xl p-6">
// //               <h3 className="text-xl font-semibold text-gray-800 mb-4">Chiffres Clés</h3>
// //               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
// //                 <div className="p-4">
// //                   <div className="text-2xl font-bold text-blue-800">39+</div>
// //                   <div className="text-sm text-gray-600">Projets majeurs</div>
// //                 </div>
// //                 <div className="p-4">
// //                   <div className="text-2xl font-bold text-green-800">100%</div>
// //                   <div className="text-sm text-gray-600">Livraison dans les délais</div>
// //                 </div>
// //                 <div className="p-4">
// //                   <div className="text-2xl font-bold text-purple-800">15+</div>
// //                   <div className="text-sm text-gray-600">Régions couvertes</div>
// //                 </div>
// //                 <div className="p-4">
// //                   <div className="text-2xl font-bold text-orange-800">2013</div>
// //                   <div className="text-sm text-gray-600">Promoteur agréé</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Organisation Section */}
// //         {activeSection === 'organisation' && (
// //           <div className="bg-white rounded-2xl shadow-xl p-8">
// //             <h2 className="text-3xl font-bold text-gray-800 mb-8">Structure Organisationnelle</h2>
            
// //             <div className="space-y-8">
// //               {Object.entries(companyData.organisation.structure).map(([department, roles]) => (
// //                 <div key={department} className="border-l-4 border-blue-600 pl-6">
// //                   <h3 className="text-xl font-bold text-blue-800 mb-4">{department}</h3>
// //                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                     {roles.map((role, index) => (
// //                       <div key={index} className="bg-gray-50 rounded-lg p-4">
// //                         <div className="flex items-center">
// //                           <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
// //                           <span className="text-gray-700">{role}</span>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Management */}
// //             <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
// //               <h3 className="text-2xl font-bold mb-4">Direction Générale</h3>
// //               <div className="grid md:grid-cols-2 gap-6">
// //                 <div>
// //                   <h4 className="font-semibold text-blue-200">Administrateur Unique</h4>
// //                   <p className="text-xl">Monsieur DIAWARA Tidjane</p>
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold text-blue-200">Siège Social</h4>
// //                   <p className="text-lg">Amitié 2 Immeuble SILÈNE - Dakar</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Certifications Section */}
// //         {activeSection === 'certifications' && (
// //           <div className="bg-white rounded-2xl shadow-xl p-8">
// //             <h2 className="text-3xl font-bold text-gray-800 mb-8">Reconnaissances Officielles</h2>
            
// //             <div className="space-y-6">
// //               {companyData.certifications.items.map((item, index) => (
// //                 <div key={index} className="flex items-start p-6 bg-gradient-to-r from-green-50 to-white rounded-xl border border-green-200">
// //                   <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
// //                     <span className="text-white font-bold">✓</span>
// //                   </div>
// //                   <p className="text-lg text-gray-800">{item}</p>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Agrément */}
// //             <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
// //               <h3 className="text-xl font-bold text-yellow-800 mb-3">Agrément Officiel</h3>
// //               <p className="text-gray-700 mb-4">
// //                 Arrêté n° 00001 du 04 janvier 2013 portant création de la Commission d'Agrément des Promoteurs immobiliers privés
// //               </p>
// //               <div className="text-sm text-gray-600">
// //                 Valable pour une durée de deux ans - Renouvelable
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </main>

// //     </div>
// //   )
// // }
// "use client";
// import Head from 'next/head'
// import { useState, useEffect } from 'react'

// export default function DMTPresentation() {
//   const [activeSection, setActiveSection] = useState('presentation')
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   const companyData = {
//     presentation: {
//       title: "Présentation",
//       icon: "🏢",
//       content: `Dynamics Matériaux Travaux de Construction (DMTC) est une SUARL (Société Unipersonnelle A Responsabilité Limitée) au capital de 10.000.000 de francs CFA, spécialisée dans les travaux de génie civil, l'assainissement, les travaux publics, le terrassement et le génie rural.`,
//       specialties: [
//         "Travaux de génie civil",
//         "Assainissement",
//         "Travaux publics", 
//         "Terrassement",
//         "Génie rural",
//         "Construction de bâtiments"
//       ]
//     },
//     realisations: {
//       title: "Nos Réalisations",
//       icon: "🏗️",
//       projects: [
//         {
//           title: "Construction de 100 logements sociaux en 4 mois",
//           location: "Tivaouane Peulh-Niaga",
//           status: "Livré"
//         },
//         {
//           title: "35 villas grand standing",
//           location: "Mariste près de l'autoroute à péage",
//           status: "Livré"
//         },
//         {
//           title: "Bassins de rétention",
//           location: "Multiple sites à Dakar",
//           status: "Livré"
//         },
//         {
//           title: "Écoles et centres de santé",
//           location: "Région de Kaolack et Matam",
//           status: "Livré"
//         },
//         {
//           title: "Infrastructures publiques",
//           location: "Nationwide",
//           status: "Livré"
//         },
//         {
//           title: "Villas de standing",
//           location: "Almadies, Cerf Volant, VDN",
//           status: "Livré"
//         }
//       ]
//     },
//     organisation: {
//       title: "Organisation",
//       icon: "📊",
//       structure: {
//         "Direction Générale": [
//           "Directeur Général - M. DIAWARA Tidjane",
//           "Directrice Générale Adjointe",
//           "Secrétaire Général"
//         ],
//         "Direction Administrative et Financière": [
//           "Service Comptabilité",
//           "Service Informatique", 
//           "Service Approvisionnement"
//         ],
//         "Direction Technique": [
//           "Service Études (2 ingénieurs + 1 technicien)",
//           "Service Dessin (architecte + dessinateurs)",
//           "Service Réalisation (2 ingénieurs GC + 3 techniciens)"
//         ]
//       }
//     },
//     certifications: {
//       title: "Certifications",
//       icon: "⭐",
//       items: [
//         {
//           title: "Promoteur agréé par l'État du Sénégal",
//           description: "Arrêté n° 00001 du 04 janvier 2013",
//           year: "2013"
//         },
//         {
//           title: "Félicité par l'État dans le programme Tawfekh Yaakaar",
//           description: "Reconnaissance nationale pour excellence",
//           year: "2013"
//         },
//         {
//           title: "Première entreprise à terminer le lot",
//           description: "Parmi les 20 entreprises retenues",
//           year: "2013"
//         }
//       ]
//     }
//   }

//   const stats = [
//     { value: "100+", label: "Employés permanents", color: "from-blue-500 to-cyan-500" },
//     { value: "39+", label: "Projets livrés", color: "from-green-500 to-emerald-500" },
//     { value: "15+", label: "Régions couvertes", color: "from-purple-500 to-violet-500" },
//     { value: "100%", label: "Satisfaction client", color: "from-orange-500 to-red-500" }
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
//       <Head>
//         <title>DMT Construction - Leader en BTP au Sénégal</title>
//         <meta name="description" content="Dynamics Matériaux Travaux de Construction - Expertise en génie civil, construction et travaux publics" />
//       </Head>

//       {/* Enhanced Navigation */}
//       <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-sm">
//         <div className="container mx-auto px-4">
//           <div className="flex overflow-x-auto space-x-1 py-4 scrollbar-hide">
//             {Object.entries(companyData).map(([key, section]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveSection(key)}
//                 className={`flex items-center space-x-2 whitespace-nowrap px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
//                   activeSection === key 
//                     ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
//                     : 'text-gray-600 hover:bg-white hover:shadow-md hover:border hover:border-gray-100'
//                 }`}
//               >
//                 <span className="text-lg">{section.icon}</span>
//                 <span className="font-semibold">{section.title}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Main Content with Smooth Transitions */}
//       <main className="container mx-auto px-4 py-8">
//         <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
//           {/* Stats Overview */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {stats.map((stat, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
//                   {stat.value}
//                 </div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* Présentation Section */}
//           {activeSection === 'presentation' && (
//             <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
//               <div className="flex items-center space-x-4 mb-8">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
//                   <span className="text-2xl text-white">🏢</span>
//                 </div>
//                 <div>
//                   <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
//                     Présentation de l'Entreprise
//                   </h2>
//                   <p className="text-gray-500">Expertise et excellence depuis nos débuts</p>
//                 </div>
//               </div>
              
//               <div className="grid lg:grid-cols-2 gap-12">
//                 <div className="space-y-6">
//                   <div className="prose prose-lg">
//                     <p className="text-gray-700 leading-relaxed text-lg">
//                       {companyData.presentation.content}
//                     </p>
//                     <p className="text-gray-700 leading-relaxed text-lg">
//                       Ayant commencé son activité par la réalisation de bassins de rétention, 
//                       l'entreprise a véritablement trouvé ses marques dans les travaux de Génie Civil 
//                       et de construction de bâtiments.
//                     </p>
//                   </div>
                  
//                   <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
//                     <h4 className="font-semibold text-blue-800 mb-3 text-lg">📍 Siège Social</h4>
//                     <p className="text-gray-700">Amitié 2 Immeuble SILÈNE - Dakar, Sénégal</p>
//                   </div>
//                 </div>
                
//                 <div className="space-y-6">
//                   <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//                       <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
//                       Nos Domaines d'Expertise
//                     </h3>
//                     <div className="grid gap-4">
//                       {companyData.presentation.specialties.map((specialty, index) => (
//                         <div 
//                           key={index}
//                           className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
//                         >
//                           <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
//                           <span className="text-gray-700 font-medium">{specialty}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Leadership */}
//               <div className="mt-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 text-white">
//                 <div className="grid lg:grid-cols-2 gap-8 items-center">
//                   <div>
//                     <h3 className="text-3xl font-bold mb-4">Direction Générale</h3>
//                     <div className="space-y-3">
//                       <div className="flex items-center space-x-3">
//                         <div className="w-2 h-2 bg-white rounded-full"></div>
//                         <span className="text-blue-100 font-semibold">Administrateur Unique</span>
//                       </div>
//                       <p className="text-2xl font-bold">Monsieur DIAWARA Tidjane</p>
//                     </div>
//                   </div>
//                   <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
//                     <h4 className="font-semibold text-blue-200 mb-2">Capital Social</h4>
//                     <p className="text-2xl font-bold">10.000.000 FCFA</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Réalisations Section */}
//           {activeSection === 'realisations' && (
//             <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
//               <div className="flex items-center space-x-4 mb-8">
//                 <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
//                   <span className="text-2xl text-white">🏗️</span>
//                 </div>
//                 <div>
//                   <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-green-800 bg-clip-text text-transparent">
//                     Nos Réalisations
//                   </h2>
//                   <p className="text-gray-500">Projets livrés avec excellence à travers le Sénégal</p>
//                 </div>
//               </div>
              
//               <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
//                 {companyData.realisations.projects.map((project, index) => (
//                   <div 
//                     key={index}
//                     className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
//                   >
//                     <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                       <span className="text-2xl text-white">✓</span>
//                     </div>
//                     <h3 className="font-bold text-gray-800 mb-3 text-lg group-hover:text-green-700 transition-colors">
//                       {project.title}
//                     </h3>
//                     <div className="flex items-center text-gray-600 mb-3">
//                       <span className="text-sm">📍 {project.location}</span>
//                     </div>
//                     <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
//                       ✅ {project.status}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Achievement Badge */}
//               <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white text-center">
//                 <div className="flex items-center justify-center space-x-4">
//                   <div className="text-3xl">🏆</div>
//                   <div>
//                     <h3 className="text-xl font-bold">Première Entreprise Classée</h3>
//                     <p className="text-yellow-100">Terminaison du lot parmi les 20 entreprises retenues</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Organisation Section */}
//           {activeSection === 'organisation' && (
//             <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
//               <div className="flex items-center space-x-4 mb-8">
//                 <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
//                   <span className="text-2xl text-white">📊</span>
//                 </div>
//                 <div>
//                   <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-purple-800 bg-clip-text text-transparent">
//                     Structure Organisationnelle
//                   </h2>
//                   <p className="text-gray-500">Une équipe pluridisciplinaire et qualifiée</p>
//                 </div>
//               </div>
              
//               <div className="space-y-8">
//                 {Object.entries(companyData.organisation.structure).map(([department, roles], deptIndex) => (
//                   <div 
//                     key={department}
//                     className="border-l-4 border-purple-500 pl-6 ml-4 hover:border-purple-600 transition-colors duration-300"
//                   >
//                     <div className="flex items-center space-x-3 mb-6">
//                       <div className={`w-4 h-4 rounded-full ${
//                         deptIndex === 0 ? 'bg-blue-500' : 
//                         deptIndex === 1 ? 'bg-green-500' : 'bg-purple-500'
//                       }`}></div>
//                       <h3 className="text-2xl font-bold text-gray-800">{department}</h3>
//                     </div>
//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                       {roles.map((role, index) => (
//                         <div 
//                           key={index}
//                           className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300"
//                         >
//                           <div className="flex items-start space-x-3">
//                             <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
//                             <span className="text-gray-700 leading-relaxed">{role}</span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Team Stats */}
//               <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
//                 <div className="text-center p-6 bg-blue-50 rounded-2xl">
//                   <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
//                   <div className="text-gray-600 font-medium">Employés</div>
//                 </div>
//                 <div className="text-center p-6 bg-green-50 rounded-2xl">
//                   <div className="text-3xl font-bold text-green-600 mb-2">Multi</div>
//                   <div className="text-gray-600 font-medium">Disciplines</div>
//                 </div>
//                 <div className="text-center p-6 bg-purple-50 rounded-2xl">
//                   <div className="text-3xl font-bold text-purple-600 mb-2">Experts</div>
//                   <div className="text-gray-600 font-medium">Qualifiés</div>
//                 </div>
//                 <div className="text-center p-6 bg-orange-50 rounded-2xl">
//                   <div className="text-3xl font-bold text-orange-600 mb-2">+Temp</div>
//                   <div className="text-gray-600 font-medium">Spécialistes</div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Certifications Section */}
//           {activeSection === 'certifications' && (
//             <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
//               <div className="flex items-center space-x-4 mb-8">
//                 <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
//                   <span className="text-2xl text-white">⭐</span>
//                 </div>
//                 <div>
//                   <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-orange-800 bg-clip-text text-transparent">
//                     Reconnaissances Officielles
//                   </h2>
//                   <p className="text-gray-500">Certifications et distinctions nationales</p>
//                 </div>
//               </div>
              
//               <div className="space-y-6 mb-8">
//                 {companyData.certifications.items.map((item, index) => (
//                   <div 
//                     key={index}
//                     className="group bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-500"
//                   >
//                     <div className="flex items-start space-x-4">
//                       <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                         <span className="text-xl text-white">🏅</span>
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between mb-2">
//                           <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
//                           <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-bold">
//                             {item.year}
//                           </span>
//                         </div>
//                         <p className="text-gray-600">{item.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Official Agreement */}
//               <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 border-2 border-yellow-200">
//                 <div className="flex items-center space-x-4 mb-4">
//                   <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
//                     <span className="text-white text-lg">📜</span>
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-yellow-800">Agrément Officiel</h3>
//                     <p className="text-yellow-700">Ministère du Renouveau Urbain, de l'Habitat et du Cadre de Vie</p>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   <p className="text-gray-700">
//                     <strong>Référence :</strong> Arrêté n° 00001 du 04 janvier 2013 portant création de la Commission d'Agrément des Promoteurs immobiliers privés
//                   </p>
//                   <div className="flex items-center space-x-2 text-sm text-gray-600">
//                     <span>✅</span>
//                     <span>Valable pour une durée de deux ans - Renouvelable</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   )
// }
"use client";
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function DMTPresentation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const companyData = {
    presentation: {
      title: "Présentation",
      icon: "🏢",
      content: `Dynamics Matériaux Travaux de Construction (DMTC) est une SUARL (Société Unipersonnelle A Responsabilité Limitée) au capital de 10.000.000 de francs CFA, spécialisée dans les travaux de génie civil, l'assainissement, les travaux publics, le terrassement et le génie rural.`,
      specialties: [
        "Travaux de génie civil",
        "Assainissement",
        "Travaux publics", 
        "Terrassement",
        "Génie rural",
        "Construction de bâtiments"
      ]
    },
    realisations: {
      title: "Nos Réalisations",
      icon: "🏗️",
      projects: [
        {
          title: "Construction de 100 logements sociaux en 4 mois",
          location: "Tivaouane Peulh-Niaga",
          status: "Livré"
        },
        {
          title: "35 villas grand standing",
          location: "Mariste près de l'autoroute à péage",
          status: "Livré"
        },
        {
          title: "Bassins de rétention",
          location: "Multiple sites à Dakar",
          status: "Livré"
        },
        {
          title: "Écoles et centres de santé",
          location: "Région de Kaolack et Matam",
          status: "Livré"
        },
        {
          title: "Infrastructures publiques",
          location: "Nationwide",
          status: "Livré"
        },
        {
          title: "Villas de standing",
          location: "Almadies, Cerf Volant, VDN",
          status: "Livré"
        }
      ]
    },
    organisation: {
      title: "Organisation",
      icon: "📊",
      structure: {
        "Direction Générale": [
          "Directeur Général - M. DIAWARA Tidjane",
          "Directrice Générale Adjointe",
          "Secrétaire Général"
        ],
        "Direction Administrative et Financière": [
          "Service Comptabilité",
          "Service Informatique", 
          "Service Approvisionnement"
        ],
        "Direction Technique": [
          "Service Études (2 ingénieurs + 1 technicien)",
          "Service Dessin (architecte + dessinateurs)",
          "Service Réalisation (2 ingénieurs GC + 3 techniciens)"
        ]
      }
    },
    certifications: {
      title: "Certifications",
      icon: "⭐",
      items: [
        {
          title: "Promoteur agréé par l'État du Sénégal",
          description: "Arrêté n° 00001 du 04 janvier 2013",
          year: "2013"
        },
        {
          title: "Félicité par l'État dans le programme Tawfekh Yaakaar",
          description: "Reconnaissance nationale pour excellence",
          year: "2013"
        },
        {
          title: "Première entreprise à terminer le lot",
          description: "Parmi les 20 entreprises retenues",
          year: "2013"
        }
      ]
    }
  }

  const stats = [
    { value: "100+", label: "Employés permanents", color: "from-blue-500 to-cyan-500" },
    { value: "39+", label: "Projets livrés", color: "from-green-500 to-emerald-500" },
    { value: "15+", label: "Régions couvertes", color: "from-purple-500 to-violet-500" },
    { value: "100%", label: "Satisfaction client", color: "from-orange-500 to-red-500" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Head>
        <title>DMT Construction - Leader en BTP au Sénégal</title>
        <meta name="description" content="Dynamics Matériaux Travaux de Construction - Expertise en génie civil, construction et travaux publics" />
      </Head>

      {/* Main Content with All Sections in Scroll */}
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Stats Overview */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Présentation Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-2xl text-white">🏢</span>
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent">
                Présentation de l'Entreprise
              </h2>
              <p className="text-gray-500">Expertise et excellence depuis nos débuts</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {companyData.presentation.content}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ayant commencé son activité par la réalisation de bassins de rétention, 
                  l'entreprise a véritablement trouvé ses marques dans les travaux de Génie Civil 
                  et de construction de bâtiments.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-3 text-lg">📍 Siège Social</h4>
                <p className="text-gray-700">Amitié 2 Immeuble SILÈNE - Dakar, Sénégal</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
                  Nos Domaines d'Expertise
                </h3>
                <div className="grid gap-4">
                  {companyData.presentation.specialties.map((specialty, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                      <span className="text-gray-700 font-medium">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Direction Générale</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-blue-100 font-semibold">Administrateur Unique</span>
                  </div>
                  <p className="text-2xl font-bold">Monsieur DIAWARA Tidjane</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="font-semibold text-blue-200 mb-2">Capital Social</h4>
                <p className="text-2xl font-bold">10.000.000 FCFA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Réalisations Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
              <span className="text-2xl text-white">🏗️</span>
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-green-800 bg-clip-text text-transparent">
                Nos Réalisations
              </h2>
              <p className="text-gray-500">Projets livrés avec excellence à travers le Sénégal</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {companyData.realisations.projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">✓</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg group-hover:text-green-700 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <span className="text-sm">📍 {project.location}</span>
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  ✅ {project.status}
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Badge */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-white text-center">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-3xl">🏆</div>
              <div>
                <h3 className="text-xl font-bold">Première Entreprise Classée</h3>
                <p className="text-yellow-100">Terminaison du lot parmi les 20 entreprises retenues</p>
              </div>
            </div>
          </div>
        </div>

        {/* Organisation Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
              <span className="text-2xl text-white">📊</span>
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-purple-800 bg-clip-text text-transparent">
                Structure Organisationnelle
              </h2>
              <p className="text-gray-500">Une équipe pluridisciplinaire et qualifiée</p>
            </div>
          </div>
          
          <div className="space-y-8">
            {Object.entries(companyData.organisation.structure).map(([department, roles], deptIndex) => (
              <div 
                key={department}
                className="border-l-4 border-purple-500 pl-6 ml-4 hover:border-purple-600 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-4 h-4 rounded-full ${
                    deptIndex === 0 ? 'bg-blue-500' : 
                    deptIndex === 1 ? 'bg-green-500' : 'bg-purple-500'
                  }`}></div>
                  <h3 className="text-2xl font-bold text-gray-800">{department}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {roles.map((role, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Employés</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-2">Multi</div>
              <div className="text-gray-600 font-medium">Disciplines</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">Experts</div>
              <div className="text-gray-600 font-medium">Qualifiés</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">+Temp</div>
              <div className="text-gray-600 font-medium">Spécialistes</div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
              <span className="text-2xl text-white">⭐</span>
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-orange-800 bg-clip-text text-transparent">
                Reconnaissances Officielles
              </h2>
              <p className="text-gray-500">Certifications et distinctions nationales</p>
            </div>
          </div>
          
          <div className="space-y-6 mb-8">
            {companyData.certifications.items.map((item, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl text-white">🏅</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-bold">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Official Agreement */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 border-2 border-yellow-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">📜</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-800">Agrément Officiel</h3>
                <p className="text-yellow-700">Ministère du Renouveau Urbain, de l'Habitat et du Cadre de Vie</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Référence :</strong> Arrêté n° 00001 du 04 janvier 2013 portant création de la Commission d'Agrément des Promoteurs immobiliers privés
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>✅</span>
                <span>Valable pour une durée de deux ans - Renouvelable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à Démarrer Votre Projet ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Confiez-nous votre projet de construction et bénéficiez de l'expertise d'une entreprise reconnue et certifiée par l'État sénégalais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              📞 Nous Contacter
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors duration-300">
              📋 Demander un Devis
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}