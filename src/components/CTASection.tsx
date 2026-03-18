import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute inset-0 grain-overlay" />
      
      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <Handshake className="w-12 h-12 mx-auto mb-6 text-primary" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            LET'S <span className="text-primary">COLLABORATE</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Whether you're a riding club, brand, or content creator, join us in 
            building a stronger biking community. Let's collaborate to create rides, 
            stories, and experiences that bring bikers closer.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link to="/contact">
              <Button variant="hero">
                Get In Touch
              </Button>
            </Link>
            <a
              href="https://ig.me/m/bikergram_andrapradesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="heroOutline">
                DM on Instagram
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
