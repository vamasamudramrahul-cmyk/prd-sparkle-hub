import { useEffect } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openNavigation, hasCoords } from "@/lib/navigation";
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
  const hasXY = hasCoords(place);

  // Admin-style warning for any destination missing coordinates.
  useEffect(() => {
    if (!hasXY) {
      console.warn(
        `[BikerHub] Missing coordinates for destination: "${place.name}"${
          context ? ` (${context})` : ""
        }`,
      );
    }
  }, [hasXY, place.name, context]);

  return (
    <div className={cn("flex flex-col items-end gap-1", className)}>
      <Button
        type="button"
        size={size}
        variant="default"
        className="h-9"
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
      {!hasXY && (
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70">
          Coordinates not yet available
        </span>
      )}
    </div>
  );
};

export default NavigateButton;