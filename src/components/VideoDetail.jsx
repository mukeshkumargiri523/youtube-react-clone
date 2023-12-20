import React, { useState, useEffect, useContext } from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { useParams } from "react-router-dom";

import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

import { fetchDataApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";

const VideoDetail = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataApi(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    });
  };

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideos(res);
      setLoading(false);
    });
  };

  return (
    <div className="flex justify-center flex-row h-[calc(100%-52px)] bg-black/90  ">
      <div className="w-full max-w-[1240px] flex flex-col lg:flex-row rounded-xl">
        <div
          style={{ borderRadius: "50px" }}
          className="flex flex-col  lg:w-[calc(100%-330px)] xl:w-[calc(100%-280px)] px-4 py-3 lg:py-6 overflow-y-auto  "
        >
          <div className="h-[200px]  md:h-[420px] lg:h-[440px] xl:h-[550px] ml-[-12px] lg:ml-0 mr-[-12px] lg:mr-0 ">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "black" }}
              playing
            />
          </div>
          <div className="text-white font-bold text-sm md:text-xl mt-5 line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-5">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-12 w-12 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0].url}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <div className="text-white text-md font-500 flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-white/[0.4] text-[12px] ml-1" />
                  )}
                </div>
                <div className="text-white/[0.6] text-sm">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            <div className="flex text-white mt-4 md:mt-0">
              <div className="flex items-center justify-between h-12 px-5 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl text-white  ml-2" />
                <span className="mr-2">{`${abbreviateNumber(
                  video?.stats?.likes,
                  2
                )} views`}</span>
                |
                <AiOutlineDislike className="text-xl text-white ml-2 mr-2" />
              </div>
              <div className="flex ml-3 items-center justify-between h-12 px-5 rounded-3xl bg-white/[0.15]">
                <span className="mr-2">{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-5 px-4 overflow-y-auto lg:w-[490px] xl:w-[550px]">
          {relatedVideos?.contents?.map((item, index) => {
            return <SuggestionVideoCard key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
