// hooks/useAuth.js
"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebaseClient";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebaseClient";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        // check admins collection for admin rights
        const d = await getDoc(doc(db, "admins", u.uid));
        setIsAdmin(d.exists());
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return { user, isAdmin, loading };
}
