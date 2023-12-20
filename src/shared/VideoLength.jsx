import React from "react";
import moment from "moment";

function VideoLength({ time }) {
  const videoLengths = moment().startOf("day").seconds(time).format("H:mm:ss");
  return (
    <div className="absolute bottom-3 right-2 bg-black/70 py-1 px-2 text-teal-50 text-xs rounded-sm">
      {videoLengths}
    </div>
  );
}

export default VideoLength;
