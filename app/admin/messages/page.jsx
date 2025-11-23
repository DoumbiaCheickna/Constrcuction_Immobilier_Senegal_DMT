
// "use client";
// import { useEffect, useState } from "react";
// import { listMessagesRealtime } from "../../lib/firestoreService";


// export default function MessagesPage() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const unsub = listMessagesRealtime(setMessages);
//     return () => unsub();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Messages</h1>
//       <div className="bg-white rounded-xl shadow divide-y">
//         {messages.map(m => (
//           <div key={m.id} className="p-4">
//             <div className="font-semibold">{m.name} — <span className="text-xs text-gray-400">{new Date(m.createdAt?.seconds ? m.createdAt.seconds*1000 : m.createdAt).toLocaleString()}</span></div>
//             <div className="text-gray-700 my-1">{m.msg}</div>
//             <div className="text-sm text-gray-500">{m.email} • {m.phone}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const snapshot = await getDocs(collection(db, "messages"));
    setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => { fetchMessages(); }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Nom</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(m => (
            <tr key={m.id}>
              <td className="p-2 border">{m.name}</td>
              <td className="p-2 border">{m.email}</td>
              <td className="p-2 border">{m.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
