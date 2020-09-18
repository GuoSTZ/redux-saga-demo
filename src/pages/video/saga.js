import { call, put, takeEvery } from 'redux-saga/effects'; // 引入相关函数
import * as Api from './api';
import { namespace } from './model'
import { takeSagas } from "../../sagas/index"
import { createDefineActions } from "../../actions/index"
import { reducerActions } from './reducer'

export const sagas = Object.assign({}, {
    fetchVideoMessage: function * (action){
        let data = yield call(Api.fetchVideoMessage, action.payload);
        yield put(reducerActions.updateVideoMessage(data))
    },
    fetchComments: function * (action) {
        let data = yield call(Api.fetchComments, action.payload);
        yield put(reducerActions.updateComments(data))
    },
    saveHistory: function * (action) {
        let data = yield call(Api.saveHistoryByQuery, action.payload);
    },
    saveComment: function * (action) {
        let data = yield call(Api.saveComment, action.payload);
        yield put(reducerActions.updateComments(data))
    },
    saveReply: function * (action) {
        let data = yield call(Api.saveReply, action.payload);
        console.log(data, 'data')
        yield put(reducerActions.updateComments(data))
    },
})

export const sagaActions = createDefineActions(sagas, namespace)

function* rootSaga() {
    yield takeSagas(sagaActions, sagas)
}

export default rootSaga; // 导出rootSaga，被store.js文件import
