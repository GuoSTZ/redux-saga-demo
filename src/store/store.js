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

// operationCenter
import { 
    rootSaga as operationCenterRootSaga, 
    AllReducer as operationCenterReducer, 
    namespace as operationCenterNamespace  
} from '../pages/operationCenter/index';

// register
import { 
    rootSaga as registerRootSaga, 
    AllReducer as registerReducer, 
    namespace as registerNamespace  
} from '../pages/register/index';

// video
import { 
    rootSaga as videoRootSaga, 
    AllReducer as videoReducer, 
    namespace as videoNamespace  
} from '../pages/video/index';

// homePage
import { 
    rootSaga as homePageRootSaga, 
    AllReducer as homePageReducer, 
    namespace as homePageNamespace  
} from '../pages/homePage/index';



const sagaMiddleware = createSagaMiddleware() // 执行

const reducers = Object.assign({}, {
    // orm: createReducer(orm),
    [loginNamespace]: loginReducer,
    [registerNamespace]: registerReducer,
    [personalCenterNamespace]: personalCenterReducer,
    [operationCenterNamespace]: operationCenterReducer,
    [videoNamespace]: videoReducer,
    [homePageNamespace]: homePageReducer,
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
sagaMiddleware.run(registerRootSaga)
sagaMiddleware.run(personalCenterRootSaga)
sagaMiddleware.run(operationCenterRootSaga)
sagaMiddleware.run(videoRootSaga)
sagaMiddleware.run(homePageRootSaga)