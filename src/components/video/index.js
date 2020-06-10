import './video-react.css'
import React from 'react';
import { Player, ControlBar, ForwardControl, ReplayControl, PlaybackRateMenuButton } from 'video-react';
import moment from 'moment'
import { useBeforeunload } from 'react-beforeunload';
import './index.less'

export default class Video extends React.Component{
    state = {
        browsingTime: ''
    }
    componentDidMount(){
        // this.player.playbackRate = 1; // 初始化视频播放速率
        this.player.subscribeToStateChange(this.handleStateChange.bind(this)); // 订阅播放器的状态

        // console.log(moment.duration(2.297967, 'seconds')._milliseconds)
        // console.log(parseInt(2.297967 * 1000))

        // console.log(moment.duration(2297).hours())
        // console.log(moment.duration(2297).minutes())
        // console.log(moment.duration(2297).seconds())
    }

    componentWillUnmount(){
        this.test()
    }

    handleStateChange(state, prevState){
        if( state.hasStarted === true ){
            if(prevState.hasStarted === false){
                this.setState({
                    browsingTime: moment().format('x')
                })
            }
            if( prevState.paused === false && state.paused === true ){ 
                // 当视频暂停时，将视频当前的播放进度存入到数据库中
                let obj = {
                    videoId: parseInt(sessionStorage.getItem('videoId')),
                    userId: JSON.parse(sessionStorage.getItem('user')).id,
                    process: parseInt(state.currentTime * 1000),
                    browsingTime: this.state.browsingTime
                }
                this.props.saveHistory(obj)
            }
        }
    }

    test(){
        const { player } = this.player.getState();
        if( player.hasStarted === true ){
            let obj = {
                videoId: parseInt(sessionStorage.getItem('videoId')),
                userId: JSON.parse(sessionStorage.getItem('user')).id,
                process: parseInt(player.currentTime * 1000),
                browsingTime: this.state.browsingTime
            }
            this.props.saveHistory(obj)
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
