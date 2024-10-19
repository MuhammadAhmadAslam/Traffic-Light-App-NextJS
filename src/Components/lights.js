"use client";

import React, { useEffect, useState } from "react";

function Lights() {
  let [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    setTimeout(() => {
      if (activeLight == "red") {
        setActiveLight("yellow");
      } else if (activeLight == "yellow") {
        setActiveLight("green");
      } else {
        setActiveLight("red");
      }
    }, 6000);
  }, [activeLight]);

  return (
    <section className="flex justify-center items-center">
      <div className="flex justify-center gap-4 mt-9  items-center border border-black w-[50%] md:w-[30%] px-5 py-8 flex-col">
        <div
          className={`w-[100px] rounded-full border-4 shadow-lg border-zinc-700 ${
            activeLight == "red" ? "bg-red-600" : "bg-transparent"
          } h-[100px]`}
        ></div>
        <div
          className={`w-[100px] rounded-full border-4 shadow-lg border-zinc-700 ${
            activeLight == "yellow" ? "bg-[yellow]" : "bg-transparent"
          } h-[100px]`}
        ></div>
        <div
          className={`w-[100px] rounded-full border-4 shadow-lg border-zinc-700 ${
            activeLight == "green" ? "bg-green-700" : "bg-transparent"
          } h-[100px]`}
        ></div>
      </div>
    </section>
  );
}

export default Lights;
