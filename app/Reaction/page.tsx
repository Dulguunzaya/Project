import React from "react";

const page = () => {
  return (
    <div className="flex justify-center h-screen bg-amber-300">
      <div className="bg-blue-500 w-[50%] h-[550] rounded-xl mt-20">
        <h1 className="text-center pt-3">Дүгнэлт</h1>
        <ul>
          <li className="mt-10 text-center pr-15">
            Энгийн тоглогч (casual gamer): 220–280 мс
          </li>
          <li className="mt-10 text-center pr-15">
            Хагас мэргэжлийн тоглогч (semi-pro): 160–200 мс
          </li>
          <li className="mt-10 text-center pr-15">
            Мэргэжлийн eSports тоглогч (pro): 100–160 мс Топ элит тоглогч
          </li>
          <li className="mt-10 text-center pr-15">
            Топ элит тоглогч (absolute elite): 100 мс бага.
          </li>
          <h3 className="mt-5">
            Судалгаагаар дэлхийн хүн амын дунд 100 мс бага pеакцтэй хүн
            ойролцоогоор 1–5% байдаг.
            <br />
            Хэрвээ та компьютер тоглоом тоглодоггүй ч гэсэн Энгийн тоглогчийн
            хурдтай ойролцоо байвал магадгүй цаашдаа сайжруулж болох юм.
          </h3>
        </ul>
      </div>
    </div>
  );
};

export default page;
