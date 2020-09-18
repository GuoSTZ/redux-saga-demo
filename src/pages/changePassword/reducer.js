import { defaultReducer, defaultState, reducerCreator, megerActionReducer } from '../../reducers/index'
import { createDefineActions } from '../../actions/index'
import { namespace } from './model'

export const reduces = Object.assign(defaultReducer(), {
    test: (state, action) => {
        console.log(state)
        console.log(action)
    },
    updateCheckCode: (state, action) => {
        return {
            ...state,
            sec: action.payload.sec
        }
    },
})

export const reducerActions = createDefineActions(reduces, namespace)

export const initialState = Object.assign({}, defaultState, {
    sec: 60
})

export default reducerCreator(megerActionReducer(reduces, reducerActions), initialState)
