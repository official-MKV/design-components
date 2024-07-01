import React from "react";
import Star from "./Star";

const Input = () => {
  return (
    <div
      contentEditable
      className="w-auto border-[4px] bg-origin-border bg-clip-border border-transparent box-border bg-clip flex items-center bg-gradient-to-r shadow-md from-[#bc9ec9] to-[#f4cc88] rounded-[4px] gap-2"
    >
      <div className="flex items-center gap-3 bg-[white] rounded-[4px] py-[7px] px-[10px] w-auto">
        <Star />
        <input
          placeholder="What can I help you with?"
          contentEditable
          className="outline-none rounded-[4px] w-full resize-x"
        />
      </div>
    </div>
  );
};

export default Input;
