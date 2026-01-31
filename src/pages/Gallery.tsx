import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bikes.jpg";
import bikeDetail from "@/assets/bike-detail.jpg";
import communityImage from "@/assets/community.jpg";

const galleryItems = [
  { id: 1, src: heroImage, title: "Dawn Patrol", category: "rides", type: "photo" },
  { id: 2, src: bikeDetail, title: "Chrome Dreams", category: "bikes", type: "photo" },
  { id: 3, src: communityImage, title: "The Squad", category: "community", type: "photo" },
  { id: 4, src: heroImage, title: "Highway to Horizon", category: "rides", type: "reel" },
  { id: 5, src: bikeDetail, title: "Engine Poetry", category: "bikes", type: "photo" },
  { id: 6, src: communityImage, title: "Pre-ride Rituals", category: "community", type: "photo" },
  { id: 7, src: heroImage, title: "Golden Hour Cruise", category: "rides", type: "reel" },
  { id: 8, src: bikeDetail, title: "Beast Mode", category: "bikes", type: "photo" },
  { id: 9, src: communityImage, title: "Victory Pose", category: "community", type: "photo" },
];

const categories = ["all", "rides", "bikes", "community"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Header */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary uppercase tracking-widest text-sm">
                Media Gallery
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mt-2">
                OUR <span className="text-primary">CONTENT</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-6">
                Explore our collection of cinematic moments from rides across Andhra Pradesh.
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <motion.div 
              layout
              className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                    onClick={() => setSelectedImage(item)}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <p className="text-foreground font-display text-lg">
                          {item.title}
                        </p>
                        <span className="text-primary/80 text-sm capitalize">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    {/* Play Icon for Reels */}
                    {item.type === "reel" && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Instagram CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground mb-4">
                Follow us for daily content drops
              </p>
              <a
                href="https://instagram.com/bikergram_andrapradesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="lg">
                  <Instagram className="w-5 h-5" />
                  @bikergram_andrapradesh
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-8 text-center">
                <p className="font-display text-2xl text-foreground">{selectedImage.title}</p>
                <p className="text-primary text-sm capitalize mt-1">{selectedImage.category}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
