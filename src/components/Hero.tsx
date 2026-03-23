import { motion } from "framer-motion";
import { ChevronDown, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bikes.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Bikers riding at sunset"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Grain Effect */}
      <div className="absolute inset-0 grain-overlay z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary uppercase tracking-[0.3em] text-sm md:text-base font-body"
          >
            Where Riders Connect & Belong
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground text-cinematic"
          >
            BIKERGRAM<br />ANDHRA PRADESH
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="font-display text-2xl md:text-3xl text-primary"
          >
            Beyond the Road
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed"
          >
            A community built for bikers and clubs to connect, ride together, 
            and grow the spirit of motorcycling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <a
              href="https://instagram.com/bikergram_andrapradesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero">
                Follow Our Journey
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="hero">
                Join Community
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline">
                Submit Your Ride
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-foreground/50"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
