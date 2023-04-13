import React from "react";

import { BsCartCheck } from "react-icons/bs";

const CardHolder = () => {
  return (
    <div className="fixed top-[50%] right-4 p-4 bg-orange-400 shadow-md">
      <button className="text-center font-medium  text-sm hidden lg:block">
        <span className="flex gap-1 pb-2 pt-2">
          <BsCartCheck />
          <span>1 items</span>
        </span>
        <span className="bg-white rounded p-2 leading-tight">$180</span>
      </button>
    </div>
  );
};

export default CardHolder;
