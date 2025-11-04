import { useTranslation } from "react-i18next"; // <-- Import the hook
import { Button } from "@/components/ui/button";
import aboutDroneImage from "@/assets/Arms.png";

const AboutUs = () => {
  const { t } = useTranslation(); // <-- Initialize the hook

  // Fetch the stats array from the translation file
  const stats = t('about_us_section.stats', { returnObjects: true }) as { value: string, label: string }[];

  return (
    <section id="about-us" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-secondary mb-2">
              {t('about_us_section.tagline')}
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              {t('about_us_section.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t('about_us_section.description')}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-3xl font-bold text-secondary">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-base"
            >
              {t('about_us_section.button_text')}
            </Button>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center">
            <img 
              src={aboutDroneImage} 
              alt={t('about_us_section.image_alt')}
              className="rounded-xl shadow-2xl w-full max-w-md lg:max-w-full object-cover aspect-square" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;