// "use client";
// export default function Visitors() {
//   const visitors = [
//     { id: 1, name: "Amadou", date: "Aujourd’hui" },
//     { id: 2, name: "Fatou", date: "Hier" },
//   ];
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-6">Visiteurs</h1>

//       <ul className="bg-white p-4 rounded-xl shadow divide-y">
//         {visitors.map(v => (
//           <li key={v.id} className="p-3 flex justify-between">
//             <span>{v.name}</span>
//             <span className="text-gray-500">{v.date}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function VisitorsPage() {
  const [visitors, setVisitors] = useState([]);

  const fetchVisitors = async () => {
    const snapshot = await getDocs(collection(db, "visitors"));
    setVisitors(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => { fetchVisitors(); }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Visiteurs</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Nom</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Date visite</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map(v => (
            <tr key={v.id}>
              <td className="p-2 border">{v.name}</td>
              <td className="p-2 border">{v.email}</td>
              <td className="p-2 border">{v.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
