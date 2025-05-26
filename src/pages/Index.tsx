
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Trends from '@/components/Trends';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <About />
        <Trends />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
