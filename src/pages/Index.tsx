import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation";
import { Projects } from "../components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;