import { call, put, takeEvery } from 'redux-saga/effects'; // 引入相关函数
import * as Api from './api';
import { namespace } from './model'
import { takeSagas } from "../../sagas/index"
import { createDefineActions } from "../../actions/index"
import { reducerActions } from './reducer'

export const sagas = Object.assign({}, {
    isKeyExist: function * (action) {
        let data = yield call(Api.isKeyExist, action.payload)
        console.log(data, 'data')
        if(data === true){ // 如果缓存中存在用户信息
            let result = yield call(Api.fetchRedisLoginMessage, action.payload)
            if(result.account !== null){
                yield put(reducerActions.updateLoginMessage(result))
                sessionStorage.setItem('user', JSON.stringify(result))
            }
        } else { // 如果缓存中不存在用户信息，则从数据库中获取数据
            let result = yield call(Api.fetchLoginMessage, action.payload)
            yield put(reducerActions.updateLoginMessage(result))
            sessionStorage.setItem('user', JSON.stringify(result))
        }
    },
    updateUser: function * (action) {
        let data = yield call(Api.updateUser, action.payload)
        sessionStorage.setItem('user', JSON.stringify(data))
        console.log(data, 'data')
    },
})

export const sagaActions = createDefineActions(sagas, namespace)

function* rootSaga() {
    yield takeSagas(sagaActions, sagas)
}

export default rootSaga; // 导出rootSaga，被store.js文件import
