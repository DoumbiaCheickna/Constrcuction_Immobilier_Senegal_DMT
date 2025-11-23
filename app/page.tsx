// app/page.tsx (simplifié)
// import Image from 'next/image'
// import Link from 'next/link'

// export default function Home() {
//   const listings = [
//     { id: '1', title: 'Appartement moderne Dakar', price: 850000, city: 'Dakar', beds: 3, baths:2, img:'/simple1.avif' },
//     { id: '2', title: 'Villa contemporaine', price: 2500000, city: 'Pikine', beds: 5, baths:4, img:'/simple2.avif' },
//     // ...
//   ]

//   return (
//     <main className="min-h-screen bg-gray-50">
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-teal-500 rounded-md flex items-center justify-center text-white font-bold">DT</div>
//             <h1 className="text-lg font-semibold text-gray-900">DropImmo</h1>
//           </div>
//           <nav className="flex gap-4 items-center">
//             <Link href="/login" className="text-sm text-gray-600">Se connecter</Link>
//             <Link href="/post" className="px-4 py-2 bg-teal-500 text-white rounded-md text-sm">Publier une annonce</Link>
//           </nav>
//         </div>
//       </header>

//       <section className="py-12">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="bg-white rounded-2xl p-8 shadow">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Trouvez la propriété idéale</h2>
//             <p className="text-gray-600 mb-6">Recherchez par ville, prix ou type de bien</p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <input placeholder="Ville (ex: Dakar)" className="col-span-2 p-3 border rounded" />
//               <button className="p-3 bg-teal-500 text-white rounded">Rechercher</button>
//             </div>
//           </div>

//           <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {listings.map(l => (
//               <Link key={l.id} href={`/listing/${l.id}`} className="block group">
//                 <div className="bg-white rounded-lg overflow-hidden shadow">
//                   <div className="relative h-56">
//                     <Image src={l.img} alt={l.title} fill className="object-cover group-hover:scale-105 transition-transform" />
//                   </div>
//                   <div className="p-4">
//                     <div className="flex items-center justify-between">
//                       <h3 className="text-lg font-semibold">{l.title}</h3>
//                       <div className="text-teal-600 font-bold">{l.price.toLocaleString()} FCFA</div>
//                     </div>
//                     <p className="text-sm text-gray-500 mt-2">{l.city} • {l.beds} chambres • {l.baths} sdb</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Carousel from '@/app/components/Carousel';

import HeroCarousel from '@/app/components/HeroCarousel';
import ImageGrid from '@/app/components/ImageGrid';
import ContactBar from '@/app/components/ContactBar';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import TopFixedBar from '@/app/components/TopFixedBar';
import { Toaster } from 'react-hot-toast';
export default function Home() {
const properties = Array.from({ length: 40 }, (_, i) => ({
id: i + 1,
title: `Villa moderne #${i + 1}`,
price: 25000000 + i * 1000000,
image: "/simple1.avif"
}));
return (
    <>
    {/* <TopFixedBar /> */}
      <Navbar />
      <main>
        <HeroCarousel />
        <ImageGrid filter={""}/>
        <ContactBar />
      </main>
        <Toaster position="top-right" />
      <Footer />
      <WhatsAppButton />
    </>
  );

// return (
// <>
// <Navbar />
// <div className="px-6 mt-6">
// <Carousel />
// <h2 className="text-3xl font-bold mt-10">Nos immobiliers</h2>
// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
// {properties.map((item) => (
// <div key={item.id} className="shadow rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">
// <img src={item.image} className="h-48 w-full object-cover" />
// <div className="p-4">
// <h3 className="text-xl font-semibold">{item.title}</h3>
// <p className="text-blue-600 font-bold">{item.price.toLocaleString()} FCFA</p>
// </div>
// </div>
// ))}
// </div>
// </div>
// <Footer />
// </>
// );
}