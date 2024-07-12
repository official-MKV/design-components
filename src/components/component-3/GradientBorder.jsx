import React from "react";

const GradientBorder = () => {
  return (
    <div
      className="w-[300px] h-[400px] rounded-2xl bg-slate-700 flex items-center justify-center
    card-wrapper overflow-hidden relative
    "
    >
      <div
        id="content"
        className="relative flex text-[white] items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 w-[calc(100%-2px)] rounded-2xl h-[calc(100%-2px)] "
      >
        Content
      </div>
    </div>
  );
};

export default GradientBorder;
