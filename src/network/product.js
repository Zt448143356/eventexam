import axios from "./axios";

export function getLocalProductionCarousel() {
  return axios({
    url: '/localProduction_CarouselMap'
  })
}

export function getLocalProductionContent() {
  return axios({
    url: '/localProduction_Content'
  })
}
export function getFoodCarousel() {
  return axios({
    url: '/localFood_CarouselMap'
  })
}

export function getFoodContent() {
  return axios({
    url: '/localFood_Content'
  })
}
