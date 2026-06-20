import { motion } from "framer-motion";
import { MapPin, ArrowLeft, Send, ArrowRight } from "lucide-react";
import { DistrictData } from "@/data/bikerHubData";
import { Button } from "@/components/ui/button";
import NavigateButton from "./NavigateButton";

interface PlacesListProps {
  district: DistrictData;
  stateName: string;
  onBack: () => void;
}

const PlacesList = ({ district, stateName, onBack }: PlacesListProps) => {
  const navContext = `${district.name}, ${stateName}, India`;
  return (
    <section className="pb-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {stateName} Districts
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-3"
        >
          <MapPin className="w-6 h-6 text-primary" />
          <h2 className="font-display text-3xl md:text-4xl text-foreground uppercase">
            {district.name} <span className="text-primary">Places</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-10 max-w-2xl"
        >
          Real places shared by riders in this district.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {district.places.map((place, index) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }}
              className="group rounded-lg bg-card border border-border p-4 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.15)]"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-foreground font-body text-sm md:text-base font-semibold">
                    {place.name}
                  </h3>
                  {place.description && (
                    <p className="text-muted-foreground text-xs md:text-sm mt-1 line-clamp-2">
                      {place.description}
                    </p>
                  )}
                  {place.images && place.images.length > 0 && (
                    <div className="flex gap-2 mt-3 overflow-x-auto">
                      {place.images.slice(0, 3).map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`${place.name} ${i + 1}`}
                          loading="lazy"
                          className="h-16 w-24 object-cover rounded-md border border-border shrink-0"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3 flex items-center justify-end">
                <NavigateButton place={place} context={navContext} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-primary/20 p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.08)_0%,_transparent_70%)]" />
          <div className="relative z-10">
            <Send className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground text-lg mb-2">
              Visited a place? Help others explore better.
            </p>
            <a
              href="https://forms.gle/your-google-form-id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="lg" className="mt-4 glow-red">
                Submit Your Experience
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacesList;
