import { Card, CardContent } from "@/components/ui/card";

const nelsonPhoto = "/lovable-uploads/499257c7-0e0a-494c-a4e8-7ae8344278e1.png";
const rafaelPhoto = "/lovable-uploads/363c8c04-7668-4f5c-87fd-e93f47019cc3.png";

const instructors = [
  {
    name: "Master Nelson Monteiro",
    title: "Coral Belt",
    image: nelsonPhoto,
    description: "Born in Rio de Janeiro, the birthplace of Brazilian Jiu-Jitsu. Started training at 13 under Master Carlos Gracie Jr. Black belt in 1989, Bachelor's in Physical Education. Pioneer of BJJ in the US since 1990, helped form the prestigious ADCC championships.",
    credentials: "Coral Belt • 2x World Champion • ADCC Co-Founder"
  },
  {
    name: "Professor Rafael Ramos",
    title: "Black Belt Instructor",
    image: rafaelPhoto,
    description: "Started training at 13 under legendary Master Carlos Gracie Jr. in Rio de Janeiro. Competed at the highest levels including multiple Brazilian Nationals, Rio State Championships, and Pan American tournaments. Dedicated to passing on authentic Gracie Barra teachings.",
    credentials: "Black Belt • Competition Champion • Master Carlos Gracie Jr. Student"
  }
];

const InstructorTeam = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Importance of Lineage
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your lineage is our lineage. Learn authentic Brazilian Jiu-Jitsu from masters who trained directly 
            under the legendary Master Carlos Gracie Jr.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {instructors.map((instructor, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gb-blue/20 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gb-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-gb-red font-bold text-lg mb-4">
                    {instructor.title}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {instructor.description}
                  </p>
                  <div className="text-sm text-gb-blue font-semibold bg-gb-light-blue p-3 rounded-lg">
                    {instructor.credentials}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg p-8 max-w-3xl mx-auto border-2 border-gb-blue shadow-lg">
            <h3 className="text-2xl font-bold text-gb-blue mb-4">
              🥋 Authentic Lineage • Your Lineage is Our Lineage
            </h3>
            <p className="text-lg text-muted-foreground">
              Both Master Nelson and Professor Rafael learned directly from Master Carlos Gracie Jr., 
              ensuring you receive the most authentic Brazilian Jiu-Jitsu instruction available. 
              Their combined expertise spans <strong>decades of competition and teaching excellence</strong>.
            </p>
            <div className="mt-6 text-center">
              <span className="inline-block bg-gb-red text-white px-4 py-2 rounded-full font-semibold">
                "This sport is too damn fun not to go as much as your life permits!" - Professor Rafael
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorTeam;