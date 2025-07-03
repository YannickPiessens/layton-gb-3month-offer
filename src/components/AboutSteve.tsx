import { Card, CardContent } from "@/components/ui/card";
import steveCrislerPhoto from "@/assets/steve-crisler-professional.jpg";

const AboutSteve = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Professor Steve Crisler
            </h2>
            <p className="text-xl text-muted-foreground">
              Your instructor, mentor, and fellow veteran advocate
            </p>
          </div>
          
          <Card className="shadow-lg border-2 border-gb-blue overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Photo Section */}
                <div className="relative">
                  <img 
                    src={steveCrislerPhoto} 
                    alt="Professor Steve Crisler"
                    className="w-full h-full object-cover min-h-[500px]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gb-blue/90 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Professor Steve Crisler</h3>
                    <p className="text-white/90 font-semibold">Black Belt • School Owner • Veteran Advocate</p>
                  </div>
                </div>
                
                {/* Bio Section */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gb-blue mb-6">From Accounting to the Mats</h3>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      My martial arts journey began in 2010 with Tae Kwon Do. For years, I felt unsatisfied 
                      with what I was gaining from it. Everything changed one night when I stumbled upon a 
                      video online that extolled the virtues of jiu-jitsu as a superior martial art.
                    </p>
                    
                    <p>
                      Intrigued, I decided to give it a try. I walked into Gracie Barra Encinitas (CA) in 2016, 
                      and from day one, I was hooked. I quickly became a regular at the school, training 
                      consistently month after month and year after year.
                    </p>
                    
                    <p>
                      I had the privilege of training under <strong>Master Nelson Monteiro</strong> and 
                      <strong> Professor Rafael Ramos</strong>, and their guidance has been invaluable. 
                      The lessons I've learned from them have profoundly impacted my life.
                    </p>
                    
                    <p>
                      In 2023, I earned my black belt, marking a proud milestone in my journey. By 2024, 
                      I chose to retire from a <strong>23-year career in accounting</strong> to pursue 
                      jiu-jitsu full time and open my own school.
                    </p>
                    
                    <p className="text-foreground font-semibold">
                      In March 2024, I received the keys to the new school, and after three months of 
                      construction, we officially opened on June 1st. I'm thrilled to bring Gracie Barra 
                      jiu-jitsu to the Layton community and share the transformative benefits of this art 
                      with others.
                    </p>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gb-light-blue rounded-lg border-l-4 border-gb-blue">
                    <p className="text-gb-blue font-semibold text-center">
                      🇺🇸 "I understand the discipline, dedication, and brotherhood that military service instills. 
                      That's exactly what we build here at Gracie Barra Layton."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSteve;