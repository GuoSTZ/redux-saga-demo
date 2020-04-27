import './video-react.css'
import React from 'react';
import { Player, ControlBar, ForwardControl, ReplayControl, PlaybackRateMenuButton } from 'video-react';
import './index.less'

export default class Video extends React.Component{
    componentDidMount(){
        // this.player.playbackRate = 1; // 初始化视频播放速率
        this.player.subscribeToStateChange(this.handleStateChange.bind(this)); // 订阅播放器的状态
    }
    handleStateChange(state, prevState){
        if( state.hasStarted === true ){
            // 将当前视频记入为用户的观看历史，并存入到数据库中
            // 视频id
            if( state.paused === true ){ 
                // 当视频暂停时，将视频当前的播放进度存入到数据库中
                // state.currentTime
            }
        }
    }
    render(){

        return(
            <Player
                className="player"
                playsInline
                ref={(player) => { this.player = player }}
                src={this.props.src}
            >
                <ControlBar autoHide={true}>
                    <ReplayControl seconds={10} order={2.2} />
                    <ForwardControl seconds={10} order={3.2} />
                    <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.25]} />
                </ControlBar>
            </Player>
        )
    }
}
