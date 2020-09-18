import React from 'react'
import { List, Card } from 'antd'
import { Player, ControlBar, ForwardControl, ReplayControl, PlaybackRateMenuButton, BigPlayButton } from 'video-react';
import Header from '../../../components/header/index'
import Footer from '../../../components/footer/index'
import './index.less'

const bonesData = [
    // {
    //   title: '上半身',
    // },
    // {
    //   title: '下半身',
    // },
    {
      title: '脖子与右肩',
    },
    {
      title: '脖子与左肩',
    },
    {
      title: '右肩与右手臂',
    },
    {
      title: '右手肘',
    },
    {
        title: '左肩与左手臂',
    },
    {
        title: '左手肘',
    },
    {
        title: '躯干与右臀',
    },
    {
        title: '躯干与左臀',
    },
    {
        title: '中臀与右腿',
    },
    {
        title: '右腿膝盖',
    },
    {
        title: '右腿脚踝',
    },
    {
        title: '中臀与左腿',
    },
    {
        title: '左腿膝盖',
    },
    {
        title: '左腿脚踝',
    },
];



export default class PoseEstimation extends React.Component{
    state = {
        rate: 1, // 两段视频的速率比
        seeking: false, // 是否出现拖拽进度条的行为
    }
    componentDidMount(){
        const { actions } = this.props
        // this.player.playbackRate = 1; // 初始化视频播放速率
        this.player_teacher.subscribeToStateChange(this.handleStateChange1.bind(this)); // 订阅播放器的状态
        this.player_student.subscribeToStateChange(this.handleStateChange2.bind(this)); // 订阅播放器的状态
        // actions.fetchTeacherVideo({ courseId: parseInt(sessionStorage.getItem('courseId')) })
        // actions.fetchStudentVideo({ courseId: parseInt(sessionStorage.getItem('courseId')), userId: JSON.parse(sessionStorage.getItem('user')).id })
        actions.fetchDeviation({
            courseId: parseInt(sessionStorage.getItem('courseId')),
            userId: JSON.parse(sessionStorage.getItem('user')).id
        })
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
        let user = null;
        if(sessionStorage.getItem('user') !== null){
            user = JSON.parse(sessionStorage.getItem('user'))
        }
        const { reducer: {teacherVideo, studentVideo, deviation} } = this.props
        return(
            <section id='poseEstimation'>
                <Header user={user} />
                <main>

                    <section>
                        <h2>教师视频</h2>
                        <section>
                            <Player
                                className="player"
                                playsInline
                                ref={(player) => { this.player_teacher = player }}
                                src={teacherVideo[0].videoResUrl}
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
                                src={studentVideo.videoResUrl}
                            >
                                <BigPlayButton position="center" />
                            </Player>
                            <section className='mask'></section>
                        </section>
                    </section>
                </main>
                <section className='considerations'>
                    <h2>整体偏差值显示</h2>
                    <List
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 4,
                            lg: 4,
                            xl: 6,
                            xxl: 3,
                        }}
                        dataSource={bonesData}
                        renderItem={(item, index) => (
                        <List.Item>
                            <Card title={item.title}>{deviation[index]}</Card>
                        </List.Item>
                        )}
                    />
                </section>
                <Footer />
            </section>
        )
    }
}