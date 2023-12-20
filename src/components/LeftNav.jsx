import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";
import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[250px] overflow-y-auto h-full py-5 bg-black absolute md:relative z-10 translate-x-[-250px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex px-6 flex-col">
        {categories.map((item) => {
          return (
            <>
              <LeftNavMenuItem
                key={item.name}
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectCategories === item.name ? "bg-white/[0.3]" : ""
                }`}
              />
              {item.divider && <hr className="my-3 border-white/[0.5]" />}
            </>
          );
        })}
        <hr className="my-3 border-white/[0.5]" />
      </div>
    </div>
  );
};

export default LeftNav;
