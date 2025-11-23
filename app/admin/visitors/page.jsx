"use client";
export default function Visitors() {
  const visitors = [
    { id: 1, name: "Amadou", date: "Aujourd’hui" },
    { id: 2, name: "Fatou", date: "Hier" },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Visiteurs</h1>

      <ul className="bg-white p-4 rounded-xl shadow divide-y">
        {visitors.map(v => (
          <li key={v.id} className="p-3 flex justify-between">
            <span>{v.name}</span>
            <span className="text-gray-500">{v.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
