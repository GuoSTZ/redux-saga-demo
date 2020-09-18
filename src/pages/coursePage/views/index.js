import React from 'react'
import Header from '../../../components/header/index'
import Footer from '../../../components/footer/index'
import { Link } from 'react-router-dom';
import { Button, Rate, Tabs, List, Empty, Avatar, Divider, Typography, notification } from 'antd'
import { 
    PlayCircleOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './index.less'

const { TabPane } = Tabs;
const { Text } = Typography;

const courseLevel = [
    {
        value: 1,
        label: '初级课程'
    },
    {
        value: 2,
        label: '高级课程'
    },
]

export default class CoursePage extends React.Component{
    componentDidMount(){
        const { actions } = this.props
        // 获取课程信息
        actions.fetchCourseMessage({ id: parseInt(sessionStorage.getItem('courseId')) });
        // 获取用户与该课程之间的关系
        actions.fetchCourseStatus({
            userId: JSON.parse(sessionStorage.getItem('user')).id,
            courseId: parseInt(sessionStorage.getItem('courseId')),
        });
        // 获取该课程下的视频
        actions.fetchNewVideoMessageByCourseId({courseId: parseInt(sessionStorage.getItem('courseId'))})
    }
    callback(key) {
        console.log(key);
    }
    purchase = () => {
        // const newWindow = window.open("http://192.168.43.119:8088/alipay/alipay", "_blank");
        const newWindow = window.open(
            `http://localhost:8088/alipay/alipay?userId=${JSON.parse(sessionStorage.getItem('user')).id}&courseId=${sessionStorage.getItem('courseId')}`, "_self"
        );
        newWindow.focus();
    }
    renderAuthority(authority){
        // 使用==，进行隐式转换，方便处理字符串和number类型的比较
        if(authority == 0){
            return '管理员'
        }
        if(authority == 2){
            return '资深教师'
        }
    }
    // 通知消息框
    openNotification = () => {
        notification.warning({
            message: <h3>{'购买提醒'}</h3>,
            description: '您尚未购买该课程，无法观看该课程下的教学视频，请购买后再进行操作',
            placement: 'topLeft',
            top: 100,
        //   onClick: () => {
        //     console.log('测试测试');
        //   },
        });
    };
    videoItemClick = (videoId) => {
        const { reducer: { courseStatus } } = this.props
        // 当课程状态不为true，即用户没有购买该课程时
        if( courseStatus !== true ){
            this.openNotification()
            return
        }
        sessionStorage.setItem('videoId', videoId) // 存储videoId，下一个页面进行使用
        this.props.history.push('/videoPage')
    }
    renderCourseLevel = (level) => {
        for(let item of courseLevel){
            if(item.value === level){
                return item.label
            }
        }
    }
    render(){
        const { reducer: { courseMessage, courseStatus, newVideoMessage } } = this.props
        // 取出sessionStorage中的user对象
        let user = null
        if(sessionStorage.getItem('user') !== null){
            user = JSON.parse(sessionStorage.getItem('user'))
        }
        const courseCatalog = [
            {
                level: '初级课程',
                courseData: [
                    {id: 1, name: '三节棍教学视频VIP课程'},
                ]
            },
            {
                level: '高级课程',
                courseData: []
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

        console.log(newVideoMessage, 'newVideoMessage')

        return(
            <section id='coursePage'>
                <Header 
                    user={user}
                />
                <main>
                    <section className='courseDetail'>
                        <section className='container'>
                            <section className='courseImgUrl'>
                                <img src={courseMessage.coverUrl}/>
                            </section>
                            <section className='courseDetailMessage'>
                                <h2>【今日特惠】{courseMessage.name}</h2>
                                <p>{courseMessage.introduction}</p>
                                <section className='price'>
                                    <Text>￥{(courseMessage.price * courseMessage.discount).toFixed(2)}</Text>
                                    <Text delete>￥{courseMessage.price.toFixed(2)}</Text>
                                </section>
                                <section className='rate'>
                                    学员评分：<Rate disabled allowHalf defaultValue={3.5} />
                                </section>
                                {
                                    user.id === courseMessage.teacherId ? (
                                        <Button type='danger'>已发布</Button>
                                    ) : courseStatus ? (
                                        <Button type='danger'>已购买</Button>
                                    ) : (
                                        <Button type='primary' onClick={this.purchase}>立即购买</Button>
                                    )
                                }
                            </section>
                        </section>
                    </section>
                    <section className='courseContent'>
                        <section className='catalog'>
                            <Tabs defaultActiveKey="1" onChange={this.callback}>
                                <TabPane tab="课程资源" key="1">
                                    <List
                                        size="small"
                                        header={
                                            <div style={{color: '#000', fontSize: 18}}>
                                                {"初级课程"}
                                            </div>
                                        }
                                        bordered
                                        split={false}
                                        dataSource={newVideoMessage}
                                        renderItem={(item, index) => (
                                            <section to={`/videoPage`} onClick={() => this.videoItemClick(item.id)}>
                                                <List.Item 
                                                    key={index}
                                                    extra={
                                                        <section>
                                                            <PlayCircleOutlined style={{fontSize: 16, marginRight: 8}}/>
                                                        </section>
                                                    }
                                                >
                                                        {item.name}
                                                </List.Item>
                                            </section>
                                        )}
                                    />

                                    <List
                                        size="small"
                                        header={
                                            <div style={{color: '#000', fontSize: 18}}>
                                                {"高级课程"}
                                            </div>
                                        }
                                        bordered
                                        split={false}
                                        dataSource={[]}
                                        renderItem={(item, index) => (
                                            <section to={`/videoPage`} onClick={() => this.videoItemClick(item.id)}>
                                                <List.Item 
                                                    key={index}
                                                    extra={
                                                        <section>
                                                            <PlayCircleOutlined style={{fontSize: 16, marginRight: 8}}/>
                                                        </section>
                                                    }
                                                >
                                                        {item.name}
                                                </List.Item>
                                            </section>
                                        )}
                                    />
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
                                    <Avatar size={80} icon={<UserOutlined />} src={courseMessage.teacherAvatarUrl}/>
                                </section>
                                <section style={{textAlign: 'center'}}>
                                    <span> {courseMessage.teacherName} </span>
                                    <span> 
                                        {this.renderAuthority(courseMessage.authority)} 
                                    </span>
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