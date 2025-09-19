"use client";

import React from "react";
import Aim from "./components/Aim";
import Facts from "../components/Facts";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="">
        <Aim />
        <Facts />
      </div>
    </div>
  );
};

export default page;
