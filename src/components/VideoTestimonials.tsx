import { Card, CardContent } from "@/components/ui/card";

const videoTestimonials = [
  {
    id: "pvpi-TULTuc",
    title: "Student Success Story",
    description: "How Brazilian Jiu-Jitsu helped build mental resilience and discipline"
  },
  {
    id: "-whapUsgCg4", 
    title: "Finding Purpose on the Mats",
    description: "A student's journey to finding new purpose and brotherhood through martial arts"
  },
  {
    id: "GA797dKM_wQ",
    title: "Adult Student Testimonial", 
    description: "Real talk about stress management and healing through Jiu-Jitsu training"
  },
  {
    id: "kQxFJh8Fh7E",
    title: "Brotherhood at Gracie Barra",
    description: "The camaraderie and support system that students find in our community"
  }
];

const VideoTestimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Stories: In Their Own Words
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch real students share their transformation stories and experiences 
            at Gracie Barra Layton.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videoTestimonials.map((video, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-border">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-2 text-lg">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gb-light-blue rounded-lg p-6 max-w-2xl mx-auto border-2 border-gb-blue">
            <h3 className="text-xl font-bold text-gb-blue mb-3">
              🎥 More Stories Available
            </h3>
            <p className="text-muted-foreground">
              These testimonials represent real experiences from our community. 
              Your transformation story could be next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;