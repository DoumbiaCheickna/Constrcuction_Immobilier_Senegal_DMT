"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { listProperties, deleteProperty } from "../../../lib/firestoreService";

export default function PropertiesPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    listProperties().then(setItems);
  }, []);

  async function handleDelete(id) {
    if (!confirm("Supprimer cette annonce ?")) return;
    await deleteProperty(id);
    setItems(prev => prev.filter(i => i.id !== id));
  }

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Biens immobiliers</h1>
        <Link href="/admin/properties/new" className="px-4 py-2 bg-blue-600 text-white rounded-lg">+ Nouveau</Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Prix</th>
              <th className="p-3 text-left">Quartier</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{item.type}</td>
                <td className="p-3">{item.prix}</td>
                <td className="p-3">{item.quartier}</td>
                <td className="p-3 text-right">
                  <Link href={`/admin/properties/${item.id}`} className="text-blue-600 mr-4">Modifier</Link>
                  <button onClick={()=>handleDelete(item.id)} className="text-red-600">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
