"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const texts = [
    {
      text: "FPS гэдэг нь First Person Shooting буюу хүнийг яг тэр тоглоомонд бодитоор орсон мэт мэдрэмжийг төрүүлэх зорилготой харах өнцгийг хэлнэ.",
      bg: "bg-blue-300",
    },
    {
      text: "Ихэнх FPS тоглоомнуудын гол зорилго нь буу ашиглан дайснаа эсвэл зорилтот объект руу бууддаг.",
      bg: "bg-yellow-200",
    },
    {
      text: "FPS тоглоомын гол шаардагдах ур чадвар бол Reaction Speed буюу юманд хэр хугацаанд хариу үйлдэл үзүүлж буй хурд юм. Энэ нь аль болох бага байх ёстой ба ихдээ 200–220ms буюу 0.2–0.22 секундэнд хариу үзүүлж байх ёстой. Үүнийг сайжруулах олон training аргууд байдаг. Гэхдээ энэ хурд сайн байхын гол хүчин зүйл нь нүд болон гараа амраасан, бие сайн амарсан, хангалттай нойр авсан байх нь нэн түрүүний асуудал юм.",
      bg: "bg-red-400",
    },
    {
      text: "Хэрвээ айлын хүн чинь 10 метрийн цаана зогсож байна гэж бодоход тэр чиний 123px-г эзэлж байгаа бөгөөд хэрвээ чи 1920х1080 resolution дээр тоглож байгаа гэж бодоход чамд алдаж болох 2,073,477px байгаа буюу та оновчтой буудах шаардлагатай ба толгой руу шууд буудах нь тулаанд ялах магадлалыг ихэсгэнэ.",
      bg: "bg-green-400",
    },
    {
      text: "FPS тоглоом нь олон олон газрын зураг(map) буюу өөр өөр газруудад тоглолт өрнөдөг ба тухайн map дээрх товч зам, гранад utility хэрэглээ зэргийг мэдэж байх нь маш чухал. ",
      bg: "bg-purple-400",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/valcs.png"
          alt="Valcs image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 flex flex-col space-y-12">
        {texts.map((item, index) => (
          <div
            key={index}
            className={`border-0 p-4 sm:p-6 rounded-xl text-sm sm:text-base md:text-lg bg-opacity-80 ${
              item.bg
            } 
            ${index % 2 === 0 ? "self-end text-right" : "self-start text-left"}
            md:max-w-[70%] w-full`}
          >
            {item.text}
          </div>
        ))}

        <div className="self-center">
          <a
            href="https://humanbenchmark.com/tests/reactiontime"
            target="_blank"
            className="inline-block p-3 sm:p-4 bg-blue-500 text-white rounded-xl text-sm sm:text-base md:text-lg hover:bg-blue-600 transition !no-underline border-0"
            onClick={() => router.push("/Reaction")}
          >
            Reaction Speed-ээ шалгаж үзэх
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
