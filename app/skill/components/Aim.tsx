import React from "react";
import SkillCard from "./SkillCard";
import { SkillCardProps } from "./types";

const comps: SkillCardProps[] = [
  {
    img: "/images/aimbot.jpg",
    title: "Aimbot_Maps",
    description:
      "Энэ map-ууд нь оновчтой буудлага хийхэд тохиромжтой байрлалуудтай бөгөөд таны aim-ийг хөгжүүлэхэд тусална.",
    link: "/aimlab",
  },
  {
    img: "/images/movement.jpeg",
    title: "Movement",
    description:
      "Механик хөдөлгөөнүүдийг сурах нь өрсөлдөгчийг хуурах, булан тойрох, хурдан байрлал солих зэрэг олон давуу тал нээдэг.",
    link: "/movement", // <- create app/movement/page.tsx
  },
  {
    img: "/images/placement.jpg",
    title: "Crosshair Placement",
    description:
      "Өрсөлдөгч хаанаас гарч ирэх боломжтой байранд crosshair-ээ байрлуулснаар шууд толгой руу буудах давуу талтай болно.",
    link: "/crosshair-placement",
  },
  {
    img: "/images/utility.jpeg",
    title: "Utility_Maps",
    description:
      "Тухайн map дээр smoke, flash, гранат зэрэг utility-ийг зөв ашиглах нь багийн тактик амжилттай хэрэгжихэд тусална.",
    link: "/utility",
  },
  {
    img: "/images/volume.jpg",
    title: "Sound Training",
    description:
      "Тоглоомонд байгаа дуу чимээг анзаарч өрсөлдөгчийн байрлалыг таамаглах нь чухал бөгөөд ганц хөлийн чимээ ч нөлөөлдөг.",
    link: "/sound",
  },
  {
    img: "https://bitskins.com/blog/content/images/2024/04/20240422135051_1.jpg",
    title: "Spray Control",
    description:
      "FPS тоглоомонд олон янзын онцлогтой буунууд байдаг бөгөөд тус бүр өөр өөр recoil-той байдаг. Үүнийг удирдах нь тийм ч амархан биш бөгөөд бэлтгэл, туршлага хэрэгтэй. Recoil-г зөв удирдаж, сумыг байндаа оновчтой тааруулах нь чухал.",
    link: "/spray",
  },
  {
    img: "https://images.steamusercontent.com/ugc/22057681026295285/35B5267BABE4E88985DBB54DA60BA1F4244A1272/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    title: "Peeking Techniques",
    description:
      "Өнцөг шалгах эсвэл тулахын тулд өөрийгөө ил гаргах үйлдэл гэсэн үг. Энэ нь маш олон хуваадгддаг ба ихэнх механик үйлдлүүдийг сурах шаардлагатай. ",
    link: "/peeking",
  },
  {
    img: "https://i.pinimg.com/originals/62/df/ed/62dfed9c4df6bbcbd5e4cb6cc35cbdb6.jpg",
    title: "Game-sense",
    description:
      "Game-sense нь таны өрсөлдөгчөө уншиж зөв үйлдэл хийж буйг хэлдэг бөгөөд үүнийг ихэвчлэн туршлага, тоглолт үзэн сайжруулах боломжтой.",
    link: "/gamesense",
  },
];

const Aim = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {comps.map((item, index) => (
        <SkillCard
          key={index}
          img={item.img}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default Aim;
