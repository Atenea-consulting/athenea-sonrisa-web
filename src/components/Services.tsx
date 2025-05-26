
import { 
  BarChart3, 
  Lightbulb, 
  Users, 
  Target, 
  Cog, 
  TrendingUp 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Análisis Estratégico",
      description: "Evaluamos su situación actual y diseñamos estrategias personalizadas para optimizar el rendimiento empresarial.",
      color: "text-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Innovación y Desarrollo",
      description: "Implementamos procesos innovadores que posicionan su empresa a la vanguardia de su sector.",
      color: "text-amber-500"
    },
    {
      icon: Users,
      title: "Gestión del Talento",
      description: "Desarrollamos equipos de alto rendimiento y optimizamos la gestión del capital humano.",
      color: "text-green-600"
    },
    {
      icon: Target,
      title: "Planificación Estratégica",
      description: "Definimos objetivos claros y desarrollamos roadmaps detallados para alcanzar sus metas empresariales.",
      color: "text-purple-600"
    },
    {
      icon: Cog,
      title: "Optimización de Procesos",
      description: "Mejoramos la eficiencia operacional a través de la automatización y reingeniería de procesos.",
      color: "text-red-500"
    },
    {
      icon: TrendingUp,
      title: "Crecimiento y Expansión",
      description: "Acompañamos su crecimiento sostenible y exploramos nuevas oportunidades de mercado.",
      color: "text-indigo-600"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="bg-gradient-to-r from-blue-700 to-amber-500 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de consultoría diseñadas para transformar 
            su empresa y maximizar su potencial de crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className={`${service.color} mb-6`}>
                <service.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-700 to-amber-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para transformar su empresa?</h3>
            <p className="text-blue-100 mb-6">
              Contacte con nuestros expertos y descubra cómo podemos impulsar su negocio hacia el éxito.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Solicitar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
