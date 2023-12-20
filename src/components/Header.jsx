import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if (
      (e?.key === "Enter" || e === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery} `);
    }
  };
  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname.split("/").filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 flex flex-row items-center justify-between px-4 h-14 md:px-5 bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-7 cursor-pointer justify-center items-center h-10 w-10 rounded-3xl hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img className="h-full hidden md:block " src={ytLogo} alt="youtube" />

          <img
            className="h-full md:hidden flex items-center"
            src={ytLogoMobile}
            alt="youtube"
          />
        </Link>
      </div>
      <div className="group flex items-center ">
        <div className="flex h-9 md:h-11 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-600 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10  items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5  w-42 md:pl-0 md:w-60 lg:w-[490px] "
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="w-[40px] md:w-[60px] h-9 md:h-11 flex items-center justify-center border  border-l-0 border-[#615b5b] rounded-r-3xl bg-white/[0.3]"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <IoIosSearch className="text-white text-2xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-11 w-11 rounded-full hover:bg-[#313131]/[0.9]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-11 w-11 rounded-full hover:bg-[#313131]/[0.9]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-9 w-9 overflow-hidden rounded-full md:ml-4">
          <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
