import instance from "utils/api/youtube/axios";

export const searchYouTube = async (artistName, songName) => {
  const response = await instance.get(
    `search?part=id,snippet&q=${artistName}+${songName}`
  );

  return response.data
};

//get video id
// response.data.items[0].id.videoId