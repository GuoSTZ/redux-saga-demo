import { defaultReducer, defaultState, reducerCreator, megerActionReducer } from '../../reducers/index'
import { createDefineActions } from '../../actions/index'
import { namespace } from './model'

export const reduces = Object.assign(defaultReducer(), {
    updateCourseMessage: (state, action) => {
        return {
            ...state,
            courseMessage: action.payload
        }
    },
    updateCourseStatus: (state, action) => {
        return {
            ...state,
            courseStatus: action.payload
        }
    },
    updateNewVideoMessage: (state, action) => {
        return {
            ...state,
            newVideoMessage: action.payload
        }
    }
})

export const reducerActions = createDefineActions(reduces, namespace)

export const initialState = Object.assign({}, defaultState, {
    courseMessage: {
        price: 0
    },
    courseStatus: false,
    newVideoMessage: [{}]
})

export default reducerCreator(megerActionReducer(reduces, reducerActions), initialState)
