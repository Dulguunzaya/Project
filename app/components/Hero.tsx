"use client";

import React, { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute top-0 left-0 w-full h-full object-cover transform transition-all duration-1500 ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
        }`}
      >
        <source src="/Val cs.mov" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <h1
          className={`text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg transform transition-all duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ marginTop: "4rem" }}
        >
          Ta eSport-ийн тамирчин болох боломжтой юу?
        </h1>
      </div>
    </div>
  );
}
