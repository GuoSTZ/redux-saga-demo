import { call, put, takeEvery } from 'redux-saga/effects'; // 引入相关函数
import * as Api from './api';
import { namespace } from './model'
import { takeSagas } from "../../sagas/index"
import { createDefineActions } from "../../actions/index"
import { reducerActions } from './reducer'

export const sagas = Object.assign({}, {
    videoSubmit: function * (action) {
        let payload = {
            id: action.payload.id,
            collectNum: 0,
            commentNum: 0,
            courseId: 0, // 0表示该视频为个人视频
            coverUrl: action.payload.coverUrl,
            date: action.payload.date,
            likeNum: 0,
            name: action.payload.videoName,
            userId: action.payload.userId,
            videoUrl: action.payload.videoUrl,
            viewNum: 0,
            autograph: action.payload.briefIntroduction,
            level: 0, // 0表示该视频为个人视频
        }
        let data = yield call(Api.videoSubmit, payload)
        console.log(data, 'videoSubmit')
    },
    videoTagSubmit: function * (action){
        let data = yield call(Api.videoTagSubmit, action.payload)
        console.log(data, 'videoTagSubmit')
    }
})

export const sagaActions = createDefineActions(sagas, namespace)

function* rootSaga() {
    yield takeSagas(sagaActions, sagas)
}

export default rootSaga; // 导出rootSaga，被store.js文件import
