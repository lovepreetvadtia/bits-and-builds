"use client";

import React from "react";

const SPOTLIGHT_R = 260;

/**
 * Pure React 18 component for rendering the soft circular spotlight mask.
 * Uses GPU-accelerated CSS radial-gradient mask without heavy canvas serialization.
 *
 * @param {Object} props
 * @param {string} props.image - The reveal background image URL
 * @param {number} props.cursorX - Current smoothed X cursor coordinate
 * @param {number} props.cursorY - Current smoothed Y cursor coordinate
 */
export default function RevealLayer({ image, cursorX, cursorY }) {
  const isOffscreen = cursorX < -500 || cursorY < -500;

  const maskValue = isOffscreen
    ? "none"
    : `radial-gradient(circle ${SPOTLIGHT_R}px at ${cursorX}px ${cursorY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)`;

  return (
    <div
      className="absolute inset-0 bg-center bg-cover bg-no-repeat z-[2] pointer-events-none"
      style={{
        backgroundImage: `url(${image})`,
        maskImage: maskValue,
        WebkitMaskImage: maskValue,
      }}
    />
  );
}
