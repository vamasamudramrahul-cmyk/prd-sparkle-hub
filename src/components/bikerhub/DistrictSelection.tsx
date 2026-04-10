import { motion } from "framer-motion";
import { MapPin, ArrowLeft, ChevronRight } from "lucide-react";
import { StateData, DistrictData } from "@/data/bikerHubData";
import { Button } from "@/components/ui/button";

interface DistrictSelectionProps {
  state: StateData;
  onSelectDistrict: (district: DistrictData) => void;
  onBack: () => void;
}

const DistrictSelection = ({ state, onSelectDistrict, onBack }: DistrictSelectionProps) => {
  return (
    <section className="pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to States
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-3"
        >
          <MapPin className="w-6 h-6 text-primary" />
          <h2 className="font-display text-3xl md:text-4xl text-foreground uppercase">
            {state.name} <span className="text-primary">Districts</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-10 max-w-2xl"
        >
          Select a district to view places shared by riders.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {state.districts.map((district, index) => (
            <motion.button
              key={district.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              onClick={() => onSelectDistrict(district)}
              className="group flex items-center justify-between rounded-xl bg-card border border-border p-5 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.2)] text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">
                    {district.name}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {district.places.length} places
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistrictSelection;
