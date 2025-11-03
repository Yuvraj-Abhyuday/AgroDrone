import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To bring advanced agricultural technology to every Indian farm, empowering farmers 
              with smart and sustainable solutions that enhance productivity, reduce costs, and 
              promote environmental stewardship.
            </p>
          </div>

          {/* Vision */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Vision
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A future where every farmer uses drones to achieve higher productivity, sustainability, 
              and prosperity. We envision Indian agriculture leading the world in technological 
              innovation and sustainable farming practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
