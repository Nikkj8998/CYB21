import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Shield, Megaphone, Code, Server, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useMemo } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const shapesRef = useRef<(HTMLDivElement | null)[]>([]);

  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 10 + 10,
    }));
  }, []);

  useEffect(() => {
    let rafId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        shapesRef.current.forEach((shape, index) => {
          if (shape) {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            shape.style.transform = `translate(${x}px, ${y}px)`;
          }
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden hero-section-wrapper">
      {/* Animated Background Grid */}
      <div className="grid-bg"></div>

      {/* Floating Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`particle ${particle.id % 2 === 1 ? 'particle-odd' : ''} ${particle.id % 3 === 0 ? 'particle-3n' : ''}`}
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Service Icons with Parallax */}
      <div className="geometric-bg">
        <div 
          ref={(el) => shapesRef.current[0] = el}
          className="geo-shape geo-shape-1 flex items-center justify-center"
        >
          <Cloud className="w-24 h-24 md:w-32 md:h-32 text-accent/80" strokeWidth={1.5} />
        </div>
        <div 
          ref={(el) => shapesRef.current[1] = el}
          className="geo-shape geo-shape-2 flex items-center justify-center"
        >
          <Shield className="w-20 h-20 md:w-24 md:h-24 text-primary/80" strokeWidth={1.5} />
        </div>
        <div 
          ref={(el) => shapesRef.current[2] = el}
          className="geo-shape geo-shape-3 flex items-center justify-center"
        >
          <Megaphone className="w-16 h-16 md:w-20 md:h-20 text-accent/80" strokeWidth={1.5} />
        </div>
      </div>

      {/* Additional Service Icon */}
      <div className="pulse-circle flex items-center justify-center">
        <Code className="w-12 h-12 md:w-16 md:h-16 text-accent/70" strokeWidth={1.5} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="container text-center max-w-6xl mx-auto mobile-padding">
          <div className="animate-fade-in">
            {/* Main Headline */}
            <h1 className="main-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 text-balance leading-tight px-4">
              <span className="line text-white">
                INNOVATE. SECURE.
              </span>
              <span className="line text-accent mt-4 md:mt-5">
                SCALE!
              </span>
            </h1>

            {/* Tagline */}
            <div className="max-w-3xl mx-auto mb-8 md:mb-10 hero-description px-4">
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                Your Trusted Technology Partner for IT Infrastructure, Cloud Services, Cybersecurity, and Digital Marketing — Globally.
              </p>
            </div>
            
            {/* CTA Button */}
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
      </div>
    </section>
  );
};

export default HeroSection;
