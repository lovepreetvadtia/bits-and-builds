"use client";

import React, { useState, useEffect } from "react";
import {
  Shader,
  Swirl,
  ChromaFlow,
  FlutedGlass,
  FilmGrain,
} from "shaders/react";

export default function HeroShaderBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-[#0A0A0A]"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <Shader
        className="w-full h-full"
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
      >
        <Swirl colorA="#0A0A0A" colorB="#141414" detail={1.7} />
        <ChromaFlow
          baseColor="#0A0A0A"
          downColor="#F2C230"
          leftColor="#F2C230"
          rightColor="#F2C230"
          upColor="#F2C230"
          momentum={13}
          radius={3.5}
        />
        <FlutedGlass
          aberration={0.61}
          angle={31}
          frequency={8}
          highlight={0.12}
          highlightSoftness={0}
          lightAngle={-90}
          refraction={4}
          shape="rounded"
          softness={1}
          speed={0.15}
        />
        <FilmGrain strength={0.05} />
      </Shader>
    </div>
  );
}
