import { call, put, takeEvery } from 'redux-saga/effects'; // 引入相关函数
import * as Api from './api';
import { namespace } from './model'
import { takeSagas } from "../../sagas/index"
import { createDefineActions } from "../../actions/index"
import { reducerActions } from './reducer'

export const sagas = Object.assign({}, {
    fetchCheckCode: function * (action){
        let data = action.payload
        yield put(reducerActions.updateCheckCode(data));
    },
    fetchData: function * () {
        yield call(Api.fetchData);
    },
    login: function * (action) {
        let props = action.payload.props
        let payload = {
            account: action.payload.account,
            password: action.payload.password
        }
        let data = yield call(Api.login, payload);
        console.log(data)
        yield put(reducerActions.updateLoginMessage(data))
        if(data === true){
            props.history.push('/homePage')
        }
    },
})

export const sagaActions = createDefineActions(sagas, namespace)

function* rootSaga() {
    yield takeSagas(sagaActions, sagas)
}

export default rootSaga; // 导出rootSaga，被store.js文件import
