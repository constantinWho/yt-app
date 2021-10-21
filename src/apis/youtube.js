import axios from "axios";

const KEY = "AIzaSyAH289YM-A4VrMT9l_tyzhPnERiZSU17Kw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
