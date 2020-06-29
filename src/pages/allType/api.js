import { fetchPost, fetchGet } from "../../api/index"
const ip_port = 'http://192.168.1.5:8080'

export function fetchData(params) {
    return fetchGet(`https://guostz.github.io/Tuan/data.json`, {
      body: params
    });
}

export function fetchType(params){
  return fetchGet(`type/getTypeById`, {
    body: params
  });
}

export function fetchCourseMessageByTypeId(params){
  return fetchGet(`course/getByTypeId`, {
    body: params
  });
}

export function fetchNewVideoMessageByCourseId(params) {
  return fetchGet(`video/getNewVideoMessageByCourseId`,{
    body: params
  })
}