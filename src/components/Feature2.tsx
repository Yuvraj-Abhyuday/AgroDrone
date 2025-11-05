import { useTranslation, Trans } from "react-i18next";
import {
  Bot,
  Scaling,
  Grab,
  Radar,
  BatteryCharging,
  Camera,
  CheckCircle2,
} from "lucide-react";
// Change the import from an image to your video file
import featuresDroneVideo from "/video/balramVideo.mp4"; // <-- UPDATE THIS PATH

// Keep an array of the icon components in the correct order
const featureIcons = [Bot, Scaling, Grab, Radar, BatteryCharging, Camera];

const Features2 = () => {
  const { t } = useTranslation();

  // Fetch the list of feature names from the translation file
  const featureListNames = t('features2_section.feature_list', { returnObjects: true }) as string[];

  return (
    <section id="features2" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Video */}
          <div className="flex justify-center order-2 lg:order-1">
            {/* --- REPLACED IMAGE WITH VIDEO --- */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl  w-full max-w-md lg:max-w-full object-contain"
            >
              <source src={featuresDroneVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* --- END REPLACEMENT --- */}
          </div>

          {/* Right Column: Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-lg font-semibold text-secondary uppercase tracking-wider">
              {t('features2_section.tagline')}
            </h2>
            <h3 className="mt-2 text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
              {t('features2_section.title')}
            </h3>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('features2_section.description1')}
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex items-start">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              {/* Using the Trans component for text with bold tags */}
              <Trans
                i18nKey="features2_section.description2_dgca"
                components={{ 1: <strong /> }}
              />
            </p>

            {/* Feature List Grid */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4">
              {featureListNames.map((name, index) => {
                const Icon = featureIcons[index];
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 text-secondary" />
                    <span className="text-base font-medium text-gray-700 dark:text-gray-200">
                      {name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;