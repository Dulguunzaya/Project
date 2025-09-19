"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface SkillCardProps {
  img: string;
  title: string;
  description: string;
  link: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  img,
  title,
  description,
  link,
}) => {
  const [loaded] = useState(false);

  return (
    <div
      className={`p-4 flex flex-col items-center text-center transform transition-all duration-700 ${
        loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Link href={link} className="block">
        <div className="relative w-[250px] aspect-[12/16] overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 group cursor-pointer">
          <Image
            src={img}
            alt={title}
            fill
            className="rounded-lg shadow-md object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 rounded-b-lg">
            <h2 className="text-base font-bold group-hover:hidden">{title}</h2>
            <p className="text-xs hidden group-hover:block transition duration-300">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SkillCard;
