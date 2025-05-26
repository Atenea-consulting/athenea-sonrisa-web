
import { ArrowRight, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-beige via-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-brand-orange rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-orange-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-1000"></div>
      
      {/* Professional image overlay */}
      <div className="absolute top-1/4 right-10 hidden lg:block">
        <div className="w-48 h-64 rounded-2xl overflow-hidden shadow-2xl opacity-30 transform rotate-12">
          <img 
            src="/lovable-uploads/cf26bf9f-5d6a-4697-b4f6-7210cb82de09.png" 
            alt="Professional consulting" 
            className="w-full h-full object-cover filter grayscale"
          />
        </div>
      </div>

      <div className="absolute bottom-1/4 left-10 hidden lg:block">
        <div className="w-40 h-52 rounded-2xl overflow-hidden shadow-2xl opacity-25 transform -rotate-6">
          <img 
            src="/lovable-uploads/b3f8f963-6b9e-4f5b-9e8f-0e462e2b723b.png" 
            alt="Business professional" 
            className="w-full h-full object-cover filter grayscale"
          />
        </div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-brand-orange transform rotate-45 opacity-30"></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-brand-orange-secondary transform rotate-45 opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-brand-orange transform rotate-45 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-elegant font-bold text-brand-black mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-brand-orange to-brand-orange-secondary bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-gray mb-8 max-w-4xl mx-auto leading-relaxed font-body">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-glow font-body"
            >
              {t('hero.cta.services')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 font-body"
            >
              {t('hero.cta.contact')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <Award className="h-12 w-12 text-brand-orange mx-auto mb-4" />
              <h3 className="text-3xl font-elegant font-bold text-brand-black mb-2">15+</h3>
              <p className="text-brand-gray font-medium font-body">{t('hero.stats.experience')}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <Users className="h-12 w-12 text-brand-orange mx-auto mb-4" />
              <h3 className="text-3xl font-elegant font-bold text-brand-black mb-2">200+</h3>
              <p className="text-brand-gray font-medium font-body">{t('hero.stats.companies')}</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <TrendingUp className="h-12 w-12 text-brand-orange mx-auto mb-4" />
              <h3 className="text-3xl font-elegant font-bold text-brand-black mb-2">98%</h3>
              <p className="text-brand-gray font-medium font-body">{t('hero.stats.satisfaction')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
