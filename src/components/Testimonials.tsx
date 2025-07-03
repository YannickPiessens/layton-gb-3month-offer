import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "After 20 years in the Army, I was looking for something to keep me disciplined and fit. This place gets it.",
    author: "SGT Mike R.",
    role: "Army Veteran, 6 months training"
  },
  {
    quote: "The brotherhood here reminds me of my unit. Everyone has your back and pushes you to be better.",
    author: "CPO David T.", 
    role: "Navy Veteran, 1 year training"
  },
  {
    quote: "BJJ has been incredible for managing my stress and staying physically sharp. Best decision I've made since leaving the service.",
    author: "SSGT Jennifer L.",
    role: "Air Force Veteran, 8 months training"
  },
  {
    quote: "The mental discipline I learned here has helped me transition to civilian life. The instructors understand military mindset.",
    author: "CPL Chris P.",
    role: "Marine Veteran, 10 months training"
  },
  {
    quote: "This training keeps me mission-ready and gives me a sense of purpose. The community is solid.",
    author: "SFC Lisa K.",
    role: "Army National Guard, 1 year training"
  },
  {
    quote: "After multiple deployments, I needed something to help with stress. BJJ has been therapeutic and empowering.",
    author: "PO1 Sarah M.",
    role: "Navy Veteran, 4 months training"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Fellow Veterans Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from service members and veterans who've found their new mission 
            at Gracie Barra Layton.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 border-border">
              <CardContent className="p-6">
                <div className="text-gb-blue text-2xl mb-4">"</div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gb-red/10 rounded-lg p-8 max-w-2xl mx-auto border border-gb-red/30">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join the Ranks?
            </h3>
            <p className="text-lg text-muted-foreground">
              These are just a few of the veterans who've found their new brotherhood at Gracie Barra Layton. 
              <strong> Your story starts here.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;