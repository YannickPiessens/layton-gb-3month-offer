import Hero from "@/components/Hero";
import ValueBreakdown from "@/components/ValueBreakdown";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSteve from "@/components/AboutSteve";
import InstructorTeam from "@/components/InstructorTeam";
import Testimonials from "@/components/Testimonials";
import VideoTestimonials from "@/components/VideoTestimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueBreakdown />
      <WhyChooseUs />
      <AboutSteve />
      <InstructorTeam />
      <Testimonials />
      <VideoTestimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;