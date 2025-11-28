"use client";
import { useState } from "react";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaWhatsapp, 
  FaLinkedin, 
  FaFacebookF, 
  FaTwitter, 
  FaPaperPlane, 
  FaUser, 
  FaBuilding, 
  FaComment,
  FaDownload,
  FaFilePdf
} from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
    budget: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("form");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi avec gestion d'erreur
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simuler un succès 90% du temps
          Math.random() > 0.1 ? resolve() : reject(new Error("Erreur d'envoi"));
        }, 2000);
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        service: "",
        budget: ""
      });
    } catch (error) {
      setIsSubmitting(false);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Téléphone Principal",
      details: "+221 33 869 15 45",
      subtitle: "Standard • Lun - Ven 8h-17h",
      color: "from-blue-500 to-cyan-500",
      link: "tel:+221338691545",
      badge: "Recommandé"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp Business",
      details: "+221 77 123 45 67",
      subtitle: "Réponse rapide • 7j/7",
      color: "from-green-500 to-emerald-500",
      link: "https://wa.me/221771234567?text=Bonjour, je souhaite obtenir des informations sur vos services de construction.",
      badge: "Rapide"
    },
    {
      icon: FaEnvelope,
      title: "Email Professionnel",
      details: "contact@dmtconstruction.sn",
      subtitle: "Réponse sous 24h ouvrées",
      color: "from-purple-500 to-pink-500",
      link: "mailto:contact@dmtconstruction.sn?subject=Demande d'information&body=Bonjour, je suis intéressé par vos services...",
      badge: "Professionnel"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Siège Social",
      details: "Amitié 2 Immeuble SILÈNE",
      subtitle: "Dakar, Sénégal • Parking disponible",
      color: "from-orange-500 to-red-500",
      link: "https://maps.google.com/?q=Amitié+2+Immeuble+SILÈNE+Dakar+Senegal",
      badge: "Visite"
    }
  ];

  const services = [
    "🏠 Construction de Villas Standing",
    "🏢 Logements Sociaux & Cités",
    "🏗️ Terrassement & Préparation",
    "💧 Bassins de Rétention",
    "🛣️ Infrastructures Publiques",
    "📐 Études Techniques & Conseils",
    "🔧 Autre Projet Spécialisé"
  ];

  const budgets = [
    "Moins de 50 millions FCFA",
    "50 - 100 millions FCFA", 
    "100 - 500 millions FCFA",
    "Plus de 500 millions FCFA",
    "À définir après étude"
  ];

  const quickActions = [
    {
      title: "📋 Demande de Devis",
      description: "Obtenez un devis personnalisé",
      action: () => setActiveTab("form")
    },
    {
      title: "📞 Appel Immédiat",
      description: "Parlez directement à un expert",
      action: () => window.open("tel:+221338691545")
    },
    {
      title: "💬 Chat WhatsApp",
      description: "Discutez en direct avec nous",
      action: () => window.open("https://wa.me/221771234567")
    },
    {
      title: "📚 Documentation",
      description: "Téléchargez notre brochure",
      action: () => window.open("/brochure-dmt-construction.pdf")
    }
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://facebook.com/dmtconstruction",
      color: "bg-blue-600 hover:bg-blue-700",
      name: "Facebook",
      followers: "2.5K"
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/company/dmtconstruction",
      color: "bg-blue-700 hover:bg-blue-800", 
      name: "LinkedIn",
      followers: "1.2K"
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/dmtconstruction",
      color: "bg-sky-500 hover:bg-sky-600",
      name: "Twitter",
      followers: "3.1K"
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/221771234567",
      color: "bg-green-500 hover:bg-green-600",
      name: "WhatsApp",
      followers: "Direct"
    }
  ];

  const teamContacts = [
    {
      name: "M. DIAWARA Tidjane",
      role: "Directeur Général",
      phone: "+221 33 869 15 45",
      email: "t.diawara@dmtconstruction.sn",
      specialty: "Direction Stratégique & Partenariats",
      availability: "📍 Sur rendez-vous",
      image: "/Dg.png"
    },
    {
      name: "Département Commercial",
      role: "Responsable Commercial",
      phone: "+221 33 869 15 46",
      email: "commercial@dmtconstruction.sn",
      specialty: "Devis & Études de Projets",
      availability: "🕒 Lun-Ven 8h-17h",
      image: "/personne7.png"
    },
    {
      name: "Département Technique",
      role: "Ingénieur en Chef",
      phone: "+221 33 869 15 47", 
      email: "technique@dmtconstruction.sn",
      specialty: "Expertise Technique & Suivi Chantier",
      availability: "🔧 Disponible sur site",
      image: "/soutien-technique.png"
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header avec navigation */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-col items-center gap-4 bg-white rounded-3xl px-8 py-6 shadow-2xl mb-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <FaPaperPlane className="text-4xl text-blue-600" />
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contactez DMT Construction
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl">
              Votre partenaire de confiance pour tous vos projets de construction au Sénégal. 
              <span className="block text-blue-600 font-semibold mt-1">Réponse garantie sous 24h !</span>
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveTab("form")}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === "form" 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl"
                  : "bg-white text-gray-700 shadow-lg hover:shadow-xl"
              }`}
            >
              📝 Formulaire de Contact
            </button>
            <button
              onClick={() => setActiveTab("quick")}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === "quick" 
                  ? "bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-2xl"
                  : "bg-white text-gray-700 shadow-lg hover:shadow-xl"
              }`}
            >
              ⚡ Actions Rapides
            </button>
            <button
              onClick={() => setActiveTab("team")}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === "team" 
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl"
                  : "bg-white text-gray-700 shadow-lg hover:shadow-xl"
              }`}
            >
              👥 Notre Équipe
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Colonne de gauche - Informations fixes */}
          <div className="lg:col-span-1 space-y-6">
            {/* Cartes de contact améliorées */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full">
                          {contact.badge}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="text-white text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {contact.title}
                          </h3>
                          <p className="text-lg font-bold text-gray-900 mt-1">{contact.details}</p>
                          <p className="text-sm text-gray-500 mt-1">{contact.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Section Horaires améliorée */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-2xl" />
                <h3 className="font-semibold text-lg">Horaires d'Ouverture</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center bg-white/10 rounded-lg px-3 py-2">
                  <span>Lundi - Vendredi</span>
                  <span className="font-bold text-green-300">08h00 - 17h00</span>
                </div>
                <div className="flex justify-between items-center bg-white/10 rounded-lg px-3 py-2">
                  <span>Samedi</span>
                  <span className="font-bold text-yellow-300">09h00 - 13h00</span>
                </div>
                <div className="flex justify-between items-center bg-white/10 rounded-lg px-3 py-2">
                  <span>Dimanche</span>
                  <span className="font-bold text-red-300">Sur rendez-vous</span>
                </div>
              </div>
              <div className="mt-4 text-center text-blue-100 text-xs">
                ⚡ Urgences techniques : Disponibles 7j/7
              </div>
            </div>

            {/* Réseaux sociaux améliorés */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                🌐 Suivez notre actualité
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl ${social.color} text-white flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
                    >
                      <Icon className="text-lg mb-1" />
                      <span className="text-xs font-semibold">{social.name}</span>
                      <span className="text-xs opacity-80">{social.followers}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Colonne de droite - Contenu dynamique */}
          <div className="lg:col-span-2">
            {activeTab === "form" && (
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <FaPaperPlane className="text-4xl text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Message Envoyé avec Succès !</h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      ✅ Merci pour votre confiance. Notre équipe vous recontactera dans les plus brefs délais.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300"
                      >
                        📝 Nouveau Message
                      </button>
                      <button
                        onClick={() => window.open("/catalogue-dmt.pdf")}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                      >
                        <FaDownload />
                        Télécharger notre Catalogue
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                        <FaPaperPlane className="text-2xl text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-800">Formulaire de Contact</h2>
                        <p className="text-gray-600">Décrivez votre projet en détail pour une étude personnalisée</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <FaUser className="text-blue-500" />
                            Nom complet *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                            placeholder="Votre nom complet"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <FaEnvelope className="text-blue-500" />
                            Email professionnel *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                            placeholder="votre@entreprise.sn"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <FaBuilding className="text-blue-500" />
                            Entreprise / Organisation
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                            placeholder="Nom de votre structure"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <FaPhone className="text-blue-500" />
                            Téléphone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                            placeholder="+221 XX XXX XX XX"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <FaComment className="text-blue-500" />
                            Service concerné *
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                          >
                            <option value="">Sélectionnez un service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <FaFilePdf className="text-blue-500" />
                            Budget estimatif
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                          >
                            <option value="">Fourchette de budget</option>
                            {budgets.map((budget, index) => (
                              <option key={index} value={budget}>{budget}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <FaComment className="text-blue-500" />
                          Objet du message *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                          placeholder="Ex: Devis pour construction villa 300m² à Almadies"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <FaComment className="text-blue-500" />
                          Description détaillée du projet *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none resize-none"
                          placeholder="Décrivez votre projet en détail : superficie, localisation, spécificités, délais souhaités, contraintes particulières..."
                        />
                      </div>

                      <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                        <p className="text-sm text-blue-800 flex items-center gap-2">
                          💡 <strong>Conseil :</strong> Plus votre description est précise, plus notre devis sera accurate.
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Envoi en cours...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-3">
                            <FaPaperPlane className="text-xl" />
                            Envoyer ma Demande d'Étude
                          </div>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            )}

            {activeTab === "quick" && (
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl text-white">⚡</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">Actions Rapides</h2>
                    <p className="text-gray-600">Solutions immédiates pour votre projet</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-left group"
                    >
                      <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                      <div className="text-blue-600 font-semibold text-sm flex items-center gap-2">
                        Cliquer pour agir →
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 text-white text-center">
                  <h3 className="font-bold text-lg mb-2">📞 Service Client Prioritaire</h3>
                  <p className="text-green-100 mb-4">
                    Pour les projets urgents ou les consultations techniques complexes
                  </p>
                  <a 
                    href="tel:+221338691545"
                    className="inline-block bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-300"
                  >
                    Appeler le +221 33 869 15 45
                  </a>
                </div>
              </div>
            )}

            {activeTab === "team" && (
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl text-white">👥</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">Notre Équipe Commerciale</h2>
                    <p className="text-gray-600">Des experts dédiés à votre projet</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-1 gap-6">
                  {teamContacts.map((contact, index) => (
                    <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-col md:flex-row items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          {contact.image ? (
                            <img src={contact.image} alt={contact.name} className="w-16 h-16 rounded-2xl object-cover" />
                          ) : (
                            contact.name.split(' ').map(n => n[0]).join('')
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="font-bold text-gray-800 text-lg">{contact.name}</h3>
                            <span className="text-sm text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full">
                              {contact.availability}
                            </span>
                          </div>
                          <p className="text-purple-600 font-semibold mb-1">{contact.role}</p>
                          <p className="text-gray-600 text-sm mb-3">{contact.specialty}</p>
                          <div className="flex flex-col sm:flex-row gap-4 text-sm">
                            <a href={`tel:${contact.phone}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                              📞 {contact.phone}
                            </a>
                            <a href={`mailto:${contact.email}`} className="text-gray-700 hover:text-blue-600 transition-colors break-all">
                              ✉️ {contact.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section Carte améliorée */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📍 Notre Siège Social</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Amitié 2 Immeuble SILÈNE</p>
                    <p className="text-gray-600">Dakar, Sénégal</p>
                    <p className="text-sm text-green-600 mt-1">✅ Parking sécurisé disponible</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="text-blue-600 text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Horaires de visite</p>
                    <p className="text-gray-600">Lun - Ven: 8h-17h • Sam: 9h-13h</p>
                    <p className="text-sm text-blue-600 mt-1">📅 Sur rendez-vous recommandé</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="text-blue-600 text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Accueil téléphonique</p>
                    <p className="text-gray-600">+221 33 869 15 45</p>
                    <p className="text-sm text-gray-500 mt-1">Standard • Orientation vers le bon interlocuteur</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <a 
                  href="https://maps.google.com/?q=Amitié+2+Immeuble+SILÈNE+Dakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <FaMapMarkerAlt />
                  Voir sur Google Maps
                </a>
                <a 
                  href="/plan-acces-dmt.pdf"
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
                >
                  <FaDownload />
                  Plan d'accès PDF
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 min-h-[300px] flex items-center justify-center text-white relative overflow-hidden">
              <div className="text-center z-10">
                <FaMapMarkerAlt className="text-5xl mb-4 mx-auto opacity-90" />
                <p className="text-2xl font-bold mb-2">Carte Interactive</p>
                <p className="text-lg opacity-90">Localisation précise de notre siège</p>
                <p className="text-sm opacity-80 mt-2">Dakar • Sénégal</p>
              </div>
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>

        {/* Bannière de garantie */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white text-center shadow-2xl">
          <h2 className="text-2xl font-bold mb-3">✅ Garantie de Service DMT Construction</h2>
          <p className="text-lg text-green-100 mb-4">
            Engagement de réponse sous 24h ouvrées • Devis personnalisé sous 48h • Accompagnement de A à Z
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-green-200">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>Expertise certifiée</span>
            </div>
            <div className="flex items-center gap-2 text-green-200">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>Suivi personnalisé</span>
            </div>
            <div className="flex items-center gap-2 text-green-200">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>Respect des délais</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

// "use client";

// import { useState } from "react";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { db } from "../firebase/config";
// import { Mail, User, MessageSquare, Loader2 } from "lucide-react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Contact() {
//   const [loading, setLoading] = useState(false);

//   return (
//     <>
//       <Navbar />

//       {/* BACKGROUND SECTION */}
//       <div
//         className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url('/bg-contact.jpg')`,
//         }}
//       >
//         {/* Gradient + Blur overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-[2px]" />

//         {/* CONTENT */}
//         <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
//           <div className="max-w-lg w-full p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.4)] animate-fadeIn">

//             <h1 className="text-4xl font-extrabold text-white text-center drop-shadow-2xl tracking-wide">
//               Contactez-nous
//             </h1>
//             <p className="text-gray-200 text-center mt-2 mb-6 text-sm">
//               Notre équipe vous répond rapidement.
//             </p>

//             {/* FORM */}
//             <form className="space-y-5">
//               {/* Nom */}
//               <div className="flex items-center gap-3 bg-white/15 p-3 rounded-xl border border-white/30 focus-within:border-blue-300 transition">
//                 <User className="text-white" />
//                 <input
//                   type="text"
//                   placeholder="Votre nom"
//                   className="flex-1 bg-transparent outline-none text-white placeholder-gray-200 text-sm"
//                 />
//               </div>

//               {/* Email */}
//               <div className="flex items-center gap-3 bg-white/15 p-3 rounded-xl border border-white/30 focus-within:border-blue-300 transition">
//                 <Mail className="text-white" />
//                 <input
//                   type="email"
//                   placeholder="Votre email"
//                   className="flex-1 bg-transparent outline-none text-white placeholder-gray-200 text-sm"
//                 />
//               </div>

//               {/* Message */}
//               <div className="flex items-start gap-3 bg-white/15 p-3 rounded-xl border border-white/30 focus-within:border-blue-300 transition">
//                 <MessageSquare className="text-white mt-1" />
//                 <textarea
//                   placeholder="Votre message"
//                   className="flex-1 bg-transparent outline-none text-white placeholder-gray-200 h-28 resize-none text-sm"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-white/90 text-black py-3 rounded-xl font-semibold shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 className="animate-spin" />
//                     Envoi...
//                   </>
//                 ) : (
//                   "Envoyer"
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// "use client";
// import { useState } from "react";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { db } from "../firebase/config";
// import { Mail, User, MessageSquare } from "lucide-react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Contact() {
//   const [loading, setLoading] = useState(false);

//   return (
//      < >
//      <Navbar/>
//     <div
//       className="relative w-full min-h-screen bg-cover bg-center bg-fixed"
//       style={{
//         backgroundImage: `url('/bg-contact.jpg')`, // 🔥 Mets ton image ici
//       }}
//     >
//       {/* Overlay sombre */}
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

//       {/* Contenu */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
//         <div className="max-w-lg w-full p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
//           <h1 className="text-3xl font-bold text-white text-center drop-shadow-lg">
//             Contactez-nous
//           </h1>
//           <p className="text-gray-200 text-center mt-2 mb-6">
//             Nous vous répondrons dans les plus brefs délais.
//           </p>

//           {/* FORM */}
//           <form className="space-y-5">
//             {/* Nom */}
//             <div className="flex items-center gap-3 bg-white/20 p-3 rounded-xl border border-white/30">
//               <User className="text-white" />
//               <input
//                 type="text"
//                 placeholder="Votre nom"
//                 className="flex-1 bg-transparent outline-none text-white placeholder-gray-200"
//               />
//             </div>

//             {/* Email */}
//             <div className="flex items-center gap-3 bg-white/20 p-3 rounded-xl border border-white/30">
//               <Mail className="text-white" />
//               <input
//                 type="email"
//                 placeholder="Votre email"
//                 className="flex-1 bg-transparent outline-none text-white placeholder-gray-200"
//               />
//             </div>

//             {/* Message */}
//             <div className="flex items-start gap-3 bg-white/20 p-3 rounded-xl border border-white/30">
//               <MessageSquare className="text-white mt-1" />
//               <textarea
//                 placeholder="Votre message"
//                 className="flex-1 bg-transparent outline-none text-white placeholder-gray-200 h-28 resize-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
//             >
//               Envoyer
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// // // // "use client";
// // // // import Navbar from "../components/Navbar";
// // // // import Footer from "../components/Footer";
// // // // import { useState } from "react";
// // // // import toast from "react-hot-toast";
// // // // import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// // // // import { db } from "../firebase/config";
// // // // export default function Contact() {
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [name, setName] = useState("");
// // // //   const [email, setEmail] = useState("");
// // // //   const [message, setMessage] = useState("");
// // // //   const handleSend = async () => {
// // // //     if (!name || !email || !message)
// // // //       return toast.error("Veuillez remplir tous les champs.");

// // // //     setLoading(true);

// // // //     try {
// // // //       await addDoc(collection(db, "messages_contact_siteweb"), {
// // // //         name,
// // // //         email,
// // // //         message,
// // // //         createdAt: serverTimestamp(),
// // // //       });

// // // //       toast.success("Message envoyé avec succès !");
// // // //       setName("");
// // // //       setEmail("");
// // // //       setMessage("");

// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       toast.error("Une erreur est survenue.");
// // // //     }

// // // //     setLoading(false);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <Navbar />

// // // //       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 py-16">
        
// // // //         <div className="w-full max-w-lg bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-8 animate-fadeIn">
          
// // // //           <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-8 drop-shadow-md">
// // // //             Contactez-nous
// // // //           </h2>

// // // //           <div className="flex flex-col gap-5">
            
// // // //             <input
// // // //               placeholder="Votre nom"
// // // //               value={name}
// // // //               onChange={(e) => setName(e.target.value)}
// // // //               className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition"
// // // //             />

// // // //             <input
// // // //               placeholder="Votre email"
// // // //               type="email"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //               className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition"
// // // //             />

// // // //             <textarea
// // // //               placeholder="Votre message"
// // // //               rows="5"
// // // //               value={message}
// // // //               onChange={(e) => setMessage(e.target.value)}
// // // //               className="w-full border border-gray-300 p-3 rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
// // // //             ></textarea>

// // // //             <button
// // // //               onClick={handleSend}
// // // //               disabled={loading}
// // // //               className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all disabled:bg-blue-300"
// // // //             >
// // // //               {loading ? "Envoi..." : "Envoyer"}
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // }
// // // "use client";
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";
// // // import { useState } from "react";
// // // import toast from "react-hot-toast";
// // // import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// // // import { db } from "../firebase/config";
// // // import { Mail, User, MessageSquare } from "lucide-react";

// // // export default function Contact() {
// // //   const [loading, setLoading] = useState(false);
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [message, setMessage] = useState("");

// // //   const handleSend = async () => {
// // //     if (!name || !email || !message)
// // //       return toast.error("Veuillez remplir tous les champs.");

// // //     setLoading(true);

// // //     try {
// // //       await addDoc(collection(db, "messages_contact_siteweb"), {
// // //         name,
// // //         email,
// // //         message,
// // //         createdAt: serverTimestamp(),
// // //       });

// // //       toast.success("Message envoyé avec succès !");
// // //       setName("");
// // //       setEmail("");
// // //       setMessage("");

// // //     } catch (err) {
// // //       console.error(err);
// // //       toast.error("Une erreur est survenue.");
// // //     }

// // //     setLoading(false);
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-6 py-20">

// // //         <div className="w-full max-w-xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-10 animate-fadeIn">
          
// // //           <h2 className="text-4xl font-bold text-center text-blue-700 mb-10 tracking-tight drop-shadow-sm">
// // //             Contactez-nous
// // //           </h2>

// // //           <div className="flex flex-col gap-6">

// // //             {/* NOM */}
// // //             <div className="relative">
// // //               <User className="absolute left-4 top-3.5 text-blue-500" size={20} />
// // //               <input
// // //                 placeholder="Votre nom"
// // //                 value={name}
// // //                 onChange={(e) => setName(e.target.value)}
// // //                 className="w-full pl-12 border border-gray-200 p-3.5 rounded-2xl shadow-sm bg-white/60 
// // //                 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 transition-all"
// // //               />
// // //             </div>

// // //             {/* EMAIL */}
// // //             <div className="relative">
// // //               <Mail className="absolute left-4 top-3.5 text-blue-500" size={20} />
// // //               <input
// // //                 placeholder="Votre email"
// // //                 type="email"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //                 className="w-full pl-12 border border-gray-200 p-3.5 rounded-2xl shadow-sm bg-white/60 
// // //                 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 transition-all"
// // //               />
// // //             </div>

// // //             {/* MESSAGE */}
// // //             <div className="relative">
// // //               <MessageSquare className="absolute left-4 top-3.5 text-blue-500" size={20} />
// // //               <textarea
// // //                 placeholder="Votre message"
// // //                 rows="5"
// // //                 value={message}
// // //                 onChange={(e) => setMessage(e.target.value)}
// // //                 className="w-full pl-12 border border-gray-200 p-3.5 rounded-2xl shadow-sm bg-white/60 
// // //                 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 transition-all resize-none"
// // //               ></textarea>
// // //             </div>

// // //             {/* BOUTON */}
// // //             <button
// // //               onClick={handleSend}
// // //               disabled={loading}
// // //               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
// // //               text-white p-3.5 rounded-2xl text-lg font-semibold shadow-md hover:shadow-xl 
// // //               transition-all active:scale-[0.97] disabled:opacity-50"
// // //             >
// // //               {loading ? "Envoi en cours..." : "Envoyer le message"}
// // //             </button>

// // //           </div>
// // //         </div>
// // //       </div>

// // //       <Footer />
// // //     </>
// // //   );
// // // }
// // "use client";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import { useState } from "react";
// // import toast from "react-hot-toast";
// // import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// // import { db } from "../firebase/config";
// // import { Mail, User, MessageSquare } from "lucide-react";

// // export default function Contact() {
// //   const [loading, setLoading] = useState(false);
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [message, setMessage] = useState("");

// //   const handleSend = async () => {
// //     if (!name || !email || !message)
// //       return toast.error("Veuillez remplir tous les champs.");

// //     setLoading(true);

// //     try {
// //       await addDoc(collection(db, "messages_contact_siteweb"), {
// //         name,
// //         email,
// //         message,
// //         createdAt: serverTimestamp(),
// //       });

// //       toast.success("Message envoyé avec succès !");
// //       setName("");
// //       setEmail("");
// //       setMessage("");

// //     } catch (err) {
// //       console.error(err);
// //       toast.error("Une erreur est survenue.");
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <>
// //       <Navbar />

// //       <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-6 py-20">

// //         <div className="w-full max-w-xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-10 animate-fadeIn">
          
// //           <h2 className="text-4xl font-bold text-center text-blue-700 mb-10 tracking-tight drop-shadow-sm">
// //             Contactez-nous
// //           </h2>

// //           <div className="flex flex-col gap-6">

// //             {/* NOM */}
// //             <div className="relative">
// //               <User className="absolute left-4 top-3.5 text-blue-500" size={20} />
// //               <input
// //                 placeholder="Votre nom"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 className="w-full pl-12 border border-gray-200 p-3.5 rounded-2xl shadow-sm bg-white/60 
// //                 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 transition-all"
// //               />
// //             </div>

// //             {/* EMAIL */}
// //             <div className="relative">
// //               <Mail className="absolute left-4 top-3.5 text-blue-500" size={20} />
// //               <input
// //                 placeholder="Votre email"
// //                 type="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 className="w-full pl-12 border border-gray-200 p-3.5 rounded-2xl shadow-sm bg-white/60 
// //                 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 transition-all"
// //               />
// //             </div>

// //             {/* MESSAGE */}
// //             <div className="relative">
// //               <MessageSquare className="absolute left-4 top-3.5 text-blue-500" size={20} />
// //               <textarea
// //                 placeholder="Votre message"
// //                 rows="5"
// //                 value={message}
// //                 onChange={(e) => setMessage(e.target.value)}
// //                 className="w-full pl-12 border border-gray-200 p-3.5 rounded-2xl shadow-sm bg-white/60 
// //                 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 transition-all resize-none"
// //               ></textarea>
// //             </div>

// //             {/* BOUTON */}
// //             <button
// //               onClick={handleSend}
// //               disabled={loading}
// //               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
// //               text-white p-3.5 rounded-2xl text-lg font-semibold shadow-md hover:shadow-xl 
// //               transition-all active:scale-[0.97] disabled:opacity-50"
// //             >
// //               {loading ? "Envoi en cours..." : "Envoyer le message"}
// //             </button>

// //           </div>
// //         </div>
// //       </div>

// //       <Footer />
// //     </>
// //   );
// // }
// "use client";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { db } from "../firebase/config";

// export default function Contact() {
//   const [loading, setLoading] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSend = async () => {
//     if (!name || !email || !message)
//       return toast.error("Veuillez remplir tous les champs.");

//     setLoading(true);

//     try {
//       await addDoc(collection(db, "messages_contact_siteweb"), {
//         name,
//         email,
//         message,
//         createdAt: serverTimestamp(),
//       });

//       toast.success("Message envoyé avec succès !");
//       setName("");
//       setEmail("");
//       setMessage("");
//     } catch (err) {
//       toast.error("Une erreur est survenue.");
//     }

//     setLoading(false);
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-white to-[#dbeafe] flex items-center justify-center px-6 py-20">

//         {/* CARD */}
//         <div className="w-full max-w-lg p-8 rounded-3xl backdrop-blur-3xl bg-white/40 shadow-[0_0_40px_rgba(0,0,0,0.1)] border border-white/60 relative overflow-hidden">

//           {/* GLOW EFFECT */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl opacity-40"></div>

//           <h2 className="text-4xl font-black text-blue-700 relative z-10 text-center mb-10 tracking-tight">
//             Contactez-nous
//           </h2>

//           <div className="flex flex-col gap-6 relative z-10">

//             {/* NOM */}
//             <div className="relative">
//               <span className="absolute left-4 top-3 text-blue-600">
//                 {/* USER ICON */}
//                 <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
//                   <circle cx="10" cy="6" r="4" />
//                   <path d="M2 18c1-4 4-6 8-6s7 2 8 6" />
//                 </svg>
//               </span>

//               <input
//                 placeholder="Votre nom"
//                 className="w-full pl-12 border border-gray-300 p-3 rounded-xl bg-white/70 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             {/* EMAIL */}
//             <div className="relative">
//               <span className="absolute left-4 top-3 text-blue-600">
//                 {/* MAIL ICON */}
//                 <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M4 4h12v12H4z" />
//                   <path d="m4 4 6 6 6-6" />
//                 </svg>
//               </span>

//               <input
//                 type="email"
//                 placeholder="Votre email"
//                 className="w-full pl-12 border border-gray-300 p-3 rounded-xl bg-white/70 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             {/* MESSAGE */}
//             <div className="relative">
//               <span className="absolute left-4 top-3 text-blue-600">
//                 {/* MESSAGE ICON */}
//                 <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M4 4h12v10H7l-3 3z" />
//                 </svg>
//               </span>

//               <textarea
//                 placeholder="Votre message"
//                 rows="5"
//                 className="w-full pl-12 border border-gray-300 p-3 rounded-xl bg-white/70 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               ></textarea>
//             </div>

//             <button
//               onClick={handleSend}
//               disabled={loading}
//               className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white p-3 rounded-xl text-lg font-semibold shadow-lg transition-all disabled:bg-blue-300"
//             >
//               {loading ? "Envoi..." : "Envoyer"}
//             </button>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }
