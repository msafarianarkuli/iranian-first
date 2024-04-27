import axios from "axios";
// import Cookies from "js-cookie";

const baseURL = "https://stage-estate-api.iranianpooshesh.com/";

const Http = axios.create({ baseURL });

Http.interceptors.request.use((config) => {
  config.headers.Authorization =
    "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NzQzMDQxLCJpYXQiOjE3MTM4NzkwNDEsImp0aSI6IjUwMTg4Y2U3MDYzODQwN2ZiOTRiNjZmOWEwMzkwYjc2IiwidXNlcl9pZCI6MzB9.pADlcwkEFZwYkck1MBZq10cFM3Xy2ckJgIGamQNrbQA";
  config.headers.Accept = "application/json";
  config.headers["Content-Type"] = "application/json";

  return config;
});

export default Http;
