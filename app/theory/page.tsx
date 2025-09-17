"use client";

import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="relative h-[100vh]">
        <Image
          src="/valcs.png"
          alt="Valcs image"
          width={900}
          height={300}
          className="absolute top-0 left-0"
        />
        <div className="w-[1300px] ml-auto">
          <h2 className="mt-2 border p-6 bg-blue-300 rounded-xl mr-5">
            FPS гэдэг нь First Person Shooting буюу хүнийг яг тэр тоглоомонд
            бодитоор орсон мэт мэдрэмжийг төрүүлэх зорилготой харах өнцгийг
            хэлнэ.
          </h2>
          <h2 className="mt-2 border p-6 bg-yellow-200 rounded-xl mr-15">
            Ихэнх FPS тоглоомнуудын гол зорилго нь буу ашиглан дайснаа эсвэл
            зорилтот объект руу бууддаг.
          </h2>
          <h2 className="mt-2 border p-6 bg-red-400 rounded-xl mr-2">
            FPS тоглоомын гол шаардагдах ур чадвар бол Reaction Speed буюу юманд
            хэр хугацаанд хариу үйлдэл үзүүлж буй хурд юм. Энэ нь аль болох бага
            байх ёстой ба ихдээ 200-220ms буюу 0.2-0.22 секундэнд хариу үзүүлж
            байх ёстой. Үүнийг сайжруулах олог олон training аргууд байдаг.
            Гэхдээ энэ хурд сайн байхын гол хүчин зүйл нь нүд болон гараа
            амраасан буюу бие сайн амарсан, хангалттай нойр авсан байх нь нэн
            түрүүний асуудал юм.
          </h2>
          <div className="mr-auto">
            <button className="border p-3 bg-blue-500 rounded-xl">
              <a
                href="https://humanbenchmark.com/tests/reactiontime"
                target="_blank"
                className="text-white !no-underline"
              >
                Reaction Speed-ээ шалгаж үзэх
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
