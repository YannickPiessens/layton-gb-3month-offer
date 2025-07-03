import { Card, CardContent } from "@/components/ui/card";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";

const instructors = [
  {
    name: "Professor Steve Crisler",
    title: "Head Instructor & Owner",
    image: instructor1,
    description: "Dedicated to building confidence and character through authentic Gracie Barra training",
    credentials: "Black Belt • Certified Gracie Barra Instructor"
  },
  {
    name: "Nelson Monteiro",
    title: "Certified Instructor",
    image: instructor2,
    description: "Passionate about teaching the fundamentals and helping students reach their potential",
    credentials: "Black Belt • Youth Program Specialist"
  },
  {
    name: "Rafael Ramos",
    title: "Certified Instructor",
    image: instructor3,
    description: "Expert in competition training and advanced techniques for serious practitioners",
    credentials: "Black Belt • Competition Coach"
  }
];

const InstructorTeam = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Your Expert Instructors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from certified black belts who are committed to your success and 
            passionate about sharing the art of Brazilian Jiu-Jitsu.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {instructors.map((instructor, index) => (
            <Card key={index} className="shadow-card hover:shadow-martial transition-all duration-300 border-border group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-gold font-semibold mb-3">
                    {instructor.title}
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {instructor.description}
                  </p>
                  <div className="text-sm text-primary font-medium">
                    {instructor.credentials}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gold-light rounded-lg p-8 max-w-3xl mx-auto border border-gold/30">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🥋 World-Class Training Standards
            </h3>
            <p className="text-lg text-muted-foreground">
              All our instructors are certified through the official Gracie Barra curriculum, 
              ensuring you receive authentic, high-quality Brazilian Jiu-Jitsu instruction 
              that follows proven teaching methods used worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorTeam;