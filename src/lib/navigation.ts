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
  /** Optional context (district, state) used to make name-based search fallback accurate. */
  query?: string;
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
function buildSearchQuery(target: NavTarget): string {
  const parts = [target.label, target.query].filter(Boolean).join(", ");
  return encodeURIComponent(parts || "");
}

/**
 * Build a deep link URL that opens turn-by-turn navigation on the user's device.
 * Uses coordinates when available, otherwise falls back to a name-based search.
 * - iOS  → Apple Maps (maps://)
 * - Android → Google Maps (google.navigation: / geo:)
 * - Other → Google Maps web URL
 */
export function buildNavigationUrl(target: NavTarget, os: DeviceOS = detectOS()): string {
  const hasXY = hasCoords(target);
  const search = buildSearchQuery(target);

  if (hasXY) {
    const q = `${target.lat},${target.lng}`;
    if (os === "ios") return `maps://?daddr=${q}&dirflg=d`;
    if (os === "android") return `google.navigation:q=${q}&mode=d`;
    return `https://www.google.com/maps/dir/?api=1&destination=${q}&travelmode=driving`;
  }

  // No coordinates — use Directions URL by name (free, no API key required)
  if (os === "ios") return `https://maps.apple.com/?daddr=${search}&dirflg=d`;
  return `https://www.google.com/maps/dir/?api=1&destination=${search}&travelmode=driving`;
}

function webFallbackUrl(target: NavTarget): string {
  if (hasCoords(target)) {
    return `https://www.google.com/maps/dir/?api=1&destination=${target.lat},${target.lng}&travelmode=driving`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${buildSearchQuery(target)}&travelmode=driving`;
}

export function openNavigation(target: NavTarget): boolean {
  const os = detectOS();
  const webFallback = webFallbackUrl(target);

  if (os === "android") {
    const search = buildSearchQuery(target);
    // Prefer native Google Maps app via intent URL; fall back to web Directions URL.
    const intentUrl = hasCoords(target)
      ? `intent://maps.google.com/maps?daddr=${target.lat},${target.lng}#Intent;scheme=https;package=com.google.android.apps.maps;end`
      : `intent://maps.google.com/maps?daddr=${search}#Intent;scheme=https;package=com.google.android.apps.maps;end`;

    console.log("[BikerHub] Navigate (Android intent):", intentUrl);
    console.log("[BikerHub] Navigate (web fallback):", webFallback);

    const start = Date.now();
    window.setTimeout(() => {
      if (Date.now() - start < 2000 && document.visibilityState === "visible") {
        window.open(webFallback, "_blank", "noopener,noreferrer");
      }
    }, 1200);

    try {
      window.location.href = intentUrl;
    } catch {
      window.open(webFallback, "_blank", "noopener,noreferrer");
    }
    return true;
  }

  if (os === "ios") {
    const primary = buildNavigationUrl(target, os);
    console.log("[BikerHub] Navigate (iOS):", primary);
    console.log("[BikerHub] Navigate (web fallback):", webFallback);

    const start = Date.now();
    window.setTimeout(() => {
      if (Date.now() - start < 2000 && document.visibilityState === "visible") {
        window.open(webFallback, "_blank", "noopener,noreferrer");
      }
    }, 1200);

    try {
      window.location.href = primary;
    } catch {
      window.open(webFallback, "_blank", "noopener,noreferrer");
    }
    return true;
  }

  console.log("[BikerHub] Navigate (desktop):", webFallback);
  window.open(webFallback, "_blank", "noopener,noreferrer");
  return true;
}