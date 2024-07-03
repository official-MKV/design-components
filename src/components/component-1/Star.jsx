import React from "react";

import StarIcon from "../../assets/star.svg";

const Star = () => {
  return (
    <div className=" group relative size-[18px] flex items-center justify-center opacity-50">
      {/* <StarIcon style={{ fill: "red" }} /> */}
      <img
        src={StarIcon}
        className="relative grayscale-[100] size-[15px] group-hover:rotate-6"
        style={{
          filter:
            "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(50%)",
        }}
      />
      <img
        src={StarIcon}
        className="grayscale-[100] size-[5px] absolute top-0 left-3"
        style={{
          filter:
            "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(50%)",
        }}
      />
      <img
        src={StarIcon}
        className="grayscale-[100] size-[8px] absolute -top-1 right-3"
        style={{
          filter:
            "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(50%)",
        }}
      />
    </div>
  );
};

export default Star;
