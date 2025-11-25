
"use client";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase/config";

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const [prix, setPrix] = useState("");
  const [quartier, setQuartier] = useState("");
  const [type, setType] = useState("Appartement");
  const [adresse, setAdresse] = useState("");
  const [salon, setSalon] = useState("");
  const [chambres, setChambres] = useState("");
  const [toilettes, setToilettes] = useState("");
  const [cuisine, setCuisine] = useState("");

  const [editingId, setEditingId] = useState(null);
  const loadProperties = async () => {
    const snap = await getDocs(collection(db, "properties"));
    setProperties(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    loadProperties();
  }, []);

  // Upload image dans Firebase Storage
  const uploadImage = async (file) => {
    const storageRef = ref(storage, `properties/${file.name}_${Date.now()}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  // Ajouter ou modifier un bien
  const saveProperty = async () => {
    if (!prix || !quartier || !type || !adresse) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    let imageUrl = null;

    if (imgFile) {
      imageUrl = await uploadImage(imgFile);
    }

    const data = {
      img: imageUrl,
      prix,
      quartier,
      type,
      adresse,
      salon,
      chambres,
      toilettes,
      cuisine,
      couleur: "bg-emerald-50"
    };

    if (editingId) {
      await updateDoc(doc(db, "properties", editingId), data);
      setEditingId(null);
    } else {
      await addDoc(collection(db, "properties"), data);
    }

    resetForm();
    loadProperties();
  };

  const resetForm = () => {
    setImgFile(null);
    setPrix("");
    setQuartier("");
    setType("Appartement");
    setAdresse("");
    setSalon("");
    setChambres("");
    setToilettes("");
    setCuisine("");
  };

  const deleteProperty = async (id) => {
    await deleteDoc(doc(db, "properties", id));
    loadProperties();
  };

  const editProperty = (p) => {
    setEditingId(p.id);
    setPrix(p.prix);
    setQuartier(p.quartier);
    setType(p.type);
    setAdresse(p.adresse);
    setSalon(p.salon);
    setChambres(p.chambres);
    setToilettes(p.toilettes);
    setCuisine(p.cuisine);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Gestion des biens immobiliers</h1>

      {/* Formulaire */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded shadow mb-10">

        {/* Image */}
        <div>
          <label className="font-medium">Image</label>
          <input type="file" className="border p-2 w-full" onChange={e => setImgFile(e.target.files[0])} />
        </div>

        <div>
          <label className="font-medium">Prix</label>
          <input type="text" className="border p-2 w-full" value={prix} onChange={e => setPrix(e.target.value)} />
        </div>

        <div>
          <label className="font-medium">Quartier</label>
          <input type="text" className="border p-2 w-full" value={quartier} onChange={e => setQuartier(e.target.value)} />
        </div>

        {/* Type : liste déroulante */}
        <div>
          <label className="font-medium">Type de bien</label>
          <select className="border p-2 w-full" value={type} onChange={e => setType(e.target.value)}>
            <option value="Appartement">Appartement</option>
            <option value="Villa">Villa</option>
            <option value="Studio">Studio</option>
            <option value="Duplex">Duplex</option>
            <option value="Terrain">Terrain</option>
          </select>
        </div>

        <div>
          <label className="font-medium">Adresse</label>
          <input type="text" className="border p-2 w-full" value={adresse} onChange={e => setAdresse(e.target.value)} />
        </div>

        <div>
          <label className="font-medium">Salon</label>
          <input type="number" className="border p-2 w-full" value={salon} onChange={e => setSalon(e.target.value)} />
        </div>

        <div>
          <label className="font-medium">Chambres</label>
          <input type="number" className="border p-2 w-full" value={chambres} onChange={e => setChambres(e.target.value)} />
        </div>

        <div>
          <label className="font-medium">Toilettes</label>
          <input type="number" className="border p-2 w-full" value={toilettes} onChange={e => setToilettes(e.target.value)} />
        </div>

        <div>
          <label className="font-medium">Cuisine</label>
          <input type="number" className="border p-2 w-full" value={cuisine} onChange={e => setCuisine(e.target.value)} />
        </div>

        {/* Bouton */}
        <div className="col-span-full">
          <button
            onClick={saveProperty}
            className="bg-blue-700 text-white px-6 py-2 rounded"
          >
            {editingId ? "Modifier le bien" : "Ajouter le bien"}
          </button>
        </div>
      </div>

      {/* Liste des biens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map(p => (
          <div key={p.id} className="bg-white shadow rounded overflow-hidden">
            {p.img && (
              <img src={p.img} className="w-full h-48 object-cover" alt="" />
            )}
            <div className="p-4">
              <h3 className="font-bold text-lg">{p.type}</h3>
              <p className="text-gray-600">{p.quartier} - {p.adresse}</p>
              <p className="mt-2 font-semibold">{p.prix}</p>

              <div className="mt-4 flex justify-between">
                <button onClick={() => editProperty(p)} className="bg-yellow-500 text-white px-3 py-1 rounded">Modifier</button>
                <button onClick={() => deleteProperty(p.id)} className="bg-red-600 text-white px-3 py-1 rounded">Supprimer</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
