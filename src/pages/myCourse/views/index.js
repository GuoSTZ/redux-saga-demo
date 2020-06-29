import React from 'react'
import { List, Card, Affix, Button } from 'antd';
import { Link } from 'react-router-dom'

import './index.less'

const { Meta } = Card;

export default class MyCourse extends React.Component{
    componentDidMount(){
        const { actions } = this.props
        actions.fetchMyCourseMessage({userId: this.props.user.id});
    }
    render(){
        const { reducer: {myCourseMessage} } = this.props
        return(
            <section id='myCourse'>
                <List
                    grid={{ gutter: 12, column: 4 }}
                    dataSource={myCourseMessage}
                    renderItem={item => (
                        <List.Item style={{marginTop: '40px'}}>
                            <Link to={`/coursePage`} onClick={()=>{sessionStorage.setItem('courseId', item.id)}}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt="video"
                                            width={272}
                                            height={168}
                                            src={item.coverUrl}
                                        />
                                    }
                                >
                                    <Meta title={item.name} description={item.teacherName} />
                                </Card>
                            </Link>
                        </List.Item>
                    )}
                />
            </section>
        )
    }
}