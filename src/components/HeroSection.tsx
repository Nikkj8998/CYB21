import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const stats = [
  { value: "50+",  label: "Global Clients"      },
  { value: "100+", label: "Projects Delivered"  },
  { value: "24/7", label: "Expert Support"      },
  { value: "10+",  label: "Countries Served"    },
];

const HeroSection = () => (
  <section className="hero-root" aria-label="Hero">
    <div className="hero-bg" aria-hidden="true" />

    <div className="hero-inner">
      {/* Badge */}
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Trusted Global IT Partner Since 2020
      </div>

      {/* Headline */}
      <h1 className="hero-h1">
        INNOVATE.<br className="hero-br" /> SECURE.{" "}
        <span className="hero-accent">SCALE!</span>
      </h1>

      {/* Accent line */}
      <div className="hero-line" aria-hidden="true" />

      {/* Tagline */}
      <p className="hero-tagline">
        Your Trusted Technology Partner for IT Infrastructure, Cloud Services,
        Cybersecurity, and Digital Marketing — Globally.
      </p>

      {/* CTAs */}
      <div className="hero-ctas">
        <Link to="/contact">
          <Button
            size="lg"
            className="hero-btn-primary"
            data-testid="button-get-free-consultation"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Link to="/about">
          <button className="hero-btn-ghost">
            Explore Our Services <ChevronRight className="inline h-4 w-4 ml-1" />
          </button>
        </Link>
      </div>

      {/* Stats */}
      <div className="hero-stats-wrap" aria-label="Key statistics">
        <div className="hero-stats-divider" aria-hidden="true" />
        <div className="hero-stats">
          {stats.map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
