import { defaultReducer, defaultState, reducerCreator, megerActionReducer } from '../../reducers/index'
import { createDefineActions } from '../../actions/index'
import { namespace } from './model'

export const reduces = Object.assign(defaultReducer(), {
    updateCheckCode: (state, action) => {
        return {
            ...state,
            sec: action.payload.sec
        }
    },
    updateSpinStatus: (state, action) => {
        return {
            ...state,
            spinStatus: action.payload
        }
    },
    updateRegisterStatus: (state, action) => {
        return {
            ...state,
            registerStatus: action.payload
        }
    }
})

export const reducerActions = createDefineActions(reduces, namespace)

export const initialState = Object.assign({}, defaultState, {
    sec: 60,
    spinStatus: false,
    registerStatus: true,
})

export default reducerCreator(megerActionReducer(reduces, reducerActions), initialState)
