import { defaultReducer, defaultState, reducerCreator, megerActionReducer } from '../../reducers/index'
import { createDefineActions } from '../../actions/index'
import { namespace } from './model'

export const reduces = Object.assign(defaultReducer(), {
    updateHistory: (state, action) => {
        return {
            ...state,
            timeLineItems: action.payload
        }
    }
})

export const reducerActions = createDefineActions(reduces, namespace)

export const initialState = Object.assign({}, defaultState, {
    timeLineItems: [
        {
            browsingTime: '2015-09-01 09:50',
            videoCoverUrl: 'http://guostz.gitee.io/graduationprojectresource/resource/images/browsingHistory/群星.jpg',
            videoName: '视频的名称',
            userName: '视频作者',
            process: '视频已看进度',
            type: '视频类别'
        },
    ]
})

export default reducerCreator(megerActionReducer(reduces, reducerActions), initialState)
