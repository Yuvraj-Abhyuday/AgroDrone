import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DroneSpecs from "@/components/DroneSpecs";
import ImageGallery from "@/components/ImageGallery";
import MissionVision from "@/components/MissionVision";
import USP from "@/components/USP";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <DroneSpecs />
      <div id="gallery">
        <ImageGallery />
      </div>
      <div id="mission">
        <MissionVision />
      </div>
      <div id="usp">
        <USP />
      </div>
      <div id="enquiry">
        <EnquiryForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
