import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function EquipePage() {
  return (
     <>
       <Navbar />
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Notre équipe</h1>

      <p className="text-gray-600 text-lg">
        Voici les membres de l'équipe DaboImmo…
      </p>
    </main>
        <Footer />
    </>
  );
}
