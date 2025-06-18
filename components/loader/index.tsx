// /components/BouncingDotsLoader.tsx
import React from "react";
import { LexendExaDisplay } from "@/utils/font";
import "./style.css";

const Loader = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center mx-auto overflow-hidden ${LexendExaDisplay.className}`}
    >
      <div className="w-full h-28 flex items-center justify-center">
        <div className="loader" />
      </div>
    </div>
  );
};

export default Loader;
