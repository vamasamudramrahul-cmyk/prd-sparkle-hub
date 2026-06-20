export type DeviceOS = "ios" | "android" | "other";

export function detectOS(): DeviceOS {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent || "";
  const platform = (navigator as Navigator & { platform?: string }).platform || "";
  // iPadOS 13+ reports as Mac with touch points
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (platform === "MacIntel" && (navigator as Navigator & { maxTouchPoints?: number }).maxTouchPoints! > 1);
  if (isIOS) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "other";
}

export interface NavTarget {
  lat?: number;
  lng?: number;
  label?: string;
}

export function hasCoords(p: NavTarget): p is Required<Pick<NavTarget, "lat" | "lng">> & NavTarget {
  return typeof p.lat === "number" && typeof p.lng === "number" && !Number.isNaN(p.lat) && !Number.isNaN(p.lng);
}

/**
 * Build a deep link URL that opens turn-by-turn navigation on the user's device.
 * - iOS  → Apple Maps (maps://?daddr=...)
 * - Android → Google Maps (geo: with google.navigation intent fallback via comgooglemaps URL)
 * - Other → Google Maps web URL
 */
export function buildNavigationUrl(target: NavTarget, os: DeviceOS = detectOS()): string | null {
  if (!hasCoords(target)) return null;
  const { lat, lng, label } = target;
  const q = `${lat},${lng}`;
  const name = label ? encodeURIComponent(label) : "";

  if (os === "ios") {
    // Apple Maps driving directions
    return `maps://?daddr=${q}&dirflg=d${name ? `&q=${name}` : ""}`;
  }
  if (os === "android") {
    // Google Maps turn-by-turn navigation intent
    return `google.navigation:q=${q}&mode=d`;
  }
  // Web fallback — Google Maps directions
  return `https://www.google.com/maps/dir/?api=1&destination=${q}${name ? `&destination_place_id=&travelmode=driving` : "&travelmode=driving"}`;
}

export function openNavigation(target: NavTarget): boolean {
  if (!hasCoords(target)) return false;
  const os = detectOS();
  const primary = buildNavigationUrl(target, os);
  const webFallback = `https://www.google.com/maps/dir/?api=1&destination=${target.lat},${target.lng}&travelmode=driving`;

  if (!primary) {
    window.open(webFallback, "_blank", "noopener,noreferrer");
    return true;
  }

  if (os === "android" || os === "ios") {
    // Try the native deep link; if the app isn't installed, fall back to web after a short delay.
    const start = Date.now();
    const fallbackTimer = window.setTimeout(() => {
      // If still here ~1.2s later, browser likely didn't hand off to a native app
      if (Date.now() - start < 2000 && document.visibilityState === "visible") {
        window.open(webFallback, "_blank", "noopener,noreferrer");
      }
    }, 1200);

    // Use location.href so iOS honors the maps:// scheme
    try {
      window.location.href = primary;
    } catch {
      window.clearTimeout(fallbackTimer);
      window.open(webFallback, "_blank", "noopener,noreferrer");
    }
    return true;
  }

  window.open(primary, "_blank", "noopener,noreferrer");
  return true;
}