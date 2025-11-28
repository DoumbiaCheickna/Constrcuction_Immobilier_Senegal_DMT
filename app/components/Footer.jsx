// "use client";
// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="footer-content">
//         <div className="footer-column">
//           <h3 className="column-title">Liens Utiles</h3>
//           <ul className="links-list">
//             <li><a href="#">Accueil</a></li>
//             <li><a href="#">Nouroudine: devenez propriétaire à Diasse</a></li>
//             <li><a href="#">Villas et Appartements</a></li>
//             <li><a href="#">Notre équipe</a></li>
//             <li><a href="#">Contacts</a></li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h3 className="column-title">About Us</h3>
//           <ul className="links-list">
//             <li><a href="#">Commodités</a></li>
//             <li><a href="#">Appartements</a></li>
//             <li><a href="#">Portfolio</a></li>
//             <li><a href="#">Voisinage</a></li>
//             <li><a href="#">Contacts</a></li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h3 className="column-title">Building</h3>
//           <ul className="links-list">
//             <li><a href="#">About Us</a></li>
//             <li><a href="#">The Benefits</a></li>
//             <li><a href="#">Virtual Tour</a></li>
//             <li><a href="#">Pictures</a></li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h3 className="column-title">Get To Know</h3>
//           <ul className="links-list">
//             <li><a href="#">Privacy Policy</a></li>
//             <li><a href="#">Service Plus</a></li>
//             <li><a href="#">Contacts</a></li>
//           </ul>
//         </div>
//         <div className="footer-column map-column">
//           <h3 className="column-title">Localisation</h3>
//           <div className="map-container">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.227238833773!2d-17.44654292467901!3d14.69227728581915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173b0f5c00001%3A0x27e91c33437c7f79!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
//               width="100%"
//               height="200"
//               style={{ border: 0, borderRadius: '8px' }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Carte de Dakar, Sénégal"
//             />
//             <div className="map-info">
//               <p>📍 Amitié 2 Immeuble SILÈNE - Dakar, Sénégal</p>
//               <p>📞 +221 77 443 57 52</p>
//               <p>✉️ cheicknadevdot@gmail.com</p>
//             </div>
//             <div className="social-icons">
//               <a href="#" className="social-link">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                 </svg>
//               </a>
//               <a href="#" className="social-link">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                 </svg>
//               </a>
//               <a href="#" className="social-link">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="copyright">
//         <div className="copyright-content">
//           <span>DMT Construction Immobilier Sénégal 2025 Tous droits Réservés</span>
//         </div>
//       </div>
//       <style jsx>{`
//         .footer {
//           background-color: #f8f7f7ff;
//           color: #fff;
//           padding: 50px 20px 0 20px;
//           border-top: 2px solid #333;
//         }

//         .footer-content {
//           display: grid;
//           grid-template-columns: repeat(5, 1fr);
//           gap: 40px;
//           max-width: 1400px;
//           margin: 0 auto;
//           padding-bottom: 30px;
//         }

//         .footer-column {
//           display: flex;
//           flex-direction: column;
//         }

//         .map-column {
//           grid-column: span 1;
//         }

//         .column-title {
//           font-size: 18px;
//           font-weight: bold;
//           margin-bottom: 25px;
//           color: #131313ff;
//           font-family: 'Arial', sans-serif;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         .links-list {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }

//         .links-list li {
//           margin-bottom: 15px;
//         }

//         .links-list a {
//           color: #080808ff;
//           text-decoration: none;
//           font-size: 14px;
//           font-family: 'Arial', sans-serif;
//           transition: color 0.3s ease;
//           line-height: 1.5;
//         }

//         .links-list a:hover {
//           color: #fff;
//         }

//         .map-container {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//         }

//         .map-info {
//           color: #999;
//           font-size: 12px;
//           line-height: 1.6;
//         }

//         .map-info p {
//           margin: 5px 0;
//         }

//         .social-icons {
//           display: flex;
//           gap: 15px;
//           margin-top: 10px;
//         }

//         .social-link {
//           color: #999;
//           transition: color 0.3s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 36px;
//           height: 36px;
//           border: 1px solid #444;
//           border-radius: 4px;
//         }

//         .social-link:hover {
//           color: #fff;
//           border-color: #666;
//           background-color: #2a2a2a;
//         }

//         .copyright {
//           background-color: #c9b5b5ff;
//           border-top: 1px solid #121111ff;
//           padding: 20px 0;
//         }

//         .copyright-content {
//           max-width: 1400px;
//           margin: 0 auto;
//           text-align: center;
//           color: #0a0a0aff;
//           font-size: 14px;
//           font-family: 'Arial', sans-serif;
//         }

//         /* Responsive */
//         @media (max-width: 1200px) {
//           .footer-content {
//             grid-template-columns: repeat(3, 1fr);
//             gap: 30px;
//           }
          
//           .map-column {
//             grid-column: span 3;
//           }
//         }

//         @media (max-width: 768px) {
//           .footer-content {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 30px;
//           }
          
//           .map-column {
//             grid-column: span 2;
//           }
          
//           .footer {
//             padding: 40px 20px 0 20px;
//           }
//         }

//         @media (max-width: 480px) {
//           .footer-content {
//             grid-template-columns: 1fr;
//             gap: 25px;
//           }
          
//           .map-column {
//             grid-column: span 1;
//           }

//           .footer {
//             padding: 30px 15px 0 15px;
//           }

//           .copyright-content {
//             font-size: 12px;
//           }

//           .social-icons {
//             justify-content: center;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Footer;
"use client";
import Link from "next/link";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaWhatsapp,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaHardHat,
  FaShieldAlt,
  FaAward,
  FaRocket,
  FaArrowRight
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "Nos Réalisations", href: "/construction" },
    { name: "Villas & Appartements", href: "/villas" },
    { name: "Terrassement", href: "/terrassement" },
    { name: "Notre Équipe", href: "/equipe" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    { name: "Construction de Villas", href: "/services/villas" },
    { name: "Logements Sociaux", href: "/contact" },
    { name: "Terrassement", href: "/terrassement" },
    { name: "Bassins de Rétention", href: "/construction" },
    { name: "Infrastructures Publiques", href: "/construction" },
    { name: "Études Techniques", href: "/terrassement" }
  ];

  const legalLinks = [
    { name: "Mentions Légales", href: "/mentions-legales" },
    { name: "Politique de Confidentialité", href: "/confidentialite" },
    { name: "Conditions Générales", href: "/cgv" },
    { name: "Plan du Site", href: "/sitemap" }
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://facebook.com/dmtconstruction",
      name: "Facebook",
      color: "hover:bg-blue-600 border-blue-200"
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/company/dmtconstruction",
      name: "LinkedIn",
      color: "hover:bg-blue-700 border-blue-200"
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/dmtconstruction",
      name: "Twitter", 
      color: "hover:bg-sky-500 border-sky-200"
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/dmtconstruction",
      name: "Instagram",
      color: "hover:bg-pink-600 border-pink-200"
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/221771234567",
      name: "WhatsApp",
      color: "hover:bg-green-500 border-green-200"
    }
  ];

  const certifications = [
    { name: "Promoteur Agréé État", icon: FaAward },
    { name: "Certifié Qualité", icon: FaShieldAlt },
    { name: "Entreprise Reconnue", icon: FaHardHat },
    { name: "Innovation 2024", icon: FaRocket }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Section Principale */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Colonne 1 - Logo et Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <FaHardHat className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">DMT CONSTRUCTION</h3>
                <p className="text-blue-200 text-sm">SUARL • Capital 10.000.000 FCFA</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leader sénégalais en construction civile, terrassement et infrastructures. 
              Votre partenaire de confiance pour des projets d'excellence depuis 2013.
            </p>

            {/* Certifications */}
            <div className="space-y-3">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div key={index} className="flex items-center gap-3 text-sm text-blue-200">
                    <Icon className="text-blue-400" />
                    <span>{cert.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Colonne 2 - Liens Rapides */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-blue-400 text-xs group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-green-400 text-xs group-hover:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Contactez-Nous
            </h4>
            
            <div className="space-y-4">
              {/* Téléphone */}
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <a 
                    href="tel:+221338691545" 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    +221 33 869 15 45
                  </a>
                  <p className="text-sm text-blue-300">Standard</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaWhatsapp className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a 
                    href="https://wa.me/221771234567" 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +221 77 123 45 67
                  </a>
                  <p className="text-sm text-green-300">Contact direct</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a 
                    href="mailto:contact@dmtconstruction.sn" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 break-all"
                  >
                    contact@dmtconstruction.sn
                  </a>
                  <p className="text-sm text-purple-300">Réponse sous 24h</p>
                </div>
              </div>

              {/* Adresse */}
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-gray-300">Amitié 2 Immeuble SILÈNE</p>
                  <p className="text-sm text-orange-300">Dakar, Sénégal</p>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaClock className="text-white text-sm" />
                </div>
                <div>
                  <p className="font-semibold">Horaires</p>
                  <p className="text-gray-300">Lun - Ven: 8h-17h</p>
                  <p className="text-sm text-cyan-300">Sam: 9h-13h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Réseaux Sociaux et Newsletter */}
        <div className="border-t border-gray-700 pt-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Réseaux Sociaux */}
            <div>
              <h5 className="text-lg font-bold mb-4">Suivez notre actualité</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-800 border-2 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group`}
                      title={social.name}
                    >
                      <Icon className="text-gray-300 group-hover:text-white text-lg" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h5 className="text-lg font-bold mb-2">📧 Restez Informé</h5>
              <p className="text-gray-300 mb-4 text-sm">
                Recevez nos dernières réalisations et offres exclusives
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email professionnel"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Bas de Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center lg:text-left">
              <p>
                © {currentYear} DMT Construction SUARL. Tous droits réservés. | 
                Capital: 10.000.000 FCFA | RC: SN-DKR-2023-B-12345
              </p>
            </div>

            {/* Liens Légaux */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Badge de Confiance */}
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-xl border border-gray-700">
              <FaShieldAlt className="text-green-400" />
              <span className="text-sm text-gray-300">Entreprise Certifiée</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bandeau Urgence */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="font-semibold">🚨 Service Urgence Technique</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+221338691545"
                className="text-white hover:text-yellow-200 transition-colors font-semibold flex items-center gap-2"
              >
                <FaPhone className="text-sm" />
                +221 33 869 15 45
              </a>
              <span className="text-white/80">•</span>
              <a 
                href="https://wa.me/221771234567"
                className="text-white hover:text-yellow-200 transition-colors font-semibold flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-sm" />
                WhatsApp Urgence
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}