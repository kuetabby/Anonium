import React from "react";
import "./style.css";
import { LexendExaDisplay } from "@/utils/font";

export const CustomLoading: React.FC = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center mx-auto overflow-hidden ${LexendExaDisplay.className}`}
    >
      <div className="w-full h-28 flex items-center justify-center">
        <div className="loader" />
      </div>
      {/* <div className="w-full h-28 flex items-center justify-center">
        <Image
          src={loadingGif}
          alt="Loading"
          className="gif-loader"
          layout="intrinsic" // Adjust layout if needed
          width={20} // Adjust width as necessary
          height={20} // Adjust height as necessary
        />
      </div> */}
    </div>
  );
};
