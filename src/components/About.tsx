
import { CheckCircle, Heart, Shield, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Nos comprometemos con el éxito de cada cliente, trabajando como socios estratégicos."
    },
    {
      icon: Shield,
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la transparencia y la integridad."
    },
    {
      icon: Zap,
      title: "Innovación",
      description: "Aplicamos las últimas metodologías y tecnologías para generar resultados excepcionales."
    },
    {
      icon: CheckCircle,
      title: "Excelencia",
      description: "Mantenemos los más altos estándares de calidad en cada proyecto que emprendemos."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre <span className="bg-gradient-to-r from-blue-700 to-amber-500 bg-clip-text text-transparent">Nosotros</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Athenea Consulting nace de la pasión por transformar empresas y crear valor sostenible. 
              Con más de 15 años de experiencia en el mercado, hemos acompañado a cientos de organizaciones 
              en su camino hacia la excelencia operacional.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nuestro equipo multidisciplinario combina experiencia técnica con visión estratégica, 
              ofreciendo soluciones innovadoras que se adaptan a las necesidades específicas de cada cliente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Metodología Probada</h4>
                  <p className="text-gray-600 text-sm">Procesos estructurados y medibles</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Equipo Experto</h4>
                  <p className="text-gray-600 text-sm">Consultores certificados y especializados</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Resultados Medibles</h4>
                  <p className="text-gray-600 text-sm">Impacto cuantificable en su negocio</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Acompañamiento Integral</h4>
                  <p className="text-gray-600 text-sm">Soporte continuo en implementación</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nuestros Valores</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <value.icon className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
