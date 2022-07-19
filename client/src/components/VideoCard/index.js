import { useEffect, useRef } from "react";
import { loadPlayer } from "rtsp-relay/browser";
import { Card } from "@mui/material";

const VideoCard = ({ video }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    loadPlayer({
      url: video.url,
      canvas: canvasRef.current,
      //no audio
      audio: false,
      // optional
      onSourceEstablished: () => {
        canvasRef.current.style.display = "flex";
      },
    });
  }, [video]);

  return (
    <div className='p-2'>
      <Card className='border border-gray-300 shadow-lg'>
        <canvas
          className='w-full'
          id={video.camera}
          key={video.camera}
          ref={canvasRef}
        />
        <div className='flex justify-between'>
          <span className='p-3 font-bold'>{video.location}</span>
          <h1 className='font-bold text-end p-3'>Camera {video.camera}</h1>
        </div>
      </Card>
    </div>
  );
};

export default VideoCard;
