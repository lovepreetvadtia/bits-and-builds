import React from "react";

export interface SpotlightRevealHeroProps {
  /** Initial mode: 'lithos' (geology brand) or 'bits-and-builds' (web engineering studio) */
  initialMode?: "lithos" | "bits-and-builds";
  /** Whether to show the interactive mode switcher pill */
  showModeSwitcher?: boolean;
  /** Whether rendered as a standalone 100dvh page */
  isStandalone?: boolean;
}

export declare const SpotlightRevealHero: React.FC<SpotlightRevealHeroProps>;
export default SpotlightRevealHero;
