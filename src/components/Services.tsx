
import { 
  ShoppingCart, 
  Target, 
  Users, 
  TrendingUp,
  Handshake,
  BarChart3
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const procurementServices = [
    {
      icon: ShoppingCart,
      title: t('services.procurement.sourcing'),
      description: t('services.procurement.sourcing.desc'),
    },
    {
      icon: Handshake,
      title: t('services.procurement.supplier'),
      description: t('services.procurement.supplier.desc'),
    },
    {
      icon: Target,
      title: t('services.procurement.negotiation'),
      description: t('services.procurement.negotiation.desc'),
    }
  ];

  const salesServices = [
    {
      icon: BarChart3,
      title: t('services.sales.strategy'),
      description: t('services.sales.strategy.desc'),
    },
    {
      icon: TrendingUp,
      title: t('services.sales.process'),
      description: t('services.sales.process.desc'),
    },
    {
      icon: Users,
      title: t('services.sales.team'),
      description: t('services.sales.team.desc'),
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Procurement Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-secondary bg-clip-text text-transparent">
                {t('services.procurement.title')}
              </span>
            </h3>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              {t('services.procurement.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {procurementServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-orange/10 to-brand-orange-secondary/10 rounded-bl-2xl"></div>
                <div className="relative z-10">
                  <div className="text-brand-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-12 w-12" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-black mb-4">
                    {service.title}
                  </h4>
                  <p className="text-brand-gray leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sales Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              <span className="bg-gradient-to-r from-brand-orange to-brand-orange-secondary bg-clip-text text-transparent">
                {t('services.sales.title')}
              </span>
            </h3>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              {t('services.sales.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {salesServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-orange/10 to-brand-orange-secondary/10 rounded-bl-2xl"></div>
                <div className="relative z-10">
                  <div className="text-brand-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-12 w-12" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-black mb-4">
                    {service.title}
                  </h4>
                  <p className="text-brand-gray leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
