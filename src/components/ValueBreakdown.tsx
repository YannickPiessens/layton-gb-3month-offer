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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Amazing Value - Limited Time Only
            </h2>
            <p className="text-lg text-muted-foreground">
              See exactly what you get with this exclusive 3-month offer
            </p>
          </div>
          
          <Card className="shadow-lg border-2 border-gb-blue">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Value Breakdown */}
                <div>
                  <h3 className="text-2xl font-bold text-gb-blue mb-6 text-center">
                    💰 Value Breakdown
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-foreground">Regular Price (3 months @ $149)</span>
                      <span className="font-semibold text-foreground line-through">$447</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-foreground">Free Uniform (Gi)</span>
                      <span className="font-semibold text-foreground">$100+</span>
                    </div>
                    <div className="border-t-2 border-gb-red pt-4">
                      <div className="flex justify-between items-center p-3 bg-gb-light-blue rounded">
                        <span className="text-xl font-bold text-foreground">Your Price Today</span>
                        <span className="text-3xl font-bold text-gb-red">$270</span>
                      </div>
                      <div className="text-center mt-3">
                        <span className="text-lg font-bold text-green-600 bg-green-50 px-4 py-2 rounded-full">
                          💸 You Save: $277+
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* What Happens Next */}
                <div>
                  <h3 className="text-2xl font-bold text-gb-blue mb-6 text-center">
                    📅 What Happens Next
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-white rounded border-l-4 border-gb-blue">
                      <div className="w-8 h-8 bg-gb-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <div className="font-semibold text-foreground">Purchase Today</div>
                        <div className="text-sm text-muted-foreground">Secure your spot with instant access</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white rounded border-l-4 border-gb-blue">
                      <div className="w-8 h-8 bg-gb-blue text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <div className="font-semibold text-foreground">Start Training</div>
                        <div className="text-sm text-muted-foreground">Begin as early as tomorrow</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white rounded border-l-4 border-gb-blue">
                      <div className="w-8 h-8 bg-gb-blue text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <div className="font-semibold text-foreground">After 3 Months</div>
                        <div className="text-sm text-muted-foreground">
                          Continue at $129/mo (kids) or $149/mo (adults) - or cancel anytime
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <Button 
                  variant="gbRed" 
                  size="lg" 
                  onClick={handlePurchase}
                  className="text-lg px-10 py-4"
                >
                  🥋 Claim Your 3-Month Package
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  🔒 Secure payment • No hidden fees • Cancel anytime after 3 months
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