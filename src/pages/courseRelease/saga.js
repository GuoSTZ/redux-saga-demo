import { call, put, takeEvery } from 'redux-saga/effects'; // 引入相关函数
import * as Api from './api';
import { namespace } from './model'
import { takeSagas } from "../../sagas/index"
import { createDefineActions } from "../../actions/index"
import { reducerActions } from './reducer'

export const sagas = Object.assign({}, {
    test: function * (action) {
        console.log(action)
    },
    courseSubmit: function * (action) {
        let payload = {
            id: action.payload.id,
            date: action.payload.date,
            name: action.payload.courseName,
            price: action.payload.coursePrice,
            introduction: action.payload.courseIntroduction,
            coverUrl: action.payload.coverUrl,
            teacherId: action.payload.teacherId,
            purchasesNum: 0,
            discount: 1,
            filename: action.payload.filename,
        }
        let data = yield call(Api.courseSubmit, payload)
    },
    courseTypeSubmit: function * (action) {
        let data = yield call(Api.courseTypeSubmit, action.payload)
    },
    videoSubmit: function * (action) {
        let payload = {
            id: action.payload.id,
            collectNum: 0,
            commentNum: 0,
            courseId: action.payload.courseId,
            coverUrl: action.payload.coverUrl,
            date: action.payload.date,
            likeNum: 0,
            name: action.payload.videoName,
            userId: action.payload.userId,
            videoUrl: action.payload.videoUrl,
            viewNum: 0,
            autograph: action.payload.videoIntroduction,
            level: 1,
        }
        let data = yield call(Api.videoSubmit, payload)
    },
    videoTagSubmit: function * (action) {
        let data = yield call(Api.videoTagSubmit, action.payload)
    },
})

export const sagaActions = createDefineActions(sagas, namespace)

function* rootSaga() {
    yield takeSagas(sagaActions, sagas)
}

export default rootSaga; // 导出rootSaga，被store.js文件import
