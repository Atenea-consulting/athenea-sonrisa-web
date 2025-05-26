
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.trends': 'Tendencias',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Transformamos Su Negocio',
    'hero.subtitle': 'Consultoría estratégica especializada en Procurement y Ventas que impulsa el crecimiento sostenible y la excelencia operacional de su empresa.',
    'hero.cta.services': 'Descubrir Servicios',
    'hero.cta.contact': 'Contactar Ahora',
    'hero.stats.experience': 'Años de Experiencia',
    'hero.stats.companies': 'Empresas Transformadas',
    'hero.stats.satisfaction': 'Satisfacción del Cliente',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones especializadas diseñadas para maximizar el valor de su organización',
    'services.procurement.title': 'Consultoría de Estrategia en Procurement',
    'services.procurement.subtitle': 'Optimización integral de la cadena de suministro y procesos de compras',
    'services.procurement.sourcing': 'Estrategia de Sourcing',
    'services.procurement.sourcing.desc': 'Desarrollo de estrategias de abastecimiento que reducen costos y mejoran la calidad.',
    'services.procurement.supplier': 'Gestión de Proveedores',
    'services.procurement.supplier.desc': 'Selección, evaluación y desarrollo de relaciones estratégicas con proveedores.',
    'services.procurement.negotiation': 'Negociación Estratégica',
    'services.procurement.negotiation.desc': 'Técnicas avanzadas de negociación para maximizar el valor en cada transacción.',
    'services.sales.title': 'Consultoría de Estrategia de Ventas',
    'services.sales.subtitle': 'Transformación comercial para acelerar el crecimiento y rentabilidad',
    'services.sales.strategy': 'Estrategia Comercial',
    'services.sales.strategy.desc': 'Desarrollo de estrategias de ventas alineadas con objetivos de crecimiento.',
    'services.sales.process': 'Optimización de Procesos',
    'services.sales.process.desc': 'Mejora de procesos comerciales para aumentar la eficiencia y conversión.',
    'services.sales.team': 'Desarrollo de Equipos',
    'services.sales.team.desc': 'Capacitación y desarrollo de equipos comerciales de alto rendimiento.',
    
    // About
    'about.title': 'Sobre Nosotros',
    'about.objectives.title': 'Nuestros Objetivos',
    'about.objectives.desc': 'Ser el socio estratégico preferido de empresas que buscan transformar sus operaciones de procurement y ventas, generando valor sostenible y ventajas competitivas duraderas.',
    'about.values.title': 'Nuestros Valores',
    'about.values.excellence': 'Excelencia',
    'about.values.excellence.desc': 'Mantenemos los más altos estándares en cada proyecto.',
    'about.values.innovation': 'Innovación',
    'about.values.innovation.desc': 'Aplicamos metodologías vanguardistas y soluciones disruptivas.',
    'about.values.integrity': 'Integridad',
    'about.values.integrity.desc': 'Construimos relaciones basadas en transparencia y confianza.',
    'about.values.results': 'Resultados',
    'about.values.results.desc': 'Nos enfocamos en generar impacto medible y valor tangible.',
    'about.who.title': 'Quiénes Somos',
    'about.who.desc': 'Somos un equipo de consultores especializados con más de 15 años de experiencia en transformación empresarial. Combinamos expertise técnico con visión estratégica para entregar soluciones que realmente transforman organizaciones.',
    
    // Trends
    'trends.title': 'Tendencias & Insights',
    'trends.subtitle': 'Mantente al día con las últimas tendencias en procurement y estrategia comercial',
    'trends.cta': 'Ver en LinkedIn',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Comencemos a transformar su empresa juntos',
    'contact.info.title': 'Información de Contacto',
    'contact.form.title': 'Envíenos un Mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.company': 'Empresa',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Teléfono',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.schedule': 'Agendar Consulta Gratuita',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.trends': 'Trends',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'We Transform Your Business',
    'hero.subtitle': 'Strategic consulting specialized in Procurement and Sales that drives sustainable growth and operational excellence for your company.',
    'hero.cta.services': 'Discover Services',
    'hero.cta.contact': 'Contact Now',
    'hero.stats.experience': 'Years of Experience',
    'hero.stats.companies': 'Companies Transformed',
    'hero.stats.satisfaction': 'Client Satisfaction',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Specialized solutions designed to maximize your organization\'s value',
    'services.procurement.title': 'Procurement Strategy Consulting',
    'services.procurement.subtitle': 'Comprehensive optimization of supply chain and purchasing processes',
    'services.procurement.sourcing': 'Sourcing Strategy',
    'services.procurement.sourcing.desc': 'Development of sourcing strategies that reduce costs and improve quality.',
    'services.procurement.supplier': 'Supplier Management',
    'services.procurement.supplier.desc': 'Selection, evaluation and development of strategic supplier relationships.',
    'services.procurement.negotiation': 'Strategic Negotiation',
    'services.procurement.negotiation.desc': 'Advanced negotiation techniques to maximize value in every transaction.',
    'services.sales.title': 'Sales Strategy Consulting',
    'services.sales.subtitle': 'Commercial transformation to accelerate growth and profitability',
    'services.sales.strategy': 'Commercial Strategy',
    'services.sales.strategy.desc': 'Development of sales strategies aligned with growth objectives.',
    'services.sales.process': 'Process Optimization',
    'services.sales.process.desc': 'Improvement of commercial processes to increase efficiency and conversion.',
    'services.sales.team': 'Team Development',
    'services.sales.team.desc': 'Training and development of high-performance sales teams.',
    
    // About
    'about.title': 'About Us',
    'about.objectives.title': 'Our Objectives',
    'about.objectives.desc': 'To be the preferred strategic partner for companies seeking to transform their procurement and sales operations, generating sustainable value and lasting competitive advantages.',
    'about.values.title': 'Our Values',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'We maintain the highest standards in every project.',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'We apply cutting-edge methodologies and disruptive solutions.',
    'about.values.integrity': 'Integrity',
    'about.values.integrity.desc': 'We build relationships based on transparency and trust.',
    'about.values.results': 'Results',
    'about.values.results.desc': 'We focus on generating measurable impact and tangible value.',
    'about.who.title': 'Who We Are',
    'about.who.desc': 'We are a team of specialized consultants with over 15 years of experience in business transformation. We combine technical expertise with strategic vision to deliver solutions that truly transform organizations.',
    
    // Trends
    'trends.title': 'Trends & Insights',
    'trends.subtitle': 'Stay updated with the latest trends in procurement and commercial strategy',
    'trends.cta': 'View on LinkedIn',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s start transforming your company together',
    'contact.info.title': 'Contact Information',
    'contact.form.title': 'Send Us a Message',
    'contact.form.name': 'Name',
    'contact.form.company': 'Company',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.schedule': 'Schedule Free Consultation',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
