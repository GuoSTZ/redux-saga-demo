import { defaultReducer, defaultState, reducerCreator, megerActionReducer } from '../../reducers/index'
import { createDefineActions } from '../../actions/index'
import { namespace } from './model'

export const reduces = Object.assign(defaultReducer(), {
    updateType: (state, action) => {
        return{
            ...state,
            type: action.payload
        }

    },
    updateCourseMessage: (state, action) => {
        return {
            ...state,
            courseMessage: action.payload
        }
    }
})

export const reducerActions = createDefineActions(reduces, namespace)

export const initialState = Object.assign({}, defaultState, {
    type: {},
    courseMessage:[{}]
})

export default reducerCreator(megerActionReducer(reduces, reducerActions), initialState)
