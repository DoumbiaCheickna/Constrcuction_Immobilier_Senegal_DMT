// components/AuthDebug.jsx
"use client";
import useAuth from "../hooks/useAuth";

export default function AuthDebug() {
  const { user, loading, isAdmin } = useAuth();
  
  console.log("Auth Debug - loading:", loading, "user:", user, "isAdmin:", isAdmin);
  
  return (
    <div style={{position:'fixed',left:12,bottom:12,background:'#111',color:'#fff',padding:'8px 10px',borderRadius:8,zIndex:9999,fontSize:12,opacity:0.9}}>
      <div style={{fontWeight:700,marginBottom:4}}>AUTH</div>
      <div>loading: {String(loading)}</div>
      <div>user: {user ? user.uid : 'null'}</div>
      <div>isAdmin: {String(isAdmin)}</div>
    </div>
  );
}