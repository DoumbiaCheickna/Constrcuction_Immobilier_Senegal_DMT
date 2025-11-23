// "use client";

// import { useState } from "react";
// import { FaFacebookF, FaTwitter } from "react-icons/fa";

// export default function TopFixedBar() {
//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());
//   const [currentDay] = useState(today.getDate());

//   const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//   const handlePrev = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//   };

//   return (
//     <div className="w-full bg-gray-100 border-b border-gray-300 fixed top-0 left-0 z-[9999]">
//       <div className="flex items-center justify-between px-4 py-2">

//         {/* GRID des jours à gauche */}
//         <div className="flex gap-1 overflow-x-auto">
//           {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
//             <div
//               key={day}
//               className={`w-6 h-6 flex items-center justify-center rounded text-sm ${
//                 day === currentDay ? "bg-gray-400 text-white font-bold" : "bg-gray-200 text-gray-700"
//               }`}
//             >
//               {day}
//             </div>
//           ))}
//         </div>

//         {/* Bloc central mois/jour/année */}
//         <div className="flex flex-col items-center text-center leading-none">
//           <div className="text-black font-bold text-lg">{monthNames[currentMonth]}</div>
//           <div className="text-black font-bold text-lg mt-1">{currentDay}</div>
//           <div className="text-gray-700 text-sm mt-1">{currentYear}</div>
//         </div>

//         {/* Chevrons + réseaux sociaux à droite */}
//         <div className="flex items-center gap-4">
//           <button onClick={handlePrev} className="text-gray-700 text-xl px-2 py-1 hover:bg-gray-200 rounded">{"<"}</button>
//           <button onClick={handleNext} className="text-gray-700 text-xl px-2 py-1 hover:bg-gray-200 rounded">{">"}</button>

//           {/* Réseaux sociaux */}
//           <div className="flex items-center gap-2">
//             <FaFacebookF className="text-gray-700 hover:text-blue-600 cursor-pointer" />
//             <FaTwitter className="text-gray-700 hover:text-blue-400 cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function TopFixedBar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentDay] = useState(today.getDate());

  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handlePrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="w-full bg-gray-100 border-b border-gray-300 fixed top-0 left-0 z-[9999]">
      <div className="flex items-center justify-between px-4 py-2">

        {/* GRID des jours à gauche */}
        <div className="flex gap-1 overflow-x-auto">
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
            <div
              key={day}
              className={`w-6 h-6 flex items-center justify-center rounded text-sm ${
                day === currentDay ? "bg-gray-400 text-white font-bold" : "bg-gray-200 text-gray-700"
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Bloc central mois/jour/année avec chevrons */}
        <div className="flex items-center gap-2 text-black font-bold text-lg">
          <button onClick={handlePrev} className="hover:bg-gray-200 px-2 py-1 rounded">{'<'}</button>
          <div className="flex flex-col items-center">
            <div>{monthNames[currentMonth]}</div>
            <div>{currentDay}</div>
            <div className="text-sm text-gray-700">{currentYear}</div>
          </div>
          <button onClick={handleNext} className="hover:bg-gray-200 px-2 py-1 rounded">{'>'}</button>
        </div>

        {/* Réseaux sociaux à droite */}
        <div className="flex items-center gap-2">
          <FaFacebookF className="text-gray-700 hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="text-gray-700 hover:text-blue-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
