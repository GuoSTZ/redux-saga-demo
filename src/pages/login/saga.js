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
    // 用户登录
    login: function * (action) {
        let props = action.payload.props
        let payload = {
            account: action.payload.account,
            password: action.payload.password
        }
        let data = yield call(Api.isKeyExist, payload)
        if(data === true){ // 如果用户信息已经被缓存
            let redisData = yield call(Api.redisLogin, payload)
            // 如果验证通过
            if(redisData === true){
                sessionStorage.setItem('userAccount', action.payload.account)
                props.history.push('/homePage')
            }
            yield put(reducerActions.updateLoginStatus(redisData))
        } else {
            let result = yield call(Api.login, payload);
            yield put(reducerActions.updateLoginStatus(result))
            if(result === true){
                yield call(Api.saveLoginMessage, payload); // 用户信息缓存操作
                sessionStorage.setItem('userAccount', action.payload.account)
                props.history.push('/homePage')
            }
            
        }
    },
    changeLoginStatus: function * (action){
        yield put(reducerActions.updateLoginStatus(true))
    },
})

export const sagaActions = createDefineActions(sagas, namespace)

function* rootSaga() {
    yield takeSagas(sagaActions, sagas)
}

export default rootSaga; // 导出rootSaga，被store.js文件import
