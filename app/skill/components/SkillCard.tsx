import Image from "next/image";
import React from "react";

const SkillCard = ({ img, title, description }) => {
  return (
    <div className="p-4 flex flex-col items-center text-center">
      <a href="">
        <div
          className="relative w-[300px] aspect-[12/16] overflow-hidden rounded-lg shadow-md 
                      transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={img}
            alt={title}
            fill
            className="rounded-lg shadow-md object-cover "
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 rounded-b-lg">
            <h2 className="text-base font-bold">{title}</h2>
            <p className="text-xs">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SkillCard;
