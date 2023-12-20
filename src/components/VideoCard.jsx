import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../shared/VideoLength";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-7">
        <div className="relative h-50 md:h-42 md:rounded-lg overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails[0]?.url}
            alt=""
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-10 w-10 rounded-full overflow-hidden">
              <img
                src={video?.author?.avatar[0]?.url}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col ml-4 overflow-hidden ">
            <span className="text-sm font-600 line-clamp-2">
              {video?.title}
            </span>
            <span className="text-white/[0.6] text-[12px] mt-2 flex items-center font-500">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-white/[0.4] text-[12px] ml-1" />
              )}
            </span>
            <div className="flex text-[12px] font-500 text-white/[0.6] truncate overflow-hidden">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
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
    </Link>
  );
};

export default VideoCard;
