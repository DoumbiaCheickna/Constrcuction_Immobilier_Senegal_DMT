import Footer from "../components/Footer";
import ImageGrid from "../components/ImageGrid";
import Navbar from "../components/Navbar";

export default function DiassPage() {
  return (
     <>
    <Navbar />
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Biens à Diass</h1>

      <ImageGrid filter="diass" />
    </main>
    <Footer />
    </>
  );
}
