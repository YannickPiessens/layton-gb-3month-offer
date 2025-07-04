import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handlePurchase = () => {
    window.open("https://buy.stripe.com/6oE6qwfA099Q8qAaEK", "_blank");
  };

  return (
    <section className="py-16 md:py-20 bg-gb-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 md:mb-8 px-4">
            Your Mission Awaits
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
            This exclusive military discount won't last forever. Join the community of veterans 
            who've found their next challenge at Gracie Barra Layton.
            <br className="hidden md:block" />
            <strong>Continue your journey of excellence.</strong>
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 mb-8 md:mb-10 border border-white/20 mx-4 md:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="text-center py-2">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gb-red mb-1 md:mb-2">$270</div>
                <div className="text-white/90 text-xs md:text-sm lg:text-base">Military/Veteran Exclusive</div>
              </div>
              <div className="text-center py-2">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gb-red mb-1 md:mb-2">FREE</div>
                <div className="text-white/90 text-xs md:text-sm lg:text-base">Uniform + Community</div>
              </div>
              <div className="text-center py-2">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gb-red mb-1 md:mb-2">HONOR</div>
                <div className="text-white/90 text-xs md:text-sm lg:text-base">Discipline • Respect • Excellence</div>
              </div>
            </div>
            
            <div className="flex justify-center mb-4 md:mb-6">
              <Button 
                variant="gbRed" 
                size="lg" 
                onClick={handlePurchase}
                className="text-sm md:text-base lg:text-lg xl:text-xl px-4 md:px-6 lg:px-8 xl:px-12 py-3 md:py-4 lg:py-6 shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg"
              >
                🇺🇸 Click Here to Claim Your Military Discount
              </Button>
            </div>
            
            <div className="flex flex-col gap-2 md:gap-3 sm:flex-row sm:gap-4 justify-center items-center text-white/80 text-xs md:text-sm lg:text-base px-4">
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
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;