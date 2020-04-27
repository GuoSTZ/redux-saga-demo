import React from 'react'
import { List, Card, Affix, Button } from 'antd';
import Header from '../../../components/header/index'

import './index.less'

const { Meta } = Card;

export default class HomePage extends React.Component{
    componentDidMount(){

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
            }
        ];
        return(
            <div id='homePage'>
                <Header 
                    user={{src:''}}
                />

                <div className='container'>
                    <div className='nav'>
                        <Affix offsetTop={100}>
                            <div>
                                66
                            </div>
                        </Affix>
                    </div>
                    <div className='courses'>
                        <List
                            grid={{ gutter: 16, column: 4 }}
                            dataSource={data}
                            header={<div>VIP课程</div>}
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
                </div>
            </div>
        )
    }
}