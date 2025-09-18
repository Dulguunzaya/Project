import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-amber-300 p-4">
      <div className="bg-blue-500 w-full max-w-3xl md:w-3/4 lg:w-1/2 rounded-xl mt-10 md:mt-20 p-6 md:p-10">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-6">
          Дүгнэлт
        </h1>
        <ul className="space-y-6 text-center">
          <li>Энгийн тоглогч (casual gamer): 220–280 мс</li>
          <li>Хагас мэргэжлийн тоглогч (semi-pro): 160–200 мс</li>
          <li>Мэргэжлийн eSports тоглогч (pro): 100–160 мс</li>
          <li>Топ элит тоглогч (absolute elite): 100 мс бага.</li>
        </ul>
        <h3 className="mt-6 text-center text-sm md:text-base leading-relaxed">
          Судалгаагаар дэлхийн хүн амын дунд 100 мс бага pеакцтэй хүн
          ойролцоогоор 1–5% байдаг.
          <br />
          Хэрвээ та компьютер тоглоом тоглодоггүй ч гэсэн Энгийн тоглогчийн
          хурдтай ойролцоо байвал магадгүй цаашдаа сайжруулж болох юм.
        </h3>
      </div>
    </div>
  );
};

export default Page;
