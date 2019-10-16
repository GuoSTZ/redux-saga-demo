import {
    createStore,
    applyMiddleware
} from 'redux';
import reducerAll from '../reducers/index.js';
import createSagaMiddleware from 'redux-saga'; // 引入redux-saga中的createSagaMiddleware函数
import rootSaga from '../sagas/saga.js'; // 引入saga.js
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware() // 执行

export const store = createStore(
    reducerAll,
    window.devToolsExtension ? window.devToolsExtension() : undefined, // dev-tools
    applyMiddleware(sagaMiddleware, logger), // 中间件，加载sagaMiddleware
)

sagaMiddleware.run(rootSaga) // 执行rootSaga