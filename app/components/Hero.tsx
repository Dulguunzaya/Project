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
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="val cs.mov" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white">
          Ta eSport-ийн тамирчин болох боломжтой юу?
        </h1>
      </div>
    </div>
  );
}
