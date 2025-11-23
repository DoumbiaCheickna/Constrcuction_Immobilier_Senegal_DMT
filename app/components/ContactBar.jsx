export default function ContactBar() {
  return (
    <div id="contact" className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-blue-700 p-4 rounded shadow text-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 16.5v3a1.5 1.5 0 0 1-1.5 1.5 17.5 17.5 0 0 1-15.5-15.5A1.5 1.5 0 0 1 3.5 4h3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div>
          <div className="text-xs text-gray-500">SIÈGE :</div>
          <div className="text-lg font-bold text-gray-800">Dakar, Sénégal</div>
        </div>
      </div>

      <div className="text-right">
        <div className="text-xs text-gray-500">TÉLÉPHONE</div>
        <div className="text-blue-700 font-bold text-lg">+221 33 825 43 40</div>
      </div>
    </div>
  );
}
