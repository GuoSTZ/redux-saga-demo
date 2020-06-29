import { defaultReducer, defaultState, reducerCreator, megerActionReducer } from '../../reducers/index'
import { createDefineActions } from '../../actions/index'
import { namespace } from './model'

export const reduces = Object.assign(defaultReducer(), {
    updateMyWork: (state, action) => {
        return {
            ...state,
            myWork: action.payload
        }
    }
})

export const reducerActions = createDefineActions(reduces, namespace)

export const initialState = Object.assign({}, defaultState, {
    myWork: []
})

export default reducerCreator(megerActionReducer(reduces, reducerActions), initialState)
