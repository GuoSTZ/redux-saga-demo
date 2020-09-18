import { call, put, takeEvery } from 'redux-saga/effects'; // 引入相关函数
import * as Api from './api';
import { namespace } from './model'
import { takeSagas } from "../../sagas/index"
import { createDefineActions } from "../../actions/index"
import { reducerActions } from './reducer'

export const sagas = Object.assign({}, {
    fetchType: function * (action){
        let payload = {
            id: action.payload.typeId
        }
        let data = yield call(Api.fetchType, payload);
        if(data !== undefined)
            yield put(reducerActions.updateType(data))
    },
    fetchCourseMessageByTypeId: function * (action){
        let data = yield call(Api.fetchCourseMessageByTypeId, action.payload);
        console.log(data, 'data**')
        yield put(reducerActions.updateCourseMessage(data))
    },
    fetchNewVideoMessageByCourseId: function * (action) {
        let data = yield call(Api.fetchNewVideoMessageByCourseId, action.payload)
        yield put(reducerActions.updateCourseMessage(data))
    }
})

export const sagaActions = createDefineActions(sagas, namespace)

function* rootSaga() {
    yield takeSagas(sagaActions, sagas)
}

export default rootSaga; // 导出rootSaga，被store.js文件import
