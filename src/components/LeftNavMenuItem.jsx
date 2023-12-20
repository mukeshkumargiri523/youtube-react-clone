import React from "react";

const LeftNavMenuItem = ({ text, icon, className, action }) => {
  return (
    <div
      className={
        "text-white text-sm cursor-pointer flex items-center px-4 mb-[2px] h-10 rounded-lg hover:bg-white/[0.4] " +
        className
      }
      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItem;
