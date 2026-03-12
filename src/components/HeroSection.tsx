import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => (
  <section className="hero-section-wrapper relative min-h-screen bg-black text-white overflow-hidden">
    {/* Static grid */}
    <div className="grid-bg" aria-hidden="true"></div>

    {/* Lightweight fog — opacity-only pulse, no transform */}
    <div className="hero-fog" aria-hidden="true">
      <div className="fog-1"></div>
      <div className="fog-2"></div>
    </div>

    {/* Main Content */}
    <div className="relative z-10 flex items-center justify-center min-h-screen pt-16 md:pt-20 pb-8 md:pb-12">
      <div className="container text-center max-w-6xl mx-auto mobile-padding">
        <h1 className="main-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight px-4">
          <span className="line text-white">INNOVATE. SECURE.</span>
          <span className="line text-accent mt-4 md:mt-5">SCALE!</span>
        </h1>

        <div className="max-w-3xl mx-auto mb-8 md:mb-10 hero-description px-4">
          <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
            Your Trusted Technology Partner for IT Infrastructure, Cloud Services, Cybersecurity, and Digital Marketing — Globally.
          </p>
        </div>

        <div className="hero-cta mt-10 md:mt-14 mb-12 md:mb-16">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold touch-target group border-2 border-accent hover:border-accent/90 w-auto cta-button-enhanced"
              data-testid="button-get-free-consultation"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
