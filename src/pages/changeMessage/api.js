import { fetchPost, fetchGet } from "../../api/index"
const ip_port = 'http://192.168.1.5:8080'

export function fetchRedisLoginMessage(params) {
    return fetchGet(`redis/fetchRedisLoginMessage`,{
        body: params
    })
}
  
export function fetchLoginMessage(params) {
    return fetchGet(`user/fetchLoginMessage`,{
        body: params
    })
}
  
export function isKeyExist(params) {
    return fetchGet(`redis/isKeyExist`,{
        body: params
    })
}

export function updateUser(params) {
    return fetchPost(`redis/updateUser`,{
        body: params
    })
}
