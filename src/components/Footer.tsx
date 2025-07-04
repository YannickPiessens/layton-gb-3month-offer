import { Button } from "@/components/ui/button";

const Footer = () => {
  const handlePurchase = () => {
    window.open("https://buy.stripe.com/6oE6qwfA099Q8qAaEK", "_blank");
  };
  return (
    <footer className="bg-white py-12 border-t-4 border-gb-red">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gb-blue mb-2">
              Gracie Barra Layton
            </h3>
            <p className="text-muted-foreground">
              Your Path to Strength, Confidence, and Community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gb-blue mb-2 md:mb-3 text-base md:text-lg">📍 Location</h4>
              <p className="text-foreground leading-relaxed text-sm md:text-base">
                70 S Fairfield Rd, Suite 4<br />
                Layton, Utah 84041
              </p>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gb-blue mb-2 md:mb-3 text-base md:text-lg">📞 Contact</h4>
              <div className="space-y-2">
                <p>
                  <a href="tel:801-252-6087" className="text-foreground hover:text-gb-red transition-colors font-semibold text-sm md:text-base">
                    801-252-6087
                  </a>
                </p>
                <p>
                  <a href="mailto:steve@gblayton.com" className="text-foreground hover:text-gb-red transition-colors font-semibold text-sm md:text-base">
                    steve@gblayton.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-gb-light-blue rounded-lg border-2 border-gb-blue">
              <h4 className="font-bold text-gb-blue mb-2 md:mb-3 text-base md:text-lg">🎉 Free Class</h4>
              <p className="text-foreground leading-relaxed text-sm md:text-base">
                <strong>Family Class</strong><br />
                Saturdays at 10:00 AM<br />
                <span className="text-gb-red font-semibold">No experience needed!</span>
              </p>
            </div>
          </div>
          
          {/* Ready to Start Your Journey Section */}
          <div className="bg-gb-blue rounded-lg p-6 md:p-8 mb-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-base md:text-lg text-white/90 mb-6 px-2">
              <strong>$270 for 3 months unlimited training</strong> • FREE uniform included • No long-term commitment
            </p>
            
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={handlePurchase}
              className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-white text-gb-blue hover:bg-white/90 font-bold shadow-lg mb-6 w-full sm:w-auto"
            >
              <span className="md:hidden">👆 Claim Military Discount</span>
              <span className="hidden md:inline">👆 Click Here to Claim Your Military Discount</span>
            </Button>
            
            <p className="text-base md:text-lg text-white/70 mb-4">
              Questions? Ready to get started?
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center items-center text-white/90">
              <a href="tel:801-252-6087" className="hover:text-gb-red transition-colors font-semibold text-sm md:text-base">
                📞 Call: 801-252-6087
              </a>
              <a href="mailto:steve@gblayton.com" className="hover:text-gb-red transition-colors font-semibold text-sm md:text-base">
                ✉️ Email: steve@gblayton.com
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-muted-foreground text-sm mb-2">
              © 2024 Gracie Barra Layton. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Official Gracie Barra affiliate • Authentic Brazilian Jiu-Jitsu instruction
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;