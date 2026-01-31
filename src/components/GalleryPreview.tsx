import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import communityImage from "@/assets/community.jpg";
import heroImage from "@/assets/hero-bikes.jpg";
import bikeDetail from "@/assets/bike-detail.jpg";

const galleryItems = [
  { src: heroImage, title: "Sunset Rides", type: "photo" },
  { src: bikeDetail, title: "Machine Details", type: "photo" },
  { src: communityImage, title: "Brotherhood", type: "photo" },
  { src: heroImage, title: "Epic Journey", type: "reel" },
];

const GalleryPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-body">
            Content Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-2">
            CAPTURED <span className="text-primary">MOMENTS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From breathtaking landscapes to adrenaline-pumping rides—explore 
            our cinematic collection.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-lg ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-foreground font-display text-xl">
                    {item.title}
                  </p>
                  {item.type === "reel" && (
                    <span className="text-primary text-sm flex items-center gap-1 mt-1">
                      <Play className="w-3 h-3" fill="currentColor" />
                      Watch Reel
                    </span>
                  )}
                </div>
              </div>
              {/* Play icon for reels */}
              {item.type === "reel" && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/gallery">
            <Button variant="outline" size="lg">
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
