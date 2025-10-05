import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FTPTVSection from '@/components/FTPTVSection';
import CoverageSection from '@/components/CoverageSection';
import OffersSection from '@/components/OffersSection';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import MobileNavigation from '@/components/MobileNavigation';

export default function Home() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FTPTVSection />
        <CoverageSection />
        <OffersSection />
      </main>
      <Footer />
      <ContactModal />
      <MobileNavigation />
    </div>
  );
}