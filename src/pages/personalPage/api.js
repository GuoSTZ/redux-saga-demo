import { fetchPost, fetchGet } from "../../api/index"
const ip_port = 'http://192.168.1.5:8080'

export function fetchData(params) {
  return fetchGet(`https://guostz.github.io/Tuan/data.json`, {
    body: params
  });
}

export function fetchLoginMessage(params) {
  return fetchGet(`redis/fetchLoginMessage`,{
    body: params
  })
}

export function isKeyExist(params) {
  return fetchGet(`redis/isKeyExist`,{
    body: params
  })
}

export function changeAutograph(params) {
  return fetchPost(`redis/changeAutograph`,{
    body: params
  })
}