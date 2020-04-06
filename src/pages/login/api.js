import { fetchPost, fetchGet } from "../../api/index"
export function fetchData(params) {
    return fetchGet(`https://guostz.github.io/Tuan/data.json`, {
      body: params
    });
}