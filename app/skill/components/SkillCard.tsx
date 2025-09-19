import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SkillCardProps } from "./types"; // import the interface

const SkillCard = ({ img, title, description, link }: SkillCardProps) => {
  return (
    <div className="p-4 flex flex-col items-center text-center">
      <Link href={link} className="block">
        <div
          className="relative w-[250px] aspect-[12/16] overflow-hidden rounded-lg shadow-md 
                      transition-transform duration-300 hover:scale-105 group cursor-pointer"
        >
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
