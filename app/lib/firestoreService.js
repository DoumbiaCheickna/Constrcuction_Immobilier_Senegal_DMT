// lib/firestoreService.js
import { collection, addDoc, doc, getDoc, updateDoc, deleteDoc, query, orderBy, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";


// properties
export const propertiesCol = () => collection(db, "properties");
export async function createProperty(data) { return await addDoc(propertiesCol(), { ...data, createdAt: new Date() }); }
export async function updateProperty(id, data) { return await updateDoc(doc(db, "properties", id), data); }
export async function deleteProperty(id) { return await deleteDoc(doc(db, "properties", id)); }
export async function getProperty(id) { const d = await getDoc(doc(db, "properties", id)); return d.exists() ? { id: d.id, ...d.data() } : null; }
export async function listProperties() {
  const q = query(propertiesCol(), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// messages
export const messagesCol = () => collection(db, "messages");
export async function createMessage(data) { return await addDoc(messagesCol(), { ...data, createdAt: new Date() }); }
export async function listMessagesRealtime(cb) {
  return onSnapshot(query(messagesCol(), orderBy("createdAt", "desc")), snapshot => cb(snapshot.docs.map(d=>({id:d.id,...d.data()}))));
}

// visitors
export const visitorsCol = () => collection(db, "visitors");
export async function addVisitor(data) { return await addDoc(visitorsCol(), { ...data, createdAt: new Date() }); }
export async function listVisitors() {
  const snap = await getDocs(query(visitorsCol(), orderBy("createdAt","desc")));
  return snap.docs.map(d=>({id:d.id,...d.data()}));
}
