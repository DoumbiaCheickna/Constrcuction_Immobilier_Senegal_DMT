import Footer from "../components/Footer";
import ImageGrid from "../components/ImageGrid";
import Navbar from "../components/Navbar";

export default function VillasPage() {
  return (
    <>
     <Navbar />
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Villas & Appartements</h1>

      <ImageGrid filter="appartement" />
    </main>
     <Footer />
    </>
  );
}
