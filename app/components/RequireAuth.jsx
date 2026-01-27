"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import useAuth from "../hooks/useAuth";

export default function RequireAuth({ children, adminOnly = false }) {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        const loginPath = pathname && pathname.startsWith("/admin") ? "/admin/login" : "/login";
        router.replace(loginPath);
      } else if (adminOnly && !isAdmin) {
        // if user is authenticated but not admin, send to admin login (or home)
        router.replace("/admin/login");
      }
    }
  }, [user, loading, isAdmin, adminOnly, pathname, router]);

  // Provide a visible fallback to avoid a blank page while loading or redirecting
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">Chargement...</div>
    );
  }

  if (!loading && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">Redirection vers la page de connexion...</div>
    );
  }

  if (!loading && adminOnly && !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">Accès refusé — redirection...</div>
    );
  }

  return children;
}
