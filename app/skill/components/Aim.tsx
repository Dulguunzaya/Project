import React from "react";
import SkillCard from "./SkillCard";

const Aim = () => {
  const comps = [
    {
      img: "/images/aimbot.jpg",
      title: "Aimbot_Maps",
      description:
        "Энэ map-ууд нь оновчтой буудлага хийхэд тохиромжтой байрлалуудтай бөгөөд таны aim-ийг хөгжүүлэхэд тусална.",
    },
    {
      img: "/images/movement.jpeg",
      title: "Movement",
      description:
        "Механик хөдөлгөөнүүдийг сурах нь өрсөлдөгчийг хуурах, булан тойрох, хурдан байрлал солих зэрэг олон давуу тал нээдэг.",
    },
    {
      img: "/images/placement.jpg",
      title: "Crosshair Placement",
      description:
        "Өрсөлдөгч хаанаас гарч ирэх боломжтой байранд crosshair-ээ байрлуулснаар шууд толгой руу буудах давуу талтай болно.",
    },
    {
      img: "/images/utility.jpeg",
      title: "Utility_Maps",
      description:
        "Тухайн map дээр smoke, flash, гранат зэрэг utility-ийг зөв ашиглах нь багийн тактик амжилттай хэрэгжихэд тусална.",
    },
    {
      img: "/images/volume.jpg",
      title: "Sound Training",
      description:
        "Тоглоомонд байгаа дуу чимээг анзаарч өрсөлдөгчийн байрлалыг таамаглах нь чухал бөгөөд ганц хөлийн чимээ ч нөлөөлдөг.",
    },
    {
      img: "https://bitskins.com/blog/content/images/2024/04/20240422135051_1.jpg",
      title: "Spray Control",
      description:
        "FPS тоглоомонд олон янзын онцлогтой буунууд байдаг бөгөөд тус бүр өөр өөр recoil-той байдаг. Үүнийг удирдах нь тийм ч амархан биш бөгөөд бэлтгэл, туршлага хэрэгтэй. Recoil-г зөв удирдаж, сумыг байндаа оновчтой тааруулах нь чухал.",
    },
    {
      img: "/images/peeking.jpeg",
      title: "Peeking Techniques",
      description:
        "Булан тойрох болон peek хийх техникүүдийг зөв хэрэглэх нь өрсөлдөгчийн анхаарлыг сарниулж давуу байдал олгоно.",
    },
    {
      img: "/images/eco-round.jpeg",
      title: "Eco Round Strategy",
      description:
        "Эко раунд-д зөв стратеги ашиглах нь таны багт мөнгө хэмнэх болон дараагийн раунд-д илүү давуу байдал авчирна.",
    },
    {
      img: "/images/aim-training.jpeg",
      title: "Aim Training",
      description:
        "Reaction time, tracking, flick shots зэрэг ур чадваруудыг сайжруулах нь таны нийт буудлагын түвшинг нэмэгдүүлнэ.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {comps.map((item, index) => (
        <SkillCard
          key={index}
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Aim;
