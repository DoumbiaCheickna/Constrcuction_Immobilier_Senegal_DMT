"use client";
import Link from "next/link";
import RequireAuth from "../../components/RequireAuth";

export default function BiensAlias() {
  return (
    <RequireAuth adminOnly>
      <div>
        <h2 className="text-xl font-semibold mb-4">Biens (alias)</h2>
        <p>Page alias vers <Link href="/admin/properties" className="text-blue-600 underline">Propriétés</Link></p>
      </div>
    </RequireAuth>
  );
}
