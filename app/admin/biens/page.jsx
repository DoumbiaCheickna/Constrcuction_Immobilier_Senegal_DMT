"use client";
import { useEffect, useState } from "react";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";
import { db } from "../../firebase/config";

export default function BiensList() {
  const [biens, setBiens] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "biens")).then((snap) => {
      setBiens(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  }, []);

  const deleteBien = async (id) => {
    await deleteDoc(doc(db, "biens", id));
    setBiens(biens.filter(b => b.id !== id));
  };

  return (
    <main className="p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Biens immobiliers</h1>
        <Link href="/admin/biens/new" className="btn-primary">➕ Ajouter</Link>
      </div>

      <table className="w-full bg-white shadow rounded-xl overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Image</th>
            <th className="p-3">Titre</th>
            <th className="p-3">Type</th>
            <th className="p-3">Prix</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {biens.map((b) => (
            <tr key={b.id} className="border-t">
              <td className="p-3">
                <img src={b.images?.[0]} className="h-16 w-24 object-cover rounded" />
              </td>
              <td className="p-3 font-semibold">{b.titre}</td>
              <td className="p-3">{b.type}</td>
              <td className="p-3">{b.prix} FCFA</td>
              <td className="p-3 flex gap-3">
                <Link href={`/admin/biens/${b.id}`} className="text-blue-600">Modifier</Link>
                <button onClick={() => deleteBien(b.id)} className="text-red-600">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
