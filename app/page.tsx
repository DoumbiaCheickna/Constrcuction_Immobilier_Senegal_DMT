
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import HeroCarousel from '@/app/components/HeroCarousel';
import ImageGrid from '@/app/components/ImageGrid';
import ContactBar from '@/app/components/ContactBar';
import WhatsAppButton from '@/app/components/WhatsAppButton';
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
}