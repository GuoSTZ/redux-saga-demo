import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'; // 引入redux-saga中的createSagaMiddleware函数
// import rootSaga from '../sagas/saga.js'; // 引入saga.js
import { loginRootSaga } from '../pages/login/index'
import logger from 'redux-logger'
import { createReducer } from "redux-orm";
import { orm, AllReducer as loginReducer, namespace as loginNamespace  } from '../pages/login/index';

const sagaMiddleware = createSagaMiddleware() // 执行

const reducers = Object.assign({}, {
    // orm: createReducer(orm),
    [loginNamespace]: loginReducer
})
const reducerAll = combineReducers({
    ...reducers
})
export const store = createStore(
    reducerAll,
    window.devToolsExtension ? window.devToolsExtension() : undefined, // dev-tools
    applyMiddleware(sagaMiddleware, logger), // 中间件，加载sagaMiddleware
)

sagaMiddleware.run(loginRootSaga) // 执行rootSaga