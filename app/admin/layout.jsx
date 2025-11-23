export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow">
        <div className="p-4 text-xl font-bold">DaboImmo Admin</div>

        <nav className="flex flex-col gap-2 p-4">
          <a href="/admin" className="text-gray-700 hover:text-black">Dashboard</a>
          <a href="/admin/properties" className="text-gray-700 hover:text-black">🏠 Biens immobiliers</a>
          <a href="/admin/visitors" className="text-gray-700 hover:text-black">👤 Visiteurs</a>
          <a href="/admin/messages" className="text-gray-700 hover:text-black">💬 Messages</a>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
