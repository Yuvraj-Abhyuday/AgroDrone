import { useTranslation } from "react-i18next"; // <-- Import the hook
import { Droplets, Eye, Navigation, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Keep the icons in the component, in the correct order.
const featureIcons = [Droplets, Eye, Navigation, BarChart3];

const Features = () => {
  const { t } = useTranslation(); // <-- Initialize the hook

  // Fetch the array of feature cards from the translation file.
  // The `{ returnObjects: true }` option is crucial for fetching arrays/objects.
  const features = t('features_section.cards', { returnObjects: true }) as { title: string, description: string }[];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('features_section.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('features_section.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            // Get the corresponding icon for the current feature
            const Icon = featureIcons[index];
            return (
              <Card
                key={index}
                className="border-border hover:border-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;