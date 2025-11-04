import { useTranslation } from "react-i18next";
import {
  SprayCan,
  Leaf,
  HandCoins,
  GraduationCap,
  Headphones,
  ShieldCheck,
  Globe,
  Wrench,
} from "lucide-react";

// Keep an array of the icon components in the correct order
const serviceIcons = [
  SprayCan,
  Leaf,
  HandCoins,
  GraduationCap,
  Headphones,
  ShieldCheck,
  Globe,
  Wrench,
];

const Services = () => {
  const { t } = useTranslation();

  // Fetch the array of service card data from the translation file
  const serviceItems = t('services_section.cards', { returnObjects: true }) as { title: string, description: string }[];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-secondary uppercase tracking-wider">
            {t('services_section.tagline')}
          </h2>
          <h3 className="mt-2 text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            {t('services_section.title')}
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            {t('services_section.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((item, index) => {
            // Get the corresponding icon component for the current item
            const Icon = serviceIcons[index];
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start"
              >
                <div className="bg-secondary/10 p-4 rounded-full mb-4">
                  <Icon size={32} className="text-secondary" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;