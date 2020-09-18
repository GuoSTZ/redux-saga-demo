import { fetchPost, fetchGet } from "../../api/index"
const ip_port = 'http://192.168.1.5:8080'

export function fetchData(params) {
    return fetchGet(`https://guostz.github.io/Tuan/data.json`, {
      body: params
    });
}

export function purchase(params) {
  fetchGet(`alipay/alipay`, {
    body: params
  });
}

export function fetchCourseMessage(params){
  return fetchGet(`course/getCourseById`, {
    body: params
  });
}

export function fetchCourseStatus(params){
  return fetchPost(`myCourse/getCourseStatus`, {
    body: params
  });
}

export function test(params) {
  fetchGet(`course/test`, {
    body: params
  });
}

export function fetchNewVideoMessageByCourseId(params) {
  return fetchGet(`video/getNewVideoMessageByCourseId`,{
    body: params
  })
}