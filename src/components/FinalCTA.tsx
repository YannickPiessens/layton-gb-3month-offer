import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handlePurchase = () => {
    window.open("https://buy.stripe.com/6oE6qwfA099Q8qAaEK", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
            This Offer Won't Last Forever
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Spots are limited, and this special pricing is only available for a short time. 
            Take the first step today and join the Gracie Barra Layton family.
          </p>
          
          <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-primary-foreground/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">$270</div>
                <div className="text-primary-foreground/80">Complete 3-Month Program</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">Free</div>
                <div className="text-primary-foreground/80">Uniform Included ($100+ Value)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">Zero</div>
                <div className="text-primary-foreground/80">Long-Term Commitment</div>
              </div>
            </div>
            
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handlePurchase}
              className="text-xl px-12 py-6 animate-glow"
            >
              Secure Your Spot Today
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 text-primary-foreground/80">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                Instant access after purchase
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                Start as soon as tomorrow
              </span>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-primary-foreground/70 mb-4">
              Questions? Ready to get started?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-primary-foreground/90">
              <a href="tel:801-252-6087" className="hover:text-gold transition-colors">
                📞 801-252-6087
              </a>
              <a href="mailto:steve@gblayton.com" className="hover:text-gold transition-colors">
                ✉️ steve@gblayton.com
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gold rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gold rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gold rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default FinalCTA;