import React from 'react'
import { List, Card, Affix, Button } from 'antd';
import { actionChannel } from 'redux-saga/effects';
import moment from 'moment';

const { Meta } = Card;

export default class MyWork extends React.Component{
    componentDidMount(){
        const {actions} = this.props
        let user = null
        if(sessionStorage.getItem('user') !== null){
            user = JSON.parse(sessionStorage.getItem('user'))
        }
        actions.fetchMyWork({teacherId: user.id})
    }
    render(){
        const { reducer: {myWork} } = this.props
        return(
            <div>
                <List
                    grid={{ gutter: 12, column: 4 }}
                    dataSource={myWork}
                    renderItem={item => (
                    <List.Item style={{marginTop: '40px'}}>
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
                            <Meta title={item.name} description={moment(item.date).format("YYYY-MM-DD")} />
                        </Card>
                    </List.Item>
                    )}
                />
            </div>
        )
    }
}