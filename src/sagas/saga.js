import {
    actionTypes
} from '../common/actionTypes.js';
import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects'; // 引入相关函数

function* getData(action) { // 参数是action创建函数返回的action
    const p = function () {
        return fetch(`https://guostz.github.io/Tuan/data.json`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.log(err));
    }
    const data = yield call(p)
    if (data.code === 0) {
        let value = data.data
        yield put({ // dispatch一个action到reducer， payload是请求返回的数据
            type: actionTypes.ADD_PERSON_SUCCESS,
            value
        })
    }
}

function* rootSaga() { // 在store.js中，执行了 sagaMiddleware.run(rootSaga)
    console.log('rootSaga')
    yield takeEvery(actionTypes.ADD_PERSON, getData) // 如果有对应type的action触发，就执行goAge()函数
}

export default rootSaga; // 导出rootSaga，被store.js文件import