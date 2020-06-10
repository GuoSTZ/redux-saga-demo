import { fetchPost, fetchGet } from "../../api/index"
const ip_port = 'http://192.168.1.5:8080'

export function fetchData(params) {
  return fetchGet(`https://guostz.github.io/Tuan/data.json`, {
    body: params
  });
}

export function fetchVideoMessage(params) {
  return fetchGet(`video/getVideoById`, {
    body: params
  });
}


export function fetchComments(params) {
  return fetchGet(`video/getComments`, {
    body: params
  });
}

export function saveHistory(params) {
  return fetchPost(`history/saveHistory`, {
    body: params
  });
}

export function saveHistoryByQuery(params) {
  return fetchPost(`history/saveHistoryByQuery`, {
    body: params
  });
}

export function saveComment(params) {
  return fetchPost(`comment/commentSubmit`, {
    body: params
  });
}