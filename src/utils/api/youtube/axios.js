import axios from "axios";

const youtubeApi = axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_URL,
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

export default youtubeApi;
