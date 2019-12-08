import axios from "./axios";

export function getCarousel() {
  return axios({
    url: '/index_CarouselMap'
  })
}
export function submitHomeData(name,email,content) {
  return axios({
    url: '/hope_content',
    method:'post',
    params: {
      name,
      email,
      content
    }
  })
}
