import './video-react.css'
import React from 'react';
import { Player, ControlBar, ForwardControl, ReplayControl, PlaybackRateMenuButton } from 'video-react';
import './index.less'

export default class Video extends React.Component{
    componentDidMount(){
        // this.player.playbackRate = 1; // 初始化视频播放速率
    }
    render(){
        return(
            <Player
                className="player"
                playsInline
                ref={(player) => { this.player = player }}
                src="https://ugccsy.qq.com/uwMROfz2r5zAoaQXGdGnC2dfDma7NyshNhpHvcEisM-VRrjn/e0500qi899x.mp4?sdtfrom=v1010&guid=ac31bee93e12fa0f59c263d738d05119&vkey=1AF5DA89894B72B2E7F88FC77037E04922EC2F9568C0EAA69C45FEAAA489259CB8CA9B2BC109F5EF623C486FF4345B9AB6C8CA10467BAE5F25C032B90B0BA68299C55BCD1709E259E449AB52991BB45E1FBBE4E1718604390F46F6A5799DD40BC2BD536E3187441D20E27614B1F1B1E4DBF76741F5F5565A82EAE5E8BD75A723"
            >
                <ControlBar autoHide={true}>
                    <ReplayControl seconds={10} order={2.2} />
                    <ForwardControl seconds={10} order={3.2} />
                    <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
                </ControlBar>
            </Player>
        )
    }
}
