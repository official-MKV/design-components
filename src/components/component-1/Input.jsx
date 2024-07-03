import React from "react";
import Star from "./Star";
import "./test.css";

const Input = () => {
  return (
    <div
      contentEditable
      className=" group min-w-[200px] border-[4px] bg-origin-border bg-clip-border border-transparent box-border bg-clip flex items-center bg-gradient-to-r shadow-md from-[#bc9ec9] to-[#f4cc88] rounded-[4px] gap-2"
    >
      <div className="flex items-center gap-3 bg-[white] rounded-[4px] py-[7px] px-[10px]  min-w-[200px] ">
        <Star />
        <input
          placeholder="What can I help you with?"
          c
          className="outline-none rounded-[4px] resize-x"
        />
      </div>
    </div>
  );
};

export default Input;
