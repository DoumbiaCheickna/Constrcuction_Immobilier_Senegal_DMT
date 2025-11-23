// export default function WhatsAppButton() {
//   return (
//     <a href="https://wa.me/221338254340" target="_blank" rel="noreferrer"
//        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl hover:scale-105 transition z-50">
//       <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
//         <path d="whatsapp.png" />
//       </svg>
//     </a>
//   );
// }
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/221338254340"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-xl hover:scale-105 transition z-50 flex items-center justify-center"
    >
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        className="w-7 h-7 object-contain"
      />
    </a>
  );
}
