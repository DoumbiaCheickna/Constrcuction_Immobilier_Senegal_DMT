"use client";
import { useState } from "react";
import { uploadImageFile } from "../../../lib/uploadImage";
import { createProperty } from "../../../lib/firestoreService";
import { useRouter } from "next/navigation";

export default function NewProperty() {
  const [form, setForm] = useState({ type: "", prix: "", quartier: "", description: "", salon: 0, chambres: 0, toilettes: 0, cuisine: "" });
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const handleSave = async () => {
    let imageUrl = "";
    if (file) {
      imageUrl = await uploadImageFile(file, undefined, setProgress);
    }
    await createProperty({ ...form, img: imageUrl });
    router.push("/admin/properties");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Ajouter un bien</h1>
      <div className="bg-white p-6 rounded-xl shadow max-w-2xl">
        <input name="type" placeholder="Type" value={form.type} onChange={e=>setForm({...form,type:e.target.value})} className="w-full border p-3 rounded mb-2"/>
        <input name="prix" placeholder="Prix" value={form.prix} onChange={e=>setForm({...form,prix:e.target.value})} className="w-full border p-3 rounded mb-2"/>
        <input name="quartier" placeholder="Quartier" value={form.quartier} onChange={e=>setForm({...form,quartier:e.target.value})} className="w-full border p-3 rounded mb-2"/>
        <textarea name="description" placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} className="w-full border p-3 rounded mb-2"/>

        <input type="file" onChange={e=>setFile(e.target.files[0])} className="mb-2"/>
        {progress>0 && <div className="text-sm mb-2">Upload {progress}%</div>}

        <div className="flex gap-2">
          <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded">Enregistrer</button>
        </div>
      </div>
    </div>
  );
}
