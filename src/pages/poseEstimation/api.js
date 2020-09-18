import { fetchPost, fetchGet } from "../../api/index"
const ip_port = 'http://192.168.1.5:8080'

export function fetchData(params) {
    return fetchGet(`https://guostz.github.io/Tuan/data.json`, {
      body: params
    });
}

export function fetchTeacherVideo(params) {
  return fetchGet(`video/getVideoByCourseId`, {
    body: params
  });
}

export function fetchStudentVideo(params) {
  return fetchGet(`video/getVideoByCourseIdAndUserId`, {
    body: params
  });
}

export function fetchDeviation(params) {
  return fetchGet(`poseEstimation/getDeviation`, {
    body: params
  });
}