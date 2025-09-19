"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Facts = () => {
  const barimt = [
    {
      img: "https://i.redd.it/xgnapd8yowrc1.png",
      text: "eSport-н тамирчид нь жилд 20-30 хоног л амарч чаддаг. Тэдний хэлснээр зуны завсарлага болон шинэ жилийн үеэр л гардаг. Харин тэмцээн хоорондын амралт нь 40-60 өдөр байдаг. Yлдсэн өдөр нь тэмцээн, бэлтгэл, аялал, багийн буудкамп, стрийм зэрэгт дүүрдэг.",
    },
    {
      img: "https://cs2.kinguin.net/upload/article/2465_1726063563e7f864.jpg",
      text: "Хэрвээ eSport-р 10 жилээр кареераа хөөх бол 20800 цагийг зөвхөн тоглоомондоо өнгөрүүлнэ. Магадгүй eSport-н тамирчин болох шаардлагатай цагийг нэмж үзвэл 30800 цаг буюу 3.5 жилийг тоглоомондоо өнгөрүүлнэ гэсэн үг.",
    },
    {
      img: "https://img-cdn.hltv.org/gallerypicture/IKi_NR6-iOrRP4ZJtiVFHd.jpg?auto=compress&ixlib=java-2.1.0&q=75&w=800&s=f6452ae1fe72854c156301b0da44c0f2",
      text: "eSport-н тамирчдын prime time буюу ид үе нь 17-25 гэж үздэг.",
    },
  ];

  const colors = [
    "bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-100",
    "bg-gradient-to-r from-green-300 via-teal-200 to-blue-100",
    "bg-gradient-to-r from-pink-300 via-orange-200 to-red-100",
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="space-y-6 px-4 md:px-16 py-10">
      {barimt.map((item, index) => (
        <div
          key={index}
          style={{ transitionDelay: `${index * 300}ms` }} // stagger animation
          className={`flex flex-col items-center md:flex-row gap-4 p-4 rounded-lg shadow-md transform transition-all duration-700
                      ${
                        loaded
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }
                      ${colors[index % colors.length]}`}
        >
          <Image
            src={item.img}
            alt={`fact-${index}`}
            width={400}
            height={400}
            className="rounded-lg object-cover md:w-80 md:h-80 w-full h-64"
          />
          <p className="text-sm md:text-base">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Facts;
