// export default function AdminDashboard() {
//   return (
//     <main className="p-10">
//       <h1 className="text-3xl font-bold">Dashboard Admin</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//         <div className="p-6 bg-white shadow rounded-xl">
//           <h3 className="text-gray-500">Total Biens</h3>
//           <p className="text-2xl font-bold">—</p>
//         </div>

//         <div className="p-6 bg-white shadow rounded-xl">
//           <h3 className="text-gray-500">Messages reçus</h3>
//           <p className="text-2xl font-bold">—</p>
//         </div>

//         <div className="p-6 bg-white shadow rounded-xl">
//           <h3 className="text-gray-500">Visiteurs</h3>
//           <p className="text-2xl font-bold">—</p>
//         </div>
//       </div>
//     </main>
//   );
// }
export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-lg font-semibold">Biens</h2>
          <p className="text-gray-500">Voir et gérer les villas, studios, appartements…</p>
        </div>

        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-lg font-semibold">Visiteurs</h2>
          <p className="text-gray-500">Liste des utilisateurs ayant visité le site.</p>
        </div>

        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-lg font-semibold">Messages</h2>
          <p className="text-gray-500">Voir les messages reçus.</p>
        </div>
      </div>
    </div>
  );
}
