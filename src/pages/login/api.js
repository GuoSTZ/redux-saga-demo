import { fetchPost, fetchGet } from "../../api/index"
const ip_port = 'http://192.168.1.5:8080'
export function fetchData(params) {
    return fetchGet(`https://guostz.github.io/Tuan/data.json`, {
      body: params
    });
}
export function login(params){
  return fetchPost(`user/login`, {
    body: params
  });
}

export function saveLoginMessage(params){
  return fetchPost(`redis/saveLoginMessage`, {
    body: params
  });
}

export function fetchLoginMessage(params){
  return fetchGet(`redis/getLoginMessage`, {
    body: params
  });
}