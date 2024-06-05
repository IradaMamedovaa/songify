import React from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";

import { setIsPlaying } from "utils/redux/playerSlice";

import "./Player.scss";

const Player = () => {
  const { isPlaying, track } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const handlePlayPause = () => {
    dispatch(setIsPlaying());
  };

  return (
    <div className="Player">
      Player
      <div className="VideoWrapper">
      <ReactPlayer url={track?.videoUrl} playing={isPlaying} width={400} height={'auto'} controls={false} config={{ youtube: { playerVars: { disablekb: 1 } } }} /></div>
      <button onClick={handlePlayPause}>
        <h1>{isPlaying ? "PAUSE" : "PLAY"}</h1>
      </button>
    </div>
  );
};

export default Player;
