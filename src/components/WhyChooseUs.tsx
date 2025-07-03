import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "World-Renowned Curriculum",
    description: "Train with the official Gracie Barra system, trusted by millions worldwide",
    icon: "🥋"
  },
  {
    title: "Certified Instructors",
    description: "Learn from experienced, certified professionals in a clean, family-friendly space",
    icon: "👨‍🏫"
  },
  {
    title: "Confidence Building",
    description: "Build unshakeable confidence and mental strength for kids and adults alike",
    icon: "💪"
  },
  {
    title: "Safe Environment",
    description: "Fun, structured, and safe training environment for all skill levels",
    icon: "🛡️"
  },
  {
    title: "Supportive Community",
    description: "Join a supportive community with deep roots and lasting friendships",
    icon: "🤝"
  },
  {
    title: "Flexible Schedule",
    description: "Multiple class times to fit your busy lifestyle and family schedule",
    icon: "⏰"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Gracie Barra Layton?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than just martial arts training — we're building character, confidence, and community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-card hover:shadow-martial transition-all duration-300 border-border hover:border-gold/30">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gold-light rounded-lg p-8 max-w-2xl mx-auto border border-gold/30">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🎉 Bonus: Free Family Class
            </h3>
            <p className="text-lg text-muted-foreground">
              Want to test the waters first? Come try our <strong>Free Family Class</strong> every 
              Saturday at 10AM — no experience needed!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;