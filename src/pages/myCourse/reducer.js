import { defaultReducer, defaultState, reducerCreator, megerActionReducer } from '../../reducers/index'
import { createDefineActions } from '../../actions/index'
import { namespace } from './model'

export const reduces = Object.assign(defaultReducer(), {
    updateMyCourseMessage: (state, action) => {
        return {
            ...state,
            myCourseMessage: action.payload
        }
    }
})

export const reducerActions = createDefineActions(reduces, namespace)

export const initialState = Object.assign({}, defaultState, {
    myCourseMessage: []
})

export default reducerCreator(megerActionReducer(reduces, reducerActions), initialState)
