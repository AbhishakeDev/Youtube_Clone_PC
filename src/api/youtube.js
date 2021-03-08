import axios from "axios";
const KEY = "AIzaSyC-DUMWk9ANWWDqlIe_7YSSL_TzEziHKGU";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    },
    headers: {}
});