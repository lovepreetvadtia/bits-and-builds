import React from "react";

export interface RevealLayerProps {
  /** URL of the reveal image shown inside the cursor spotlight */
  image: string;
  /** Smoothed X position of the cursor */
  cursorX: number;
  /** Smoothed Y position of the cursor */
  cursorY: number;
}

export declare const RevealLayer: React.FC<RevealLayerProps>;
export default RevealLayer;
