
// export default function AdminDashboard() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="p-4 bg-white shadow rounded-xl">
//           <h2 className="text-lg font-semibold">Biens</h2>
//           <p className="text-gray-500">Voir et gérer les villas, studios, appartements…</p>
//         </div>

//         <div className="p-4 bg-white shadow rounded-xl">
//           <h2 className="text-lg font-semibold">Visiteurs</h2>
//           <p className="text-gray-500">Liste des utilisateurs ayant visité le site.</p>
//         </div>

//         <div className="p-4 bg-white shadow rounded-xl">
//           <h2 className="text-lg font-semibold">Messages</h2>
//           <p className="text-gray-500">Voir les messages reçus.</p>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded">📦 Total Biens: 0</div>
        <div className="p-4 bg-white shadow rounded">👤 Total Visiteurs: 0</div>
        <div className="p-4 bg-white shadow rounded">💬 Total Messages: 0</div>
      </div>
    </div>
  );
}
