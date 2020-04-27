import { fetchPost, fetchGet } from "../../api/index"
const ip_port = 'http://127.0.0.1:8080'

export function fetchData(params) {
    return fetchGet(`https://guostz.github.io/Tuan/data.json`, {
      body: params
    });
}

export function register(params) {
    return fetchPost(`/user/register`, {
      body: params
    });
}