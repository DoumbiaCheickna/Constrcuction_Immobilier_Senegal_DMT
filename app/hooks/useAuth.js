// hooks/useAuth.js
"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        // check admins collectionifi admin rights
        try {
          const d = await getDoc(doc(db, "admins", u.uid));
          if (d.exists()) {
            setIsAdmin(true);
          } else {
            // Fallback: lookup by email
            try {
              const adminsRef = collection(db, "admins");
              const q = query(adminsRef, where("email", "==", u.email));
              const qs = await getDocs(q);
              setIsAdmin(qs.size > 0);
            } catch (qe) {
              setIsAdmin(false);
            }
          }
        } catch (e) {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return { user, isAdmin, loading };
}
