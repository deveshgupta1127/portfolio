import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center fade-in">
          <div className="mb-8">
            <img
              src={profilePhoto}
              alt="Gupta Devesh Yash"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-2xl scale-in"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent slide-up">
            Gupta Devesh Yash
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 slide-up" style={{ animationDelay: '0.2s' }}>
            Turning Data Into Intelligent Decisions
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 slide-up" style={{ animationDelay: '0.4s' }}>
            Passionate data scientist and machine learning enthusiast, transforming raw data into actionable insights through innovative AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up" style={{ animationDelay: '0.6s' }}>
            <Button onClick={() => window.open('/resume.pdf', '_blank')} className="btn-hero">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button variant="outline" onClick={scrollToAbout} className="btn-outline">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground cursor-pointer" onClick={scrollToAbout} />
        </div>
      </div>
    </section>
  );
};