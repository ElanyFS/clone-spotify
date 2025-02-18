import {
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
} from "react-icons/tb";
import { FaCirclePause } from "react-icons/fa6";

import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Musicas } from "../utils/interface.ts";
import { useEffect, useRef, useState } from "react";
import { secondsToMinutesAndSeconds } from "../utils/formatTime.ts";

interface PlayerProps {
  songSelected: Musicas;
  randomPrevSong: string;
  randomNextSong: string;
}
const Player = ({
  songSelected,
  randomNextSong,
  randomPrevSong,
}: PlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioSelected = useRef<HTMLAudioElement | null>(null);
  const play_progress = useRef<HTMLDivElement | null>(null);

  const [currentTime, setcurrentTime] = useState(secondsToMinutesAndSeconds(0));

  const handlePlayPause = () => {
    if (audioSelected.current) {
      isPlaying ? audioSelected.current.pause() : audioSelected.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const interval: number = window.setInterval(() => {
      if (audioSelected.current) {
        setcurrentTime(
          secondsToMinutesAndSeconds(audioSelected.current.currentTime)
        );

        play_progress.current?.style.setProperty(
          "--_progress",
          `${
            (audioSelected.current.currentTime /
              audioSelected.current.duration) *
            100
          }%`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="player flex flex-col justify-stretch items-center">
      <div className="player_controllers flex items-center gap-3">
        <Link to={`/song/${randomPrevSong}`} className="player_control">
          <TbPlayerSkipBackFilled />
        </Link>

        <p onClick={() => handlePlayPause()}>
          {isPlaying ? (
            <FaCirclePause className="player_control size-5" />
          ) : (
            <FaPlayCircle className="player_control size-5" />
          )}
        </p>

        <Link to={`/song/${randomNextSong}`} className="player_control">
          <TbPlayerSkipForwardFilled />
        </Link>
      </div>

      <div className="player_progress w-[100% max-w-lg flex justify-center items-center gap-2 ">
        <p>{currentTime}</p>
        <div className="progress w-[100vw] h-1 rounded-sm bg-slate-600">
          <div ref={play_progress} className="play_bar"></div>
        </div>
        <p>
          {audioSelected.current &&
            secondsToMinutesAndSeconds(audioSelected.current.duration)}
        </p>
      </div>

      <audio ref={audioSelected} src={songSelected.audio}></audio>
    </div>
  );
};

export default Player;
