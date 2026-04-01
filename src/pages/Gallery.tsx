import { motion } from "framer-motion";
import { MapPin, Users, Send, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-bikes.jpg";
import bikeDetail from "@/assets/bike-detail.jpg";
import communityImage from "@/assets/community.jpg";

const places = [
  {
    id: 1,
    image: heroImage,
    name: "Araku Valley",
    description: "A breathtaking hill station with winding roads perfect for scenic rides.",
    tag: "Scenic",
  },
  {
    id: 2,
    image: bikeDetail,
    name: "Srisailam",
    description: "Temple town surrounded by dense forests and thrilling ghat roads.",
    tag: "Temple",
  },
  {
    id: 3,
    image: communityImage,
    name: "Lambasingi",
    description: "Known as the Kashmir of Andhra Pradesh — misty mornings and cool climbs.",
    tag: "Ride Spot",
  },
  {
    id: 4,
    image: heroImage,
    name: "Horsley Hills",
    description: "A serene getaway with hairpin bends and panoramic valley views.",
    tag: "Scenic",
  },
  {
    id: 5,
    image: bikeDetail,
    name: "Gandikota",
    description: "India's Grand Canyon — rugged terrain and stunning gorge views.",
    tag: "Ride Spot",
  },
  {
    id: 6,
    image: communityImage,
    name: "Ananthagiri Hills",
    description: "A lush green escape near Hyderabad with smooth twisty roads.",
    tag: "Scenic",
  },
];

const clubs = [
  {
    id: 1,
    name: "Vizag Riders Club",
    location: "Visakhapatnam, AP",
    description: "Weekend group rides along the coast and Eastern Ghats.",
    contact: "https://instagram.com/bikergram_andrapradesh",
  },
  {
    id: 2,
    name: "Hyderabad Moto Brotherhood",
    location: "Hyderabad, TG",
    description: "Long-distance touring and adventure riding community.",
    contact: "https://instagram.com/bikergram_andrapradesh",
  },
  {
    id: 3,
    name: "Tirupati Throttle Squad",
    location: "Tirupati, AP",
    description: "Temple runs, hill rides, and weekend breakfast meetups.",
    contact: "https://instagram.com/bikergram_andrapradesh",
  },
  {
    id: 4,
    name: "Guntur Gear Heads",
    location: "Guntur, AP",
    description: "Passionate riders exploring the heartland of Andhra Pradesh.",
    contact: "https://instagram.com/bikergram_andrapradesh",
  },
];

const tagColors: Record<string, string> = {
  Scenic: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Temple: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Ride Spot": "bg-primary/20 text-primary border-primary/30",
};

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Header */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary uppercase tracking-widest text-sm font-body">
                Biker Hub
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mt-2">
                BIKER <span className="text-primary">HUB</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-6 tracking-wide">
                Explore. Connect. Ride Together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── DISCOVER PLACES ── */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3"
            >
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl text-foreground uppercase">
                Discover <span className="text-primary">Places</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-10 max-w-2xl"
            >
              Discover real places shared by riders — from popular destinations to hidden gems, based on real journeys.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {places.map((place, index) => (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.25)]"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-xl text-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        {place.name}
                      </h3>
                      {place.tag && (
                        <Badge
                          className={`text-[10px] uppercase tracking-wider ${tagColors[place.tag] || ""}`}
                        >
                          {place.tag}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {place.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full group/btn">
                      View More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RIDER COMMUNITY / CLUBS ── */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3"
            >
              <Users className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl text-foreground uppercase">
                Rider <span className="text-primary">Community</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-10 max-w-2xl"
            >
              Connect with rider communities, join group rides, and grow together through shared journeys.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {clubs.map((club, index) => (
                <motion.div
                  key={club.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-xl bg-card border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.25)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-foreground mb-1">
                        {club.name}
                      </h3>
                      <p className="text-primary/80 text-sm flex items-center gap-1 mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        {club.location}
                      </p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {club.description}
                      </p>
                      <a
                        href={club.contact}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          Join / Contact
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTRIBUTION CTA ── */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-primary/20 p-10 md:p-16 text-center"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.08)_0%,_transparent_70%)]" />

              <div className="relative z-10">
                <Send className="w-10 h-10 text-primary mx-auto mb-6" />
                <h2 className="font-display text-3xl md:text-4xl text-foreground uppercase mb-4">
                  Share Your <span className="text-primary">Experience</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-3">
                  Want to share your ride or a place you've visited?
                </p>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Help others explore better by contributing your experience.
                </p>
                <a
                  href="https://forms.gle/your-google-form-id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" size="lg" className="glow-red">
                    Submit Your Experience
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
