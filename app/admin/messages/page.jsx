
"use client";
import { useEffect, useState } from "react";
import { listMessagesRealtime } from "../../lib/firestoreService";


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
