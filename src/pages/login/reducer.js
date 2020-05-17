import { defaultReducer, defaultState, reducerCreator, megerActionReducer } from '../../reducers/index'
import { createDefineActions } from '../../actions/index'
import { namespace } from './model'

export const reduces = Object.assign(defaultReducer(), {
    updateCheckCode: (state,action) => {
        return {
            ...state,
            checkCode: action.payload
        }
    },
    updateLoginStatus: (state, action) => {
        return {
            ...state,
            loginStatus: action.payload
        }
    },
    updateLoginMessage: (state, action) => {
        return {
            ...state,
            loginMessage: action.payload
        }
    }
})

export const reducerActions = createDefineActions(reduces, namespace)

export const initialState = Object.assign({}, defaultState, {
    checkCode: '',
    loginStatus: '',
    loginMessage: {}
})

export default reducerCreator(megerActionReducer(reduces, reducerActions), initialState)
