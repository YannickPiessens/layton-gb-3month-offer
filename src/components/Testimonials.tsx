import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "This gave my son structure, confidence, and a smile I hadn't seen in a while.",
    author: "Sarah M.",
    role: "Parent of 8-year-old student"
  },
  {
    quote: "It's the best part of my week — I leave every class stronger, both physically and mentally.",
    author: "Mike R.", 
    role: "Adult student, 6 months"
  },
  {
    quote: "The instructors are amazing with kids. My daughter has learned discipline and respect while having fun.",
    author: "Jennifer L.",
    role: "Parent of 10-year-old student"
  },
  {
    quote: "I've tried other gyms, but the community here is unmatched. Everyone supports each other.",
    author: "David T.",
    role: "Adult student, 1 year"
  },
  {
    quote: "My shy son has become so much more confident. He stands taller and speaks up more at school.",
    author: "Lisa K.",
    role: "Parent of 7-year-old student"
  },
  {
    quote: "Best decision I made this year. The training is world-class and the people are genuine.",
    author: "Chris P.",
    role: "Adult student, 8 months"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Stories from Our Family
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from parents and students who've experienced 
            the transformation firsthand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-martial transition-all duration-300 border-border">
              <CardContent className="p-6">
                <div className="text-gold text-2xl mb-4">"</div>
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
          <div className="bg-primary-deep/5 rounded-lg p-8 max-w-2xl mx-auto border border-primary-deep/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join the Success Stories
            </h3>
            <p className="text-lg text-muted-foreground">
              These are just a few of the hundreds of families who've found their home at Gracie Barra Layton. 
              <strong> Your story could be next.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;