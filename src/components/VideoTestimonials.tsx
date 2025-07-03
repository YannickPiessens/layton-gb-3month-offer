import { Card, CardContent } from "@/components/ui/card";

const videoTestimonials = [
  {
    id: "OwaRF8Z_qN8",
    title: "Veteran Success Story - Mental Strength",
    description: "How Brazilian Jiu-Jitsu helped build mental resilience after service"
  },
  {
    id: "gWCAWBThRWg", 
    title: "From Military to BJJ - Finding Purpose",
    description: "A veteran's journey to finding new purpose and brotherhood"
  },
  {
    id: "tHX0ETfjhtg",
    title: "Combat Veteran Testimonial", 
    description: "Real talk about PTSD, discipline, and healing through martial arts"
  },
  {
    id: "1SEsUCkzQTI",
    title: "Military Brotherhood at Gracie Barra",
    description: "The camaraderie and support system for service members"
  },
  {
    id: "tO8IA3j_aC8",
    title: "Stress Relief Through Training",
    description: "How Jiu-Jitsu provides healthy stress management for veterans"
  },
  {
    id: "DZVoaLzT40s",
    title: "Instructor Support for Veterans",
    description: "Our commitment to supporting military personnel and veterans"
  }
];

const VideoTestimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Veteran Stories: In Their Own Words
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch real veterans and military personnel share their transformation 
            stories and experiences at Gracie Barra Layton.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videoTestimonials.slice(0, 6).map((video, index) => (
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
              These testimonials represent real experiences from our veteran community. 
              Your transformation story could be next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;