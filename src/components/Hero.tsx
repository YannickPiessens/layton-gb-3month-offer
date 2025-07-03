import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const handlePurchase = () => {
    window.open("https://buy.stripe.com/6oE6qwfA099Q8qAaEK", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary-deep/75" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Train for 3 Months.
            <span className="block text-gold">Change Your Life.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We believe Jiu-Jitsu is more than just a martial art — it's a path to strength, 
            confidence, and lifelong friendships. For a limited time, get 3 months of training 
            — plus a free uniform — for only <span className="text-gold font-bold">$270</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handlePurchase}
              className="text-lg px-8 py-4 animate-glow"
            >
              Claim Your 3-Month Trial
            </Button>
            <p className="text-primary-foreground/80 text-sm">
              🚀 Limited-time offer • No commitment required
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-card/20 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="text-2xl font-bold text-gold">$270</div>
              <div className="text-primary-foreground text-sm">3 Months Total</div>
            </div>
            <div className="bg-card/20 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="text-2xl font-bold text-gold">Free</div>
              <div className="text-primary-foreground text-sm">Uniform Included</div>
            </div>
            <div className="bg-card/20 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="text-2xl font-bold text-gold">No</div>
              <div className="text-primary-foreground text-sm">Commitment</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;