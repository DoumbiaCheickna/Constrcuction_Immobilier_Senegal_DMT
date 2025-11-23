// "use client";

// export default function Messages() {
//   const messages = [
//     { id: 1, name: "Awa", email: "awa@gmail.com", msg: "Je veux une visite", date: "12h" },
//     { id: 2, name: "Moussa", email: "moussa@gmail.com", msg: "Prix négociable ?", date: "Hier" }
//   ];

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-6">Messages reçus</h1>

//       <div className="bg-white rounded-xl shadow divide-y">
//         {messages.map(m => (
//           <div key={m.id} className="p-4">
//             <div className="font-semibold">{m.name} ({m.email})</div>
//             <div className="text-gray-700 my-1">{m.msg}</div>
//             <div className="text-xs text-gray-400">{m.date}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { listMessagesRealtime } from "../../../lib/firestoreService";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = listMessagesRealtime(setMessages);
    return () => unsub();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <div className="bg-white rounded-xl shadow divide-y">
        {messages.map(m => (
          <div key={m.id} className="p-4">
            <div className="font-semibold">{m.name} — <span className="text-xs text-gray-400">{new Date(m.createdAt?.seconds ? m.createdAt.seconds*1000 : m.createdAt).toLocaleString()}</span></div>
            <div className="text-gray-700 my-1">{m.msg}</div>
            <div className="text-sm text-gray-500">{m.email} • {m.phone}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
