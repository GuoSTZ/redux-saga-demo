import { call, put, takeEvery } from 'redux-saga/effects'; // 引入相关函数
import * as Api from './api';
import { namespace } from './model'
import { takeSagas } from "../../sagas/index"
import { createDefineActions } from "../../actions/index"
import { reducerActions } from './reducer'

export const sagas = Object.assign({}, {
    // ...
})

export const sagaActions = createDefineActions(sagas, namespace)

function* rootSaga() {
    yield takeSagas(sagaActions, sagas)
}

export default rootSaga; // 导出rootSaga，被store.js文件import