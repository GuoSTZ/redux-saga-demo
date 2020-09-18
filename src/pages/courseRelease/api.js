import { fetchPost, fetchGet } from "../../api/index"
const ip_port = 'http://192.168.1.5:8080'

export function fetchData(params) {
  return fetchGet(`https://guostz.github.io/Tuan/data.json`, {
    body: params
  });
}

export function courseSubmit(params) {
  return fetchPost(`course/courseSubmit`, {
    body: params
  });
}

export function courseTypeSubmit(params) {
  return fetchGet(`courseType/courseTypeSubmit`, {
    body: params
  });
}

export function videoSubmit(params) {
  return fetchPost(`course/videoSubmit`, {
    body: params
  });
}

export function videoTagSubmit(params) {
  return fetchGet(`videoTag/videoTagSubmit`, {
    body: params
  });
}