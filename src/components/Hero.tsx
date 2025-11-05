import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
// Import the video file
import heroVideo from "/video/DroneHeroSection.webm";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToEnquiry = () => {
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline // Important for autoplay on mobile devices
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/webm" />
        {/* You can keep a public path as a fallback if the import fails or for other formats */}
        <source src="/video/DroneHeroSection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50  to-white/80 z-0 "></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {t('hero.title_line1')}<br />
          <span className="text-secondary">{t('hero.title_line2_highlight')}</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <Button
          size="lg"
          onClick={scrollToEnquiry}
          className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          {t('buttons.enquire_now')}
          <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>

        {/* Added Information Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Protect */}
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-left">
            <h3 className="text-secondary font-bold text-lg mb-2">{t('hero.cards.protect.title')}</h3>
            <p className="text-2xl font-semibold text-white mb-1">{t('hero.cards.protect.main_text')}</p>
            <p className="text-white/80 text-sm">{t('hero.cards.protect.sub_text')}</p>
          </div>

          {/* Card 2: Growth */}
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-left">
            <h3 className="text-secondary font-bold text-lg mb-2">{t('hero.cards.growth.title')}</h3>
            <p className="text-2xl font-semibold text-white mb-1">{t('hero.cards.growth.main_text')}</p>
            <p className="text-white/80 text-sm">{t('hero.cards.growth.sub_text')}</p>
          </div>

          {/* Card 3: Saving */}
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-left">
            <h3 className="text-secondary font-bold text-lg mb-2">{t('hero.cards.saving.title')}</h3>
            <p className="text-2xl font-semibold text-white mb-1">{t('hero.cards.saving.main_text')}</p>
            <p className="text-white/80 text-sm">{t('hero.cards.saving.sub_text')}</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;