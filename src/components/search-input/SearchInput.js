import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTrack } from "utils/redux/playerSlice";
import { searchYouTube } from "utils/api/youtube/video";
import { getVideoUrl } from "utils/helpers";
import { setResult, setValue } from "utils/redux/searchSlice";

import "./SearchInput.scss";

function SearchInput() {
  const dispatch = useDispatch();
  const { value, result } = useSelector((state) => state.search);

  const handleSearch = async () => {
    const result = await searchYouTube(value);
    console.log(result.items);

    dispatch(setResult(result.items));
  };

  const handleClick = async (track) => {
    const videoUrl = getVideoUrl(track.id.videoId);
    dispatch(setTrack({ ...track, videoUrl }));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => dispatch(setValue(e.target.value))}
        />
        <button>Search</button>
        <ul>
          {result &&
            result.map((track) => (
              <li
                key={track.id.videoId}
                className={"SearchItem"}
                onClick={() => {
                  handleClick(track);
                }}
              >
                {track.snippet.title}
              </li>
            ))}
        </ul>
      </form>
    </div>
  );
}

export default SearchInput;
