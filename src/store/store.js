import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'; // 引入redux-saga中的createSagaMiddleware函数
// import rootSaga from '../sagas/saga.js'; // 引入saga.js
import logger from 'redux-logger'
import { createReducer } from "redux-orm";

// login
import { 
    rootSaga as loginRootSaga,
    AllReducer as loginReducer, 
    namespace as loginNamespace  
} from '../pages/login/index';

// personalCenter
import { 
    rootSaga as personalCenterRootSaga, 
    AllReducer as personalCenterReducer, 
    namespace as personalCenterNamespace  
} from '../pages/personalCenter/index';


// register
import { 
    rootSaga as registerRootSaga, 
    AllReducer as registerReducer, 
    namespace as registerNamespace  
} from '../pages/register/index';



const sagaMiddleware = createSagaMiddleware() // 执行

const reducers = Object.assign({}, {
    // orm: createReducer(orm),
    [loginNamespace]: loginReducer,
    [personalCenterNamespace]: personalCenterReducer,
    [registerNamespace]: registerReducer
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
sagaMiddleware.run(personalCenterRootSaga) // 执行rootSaga
sagaMiddleware.run(registerRootSaga) // 执行rootSaga