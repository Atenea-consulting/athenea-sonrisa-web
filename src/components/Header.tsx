
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { name: t('nav.home'), href: '#inicio' },
    { name: t('nav.services'), href: '#servicios' },
    { name: t('nav.about'), href: '#nosotros' },
    { name: t('nav.trends'), href: '#tendencias' },
    { name: t('nav.contact'), href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-brand-black">Athenea</span>
              <span className="text-brand-orange"> Consulting</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-brand-black hover:text-brand-orange font-medium transition-all duration-300 hover:scale-105 transform relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="flex items-center space-x-2 text-brand-black hover:text-brand-orange transition-colors duration-300"
              >
                <Globe size={18} />
                <span className="text-sm font-medium uppercase">{language}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-black hover:text-brand-orange transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-4">
            <nav className="flex flex-col space-y-3 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-brand-black hover:text-brand-orange font-medium transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
