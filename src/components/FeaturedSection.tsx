import { motion } from "framer-motion";
import { Users, Camera, MapPin, Star } from "lucide-react";
import bikeDetail from "@/assets/bike-detail.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Community Members" },
  { icon: Camera, value: "1000+", label: "Reels Created" },
  { icon: MapPin, value: "50+", label: "Group Rides" },
  { icon: Star, value: "100K+", label: "Instagram Followers" },
];

const FeaturedSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <img
          src={bikeDetail}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
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
              RIDING TOGETHER,<br />
              <span className="text-primary">GROWING TOGETHER</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Bikergram AP is more than just a riding group—we're a family of 
              passionate motorcyclists creating cinematic content, exploring 
              breathtaking routes, and building lasting memories on two wheels.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-foreground/70">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Content Creation</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Group Rides</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Brand Collaborations</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
