import youtubeApi from "utils/api/youtube/axios";

export const searchYouTube = async (query, limit=10) => {
  const response = await youtubeApi.get('search', {
    params: {
      part: 'id,snippet',
      q: query,
      maxResults: limit,
    },
  });
  return response.data

};

//get video id
// response.data.items[0].id.videoId