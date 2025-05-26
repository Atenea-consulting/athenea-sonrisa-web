
import { Mail, Phone, MapPin, Heart, Linkedin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-6">
              <span className="text-white">Athenea</span>
              <span className="text-brand-orange"> Consulting</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transformamos empresas a través de estrategias innovadoras en Procurement y Ventas, 
              generando valor sostenible y ventajas competitivas duraderas.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-brand-orange" />
                <span className="text-sm">Madrid, España</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-brand-orange" />
                <span className="text-sm">+34 912 345 678</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-brand-orange" />
                <span className="text-sm">info@atheneaconsulting.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-orange">Servicios</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#servicios" className="hover:text-brand-orange transition-colors duration-300 flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Procurement Strategy
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-brand-orange transition-colors duration-300 flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Sales Strategy
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-brand-orange transition-colors duration-300 flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Supplier Management
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-brand-orange transition-colors duration-300 flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Team Development
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-orange">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#inicio" className="hover:text-brand-orange transition-colors duration-300 flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-brand-orange transition-colors duration-300 flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-brand-orange transition-colors duration-300 flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#tendencias" className="hover:text-brand-orange transition-colors duration-300 flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t('nav.trends')}
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-brand-orange transition-colors duration-300 flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gradient-to-r from-brand-orange/10 to-brand-orange-secondary/10 rounded-2xl p-6 text-center">
            <h4 className="text-xl font-bold mb-2">¿Quiere recibir nuestros insights?</h4>
            <p className="text-gray-300 mb-4">Suscríbase a nuestro boletín para recibir tendencias y estrategias exclusivas.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="su.email@empresa.com"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:border-brand-orange focus:outline-none"
              />
              <button className="bg-brand-orange hover:bg-brand-orange/90 px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Athenea Consulting. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm flex items-center">
                Hecho con <Heart className="h-4 w-4 text-brand-orange mx-1" /> para impulsar su éxito
              </p>
              <a 
                href="#" 
                className="text-gray-400 hover:text-brand-orange transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
