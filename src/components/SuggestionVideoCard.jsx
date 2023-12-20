import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../shared/VideoLength";

const SuggestionVideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex mb-5">
        <div className="relative h-32 lg:h-34 xl:h-36 w-40 min-w-[180px] lg:w-52  xl:w-56 xl:min-w-[220px] rounded-xl bg-slate-700 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails[0]?.url}
            alt=""
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex text-white flex-col ml-4 overflow-hidden ">
          <span className="text-xl font-700 line-clamp-2">{video?.title}</span>
          <span className="text-white/[0.6] text-[12px] mt-2 flex items-center font-500">
            {video?.author?.title}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="text-white/[0.4] text-[12px] ml-1" />
            )}
          </span>
          <div className="flex mt-3 text-[16px]  font-500 text-white/[0.6] truncate overflow-hidden">
            <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
            <span className="my-3 border-white/[0.5] relative mx-2 top-[-13px] ">
              .
            </span>
            <span className="truncate text-[16px]  text-white/[0.4]">
              {video?.publishedTimeText}
            </span>
          </div>
          <span className="mt-[-20px] px-2 w-10 rounded-sm text-[12px]  bg-white/[0.4]">
            New
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SuggestionVideoCard;
