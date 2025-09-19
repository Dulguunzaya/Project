import React from "react";
import SkillCard from "./SkillCard";
import { SkillCardProps } from "./types"; // import type

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
    link: "/aimlab",
  },
  {
    img: "/images/placement.jpg",
    title: "Crosshair Placement",
    description:
      "Өрсөлдөгч хаанаас гарч ирэх боломжтой байранд crosshair-ээ байрлуулснаар шууд толгой руу буудах давуу талтай болно.",
    link: "/aimlab.tsx",
  },
  {
    img: "/images/utility.jpeg",
    title: "Utility_Maps",
    description:
      "Тухайн map дээр smoke, flash, гранат зэрэг utility-ийг зөв ашиглах нь багийн тактик амжилттай хэрэгжихэд тусална.",
    link: "/aimlab.tsx",
  },
  {
    img: "/images/volume.jpg",
    title: "Sound Training",
    description:
      "Тоглоомонд байгаа дуу чимээг анзаарч өрсөлдөгчийн байрлалыг таамаглах нь чухал бөгөөд ганц хөлийн чимээ ч нөлөөлдөг.",
    link: "/aimlab.tsx",
  },
  {
    img: "https://bitskins.com/blog/content/images/2024/04/20240422135051_1.jpg",
    title: "Spray Control",
    description:
      "FPS тоглоомонд олон янзын онцлогтой буунууд байдаг бөгөөд тус бүр өөр өөр recoil-той байдаг. Үүнийг удирдах нь тийм ч амархан биш бөгөөд бэлтгэл, туршлага хэрэгтэй. Recoil-г зөв удирдаж, сумыг байндаа оновчтой тааруулах нь чухал.",
    link: "/aimlab.tsx",
  },
  {
    img: "https://images.steamusercontent.com/ugc/22057681026295285/35B5267BABE4E88985DBB54DA60BA1F4244A1272/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    title: "Peeking Techniques",
    description:
      "Булан тойрох болон peek хийх техникүүдийг зөв хэрэглэх нь өрсөлдөгчийн анхаарлыг сарниулж давуу байдал олгоно.",
    link: "/aimlab.tsx",
  },
  {
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhISEhIWFRUVExYSFRUVGBIVEhgYFRYXFhcXGBUYHSggGBslGxUXIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0dFR0tKy0tLS0tKy0rLS0tLS0rLS0rKy0tNy0rLSstLS0tLS03LS0tLSstLTctNzctKystLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xABAEAABAwICBwUFBQgBBQEAAAABAAIDBBEFIQYHEjFBUWETInGBkTJCobHBFCNSYtEkM3KCkrLh8KJEU1ST0hX/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/8QAHBEBAQACAwEBAAAAAAAAAAAAAAECERIhMUFh/9oADAMBAAIRAxEAPwCcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFqOlWsWioZDDIXvlABMcbdoi4uNokgDLhe+YUZY1rkq5HH7PEyFnDa777c8sr+qN0nl7wBckAczkFhMS0woYL9rUxgjgCCfQLnDFNKayov21RI4fhvst9BZYY55lDToCv1wUDDZgfJ1AsPisdLrrg92mefFzQomw7RmrnI7OB1jxd3G+pWw0mrGpJAkljjPQOkPwsEbptztd4H/RO/9jf0XqPXgz3qJ/lI36ha9TaqnOdsmsYLceyd/wDauDqhe4kMr4iRlnE8fJxQ022i10UDv3kU8f8AK14/4uJ+Cz1JrHwuSwFWxpPB+0z+4BRBW6ra1j9iN8Mp391xb5d4b1gcb0VracF01K9rRveBtN8SW3sjNOn6HEYZhtQyskHNjmu+SulyLhlfNA/bp5HRv5sNj581I+jGuOojIZXR9szIdowBszepb7L/AIHxQ0nNFj8Exunq4xLTytkaeW8dHNOYPQrIIwREQEREBERAREQEREBERAREQF8c4AEk2AzJOQWL0j0hp6KLtah4aNzW73uPJreJUA6baw6qucWNcYafc2Fh7zusjhm4/lGXjvQWWsTsTiFTJBN2zZJC8ke645FoPvAWyI4LWXlbPQaFVLoHzutEGsMjWvB23AC+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RhJ+6p5HdXlrB8LlYer1n1j8omxRDdk0vd6uNvgsXTaDYk/dRy2Nt4a3+4hZ3DdVFc4gvayIH8b7n+lg+qI5Vptbi9TOfvZnu6E2H9IyXikw90hDI2OkeTkxgJPwUz4PqegFjUzufzZGBG0+Ls3H1W/4NgNNSt2aeFkY4kDvHxccz5lE7QlBqoxF0TX/AHbCXAdkTZwaTYuJ3Gw4FTNoxozT0MIigYBuL3nN73cXOP04LMojABERAREQEREBERAREQEREBERAREQEsiIPD47rz2IVVEEba7oGjDSeP2iHZ8buB/47SjXVjh4krS8i4hidJ/MSGM+bvRbjr/xMfstKDxdO4eWw2/q5anoTpJBRU9Q49+aV4DYxf2WDIudwG04orFtesXHhBSmBp+9qAW2G9rPecfHcP8ACwWpbR3t6w1D23jprHoZXDujxAz8wtYghqcSrAxoL5pTn+FjRxPJjR/ua6Q0WwGOipo6eIZNzc7i959px6n5AIZVlQF9svqIkREQEREBERAREQEREBERAREQEREBERAREQEREBERBy/rDr3zYjVOk3skMTQcrNZkB9fNY3AsKmq52QQNu93oBxc7kAFLelmidPU4rFE8Fomke+V7TZ7g2n2g2/AXbv6lbLq20fbRsqog3MVLszYu2C1hYC7jlZGsjobojT4fFsxC8jgO1lPtvI+TeQWwoiMEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREGs47C2KroqjO8lT2DuQ24JWtI8wPVZigpnNkqHOtaSQObbkI2Nz5ZtKt9IqB0op9m33dXDMb39lju9a3GxWWQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB/9k=",
    title: "Game-sense",
    description:
      "Game-sense нь таны өрсөлдөгчөө уншиж зөв үйлдэл хийж буйг хэлдэг бөгөөд үүнийг ихэвчлэн туршлага, тоглолт үзэн сайжруулах боломжтой",
    link: "/aimlab.tsx",
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
          link={item.link} // pass the link properly
        />
      ))}
    </div>
  );
};

export default Aim;
