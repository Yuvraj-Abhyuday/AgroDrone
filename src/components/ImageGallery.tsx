import droneSprayingImg from "@/assets/drone-spraying.jpg";
import droneMonitoringImg from "@/assets/drone-monitoring.png";
import droneNavigationImg from "@/assets/drone-navigation.jpg";

const images = [
  {
    src: droneSprayingImg,
    alt: "Drone spraying crops in Indian farmland",
    title: "Precision Spraying"
  },
  {
    src: droneMonitoringImg,
    alt: "Drone monitoring crop health",
    title: "Crop Monitoring"
  },
  {
    src: droneNavigationImg,
    alt: "Drone with GPS navigation system",
    title: "GPS Navigation"
  }
];

const ImageGallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Drones in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our technology transforms farming across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
