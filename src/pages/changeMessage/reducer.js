import { defaultReducer, defaultState, reducerCreator, megerActionReducer } from '../../reducers/index'
import { createDefineActions } from '../../actions/index'
import { namespace } from './model'

export const reduces = Object.assign(defaultReducer(), {
    updateLoginMessage: (state, action) => {
        return {
            ...state,
            loginMessage: action.payload
        }
    }
})

export const reducerActions = createDefineActions(reduces, namespace)

export const initialState = Object.assign({}, defaultState, {
    loginMessage: {
        name: '游客',
        avatarUrl: ''
    }
})

export default reducerCreator(megerActionReducer(reduces, reducerActions), initialState)
