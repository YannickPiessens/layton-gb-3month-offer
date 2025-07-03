import Hero from "@/components/Hero";
import ValueBreakdown from "@/components/ValueBreakdown";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueBreakdown />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;