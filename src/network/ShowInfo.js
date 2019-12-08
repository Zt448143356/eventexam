import axios from "./axios";

export function getShowInfoContent() {
  return axios({
    url: '/allShowInfo'
  })
}
