import { Button } from "@/components/ui/button";

const gbLogo = "/lovable-uploads/bee8aa9e-c16e-4413-97f1-25f68cb01ef6.png";

const Hero = () => {
  const handlePurchase = () => {
    window.open("https://buy.stripe.com/6oE6qwfA099Q8qAaEK", "_blank");
  };

  return (
    <section className="bg-white py-16 border-b-4 border-gb-red">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with Logo and Title */}
          <div className="text-center mb-12">
            <img 
              src={gbLogo} 
              alt="Gracie Barra Layton" 
              className="w-40 h-40 mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              <span className="text-gb-red">Military & Veterans</span> Special
            </h1>
            <h2 className="text-2xl md:text-3xl text-gb-blue font-semibold mb-6">
              3 Months for $270 • Honor • Discipline • Brotherhood
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Exclusive offer for our Military and Veterans. Continue your journey of discipline and excellence 
              with authentic Brazilian Jiu-Jitsu training. Build strength, sharpen your mind, and join a brotherhood 
              that understands service and sacrifice.
            </p>
          </div>

          {/* Military Family Note */}
          <div className="bg-gb-red/10 border-2 border-gb-red rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-gb-red font-semibold text-center">
              🇺🇸 Exclusive offer for Active Military, Reserves, National Guard, Veterans & Military Families
            </p>
          </div>

          {/* Offer Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gb-light-blue rounded-lg p-6 text-center border-2 border-gb-blue">
              <div className="text-4xl font-bold text-gb-blue mb-2">$270</div>
              <div className="text-foreground font-semibold">3 Months Complete</div>
              <div className="text-sm text-muted-foreground mt-2">
                Military/Veteran exclusive pricing
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border-2 border-gb-red shadow-md">
              <div className="text-4xl font-bold text-gb-red mb-2">FREE</div>
              <div className="text-foreground font-semibold">Uniform Included</div>
              <div className="text-sm text-muted-foreground mt-2">
                $200 value - yours to keep
              </div>
            </div>
            <div className="bg-gb-light-blue rounded-lg p-6 text-center border-2 border-gb-blue">
              <div className="text-4xl font-bold text-gb-blue mb-2">ZERO</div>
              <div className="text-foreground font-semibold">Commitment</div>
              <div className="text-sm text-muted-foreground mt-2">
                No long-term contracts - your choice
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button 
              variant="gb" 
              size="lg" 
              onClick={handlePurchase}
              className="text-xl px-12 py-4 mb-4"
            >
              🇺🇸 Claim Your Military Discount
            </Button>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
              <span>✅ Brotherhood and camaraderie</span>
              <span>✅ Physical and mental discipline</span>
              <span>✅ Stress relief and fitness</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;