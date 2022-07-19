import "./App.css";
import { useMemo } from "react";
import VideoCard from "./components/VideoCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const cctv_url = "192.168.50.17";
  const host = `${window.location.hostname}:3001`;

  const videos = useMemo(() => {
    return [
      {
        camera: "1",
        url: `ws://${host}/api/stream/${cctv_url}/h264Preview_01_sub`,
        location: "Front Door",
      },
      {
        camera: "2",
        url: `ws://${host}/api/stream/${cctv_url}/h264Preview_02_sub`,
        location: "Back Door",
      },
      {
        camera: "3",
        url: `ws://${host}/api/stream/${cctv_url}/h264Preview_03_sub`,
        location: "Driveway",
      },
      {
        camera: "4",
        url: `ws://${host}/api/stream/${cctv_url}/h264Preview_06_sub`,
        location: "Back Yard",
      }
    ];
  }, [host, cctv_url]);

  return (
    <div className='App flex flex-col h-screen'>
      <Navbar />
      <div className='container flex-1 mx-auto flex flex-wrap'>
        <div className='flex flex-wrap w-full'>
          {videos.map((video) => (
            <div
              key={video.camera}
              className='flex flex-col justify-around w-full md:w-1/2'
            >
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
