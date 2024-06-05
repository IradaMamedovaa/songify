import lastFmInstance from "utils/api/lastFm/axios";

export const searchTracks = async (query) => {
  const response = await lastFmInstance.get(
    `/?method=track.search&track=${query}&api_key=${process.env.REACT_APP_LAST_FM_API_KEY}&format=json`
  );
  return response.data;
};
// if you want to get songs
// response.data.results.trackmatches.track
