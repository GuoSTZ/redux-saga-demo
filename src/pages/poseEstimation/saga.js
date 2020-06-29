import { call, put, takeEvery } from 'redux-saga/effects'; // 引入相关函数
import * as Api from './api';
import { namespace } from './model'
import { takeSagas } from "../../sagas/index"
import { createDefineActions } from "../../actions/index"
import { reducerActions } from './reducer'

export const sagas = Object.assign({}, {
    // fetchTeacherVideo: function * (action) {
    //     let data = yield call(Api.fetchTeacherVideo, action.payload)
    //     yield put(reducerActions.updateTeacherVideo(data))
    // },
    // fetchStudentVideo: function * (action) {
    //     let data = yield call(Api.fetchStudentVideo, action.payload)
    //     yield put(reducerActions.updateStudentVideo(data))
    // },
    fetchDeviation: function * (action) {
        let teacherPayload = {
            courseId: action.payload.courseId
        }
        let teacherData = yield call(Api.fetchTeacherVideo, teacherPayload)
        yield put(reducerActions.updateTeacherVideo(teacherData))
        let studentPayload = {
            courseId: action.payload.courseId,
            userId: action.payload.userId
        }
        let studentData = yield call(Api.fetchStudentVideo, studentPayload)
        yield put(reducerActions.updateStudentVideo(studentData))

        console.log(teacherData, 'teacherData')
        console.log(studentData, 'studentData')
        let payload = {
            path1: teacherData[0].keypointUrl,
            path2: studentData.keypointUrl,
        }
        let data = yield call(Api.fetchDeviation, payload);
        yield put(reducerActions.updaetDeviation(data))
    }
})

export const sagaActions = createDefineActions(sagas, namespace)

function* rootSaga() {
    yield takeSagas(sagaActions, sagas)
}

export default rootSaga; // 导出rootSaga，被store.js文件import
