
import { Mail, Phone, MapPin, Clock, Send, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-20 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            <span className="bg-gradient-to-r from-brand-orange to-brand-orange-secondary bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-black mb-6">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex items-center justify-center w-12 h-12 bg-brand-orange/10 rounded-full mr-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <Mail className="h-6 w-6 text-brand-orange group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-black mb-1">Email</h4>
                    <p className="text-brand-gray">info@atheneaconsulting.com</p>
                    <p className="text-brand-gray">contacto@atheneaconsulting.com</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex items-center justify-center w-12 h-12 bg-brand-orange/10 rounded-full mr-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <Phone className="h-6 w-6 text-brand-orange group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-black mb-1">Teléfono</h4>
                    <p className="text-brand-gray">+34 912 345 678</p>
                    <p className="text-brand-gray">+34 687 654 321</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex items-center justify-center w-12 h-12 bg-brand-orange/10 rounded-full mr-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <MapPin className="h-6 w-6 text-brand-orange group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-black mb-1">Dirección</h4>
                    <p className="text-brand-gray">Paseo de la Castellana, 123</p>
                    <p className="text-brand-gray">28046 Madrid, España</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex items-center justify-center w-12 h-12 bg-brand-orange/10 rounded-full mr-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <Clock className="h-6 w-6 text-brand-orange group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-black mb-1">Horario de Atención</h4>
                    <p className="text-brand-gray">Lunes - Viernes: 9:00 - 18:00</p>
                    <p className="text-brand-gray">Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-brand-orange to-brand-orange-secondary rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <Calendar className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-4">{t('contact.schedule')}</h3>
                <p className="text-white/90 mb-6">
                  Reserve una consulta gratuita de 30 minutos para discutir sus objetivos de negocio.
                </p>
                <Button className="bg-white text-brand-orange hover:bg-gray-100 font-semibold transition-all duration-300 hover:scale-105">
                  Agendar Ahora
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-black mb-6">
              {t('contact.form.title')}
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <Input 
                    placeholder="Su nombre completo"
                    className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">
                    {t('contact.form.company')}
                  </label>
                  <Input 
                    placeholder="Nombre de su empresa"
                    className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-black mb-2">
                  {t('contact.form.email')} *
                </label>
                <Input 
                  type="email"
                  placeholder="su.email@empresa.com"
                  className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-black mb-2">
                  {t('contact.form.phone')}
                </label>
                <Input 
                  placeholder="+34 XXX XXX XXX"
                  className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-black mb-2">
                  {t('contact.form.message')} *
                </label>
                <Textarea 
                  placeholder="Cuéntenos sobre su proyecto o consulta..."
                  rows={5}
                  className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange rounded-lg"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {t('contact.form.send')}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
