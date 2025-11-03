import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Maximize, Camera, Gauge, Wind, Clock } from "lucide-react";

const DroneSpecs = () => {
  const specs = [
    {
      icon: Clock,
      title: "Flight Time",
      value: "30-45 minutes",
      description: "Extended battery life for large farm coverage",
    },
    {
      icon: Maximize,
      title: "Coverage Area",
      value: "10-15 acres/hr",
      description: "Efficient spraying and monitoring capacity",
    },
    {
      icon: Battery,
      title: "Payload Capacity",
      value: "10-16 liters",
      description: "Suitable for pesticides and fertilizers",
    },
    {
      icon: Camera,
      title: "Camera Resolution",
      value: "4K HD",
      description: "High-resolution crop health monitoring",
    },
    {
      icon: Gauge,
      title: "Max Speed",
      value: "15 m/s",
      description: "Fast and efficient field operations",
    },
    {
      icon: Wind,
      title: "Wind Resistance",
      value: "Up to 10 m/s",
      description: "Stable flight in various weather conditions",
    },
  ];

  return (
    <section id="specs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Specifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our drones are engineered for Indian agricultural conditions with powerful features and reliable performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow animate-scale-in border-l-4 border-l-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <spec.icon className="h-6 w-6 text-primary" />
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
          ))}
        </div>

        <div className="mt-12 p-6 bg-card rounded-lg border border-border animate-fade-in">
          <h3 className="text-xl font-semibold mb-4 text-center">Additional Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              </div>
              <p><span className="font-medium">GPS Navigation:</span> Precision waypoint mapping and autonomous flight</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              </div>
              <p><span className="font-medium">Smart Sensors:</span> Real-time crop health and soil moisture detection</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              </div>
              <p><span className="font-medium">Mobile App Control:</span> Easy operation via smartphone interface</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              </div>
              <p><span className="font-medium">Safety Features:</span> Obstacle detection and auto-return on low battery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DroneSpecs;
