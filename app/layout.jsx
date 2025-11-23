import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { addVisitor } from "../lib/firestoreService";
export default function RootLayout({ children }) {
useEffect(() => {
  addVisitor({ ip: "unknown", url: window.location.pathname }).catch(()=>{});
}, []);

  return (
    <html lang="fr">
      <body>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
