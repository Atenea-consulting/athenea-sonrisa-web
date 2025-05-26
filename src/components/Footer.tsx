
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent mb-4">
              Athenea Consulting
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Transformamos empresas a través de estrategias innovadoras y soluciones 
              personalizadas que impulsan el crecimiento sostenible.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">Madrid, España</span>
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">+34 912 345 678</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm">info@atheneaconsulting.com</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Análisis Estratégico</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Innovación y Desarrollo</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Gestión del Talento</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Planificación Estratégica</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Optimización de Procesos</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Crecimiento y Expansión</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-blue-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a></li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Horario de Atención</h4>
              <p className="text-gray-300 text-sm">Lunes - Viernes: 9:00 - 18:00</p>
              <p className="text-gray-300 text-sm">Sábados: 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Athenea Consulting. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Hecho con <Heart className="h-4 w-4 text-red-500 mx-1" /> para impulsar su éxito
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
