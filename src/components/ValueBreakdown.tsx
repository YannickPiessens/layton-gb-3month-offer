import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ValueBreakdown = () => {
  const handlePurchase = () => {
    window.open("https://buy.stripe.com/6oE6qwfA099Q8qAaEK", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What's Included
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to start your martial arts journey, at an unbeatable value.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 shadow-card border-2 border-gold/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Amazing Value Breakdown
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-muted-foreground">Regular monthly rate ($149 × 3)</span>
                      <span className="text-lg font-semibold text-foreground line-through">$447</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-muted-foreground">Free uniform (value)</span>
                      <span className="text-lg font-semibold text-foreground">$100+</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-foreground">Your Price</span>
                        <span className="text-3xl font-bold text-gold">$270</span>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-lg font-semibold text-success">
                          You Save: $277+
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="text-xl font-bold text-foreground mb-4">After 3 Months</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      Kids continue: $129/month
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      Adults continue: $149/month
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      No contract • Cancel anytime
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      Keep your free uniform
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handlePurchase}
                  className="text-lg px-8 py-4"
                >
                  Get 3 Months for $270
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  🔒 Secure checkout • Start immediately
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