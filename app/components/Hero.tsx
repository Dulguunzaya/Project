"use client";

import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Val cs.mov" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg translate-y-20">
          Ta eSport-ийн тамирчин болох боломжтой юу?
        </h1>
      </div>
    </div>
  );
}
