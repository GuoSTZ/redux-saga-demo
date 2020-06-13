import React from 'react'
import { Player, ControlBar, ForwardControl, ReplayControl, PlaybackRateMenuButton, BigPlayButton } from 'video-react';
import Header from '../../../components/header/index'
import Footer from '../../../components/footer/index'
import './index.less'

export default class PoseEstimation extends React.Component{
    state = {
        rate: 1, // 两段视频的速率比
        seeking: false, // 是否出现拖拽进度条的行为
    }
    componentDidMount(){
        console.log(this)
        // this.player.playbackRate = 1; // 初始化视频播放速率
        this.player_teacher.subscribeToStateChange(this.handleStateChange1.bind(this)); // 订阅播放器的状态
        this.player_student.subscribeToStateChange(this.handleStateChange2.bind(this)); // 订阅播放器的状态
        console.log(this.player_teacher)
    }

    handleStateChange1(state, prevState){
        
        if( state.hasStarted === true ){
            if(prevState.hasStarted === false){
                this.setState({
                    teacherDuration: state.duration, 
                })
            }
            if( prevState.paused === false && state.paused === true ){ 
                // 当视频暂停时，将视频当前的播放进度存入到数据库中
                
            }
        }
        // 暂停时
        if( prevState.paused === false && state.paused === true ){ 
            this.player_student.pause()
        }
        // 开始时
        if( prevState.paused === true && state.paused === false ){ 
            this.player_student.play()
        }
        // 当用户拖拽进度条时--此方法并不能足够实时完成功能需求，会存在一定的延迟才达到效果
        if( prevState.seeking === false && state.seeking === true ){
            this.setState({
                seeking: true,
                teacherCurrentTime: state.currentTime,
            })
        }
    }
    handleStateChange2(state, prevState){
        // 根据学生视频的进度条变化来变化
        if(this.state.seeking === true){
            let teacherCurrentTime = this.state.teacherCurrentTime
            this.player_student.seek(teacherCurrentTime * this.state.rate )
            // 重置拖拽状态
            this.setState({
                seeking: false
            })
        }
        if( state.hasStarted === true ){
            if(prevState.hasStarted === false){
                // 设定播放倍速
                this.player_student.playbackRate = state.duration / parseFloat(this.state.teacherDuration);
                this.setState({
                    rate: state.duration / parseFloat(this.state.teacherDuration)
                })
            }
            if( prevState.paused === false && state.paused === true ){ 
                // 当视频暂停时，将视频当前的播放进度存入到数据库中
                
            }
        }
    }

    render(){
        return(
            <section id='poseEstimation'>
                <Header user={{src: ''}} />
                <main>

                    <section>
                        <h2>教师视频</h2>
                        <section>
                            <Player
                                className="player"
                                playsInline
                                ref={(player) => { this.player_teacher = player }}
                                src={"./resources/videos/personal/10000002/10000002.mp4"}
                            >
                                <BigPlayButton position="center" />
                                <ControlBar autoHide={true}>
                                    <ReplayControl seconds={10} order={2.2} />
                                    <ForwardControl seconds={10} order={3.2} />
                                    <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.25]} />
                                </ControlBar>
                            </Player>
                        </section>
                    </section>
                    <section>
                        <h2>我的视频</h2>
                        <section style={{position: 'relative'}}>
                            <Player
                                className="teacherPlayer"
                                playsInline
                                ref={(player) => { this.player_student = player }}
                                src={"./resources/videos/personal/10000003/10000003.mp4"}
                            >
                                <BigPlayButton position="center" />
                            </Player>
                            <section className='mask'></section>
                        </section>
                    </section>
                </main>
                <section className='considerations'>
                    <h2>注意事项</h2>
                </section>
                <Footer />
            </section>
        )
    }
}