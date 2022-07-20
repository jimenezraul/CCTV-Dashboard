import { useEffect, useRef } from "react";
import { loadPlayer } from "rtsp-relay/browser";
import Card from "@mui/material/Card";

const VideoCard = ({ video }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    async function onPlayerReady() {
      await loadPlayer({
        url: video.url,
        canvas: canvasRef.current,
        //no audio
        audio: false,

      });
      canvasRef.current.style.display = "flex";
    }
    onPlayerReady();
  }, [video]);

  return (
    <div className='p-2'>
      <Card
        sx={{
          borderRadius: "10px",
        }}
      >
        <canvas
          className='w-full rounded-t-lg'
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
