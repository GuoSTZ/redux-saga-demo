import React from 'react'
import { List, Card, Affix, Button } from 'antd';
import { Link } from 'react-router-dom'

const { Meta } = Card;

export default class MyCourse extends React.Component{
    componentDidMount(){
        const { actions } = this.props
        actions.fetchMyCourseMessage({userId: this.props.user.id});
    }
    render(){
        const data = [
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
        ];
        const { reducer: {myCourseMessage} } = this.props
        console.log(myCourseMessage, '*****')
        return(
            <div>
                <List
                    grid={{ gutter: 12, column: 4 }}
                    dataSource={myCourseMessage}
                    renderItem={item => (
                        <Link to={`/coursePage`} onClick={()=>{sessionStorage.setItem('courseId', item.id)}}>
                            <List.Item style={{marginTop: '40px'}}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt="video"
                                            src={item.coverUrl}
                                        />
                                    }
                                >
                                    <Meta title={item.name} description={item.teacherName} />
                                </Card>
                            </List.Item>
                        </Link>
                    )}
                />
            </div>
        )
    }
}