import React from 'react'
import { List, Card, Affix, Button } from 'antd';

const { Meta } = Card;

export default class MyWork extends React.Component{
    componentDidMount(){
        console.log( this )
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
        ];
        return(
            <div>
                <List
                    grid={{ gutter: 12, column: 4 }}
                    dataSource={data}
                    renderItem={item => (
                    <List.Item style={{marginTop: '40px'}}>
                        <Card
                            hoverable
                            cover={
                                <img
                                alt="video"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                        >
                            <Meta title={item.courseName} description={item.teacher} />
                        </Card>
                    </List.Item>
                    )}
                />
            </div>
        )
    }
}