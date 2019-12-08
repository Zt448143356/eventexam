import axios from "./axios";

export function getyandangshanCarouselMap() {
  return axios({
    url: '/yandangshan_CarouselMap'
  })
}

export function getyandangshanContent() {
  return axios({
    url: '/yandangshan_Content'
  })
}
export function getnanxijiangCarouselMap() {
  return axios({
    url: '/nanxijiang_CarouselMap'
  })
}

export function getnanxijiangContent() {
  return axios({
    url: '/nanxijiang_Content'
  })
}
