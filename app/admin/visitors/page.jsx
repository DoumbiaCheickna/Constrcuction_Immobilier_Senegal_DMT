"use client";
import { useEffect, useState } from "react";
import RequireAuth from "../../components/RequireAuth";
import { db } from "../../lib/firebaseClient";
import { collection, getDocs } from "firebase/firestore";

export default function AdminVisitors() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // load visitors on mount
    loadVisitors();
  }, []);

  // extract loader so it can be reused (retry button)
  async function loadVisitors() {
    try {
      setError(null);
      setLoading(true);
      const q = collection(db, "visitors");
      const snap = await getDocs(q);
      const arr = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      // Sort by createdAt (newest first)
      const toMs = v => (v && typeof v.toMillis === 'function') ? v.toMillis() : (v ? new Date(v).getTime() : 0);
      arr.sort((a, b) => toMs(b.createdAt) - toMs(a.createdAt));
      setItems(arr);
    } catch (e) {
      console.error("Error fetching visitors:", e);
      setError(e && e.message ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }

  return (
    <RequireAuth adminOnly>
      <div>
        <h2 className="text-xl font-semibold mb-4">Visiteurs</h2>
        {loading ? <div>Chargement...</div> : (
          error ? (
            <div className="p-4 bg-yellow-100 rounded">
              <div className="font-semibold text-red-600">Erreur lors du chargement des visiteurs</div>
              <div className="text-sm text-gray-700">{error}</div>
              <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded" onClick={() => { setLoading(true); setItems([]); loadVisitors(); }}>Réessayer</button>
            </div>
          ) : (
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
        ))}
      </div>
    </RequireAuth>
  );
}
