import { Navigation2, MapPinOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openNavigation, hasCoords } from "@/lib/navigation";
import { PlaceData } from "@/data/bikerHubData";
import { cn } from "@/lib/utils";

interface NavigateButtonProps {
  place: PlaceData;
  className?: string;
  size?: "sm" | "default" | "lg";
}

const NavigateButton = ({ place, className, size = "sm" }: NavigateButtonProps) => {
  const available = hasCoords(place);

  if (!available) {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground/70",
          className,
        )}
        title="Navigation unavailable for this location"
      >
        <MapPinOff className="w-3.5 h-3.5" />
        Navigation unavailable
      </div>
    );
  }

  return (
    <Button
      type="button"
      size={size}
      variant="default"
      className={cn("h-9", className)}
      onClick={(e) => {
        e.stopPropagation();
        openNavigation({ lat: place.lat, lng: place.lng, label: place.name });
      }}
      aria-label={`Navigate to ${place.name}`}
    >
      <Navigation2 className="w-4 h-4" />
      Navigate
    </Button>
  );
};

export default NavigateButton;