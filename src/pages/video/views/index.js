import React from 'react'
import { Comment, Avatar, Input } from 'antd';
import Video from '../../../components/video'
import CourseComment from '../../../components/courseComment'
import Header from '../../../components/header'
import './index.less'


export default class VideoPage extends React.Component{
    componentDidMount(){
        const { actions, history } = this.props
        actions.fetchComments({id: 1});
        // history.push('/personalCenter')
    }
    componentWillUnmount(){
        
    }
    renderChildComment(array){
        return array.map(item=>(
            <CourseComment commentOption={item} key={item.id}>
            </CourseComment>
        ))
    }
    render(){
        const { reducer: { comments } } = this.props
        return (
            <div>
                <Header 
                    user={{src:''}}
                />
                <div id='videoPage'>
                    <div className='title' style={{height: '100px',width: '200px'}}></div>

                    <Video 
                        src='http://guostz.gitee.io/graduationprojectresource/resource/videos/v14test.mp4'
                    />

                    <div className='videoMessage' style={{height: '100px',width: '200px'}}></div>

                    <div className='userModule'>
                        <div className='content'>
                            {console.log(comments)}
                            {
                                comments !== undefined && comments.map((item, index) => (
                                    <CourseComment commentOption={item} key={index}>
                                        {
                                            item.userReplyList !== undefined ?  this.renderChildComment(item.userReplyList) : null
                                        }
                                    </CourseComment>
                                ))
                            }
                            {/* <CourseComment>
                                <CourseComment>
                                </CourseComment>
                            </CourseComment>

                            <CourseComment>
                                <CourseComment>
                                </CourseComment>
                                <CourseComment>
                                </CourseComment>
                                <CourseComment>
                                </CourseComment>
                                <CourseComment>
                                </CourseComment>
                                <CourseComment>
                                </CourseComment>
                            </CourseComment> */}

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