import React from 'react'
import { Link } from 'react-router-dom';
import GpChart from '../../../components/gpChart/index'

import './index.less'

import { Statistic, Collapse, Skeleton, Avatar, Card, Descriptions, List, Tabs } from 'antd';
import { 
    LikeOutlined, 
    HeartOutlined, 
    TeamOutlined, 
    RightOutlined,
    AppleOutlined, 
    AndroidOutlined,
    CaretRightOutlined 
} from '@ant-design/icons';

const { Panel } = Collapse;
const { Meta } = Card;
const { TabPane } = Tabs;

export default class DataCenter extends React.Component{
    state = {
        loading: false,
    };
    
    onChange = checked => {
        this.setState({ loading: !checked });
    };
    renderCardDesc(){
        return(
            <Descriptions>
                <Descriptions.Item label="UID">130009660</Descriptions.Item>
                <Descriptions.Item label="注册时间">2020-4-30</Descriptions.Item>
                <Descriptions.Item><Link to="/personalCenter/">前往个人中心<RightOutlined /></Link></Descriptions.Item>
            </Descriptions>
        )
    }
    render(){
        const item = {
            courseName: '三节棍教学视频',
            teacher: '小王老师'
        }
        let listData = []
        for(let i=0; i<10; i++){
            listData.push(item)
        }
        const pieOption2 = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}：{c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 10,
                data: ['普通视频展示', '通用课程', '进阶课程', '录播']
            },
            series: [
                {
                    name: '视频总数',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
        
                    label: {
                        position: 'inner'
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 4, name: '个人作品'},
                        {value: 3, name: '教学作品'},
                    ]
                },
                {
                    name: '视频总数',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 22,
                                align: 'center'
                            },
                            // abg: {
                            //     backgroundColor: '#333',
                            //     width: '100%',
                            //     align: 'right',
                            //     height: 22,
                            //     borderRadius: [4, 4, 0, 0]
                            // },
                            hr: {
                                borderColor: '#aaa',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                fontSize: 16,
                                lineHeight: 33
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    },
                    data: [
                        {value: 4, name: '普通视频展示'},
                        {value: 1, name: '通用课程'},
                        {value: 1, name: '进阶课程'},
                        {value: 1, name: '录播'},
                    ]
                }
            ]
        }
        // 获取数据库存在的一个月的数据
        const lineOption = {
            title: {
                text: '30天内粉丝数量变化图',
                left: 'center',
                top: 8,
                textStyle: {
                    color: '#000'
                }
            },
            xAxis: {
                name: '日期',
                type: 'category',
                // 此处将根据数据库中返回的数据来定义
                data: [
                    '4.2', '4.3', '4.4', '4.5', '4.6', '4.7','4.8', 
                    '4.9', '4.10', '4.11', '4.12', '4.13', '4.14', '4.15', 
                    '4.16', '4.17', '4.18', '4.19', '4.20', '4.21', '4.22', 
                    '4.23', '4.24', '4.25', '4.26', '4.27', '4.28', '4.29', 
                    '4.30', '5.1'
                ] 
            },
            yAxis: {
                name: '粉丝数量',
                type: 'value'
            },
            // 提示框
            tooltip: {
                trigger: 'axis',                    // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
                formatter: '日期：{b} <br/>粉丝数量：{c}',
                
                showDelay: 20,                      // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
                hideDelay: 100,                     // 隐藏延迟，单位ms
                transitionDuration : 0.4,           // 动画变换时间，单位s
                backgroundColor: 'rgba(0,0,0,0.7)', // 提示背景颜色，默认为透明度为0.7的黑色
                borderColor: '#333',                // 提示边框颜色
                borderRadius: 4,                    // 提示边框圆角，单位px，默认为4
                borderWidth: 0,                     // 提示边框线宽，单位px，默认为0（无边框）
                padding: 5,                         // 提示内边距，单位px，默认各方向内边距为5，
                                                    // 接受数组分别设定上右下左边距，同css
                axisPointer : {                     // 坐标轴指示器，坐标轴触发有效
                    type : 'line',                  // 默认为直线，可选为：'line' | 'shadow'
                    lineStyle : {                   // 直线指示器样式设置
                        color: '#48b',
                        width: 2,
                        type: 'solid'
                    },
                    shadowStyle : {                 // 阴影指示器样式设置
                        width: 'auto',              // 阴影大小
                        color: 'rgba(150,150,150,0.3)'  // 阴影颜色
                    }
                },
                textStyle: {
                    color: '#fff'
                }
            },
            series: [{
                // 此处将根据数据库中返回的数据来定义
                data: [
                    12, 15, 18, 22, 26, 20, 32,
                    36, 28, 36, 39, 48, 50, 60,
                    36, 28, 36, 39, 48, 50, 60,
                    36, 28, 36, 39, 48, 50, 60,
                    66, 80
                ],
                type: 'line'
            }]
        };
        const lineOption2 = {
            title: {
                text: '15天内视频点赞总数变化图',
                left: 'center',
                top: 8,
                textStyle: {
                    color: '#000'
                }
            },
            xAxis: {
                name: '日期',
                type: 'category',
                // 此处将根据数据库中返回的数据来定义
                data: [
                    '4.16', '4.17', '4.18', '4.19', '4.20', '4.21', '4.22', 
                    '4.23', '4.24', '4.25', '4.26', '4.27', '4.28', '4.29', 
                    '4.30'
                ] 
            },
            yAxis: {
                name: '粉丝数量',
                type: 'value'
            },
            // 提示框
            tooltip: {
                trigger: 'axis',                    // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
                formatter: '日期：{b} <br/>点赞数：{c}',
                
                showDelay: 20,                      // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
                hideDelay: 100,                     // 隐藏延迟，单位ms
                transitionDuration : 0.4,           // 动画变换时间，单位s
                backgroundColor: 'rgba(0,0,0,0.7)', // 提示背景颜色，默认为透明度为0.7的黑色
                borderColor: '#333',                // 提示边框颜色
                borderRadius: 4,                    // 提示边框圆角，单位px，默认为4
                borderWidth: 0,                     // 提示边框线宽，单位px，默认为0（无边框）
                padding: 5,                         // 提示内边距，单位px，默认各方向内边距为5，
                                                    // 接受数组分别设定上右下左边距，同css
                axisPointer : {                     // 坐标轴指示器，坐标轴触发有效
                    type : 'line',                  // 默认为直线，可选为：'line' | 'shadow'
                    lineStyle : {                   // 直线指示器样式设置
                        color: '#48b',
                        width: 2,
                        type: 'solid'
                    },
                    shadowStyle : {                 // 阴影指示器样式设置
                        width: 'auto',              // 阴影大小
                        color: 'rgba(150,150,150,0.3)'  // 阴影颜色
                    }
                },
                textStyle: {
                    color: '#fff'
                }
            },
            series: [{
                // 此处将根据数据库中返回的数据来定义
                data: [
                    12, 15, 18, 22, 26, 20, 32,
                    36, 28, 36, 39, 48, 50, 60,
                    62
                ],
                type: 'line'
            }]
        };
        const barOption = {
            title: {
                text: '7天内投稿数量变化图',
                left: 'center',
                top: 0,
                textStyle: {
                    color: '#000'
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: '日期：{b} <br/> 投稿数量：{c}'
            },
            angleAxis: {
                type: 'category',
                data: [
                    '4.24', '4.25', '4.26', '4.27', '4.28', '4.29', '4.30'
                ]
            },
            radiusAxis: {
            },
            polar: {
            },
            series: [{
                type: 'bar',
                data: [
                    1, 2, 0, 3, 2, 3, 1
                ],
                coordinateSystem: 'polar',
                stack: 'a'
            }],
        }
        
        return(
            <section id='DataCenter'>
                <section className='totalCount'>
                    <Card
                        style={{ marginTop: 16 }}
                        actions={[
                            <Statistic title="粉丝数" value={1128} prefix={<HeartOutlined style={{color: 'red', fontSize: '14px'}} />} />,
                            <Statistic title="获赞数" value={1128} prefix={<LikeOutlined style={{color: '#F3A034', fontSize: '14px'}} />} />,
                            <Statistic title="关注人数" value={93} prefix={<TeamOutlined style={{color: '#23C9ED', fontSize: '14px'}} />} />,
                        ]}
                    >
                        <Skeleton loading={this.state.loading} avatar active>
                            <Meta
                                avatar={
                                    <Avatar src="http://guostz.gitee.io/graduationprojectresource/resource/images/browsingHistory/群星.jpg" />
                                }
                                title='倾遇'
                                description={this.renderCardDesc()}
                            />
                        </Skeleton>
                    </Card>
                </section>

                <section className='dataShow'>
                    {/* <GpChart option={pieOption} /> */}
                    <GpChart option={pieOption2} />
                </section>

                <section className='container'>
                    <Collapse 
                        accordion  
                        defaultActiveKey={['1']}
                        bordered={false}
                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        className="site-collapse-custom-collapse"
                    >
                        <Panel header="已发布的个人作品" key="1">
                            <List
                                grid={{ gutter: 12, column: 4 }}
                                dataSource={listData}
                                renderItem={item => (
                                <List.Item style={{marginTop: '20px'}}>
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
                        </Panel>
                        <Panel header="已发布的教学视频" key="2">
                            <List
                                grid={{ gutter: 12, column: 4 }}
                                dataSource={listData}
                                renderItem={item => (
                                <List.Item style={{marginTop: '20px'}}>
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
                        </Panel>
                        <Panel header="个人数据月度展示" key="3">
                            <Tabs defaultActiveKey="1">
                                <TabPane
                                    tab={<span><AppleOutlined />粉丝数量</span>}
                                    key="1"
                                >
                                    <GpChart option={ lineOption } />
                                </TabPane>
                                <TabPane
                                    tab={<span><AndroidOutlined />点赞数</span>}
                                    key="2"
                                >
                                    <GpChart option={ lineOption2 } />
                                </TabPane>
                                <TabPane
                                    tab={<span><AndroidOutlined />投稿数</span>}
                                    key="3"
                                >
                                    <GpChart option={ barOption } />
                                </TabPane>
                            </Tabs>
                        </Panel>
                    </Collapse>
                </section>
            </section>
        )
    }
}