import React from 'react'
import { Avatar, List, Typography, Statistic, Space, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { 
    UserOutlined,
    LikeOutlined,
    QqOutlined,
    WechatOutlined,
    WeiboOutlined,
    FacebookOutlined,
    HeartOutlined,
    FireOutlined,
} from '@ant-design/icons';
import './index.less'

import moment from 'moment';

const {Paragraph} = Typography
const dateFormat = 'YYYY-MM-DD';

export default class PersonalPage extends React.Component{
    state = {
        autograph: ''
    }
    componentDidMount(){
        console.log(sessionStorage)
    }

    onChange = str => {
        const {actions} =this.props
        if(str === ''){
            str = '此用户很懒，暂时还没有留下自己的说明'
        }
        this.setState({
            autograph: str
        })
        actions.changeAutograph(Object.assign({}, JSON.parse(sessionStorage.getItem('user')), {autograph: str}))
        console.log(sessionStorage, '****')
    };

    render(){
        const data = [
            {
              title: 'Ant Design Title 1',
            },
            {
              title: 'Ant Design Title 2',
            },
            {
              title: 'Ant Design Title 3',
            },
            {
              title: 'Ant Design Title 4',
            },
        ];
        let user = null
        if(sessionStorage.getItem('user') !== null){
            user = JSON.parse(sessionStorage.getItem('user'))
        }
        const {reducer: {loginMessage}} = this.props
        return(
            <section id='personalPage'>

                <Header user={user} />

                <main>
                    <section className='user'>
                        <Avatar size={100} src={user.avatarUrl} icon={<UserOutlined />}/>
                        <section style={{marginLeft: 150, width: '50%'}}>
                            <p>{user.name}</p>
                            <p>{ '资深用户' || null }</p>
                            <Paragraph editable={{ onChange: this.onChange }}>
                              {this.state.autograph || user.autograph || '此用户很懒，暂时还没有留下自己的说明'}
                            </Paragraph>
                        </section>
                        <section className='registerTime'>注册时间： {moment(user.registerTime).format(dateFormat)}</section>
                        <section className='share'>
                            分享用户到：
                            <Space>
                                <QqOutlined style={{fontSize: 18, }}/>
                                <WechatOutlined style={{fontSize: 18, color: 'rgb(0, 181, 0)'}}/>
                                <WeiboOutlined style={{fontSize: 18, color: 'rgb(236, 1, 26)'}}/>
                                <FacebookOutlined style={{fontSize: 18, color: 'rgb(72, 98, 163)'}}/>
                            </Space>
                        </section>
                    </section>

                    <section className='container'>
                        <section className='dynamic'>
                            <section className='courses'>
                                <section>
                                    <List
                                        itemLayout="horizontal"
                                        header={<div style={{fontSize: 16, fontWeight: 600}}>发布的课程</div>}
                                        dataSource={data}
                                        split={false}
                                        renderItem={item => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={<Avatar style={{width: '48px',height: '27px'}} shape='square' src="http://guostz.gitee.io/graduationprojectresource/resource/images/browsingHistory/群星.jpg" />}
                                                    title={<a href="https://ant.design">{item.title}</a>}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </section>
                                <section>
                                    <List
                                        itemLayout="horizontal"
                                        header={<div style={{fontSize: 16, fontWeight: 600}}>观看的课程</div>}
                                        dataSource={data}
                                        split={false}
                                        renderItem={item => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={<Avatar style={{width: '48px',height: '27px'}} shape='square' src="http://guostz.gitee.io/graduationprojectresource/resource/images/browsingHistory/群星.jpg" />}
                                                    title={<a href="https://ant.design">{item.title}</a>}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </section>
                            </section>
                            <section className='comments'>
                                <List
                                    header={<div style={{fontSize: 16, fontWeight: 600}}>个人评论</div>}
                                    bordered
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item>
                                            <Typography.Text mark>[精品]</Typography.Text> 
                                            <Link to={`/personalPage?account=${user.account}`}> {user.name}</Link> 在&nbsp;
                                            <Link to={`/coursePage`}>xxx课程</Link> 下的评论  
                                            2020/5/18
                                            <section className='content'>
                                                发出的评论发出的评论
                                            </section>
                                            <section>
                                                <span>回复</span> 12
                                            </section>
                                        </List.Item>
                                    )}
                                />
                            </section>
                        </section>
                        <section className='dataShow'>
                            <section className='like'>
                                <section>
                                    <Statistic title="粉丝数" value={1128} prefix={<HeartOutlined style={{fontSize: 18}} />}/>
                                </section>
                                <section>
                                    <Statistic title="点赞数" value={1128} prefix={<LikeOutlined style={{fontSize: 18}} />} />
                                </section>
                                <section>
                                    <Statistic title="评论数" value={1128} prefix={<FireOutlined style={{fontSize: 18}} />} />
                                </section>
                            </section>

                            <section className='vistor'>
                                <section style={{fontSize: 16}}>当月有xx人来浏览</section>
                                <section>
                                    <Row gutter={8}>
                                        <Col className="gutter-row" span={4}>
                                            <div><Avatar shape='square' style={{ backgroundColor: '#87d068', marginTop: 8 }} icon={<UserOutlined />} /></div>
                                        </Col>
                                        <Col className="gutter-row" span={4}>
                                            <div><Avatar shape='square' style={{ backgroundColor: '#87d068', marginTop: 8 }} icon={<UserOutlined />} /></div>
                                        </Col>
                                        <Col className="gutter-row" span={4}>
                                            <div><Avatar shape='square' style={{ backgroundColor: '#87d068', marginTop: 8 }} icon={<UserOutlined />} /></div>
                                        </Col>
                                        <Col className="gutter-row" span={4}>
                                            <div><Avatar shape='square' style={{ backgroundColor: '#87d068', marginTop: 8 }} icon={<UserOutlined />} /></div>
                                        </Col>
                                        <Col className="gutter-row" span={4}>
                                            <div><Avatar shape='square' style={{ backgroundColor: '#87d068', marginTop: 8 }} icon={<UserOutlined />} /></div>
                                        </Col>
                                        <Col className="gutter-row" span={4}>
                                            <div><Avatar shape='square' style={{ backgroundColor: '#87d068', marginTop: 8 }} icon={<UserOutlined />} /></div>
                                        </Col>
                                        <Col className="gutter-row" span={4}>
                                            <div><Avatar shape='square' style={{ backgroundColor: '#87d068', marginTop: 8 }} icon={<UserOutlined />} /></div>
                                        </Col>
                                        <Col className="gutter-row" span={4}>
                                            <div><Avatar shape='square' style={{ backgroundColor: '#87d068', marginTop: 8 }} icon={<UserOutlined />} /></div>
                                        </Col>
                                        <Col className="gutter-row" span={4}>
                                            <div><Avatar shape='square' style={{ backgroundColor: '#87d068', marginTop: 8 }} icon={<UserOutlined />} /></div>
                                        </Col>
                                        <Col className="gutter-row" span={4}>
                                            <div><Avatar shape='square' style={{ backgroundColor: '#87d068', marginTop: 8 }} icon={<UserOutlined />} /></div>
                                        </Col>
                                    </Row>
                                </section>
                            </section>

                        </section>
                    </section>



                </main>

                <Footer></Footer>
                
            </section>
        )
    }
}