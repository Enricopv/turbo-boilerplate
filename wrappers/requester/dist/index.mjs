// src/index.ts
import axios from "axios";
function get(info) {
  return axios.get(info.url, info.config);
}
var requester = {
  get
};
export {
  requester
};
