
import { Target, Heart, Shield, TrendingUp, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t('about.values.excellence'),
      description: t('about.values.excellence.desc')
    },
    {
      icon: TrendingUp,
      title: t('about.values.innovation'),
      description: t('about.values.innovation.desc')
    },
    {
      icon: Shield,
      title: t('about.values.integrity'),
      description: t('about.values.integrity.desc')
    },
    {
      icon: Target,
      title: t('about.values.results'),
      description: t('about.values.results.desc')
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            {t('about.title')}
          </h2>
        </div>

        {/* Nuestros Objetivos */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-brand-orange to-brand-orange-secondary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Target className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">
                {t('about.objectives.title')}
              </h3>
              <p className="text-lg md:text-xl text-center leading-relaxed max-w-4xl mx-auto text-white/90">
                {t('about.objectives.desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Nuestros Valores */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-brand-black text-center mb-12">
            <span className="bg-gradient-to-r from-brand-orange to-brand-orange-secondary bg-clip-text text-transparent">
              {t('about.values.title')}
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-brand-beige rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-brand-orange" />
                </div>
                <h4 className="text-xl font-bold text-brand-black mb-3">
                  {value.title}
                </h4>
                <p className="text-brand-gray text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quiénes Somos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-brand-orange-secondary/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <Users className="h-16 w-16 text-brand-orange mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                {t('about.who.title')}
              </h3>
              <p className="text-lg text-brand-gray leading-relaxed">
                {t('about.who.desc')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-brand-beige rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">15+</div>
              <div className="text-brand-gray text-sm">Años de Experiencia</div>
            </div>
            <div className="bg-brand-beige rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">50+</div>
              <div className="text-brand-gray text-sm">Proyectos Exitosos</div>
            </div>
            <div className="bg-brand-beige rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">25+</div>
              <div className="text-brand-gray text-sm">Industrias</div>
            </div>
            <div className="bg-brand-beige rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">98%</div>
              <div className="text-brand-gray text-sm">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
