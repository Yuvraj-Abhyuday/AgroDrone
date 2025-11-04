import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Maximize, Camera, Gauge, Wind, Clock } from "lucide-react";

// Keep the icons in a local array, in the correct order
const specIcons = [Clock, Maximize, Battery, Camera, Gauge, Wind];

const DroneSpecs = () => {
  const { t } = useTranslation();

  // Fetch the translated content from the JSON file
  const specs = t('specs_section.cards', { returnObjects: true }) as { title: string, value: string, description: string }[];
  const additionalFeatures = t('specs_section.additional_features.list', { returnObjects: true }) as { feature: string, details: string }[];

  return (
    <section id="specs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('specs_section.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('specs_section.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => {
            const Icon = specIcons[index];
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow animate-scale-in border-l-4 border-l-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{spec.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {spec.value}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-card rounded-lg border border-border animate-fade-in">
          <h3 className="text-xl font-semibold mb-4 text-center">
            {t('specs_section.additional_features.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {additionalFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <p>
                  <span className="font-medium">{item.feature}</span> {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DroneSpecs;