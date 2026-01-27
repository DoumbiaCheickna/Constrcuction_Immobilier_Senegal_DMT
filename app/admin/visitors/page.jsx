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
        const arr = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        // Sort by createdAt (newest first)
        const toMs = v => (v && typeof v.toMillis === 'function') ? v.toMillis() : (v ? new Date(v).getTime() : 0);
        arr.sort((a, b) => toMs(b.createdAt) - toMs(a.createdAt));
        setItems(arr);
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
            {items.map(it => {
              const created = it.createdAt?.toDate ? it.createdAt.toDate() : (it.createdAt ? new Date(it.createdAt) : null);
              return (
                <li key={it.id} className="bg-white p-3 rounded shadow">
                  <div className="font-semibold">{it.name || it.email || "Visiteur"}</div>
                  <div className="text-sm text-gray-600">ID: {it.id}</div>
                  {it.ip && <div className="text-sm">IP: {it.ip}</div>}
                  {it.url && <div className="text-sm">URL: {it.url}</div>}
                  {created && <div className="text-xs text-gray-500">Visité le {created.toLocaleString()}</div>}
                </li>
              );
            })}
            {items.length === 0 && <li>Aucun visiteur.</li>}
          </ul>
        )}
      </div>
    </RequireAuth>
  );
}
