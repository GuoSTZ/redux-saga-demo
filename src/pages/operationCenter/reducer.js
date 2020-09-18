import { defaultReducer, defaultState, reducerCreator, megerActionReducer } from '../../reducers/index'
import { createDefineActions } from '../../actions/index'
import { namespace } from './model'

export const reduces = Object.assign(defaultReducer(), {
    updatePage: (state,action) => {
        return {
            ...state,
            page: action.payload
        }
    },
})

export const reducerActions = createDefineActions(reduces, namespace)

export const initialState = Object.assign({}, defaultState, {
    page: '1'
})

export default reducerCreator(megerActionReducer(reduces, reducerActions), initialState)
