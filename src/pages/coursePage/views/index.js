import React from 'react'
import Header from '../../../components/header/index'
import Footer from '../../../components/footer/index'
import { Link } from 'react-router-dom';
import { Button, Rate, Tabs, List, Empty, Avatar, Divider } from 'antd'
import { 
    PlayCircleOutlined,
    UserOutlined
} from '@ant-design/icons';
import './index.less'

const { TabPane } = Tabs;

export default class CoursePage extends React.Component{
    callback(key) {
        console.log(key);
    }
    purchase = () => {
        const {actions} = this.props
        console.log(this.props)
        actions.purchase();
    }
    render(){
        const courseCatalog = [
            {
                level: '初级课程',
                courseData: [
                    {id: 1, name: '三节棍教学视频VIP课程'},
                    {id: 2, name: '三节棍教学视频基础课程'},
                    {id: 3, name: '三节棍教学视频进阶课程'},
                    {id: 4, name: '三节棍教学视频免费课程'},
                    {id: 5, name: '三节棍教学视频视频课程'}
                ]
            },
            {
                level: '高级课程',
                courseData: [
                    {id: 6, name: '三节棍教学视频VIP课程'},
                    {id: 7, name: '三节棍教学视频基础课程'},
                    {id: 8, name: '三节棍教学视频进阶课程'},
                    {id: 9, name: '三节棍教学视频免费课程'},
                    {id: 10, name: '三节棍教学视频视频课程'}
                ]
            }
        ]
        const otherCourseData = [
            {
                id: 11,
                name: '三节棍教学视频',
            },
            {
                id: 12,
                name: '三节棍教学视频',
            },
            {
                id: 13,
                name: '三节棍教学视频',
            },
            {
                id: 14,
                name: '三节棍教学视频',
            },
            {
                id: 15,
                name: '三节棍教学视频',
            },
        ]
        return(
            <section id='coursePage'>
                <Header 
                    user={{src:''}}
                />
                <main>
                    <section className='courseDetail'>
                        <section className='container'>
                            <section className='courseImgUrl'>
                                <img src='http://guostz.gitee.io/graduationprojectresource/resource/images/coursePage/1.jpg'/>
                            </section>
                            <section className='courseDetailMessage'>
                                <h2>【今日特惠】三节棍教学视频三节棍教学视频三节棍教学视频三节棍教学视频三节棍教学视频三节棍教学视频</h2>
                                <p>此处为课程的简介和说明</p>
                                <section className='price'>
                                    ￥99.00
                                </section>
                                <section className='rate'>
                                    学员评分：<Rate disabled allowHalf  defaultValue={3.5} />
                                </section>
                                <Button type='primary' onClick={this.purchase}>立即购买</Button>
                            </section>
                        </section>
                    </section>
                    <section className='courseContent'>
                        <section className='catalog'>
                            <Tabs defaultActiveKey="1" onChange={this.callback}>
                                <TabPane tab="课程资源" key="1">
                                    {courseCatalog.map((item, index) => (
                                        <List
                                            key={index}
                                            size="small"
                                            header={
                                                <div style={{color: '#000', fontSize: 18}}>{item.level}</div>
                                            }
                                            bordered
                                            split={false}
                                            dataSource={item.courseData}
                                            renderItem={(item, index) => (
                                                <Link to={`/videoPage`} onClick={()=>{sessionStorage.setItem('videoId', item.id)}}>
                                                    <List.Item 
                                                        key={index}
                                                        extra={
                                                            <section>
                                                                <PlayCircleOutlined style={{fontSize: 16, marginRight: 8}}/>
                                                                12:05:12
                                                            </section>
                                                        }
                                                    >
                                                            {item.name}
                                                    </List.Item>
                                                </Link>
                                            )}
                                        />
                                    ))}
                                </TabPane>
                                <TabPane tab="课程介绍" key="2" >
                                    <Empty style={{height: 200,paddingTop: 50}} />
                                </TabPane>
                            </Tabs>
                        </section>
                        <section className='other'>
                            <section className='teacher'>
                                <h2>授课教师</h2>
                                <Divider style={{margin: '12px 0'}}/>
                                <section style={{textAlign: 'center'}}>
                                    <Avatar size={80} icon={<UserOutlined />} />
                                </section>
                                <section style={{textAlign: 'center'}}>
                                    <span> 小王老师 </span>
                                    <span> 资深用户 </span>
                                </section>
                            </section>
                            <section className='otherCourse'>
                                <List
                                    size="small"
                                    header={
                                        <div style={{color: '#000', fontSize: 18, paddingLeft: 8}}>相关视频</div>
                                    }
                                    // bordered
                                    split={false}
                                    dataSource={otherCourseData}
                                    renderItem={(item, index) => (
                                        <Link to={`/coursePage?courseId=${item.id}`}>
                                            <List.Item 
                                                key={index}
                                                extra={
                                                    <section>
                                                        <PlayCircleOutlined style={{fontSize: 16}}/>
                                                    </section>
                                                }
                                            >
                                                    {item.name}
                                            </List.Item>
                                        </Link>
                                    )}
                                />
                            </section>
                        </section>
                    </section>
                </main>
                <Footer />
            </section>
        )
    }
}