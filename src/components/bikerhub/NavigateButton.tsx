import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openNavigation } from "@/lib/navigation";
import { PlaceData } from "@/data/bikerHubData";
import { cn } from "@/lib/utils";

interface NavigateButtonProps {
  place: PlaceData;
  /** Extra context like "District, State" used for the name-search fallback. */
  context?: string;
  className?: string;
  size?: "sm" | "default" | "lg";
}

const NavigateButton = ({ place, context, className, size = "sm" }: NavigateButtonProps) => {
  return (
    <Button
        type="button"
        size={size}
        variant="default"
        className={cn("h-9", className)}
        onClick={(e) => {
          e.stopPropagation();
          openNavigation({
            lat: place.lat,
            lng: place.lng,
            label: place.name,
            query: context,
          });
        }}
        aria-label={`Navigate to ${place.name}`}
      >
        <MapPin className="w-4 h-4" />
        Navigate
    </Button>
  );
};

export default NavigateButton;