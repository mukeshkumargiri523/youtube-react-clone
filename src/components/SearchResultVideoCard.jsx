import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../shared/VideoLength";

const SearchResultVideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex sm:mx-5 flex-col md:flex-row mb-9 md:mb-5 lg:hover:bg-white/[0.2] rounded-xl md:p-4">
        <div className="relative  flex shrink-0 h-48 md:h-34 lg:h-40 xl:h-48 w-full md:w-64 lg:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails[0]?.url}
            alt=""
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex flex-col ml-5 md:ml-7 mt-4 md:mt-0 overflow-hidden">
          <span className="text-lg  md:text-lg lg:text-2xl  line-clamp-2 text-white/[0.85] font-medium">
            {video?.title}
          </span>
          <span className="text-sm  empty:hidden line-clamp-1 md:line-clamp-2 text-white/[0.5] md:pr-20 md:my-3">
            {video?.descriptionSnippet}
          </span>
          <div className=" md:flex items-center">
            <div className=" flex items-start mr-3">
              <div className="hidden md:flex mt-[-9px] h-10 w-10 rounded-full overflow-hidden">
                <img
                  src={video?.author?.avatar[0]?.url}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white/[0.6] text-[12px] mt-2 mb-[-5px] flex items-center font-semibold">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-white/[0.4] text-[12px] ml-1" />
                )}
              </span>
              <div className="flex mt-[10px] text-[12px] font-500 text-white/[0.6] truncate overflow-hidden">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="my-3 border-white/[0.5] relative mx-2 top-[-13px] ">
                  .
                </span>
                <span className="truncate text-white/[0.4]">
                  {video?.publishedTimeText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultVideoCard;
