import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const videoTestimonials = [
  {
    id: "OwaRF8Z_qN8",
    title: "Parent Testimonial - Confidence Building",
    description: "Real stories from parents about their children's transformation"
  },
  {
    id: "gWCAWBThRWg", 
    title: "Adult Student Success Story",
    description: "How Jiu-Jitsu changed an adult student's life"
  },
  {
    id: "tHX0ETfjhtg",
    title: "Family Training Experience", 
    description: "Families training together at Gracie Barra Layton"
  },
  {
    id: "1SEsUCkzQTI",
    title: "Kids Program Benefits",
    description: "The positive impact of martial arts on children"
  },
  {
    id: "tO8IA3j_aC8",
    title: "Community and Growth",
    description: "Building lasting friendships through Jiu-Jitsu"
  },
  {
    id: "DZVoaLzT40s",
    title: "Instructor Dedication",
    description: "Meet our certified instructors and their commitment"
  }
];

const VideoTestimonials = () => {
  return (
    <section className="py-20 bg-primary-deep/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See the Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — watch real families share their 
            Gracie Barra Layton journey in their own words.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {videoTestimonials.slice(0, 6).map((video, index) => (
            <Card key={index} className="shadow-card hover:shadow-martial transition-all duration-300 border-border group">
              <CardContent className="p-0">
                <div className="relative">
                  <div 
                    className="aspect-video bg-cover bg-center rounded-t-lg cursor-pointer relative overflow-hidden"
                    style={{ 
                      backgroundImage: `url(https://img.youtube.com/vi/${video.id}/maxresdefault.jpg)` 
                    }}
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
                  >
                    <div className="absolute inset-0 bg-primary-deep/30 group-hover:bg-primary-deep/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open("https://www.youtube.com/@GracieBarraLayton", "_blank")}
            className="text-lg px-8 py-4"
          >
            Watch More Stories on YouTube
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;