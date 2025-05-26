
import { ExternalLink, Calendar, TrendingUp, ShoppingCart, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Trends = () => {
  const { t } = useLanguage();

  const trendPosts = [
    {
      category: 'Procurement',
      icon: ShoppingCart,
      title: 'El Futuro del Procurement Digital',
      excerpt: 'Cómo la transformación digital está revolucionando las estrategias de compras y la gestión de proveedores en 2024.',
      date: '15 Nov 2024',
      readTime: '5 min'
    },
    {
      category: 'Sales Strategy',
      icon: BarChart3,
      title: 'Estrategias de Ventas B2B Innovadoras',
      excerpt: 'Las metodologías más efectivas para acelerar el crecimiento comercial en mercados competitivos.',
      date: '12 Nov 2024',
      readTime: '7 min'
    },
    {
      category: 'Digital Transformation',
      icon: TrendingUp,
      title: 'ROI en Transformación Digital',
      excerpt: 'Métricas clave para medir el retorno de inversión en proyectos de transformación empresarial.',
      date: '08 Nov 2024',
      readTime: '6 min'
    }
  ];

  return (
    <section id="tendencias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-brand-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-brand-orange to-brand-orange-secondary bg-clip-text text-transparent">
              {t('trends.title')}
            </span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto font-body">
            {t('trends.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trendPosts.map((post, index) => (
            <article 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-brand-orange/10 to-brand-orange-secondary/10 h-48 flex items-center justify-center">
                <post.icon className="h-16 w-16 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <post.icon className="h-4 w-4 text-brand-orange" />
                    <span className="text-xs font-medium text-brand-black font-body">{post.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-brand-gray mb-3 font-body">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-elegant font-bold text-brand-black mb-3 group-hover:text-brand-orange transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-brand-gray leading-relaxed mb-4 font-body">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="outline" 
                  className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 font-body"
                >
                  {t('trends.cta')}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-orange to-brand-orange-secondary rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-elegant font-bold mb-4">¿Quiere estar al día con las últimas tendencias?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto font-body">
                Síganos en LinkedIn para recibir insights exclusivos y análisis de tendencias del mercado.
              </p>
              <Button 
                className="bg-white text-brand-orange hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 font-body"
              >
                Seguir en LinkedIn
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
