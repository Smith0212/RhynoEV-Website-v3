import React, { useState } from "react";
import IMG1 from "../../assets/home.png";
import IMG2 from "../../assets/1.png"; // Add your other images here
import IMG3 from "../../assets/2.png";
import IMG4 from "../../assets/3.png";

function HomeNew() {
  const images = [IMG1, IMG2, IMG3, IMG4]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex overflow-hidden relative flex-col items-center px-16 pt-20 mt-24 pb-10 min-h-[80vh] max-md:px-5">
      <img
        loading="lazy"
        src={images[currentIndex]}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative justify-between mt-96 w-full max-w-[1219px] max-md:flex-wrap max-md:mt-72 max-md:max-w-full">
        {/* <div className="flex flex-col gap-2">
        <a href="" className="text-3xl p-0"><i class="fa-brands fa-instagram"></i></a>
        <a href="" className="text-2xl p-0"><i class="fa-brands fa-facebook"></i></a>
        <a href="" className="text-2xl p-0"><i class="fa-brands fa-x-twitter"></i></a>
        </div> */}
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2bfe87e1e22ff0cdb4bd0bcd6d88649d8b8626892878d588b902923151c9b92?"
          className="shrink-0 aspect-[0.22] w-[22px] cursor-pointer"
          onClick={handlePrevClick}
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bae231d05a442bf502ef160238497cdfb9582ee515a8a06fc460e0b895f7e75?"
          className="shrink-0 self-end mt-16 max-w-full aspect-[3.45] w-[119px] max-md:mt-10 cursor-pointer"
          onClick={handleNextClick}
        /> */}
        <div className="flex flex-row gap-2 py-5">
          <button onClick={handlePrevClick} className="text-3xl px-4 py-1 outline-none border-none bg-slate-400 hover:bg-slate-300 focus:outline-none focus:border-none"><i class="fa-solid fa-angle-left"></i></button>
        <button onClick={handleNextClick} className="text-3xl px-4 py-1 outline-none border-none bg-slate-400 hover:bg-slate-300 focus:outline-none focus:border-none"><i class="fa-solid fa-angle-right"></i></button>
        </div>
      </div>
    </div>
  );
}

export default HomeNew;
