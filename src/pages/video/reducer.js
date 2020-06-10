import { defaultReducer, defaultState, reducerCreator, megerActionReducer } from '../../reducers/index'
import { createDefineActions } from '../../actions/index'
import { namespace } from './model'

export const reduces = Object.assign(defaultReducer(), {
    updateVideoMessage: (state, action) => {
        return {
            ...state,
            videoMessage: action.payload
        }
    },
    updateComments: (state, action) => {
        return {
            ...state,
            comments: action.payload
        }
    },
})

export const reducerActions = createDefineActions(reduces, namespace)

export const initialState = Object.assign({}, defaultState, {
    // comments: [
    //     {
    //         name: '',
    //         avatarUri: '',
    //         commentContent: '',
    //         commentDate: ''
    //     }
    // ],
    videoMessage: {
        userAvatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    },
})

export default reducerCreator(megerActionReducer(reduces, reducerActions), initialState)
