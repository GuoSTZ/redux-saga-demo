import { defaultReducer, defaultState, reducerCreator, megerActionReducer } from '../../reducers/index'
import { createDefineActions } from '../../actions/index'
import { namespace } from './model'

export const reduces = Object.assign(defaultReducer(), {
    updateTeacherVideo: (state, action) => {
        return {
            ...state,
            teacherVideo: action.payload
        }
    },
    updateStudentVideo: (state, action) => {
        return {
            ...state,
            studentVideo: action.payload
        }
    },
    updaetDeviation: (state, action) => {
        return {
            ...state, 
            deviation: action.payload
        }
    }
})

export const reducerActions = createDefineActions(reduces, namespace)

export const initialState = Object.assign({}, defaultState, {
    teacherVideo: [{}],
    studentVideo: {},
    deviation: []
})

export default reducerCreator(megerActionReducer(reduces, reducerActions), initialState)
