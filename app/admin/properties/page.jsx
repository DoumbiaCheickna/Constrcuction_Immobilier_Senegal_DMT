
// "use client";
// import { useState, useEffect } from "react";
// import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { db, storage } from "../../firebase/config";

// export default function PropertiesPage() {
//   const [properties, setProperties] = useState([]);
//   const [imgFile, setImgFile] = useState(null);
//   const [prix, setPrix] = useState("");
//   const [quartier, setQuartier] = useState("");
//   const [type, setType] = useState("Appartement");
//   const [adresse, setAdresse] = useState("");
//   const [salon, setSalon] = useState("");
//   const [chambres, setChambres] = useState("");
//   const [toilettes, setToilettes] = useState("");
//   const [cuisine, setCuisine] = useState("");

//   const [editingId, setEditingId] = useState(null);
//   const loadProperties = async () => {
//     const snap = await getDocs(collection(db, "properties"));
//     setProperties(snap.docs.map(d => ({ id: d.id, ...d.data() })));
//   };

//   useEffect(() => {
//     loadProperties();
//   }, []);

//   // Upload image dans Firebase Storage
//   const uploadImage = async (file) => {
//     const storageRef = ref(storage, `properties/${file.name}_${Date.now()}`);
//     await uploadBytes(storageRef, file);
//     return await getDownloadURL(storageRef);
//   };

//   // Ajouter ou modifier un bien
//   const saveProperty = async () => {
//     if (!prix || !quartier || !type || !adresse) {
//       alert("Veuillez remplir tous les champs obligatoires");
//       return;
//     }

//     let imageUrl = null;

//     if (imgFile) {
//       imageUrl = await uploadImage(imgFile);
//     }

//     const data = {
//       img: imageUrl,
//       prix,
//       quartier,
//       type,
//       adresse,
//       salon,
//       chambres,
//       toilettes,
//       cuisine,
//       couleur: "bg-emerald-50"
//     };

//     if (editingId) {
//       await updateDoc(doc(db, "properties", editingId), data);
//       setEditingId(null);
//     } else {
//       await addDoc(collection(db, "properties"), data);
//     }

//     resetForm();
//     loadProperties();
//   };

//   const resetForm = () => {
//     setImgFile(null);
//     setPrix("");
//     setQuartier("");
//     setType("Appartement");
//     setAdresse("");
//     setSalon("");
//     setChambres("");
//     setToilettes("");
//     setCuisine("");
//   };

//   const deleteProperty = async (id) => {
//     await deleteDoc(doc(db, "properties", id));
//     loadProperties();
//   };

//   const editProperty = (p) => {
//     setEditingId(p.id);
//     setPrix(p.prix);
//     setQuartier(p.quartier);
//     setType(p.type);
//     setAdresse(p.adresse);
//     setSalon(p.salon);
//     setChambres(p.chambres);
//     setToilettes(p.toilettes);
//     setCuisine(p.cuisine);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Gestion des biens immobiliers</h1>

//       {/* Formulaire */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded shadow mb-10">

//         {/* Image */}
//         <div>
//           <label className="font-medium">Image</label>
//           <input type="file" className="border p-2 w-full" onChange={e => setImgFile(e.target.files[0])} />
//         </div>

//         <div>
//           <label className="font-medium">Prix</label>
//           <input type="text" className="border p-2 w-full" value={prix} onChange={e => setPrix(e.target.value)} />
//         </div>

//         <div>
//           <label className="font-medium">Quartier</label>
//           <input type="text" className="border p-2 w-full" value={quartier} onChange={e => setQuartier(e.target.value)} />
//         </div>

//         {/* Type : liste déroulante */}
//         <div>
//           <label className="font-medium">Type de bien</label>
//           <select className="border p-2 w-full" value={type} onChange={e => setType(e.target.value)}>
//             <option value="Appartement">Appartement</option>
//             <option value="Villa">Villa</option>
//             <option value="Studio">Studio</option>
//             <option value="Duplex">Duplex</option>
//             <option value="Terrain">Terrain</option>
//           </select>
//         </div>

//         <div>
//           <label className="font-medium">Adresse</label>
//           <input type="text" className="border p-2 w-full" value={adresse} onChange={e => setAdresse(e.target.value)} />
//         </div>

//         <div>
//           <label className="font-medium">Salon</label>
//           <input type="number" className="border p-2 w-full" value={salon} onChange={e => setSalon(e.target.value)} />
//         </div>

//         <div>
//           <label className="font-medium">Chambres</label>
//           <input type="number" className="border p-2 w-full" value={chambres} onChange={e => setChambres(e.target.value)} />
//         </div>

//         <div>
//           <label className="font-medium">Toilettes</label>
//           <input type="number" className="border p-2 w-full" value={toilettes} onChange={e => setToilettes(e.target.value)} />
//         </div>

//         <div>
//           <label className="font-medium">Cuisine</label>
//           <input type="number" className="border p-2 w-full" value={cuisine} onChange={e => setCuisine(e.target.value)} />
//         </div>

//         {/* Bouton */}
//         <div className="col-span-full">
//           <button
//             onClick={saveProperty}
//             className="bg-blue-700 text-white px-6 py-2 rounded"
//           >
//             {editingId ? "Modifier le bien" : "Ajouter le bien"}
//           </button>
//         </div>
//       </div>

//       {/* Liste des biens */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {properties.map(p => (
//           <div key={p.id} className="bg-white shadow rounded overflow-hidden">
//             {p.img && (
//               <img src={p.img} className="w-full h-48 object-cover" alt="" />
//             )}
//             <div className="p-4">
//               <h3 className="font-bold text-lg">{p.type}</h3>
//               <p className="text-gray-600">{p.quartier} - {p.adresse}</p>
//               <p className="mt-2 font-semibold">{p.prix}</p>

//               <div className="mt-4 flex justify-between">
//                 <button onClick={() => editProperty(p)} className="bg-yellow-500 text-white px-3 py-1 rounded">Modifier</button>
//                 <button onClick={() => deleteProperty(p.id)} className="bg-red-600 text-white px-3 py-1 rounded">Supprimer</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase/config";
import { FaEdit, FaTrash, FaUpload, FaHome, FaBuilding, FaRulerCombined, FaBed, FaTag, FaMapMarkerAlt } from "react-icons/fa";

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const [formData, setFormData] = useState({
    titre: "",
    prix: "",
    quartier: "",
    type: "Appartements",
    description: "",
    superficie: "",
    etages: "",
    chambres: "",
    tags: "",
    badge: "NOUVEAU",
    badgeColor: "bg-red-500"
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const badgeColors = [
    { value: "bg-red-500", label: "Rouge (Nouveau)", color: "bg-red-500" },
    { value: "bg-green-500", label: "Vert (Promotion)", color: "bg-green-500" },
    { value: "bg-blue-500", label: "Bleu (Lancement)", color: "bg-blue-500" },
    { value: "bg-purple-500", label: "Violet (Premium)", color: "bg-purple-500" },
    { value: "bg-orange-500", label: "Orange (Vendu)", color: "bg-orange-500" }
  ];

  const propertyTypes = [
    "Appartements",
    "Villas",
    "Terrains",
    "Bureaux",
    "Duplex",
    "Studios",
    "Foncier"
  ];

  const loadProperties = async () => {
    const snap = await getDocs(collection(db, "properties"));
    setProperties(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    loadProperties();
  }, []);

  const uploadImage = async (file) => {
    const storageRef = ref(storage, `properties/${file.name}_${Date.now()}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveProperty = async () => {
    if (!formData.titre || !formData.prix || !formData.quartier || !formData.description) {
      alert("Veuillez remplir les champs obligatoires (Titre, Prix, Quartier, Description)");
      return;
    }

    setLoading(true);

    try {
      let imageUrl = formData.img;

      if (imgFile) {
        imageUrl = await uploadImage(imgFile);
      }

      const data = {
        ...formData,
        img: imageUrl,
        tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : [],
        chambres: parseInt(formData.chambres) || 0,
        superficie: formData.superficie,
        etages: formData.etages
      };

      if (editingId) {
        await updateDoc(doc(db, "properties", editingId), data);
        setEditingId(null);
      } else {
        await addDoc(collection(db, "properties"), data);
      }

      resetForm();
      loadProperties();
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue lors de l'enregistrement");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      titre: "",
      prix: "",
      quartier: "",
      type: "Appartements",
      description: "",
      superficie: "",
      etages: "",
      chambres: "",
      tags: "",
      badge: "NOUVEAU",
      badgeColor: "bg-red-500"
    });
    setImgFile(null);
    setImagePreview(null);
    setEditingId(null);
  };

  const deleteProperty = async (id) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce bien ?")) {
      await deleteDoc(doc(db, "properties", id));
      loadProperties();
    }
  };

  const editProperty = (p) => {
    setEditingId(p.id);
    setFormData({
      titre: p.titre || "",
      prix: p.prix || "",
      quartier: p.quartier || "",
      type: p.type || "Appartements",
      description: p.description || "",
      superficie: p.superficie || "",
      etages: p.etages || "",
      chambres: p.chambres || "",
      tags: p.tags ? p.tags.join(', ') : "",
      badge: p.badge || "NOUVEAU",
      badgeColor: p.badgeColor || "bg-red-500",
      img: p.img || ""
    });
    setImagePreview(p.img || null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion des Biens Immobiliers</h1>
          <p className="text-gray-600">Ajoutez et gérez vos propriétés en temps réel</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaHome className="text-blue-600" />
                {editingId ? "Modifier le bien" : "Ajouter un nouveau bien"}
              </h2>

              {/* Upload d'image */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                  <FaUpload className="text-gray-400" />
                  Image du bien
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-4 text-center hover:border-blue-400 transition-colors">
                  {imagePreview ? (
                    <div className="mb-3">
                      <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover rounded-lg mx-auto" />
                    </div>
                  ) : (
                    <div className="py-8">
                      <FaUpload className="text-gray-400 text-2xl mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Cliquez pour uploader une image</p>
                    </div>
                  )}
                  <input 
                    type="file" 
                    className="hidden" 
                    id="image-upload"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                  <label 
                    htmlFor="image-upload" 
                    className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors inline-block"
                  >
                    Choisir une image
                  </label>
                </div>
              </div>

              {/* Champs du formulaire */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Titre *</label>
                  <input 
                    type="text" 
                    name="titre"
                    value={formData.titre}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Ex: Résidence Azalée"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prix *</label>
                    <input 
                      type="text" 
                      name="prix"
                      value={formData.prix}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Ex: 60 Millions FCFA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quartier *</label>
                    <input 
                      type="text" 
                      name="quartier"
                      value={formData.quartier}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Ex: Amitié II"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de bien</label>
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    {propertyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Description détaillée du bien..."
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                      <FaRulerCombined className="text-sm" />
                      Superficie
                    </label>
                    <input 
                      type="text" 
                      name="superficie"
                      value={formData.superficie}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="650 m²"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaBuilding className="inline text-sm mr-1" />
                      Étages
                    </label>
                    <input 
                      type="text" 
                      name="etages"
                      value={formData.etages}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="R+12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                      <FaBed className="text-sm" />
                      Chambres
                    </label>
                    <input 
                      type="number" 
                      name="chambres"
                      value={formData.chambres}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="3"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                    <FaTag className="text-sm" />
                    Tags (séparés par des virgules)
                  </label>
                  <input 
                    type="text" 
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Appartements, Lancement, Haut de gamme"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Badge</label>
                    <select 
                      name="badge"
                      value={formData.badge}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="NOUVEAU">Nouveau</option>
                      <option value="PROMOTION">Promotion</option>
                      <option value="LANCEMENT">Lancement</option>
                      <option value="PREMIUM">Premium</option>
                      <option value="VENDU">Vendu</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Couleur du badge</label>
                    <select 
                      name="badgeColor"
                      value={formData.badgeColor}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      {badgeColors.map(color => (
                        <option key={color.value} value={color.value}>{color.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={saveProperty}
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Enregistrement..." : (editingId ? "Modifier" : "Ajouter le bien")}
                  </button>
                  {editingId && (
                    <button
                      onClick={resetForm}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Annuler
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Liste des biens */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <FaBuilding className="text-blue-600" />
                  Liste des biens ({properties.length})
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {properties.map(property => (
                  <div key={property.id} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    {/* Image et badge */}
                    <div className="relative">
                      {property.img && (
                        <img 
                          src={property.img} 
                          className="w-full h-48 object-cover" 
                          alt={property.titre} 
                        />
                      )}
                      {property.badge && (
                        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold ${property.badgeColor} shadow-lg`}>
                          {property.badge}
                        </div>
                      )}
                    </div>

                    {/* Contenu */}
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{property.titre}</h3>
                      <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                        <FaMapMarkerAlt className="text-red-500 text-xs" />
                        {property.quartier}
                      </p>
                      <p className="text-purple-600 font-semibold text-lg mb-3">{property.prix}</p>
                      
                      <p className="text-gray-700 text-sm mb-4 line-clamp-2">{property.description}</p>

                      {/* Caractéristiques */}
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        {property.superficie && (
                          <span className="flex items-center gap-1">
                            <FaRulerCombined className="text-green-500" />
                            {property.superficie}
                          </span>
                        )}
                        {property.etages && (
                          <span className="flex items-center gap-1">
                            <FaBuilding className="text-orange-500" />
                            {property.etages}
                          </span>
                        )}
                        {property.chambres && (
                          <span className="flex items-center gap-1">
                            <FaBed className="text-blue-500" />
                            {property.chambres} ch.
                          </span>
                        )}
                      </div>

                      {/* Tags */}
                      {property.tags && property.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {property.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button 
                          onClick={() => editProperty(property)}
                          className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
                        >
                          <FaEdit className="text-sm" />
                          Modifier
                        </button>
                        <button 
                          onClick={() => deleteProperty(property.id)}
                          className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                        >
                          <FaTrash className="text-sm" />
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {properties.length === 0 && (
                <div className="text-center py-12">
                  <FaHome className="text-gray-300 text-4xl mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Aucun bien immobilier enregistré</p>
                  <p className="text-gray-400 text-sm">Commencez par ajouter votre premier bien</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}