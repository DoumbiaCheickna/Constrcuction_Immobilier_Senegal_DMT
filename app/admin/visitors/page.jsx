"use client";
import { useEffect, useState } from "react";
import RequireAuth from "../../components/RequireAuth";
import { db } from "../../lib/firebaseClient";
import { collection, getDocs } from "firebase/firestore";

export default function AdminVisitors() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const q = collection(db, "visitors");
        const snap = await getDocs(q);
        setItems(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (e) {
        console.error("Error fetching visitors:", e);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  return (
    <RequireAuth adminOnly>
      <div>
        <h2 className="text-xl font-semibold mb-4">Visiteurs</h2>
        {loading ? <div>Chargement...</div> : (
          <ul className="space-y-2">
            {items.map(it => (
              <li key={it.id} className="bg-white p-3 rounded shadow">
                <div className="font-semibold">{it.name || it.email || "Visiteur"}</div>
                <div className="text-sm text-gray-600">ID: {it.id}</div>
              </li>
            ))}
            {items.length === 0 && <li>Aucun visiteur.</li>}
          </ul>
        )}
      </div>
    </RequireAuth>
  );
}
