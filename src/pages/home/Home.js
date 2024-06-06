import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchYouTube } from "utils/api/youtube/video";
import { resetHome, setMorePlaylists } from "utils/redux/homeSlice";

import "./Home.scss";
import { getVideoUrl } from "utils/helpers";
import { setTrack } from "utils/redux/playerSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { playlists } = useSelector((state) => state.home);

  useEffect(() => {
    const netflixMovies = searchYouTube("latest+netflix+movies+trailer");
    const music = searchYouTube("lana+del+rey");
    const hboMovies = searchYouTube("hbo+latest+movie+trailers");
    Promise.all([netflixMovies, music, hboMovies]).then((values) => {
      dispatch(resetHome());
      dispatch(setMorePlaylists(values));
    });
  }, [dispatch]);

  const handleClick = async (video) => {
    const videoUrl = getVideoUrl(video.id.videoId);
    dispatch(setTrack({ ...video, videoUrl }));
  };

  return (
    <div className="Home">
      {playlists &&
        playlists.map((playlist) => (
          <div>
            <h2>{playlist.items[0].snippet.channelTitle}</h2>
            <div className="HomePlaylistWrapper">
              {playlist.items.map((video) => (
                <p onClick={() => handleClick(video)}> {video.snippet.title}</p>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
