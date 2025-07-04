import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ValueBreakdown = () => {
  const handlePurchase = () => {
    window.open("https://buy.stripe.com/6oE6qwfA099Q8qAaEK", "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Military and Veterans Exclusive Pricing
            </h2>
            <p className="text-base md:text-lg text-muted-foreground px-4">
              Our way of saying thank you for your service - see exactly what you get with this exclusive offer
            </p>
          </div>
          
          <Card className="shadow-lg border-2 border-gb-blue">
            <CardContent className="p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Value Breakdown */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gb-blue mb-4 md:mb-6 text-center">
                    💰 Value Breakdown
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center p-2 md:p-3 bg-gray-50 rounded text-sm md:text-base">
                      <span className="text-foreground">Regular Price (3 months @ $149)</span>
                      <span className="font-semibold text-foreground line-through">$447</span>
                    </div>
                    <div className="flex justify-between items-center p-2 md:p-3 bg-gray-50 rounded text-sm md:text-base">
                      <span className="text-foreground">Free Uniform (Gi)</span>
                      <span className="font-semibold text-foreground">$200</span>
                    </div>
                    <div className="border-t-2 border-gb-red pt-4">
                      <div className="flex justify-between items-center p-2 md:p-3 bg-gb-light-blue rounded">
                        <span className="text-lg md:text-xl font-bold text-foreground">Your Price Today</span>
                        <span className="text-2xl md:text-3xl font-bold text-gb-red">$270</span>
                      </div>
                      <div className="text-center mt-3">
                        <span className="text-base md:text-lg font-bold text-green-600 bg-green-50 px-3 md:px-4 py-2 rounded-full">
                          💸 You Save: $377
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* What Happens Next */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gb-blue mb-4 md:mb-6 text-center">
                    📅 What Happens Next
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-3 p-2 md:p-3 bg-white rounded border-l-4 border-gb-blue">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gb-blue text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">1</div>
                      <div>
                        <div className="font-semibold text-foreground text-sm md:text-base">Purchase Today</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Secure your spot with instant access</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-2 md:p-3 bg-white rounded border-l-4 border-gb-blue">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gb-blue text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">2</div>
                      <div>
                        <div className="font-semibold text-foreground text-sm md:text-base">Start Training</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Sign up today, start tonight</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-2 md:p-3 bg-white rounded border-l-4 border-gb-blue">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gb-blue text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">3</div>
                      <div>
                        <div className="font-semibold text-foreground text-sm md:text-base">After 3 Months</div>
                        <div className="text-xs md:text-sm text-muted-foreground">
                          Continue at $149/month, month to month
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                <Button 
                  variant="gbRed" 
                  size="lg" 
                  onClick={handlePurchase}
                  className="text-base md:text-lg px-6 md:px-10 py-3 md:py-4 w-full sm:w-auto"
                >
                  🇺🇸 Secure Your Military Discount
                </Button>
                <p className="text-xs md:text-sm text-muted-foreground mt-3">
                  🔒 Secure payment • No hidden fees • No long-term contract
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValueBreakdown;