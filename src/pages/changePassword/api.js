import { fetchPost, fetchGet } from "../../api/index"
const ip_port = 'http://192.168.1.5:8080'

export function fetchPassword(params) {
    return fetchPost(`user/updatePassword`, {
      body: params
    });
}