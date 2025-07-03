import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handlePurchase = () => {
    window.open("https://buy.stripe.com/6oE6qwfA099Q8qAaEK", "_blank");
  };

  return (
    <section className="py-20 bg-gb-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Your Mission Awaits
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            This exclusive military discount won't last forever. Join the brotherhood of veterans 
            who've found their next challenge at Gracie Barra Layton.
            <br className="hidden md:block" />
            <strong>Continue your journey of excellence.</strong>
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gb-red mb-2">$270</div>
                <div className="text-white/90">Military/Veteran Exclusive</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gb-red mb-2">FREE</div>
                <div className="text-white/90">Uniform + Community</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gb-red mb-2">HONOR</div>
                <div className="text-white/90">Discipline • Respect • Excellence</div>
              </div>
            </div>
            
            <Button 
              variant="gbRed" 
              size="lg" 
              onClick={handlePurchase}
              className="text-xl px-12 py-6 shadow-lg"
            >
              🇺🇸 Honor Your Service - Start Today
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 text-white/80">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gb-red rounded-full" />
                Stress relief and PTSD support
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gb-red rounded-full" />
                Veteran community awaits
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gb-red rounded-full" />
                Mission-ready training
              </span>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-lg text-white/70 mb-4">
              Questions? Ready to get started?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
              <a href="tel:801-252-6087" className="hover:text-gb-red transition-colors font-semibold">
                📞 Call: 801-252-6087
              </a>
              <a href="mailto:steve@gblayton.com" className="hover:text-gb-red transition-colors font-semibold">
                ✉️ Email: steve@gblayton.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;