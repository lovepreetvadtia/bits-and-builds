"use client";

import React, { useEffect, useRef } from "react";

const SPOTLIGHT_R = 260;

/**
 * Pure React 18 component for rendering the soft circular spotlight mask.
 * Renders a hidden canvas on which a radial gradient is drawn at (cursorX, cursorY),
 * then applies the dataURL as a CSS maskImage / webkitMaskImage on the reveal image div.
 *
 * @param {Object} props
 * @param {string} props.image - The reveal background image URL
 * @param {number} props.cursorX - Current smoothed X cursor coordinate
 * @param {number} props.cursorY - Current smoothed Y cursor coordinate
 */
export default function RevealLayer({ image, cursorX, cursorY }) {
  const canvasRef = useRef(null);
  const revealDivRef = useRef(null);

  // Resize canvas to window dimensions on mount & window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update canvas mask on every render / cursor movement
  useEffect(() => {
    const canvas = canvasRef.current;
    const revealDiv = revealDivRef.current;
    if (!canvas || !revealDiv) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // If cursor is off-screen or uninitialized, do not render mask
    if (cursorX < -500 || cursorY < -500) {
      revealDiv.style.maskImage = "none";
      revealDiv.style.webkitMaskImage = "none";
      return;
    }

    // Radial gradient from radius 0 -> SPOTLIGHT_R with exact requested stops
    const gradient = ctx.createRadialGradient(
      cursorX,
      cursorY,
      0,
      cursorX,
      cursorY,
      SPOTLIGHT_R
    );

    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.4, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.6, "rgba(255, 255, 255, 0.75)");
    gradient.addColorStop(0.75, "rgba(255, 255, 255, 0.4)");
    gradient.addColorStop(0.88, "rgba(255, 255, 255, 0.12)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fill();

    const maskDataUrl = canvas.toDataURL();
    revealDiv.style.maskImage = `url(${maskDataUrl})`;
    revealDiv.style.webkitMaskImage = `url(${maskDataUrl})`;
  }, [cursorX, cursorY]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ display: "none" }}
      />
      <div
        ref={revealDivRef}
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-[2] pointer-events-none"
        style={{
          backgroundImage: `url(${image})`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />
    </>
  );
}
