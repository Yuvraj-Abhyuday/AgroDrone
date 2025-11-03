import { Droplets, Eye, Navigation, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Droplets,
    title: "Smart Crop Spraying",
    description: "Automated precision spraying that saves up to 40% pesticides and fertilizers while ensuring uniform coverage across your fields."
  },
  {
    icon: Eye,
    title: "Aerial Crop Health Monitoring",
    description: "Advanced imaging technology identifies crop stress, disease, and pest infestations early, allowing timely intervention."
  },
  {
    icon: Navigation,
    title: "GPS-Based Precision Navigation",
    description: "Accurate field mapping and waypoint navigation ensures complete coverage without overlaps or gaps."
  },
  {
    icon: BarChart3,
    title: "Real-Time Data Analytics",
    description: "Get instant insights on crop health, growth patterns, and yield predictions through our easy-to-use dashboard."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Modern Farming
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technology designed specifically for Indian agricultural conditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
