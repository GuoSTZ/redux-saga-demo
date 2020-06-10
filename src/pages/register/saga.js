import { call, put, takeEvery } from 'redux-saga/effects'; // 引入相关函数
import * as Api from './api';
import { namespace } from './model'
import { takeSagas } from "../../sagas/index"
import { createDefineActions } from "../../actions/index"
import { reducerActions } from './reducer'

const delay = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    })
}

export const sagas = Object.assign({}, {
    register: function * (action){
        let payload = {
            name: action.payload.username,
            password: action.payload.password,
            birthday: action.payload.birthday.format("x"),
            sex: action.payload.sex,
            account: action.payload.phone,
            registerTime: action.payload.registerTime,
            authorith: 'student', // 默认为普通用户，即学生
        }
        let data = yield call(Api.register, payload);
        console.log(data)
        if(data == true){
            yield put(reducerActions.updateSpinStatus(data))
        } else {
            yield put(reducerActions.updateRegisterStatus(data))
        }
    },
    getCheckCode: function * (action) {
        let sec = 59
        while(sec > 0){
            yield call(delay, 1000);
            yield put(reducerActions.updateCheckCode({sec: sec}))
            sec--
        }
        
    },
    changeRegisterStatus: function * (action) {
        yield put(reducerActions.updateRegisterStatus(action.payload))
    }
})

export const sagaActions = createDefineActions(sagas, namespace)

function* rootSaga() {
    yield takeSagas(sagaActions, sagas)
}

export default rootSaga; // 导出rootSaga，被store.js文件import
