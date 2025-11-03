import { CheckCircle2, Wrench, IndianRupee, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const usps = [
  {
    icon: CheckCircle2,
    title: "Indigenous Technology",
    description: "Built specifically for Indian farming conditions, climate, and crop varieties"
  },
  {
    icon: Wrench,
    title: "Easy to Operate",
    description: "Simple controls and comprehensive training for farmers of all technical backgrounds"
  },
  {
    icon: IndianRupee,
    title: "Affordable & Reliable",
    description: "Cost-effective solutions with local support and readily available spare parts"
  },
  {
    icon: Users,
    title: "Trusted by Farmers",
    description: "Serving 1000+ farming communities across India with proven results"
  }
];

const USP = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose AgroDrone?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Committed to making precision farming accessible to every Indian farmer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, index) => (
            <Card 
              key={index}
              className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg animate-scale-in bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <usp.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {usp.title}
                </h3>
                <p className="text-muted-foreground">
                  {usp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
