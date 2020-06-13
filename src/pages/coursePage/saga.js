import { call, put, takeEvery } from 'redux-saga/effects'; // 引入相关函数
import * as Api from './api';
import { namespace } from './model'
import { takeSagas } from "../../sagas/index"
import { createDefineActions } from "../../actions/index"
import { reducerActions } from './reducer'

export const sagas = Object.assign({}, {
    fetchCourseMessage: function * (action){
        let data = yield call(Api.fetchCourseMessage, action.payload)
        yield put(reducerActions.updateCourseMessage(data))
    },
    purchase: function * (action){
        let data = yield call(Api.purchase, action.payload)
    },
    fetchCourseStatus: function * (action) {
        let data = yield call(Api.fetchCourseStatus, action.payload)
        console.log(data, 'status')
        yield put(reducerActions.updateCourseStatus(data))
        
    }
})

export const sagaActions = createDefineActions(sagas, namespace)

function* rootSaga() {
    yield takeSagas(sagaActions, sagas)
}

export default rootSaga; // 导出rootSaga，被store.js文件import
