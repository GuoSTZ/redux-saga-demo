import React from 'react'
import { Comment, Avatar, Input } from 'antd';
import Video from '../../../components/video'
import CourseComment from '../../../components/courseComment'
import CommentEditor from '../../../components/commentEditor'
import Header from '../../../components/header'
import './index.less'


export default class VideoPage extends React.Component{
    componentWillUnmount(){

    }
    render(){
        return (
            <div>
                <Header 
                    user={{src:''}}
                />
                <div id='videoPage'>
                    <div className='title' style={{height: '100px',width: '200px'}}></div>

                    <Video 
                        src='https://guostz.gitee.io/graduationprojectresource/resource/videos/v14test.mp4'
                    />

                    <div className='videoMessage' style={{height: '100px',width: '200px'}}></div>

                    <div className='userModule'>
                        <div className='content' style={{height: '300px'}}>

                            <CourseComment>
                                <CourseComment>
                                    <CommentEditor 
                                        onChange={()=>{console.log('onChange')}}
                                        onSubmit={()=>{console.log('onSubmit')}}
                                        submitting={false}
                                    />
                                </CourseComment>
                            </CourseComment>

                        </div>
                        <div className='ranking'>
                            用来推荐观看次数比较多的视频
                        </div> 
                    </div>
                    <div className='videoMessage' style={{height: '100px',width: '200px'}}></div>
                </div>
            </div>
        )
    }
}