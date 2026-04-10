import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { StateData } from "@/data/bikerHubData";
import heroImage from "@/assets/hero-bikes.jpg";
import bikeDetail from "@/assets/bike-detail.jpg";

const stateImages: Record<string, string> = {
  "Andhra Pradesh": heroImage,
  "Telangana": bikeDetail,
};

interface StateSelectionProps {
  states: StateData[];
  onSelectState: (state: StateData) => void;
}

const StateSelection = ({ states, onSelectState }: StateSelectionProps) => {
  return (
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
          Choose a state to explore rider-shared places.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {states.map((state, index) => (
            <motion.button
              key={state.shortCode}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelectState(state)}
              className="group relative rounded-xl overflow-hidden aspect-[16/9] md:aspect-[16/10] border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.3)] text-left"
            >
              <img
                src={stateImages[state.name] || heroImage}
                alt={state.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-3xl md:text-4xl text-foreground uppercase mb-2">
                  {state.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {state.districts.length} Districts · {state.districts.reduce((acc, d) => acc + d.places.length, 0)} Places
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
                  Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StateSelection;
