import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Mental Toughness & Focus",
    description: "Build unbreakable mental resilience and laser-sharp focus through disciplined training",
    icon: "🧠"
  },
  {
    title: "Community & Camaraderie",
    description: "Connect with fellow service members and veterans who understand your journey",
    icon: "🤝"
  },
  {
    title: "Stress Relief & PTSD Support",
    description: "Channel stress into productive training while building confidence and inner peace",
    icon: "🛡️"
  },
  {
    title: "Physical Conditioning",
    description: "Maintain peak physical readiness with functional strength and cardio training",
    icon: "💪"
  },
  {
    title: "Proven Combat System",
    description: "Learn authentic techniques developed for real-world self-defense situations",
    icon: "🥋"
  },
  {
    title: "Structured Environment",
    description: "Thrive in a disciplined, respectful training environment that honors military values",
    icon: "📋"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Military Families Choose Gracie Barra
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Continue your mission of excellence with training that builds on the discipline, 
              honor, and commitment you've already developed in service.
            </p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 border-border hover:border-gb-blue/50">
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
          <div className="bg-gb-light-blue rounded-lg p-8 max-w-3xl mx-auto border-2 border-gb-blue">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🇺🇸 Honoring Those Who Served
            </h3>
            <p className="text-lg text-muted-foreground">
              At Gracie Barra Layton, we understand the unique challenges faced by military personnel 
              and veterans. Our training provides structure, camaraderie, and purpose that resonates 
              with your service experience. <strong>Join a community that gets it.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;