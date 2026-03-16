import { motion } from "framer-motion";
import { Users, Star, MapPin, Network } from "lucide-react";
import bikeDetail from "@/assets/bike-detail.jpg";

const stats = [
  { icon: Users, value: "500", label: "Community Members" },
  { icon: Star, value: "700", label: "Instagram Followers" },
];

const discoverItems = [
  {
    icon: MapPin,
    title: "Discover Places",
    description: "Explore the best rides across Andhra Pradesh & Telangana.",
  },
  {
    icon: Network,
    title: "Discover Clubs",
    description: "Connect with local biker clubs and fellow riders.",
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <img src={bikeDetail} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-body">
              Our Community
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              BEYOND ROADS<br />
              <span className="text-primary">BEYOND LIMITS</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Bikergram AP is a platform for passionate riders who believe the road 
              is more than just a path. Explore ride destinations, meet fellow bikers, 
              and be part of a community driven by the spirit of the ride.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {["Discover Destinations", "Club Network", "Share Your Journey", "Connect & Collaborate"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-foreground/70">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Stats + Discover */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="glass-card rounded-xl p-6 text-center hover-lift"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <p className="font-display text-3xl md:text-4xl text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Discover Info */}
            <div className="space-y-3">
              {discoverItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="glass-card rounded-xl p-5 flex items-start gap-4 hover-lift"
                >
                  <item.icon className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-display text-lg text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
