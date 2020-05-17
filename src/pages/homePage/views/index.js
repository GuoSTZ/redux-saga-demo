import React from 'react'
import { List, Card, Anchor, BackTop, Tooltip, Carousel } from 'antd';
import { Link as RouterLink } from 'react-router-dom';
import Header from '../../../components/header/index'
import Footer from '../../../components/footer/index'
import moment from 'moment'
import { 
    RightOutlined,
} from '@ant-design/icons';

import './index.less'

const { Meta } = Card;
const { Link } = Anchor;

// 轮播图图片资源
const swiperImgUrl = [
    'http://guostz.gitee.io/graduationprojectresource/resource/images/homePage/1.jpg',
    'http://guostz.gitee.io/graduationprojectresource/resource/images/homePage/1.jpg',
    'http://guostz.gitee.io/graduationprojectresource/resource/images/homePage/1.jpg',
    'http://guostz.gitee.io/graduationprojectresource/resource/images/homePage/1.jpg',
]

export default class HomePage extends React.Component{
    componentDidMount(){

    }
    render(){
        const data = [
            {
                id: 1,
                label: 'VIP课程',
                type: 'VIP',
                courseData: [
                    {
                        id: 100001,
                        courseName: '三节棍教学视频三节棍教学视频三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100002,
                        courseName: '三节棍教学视频',
                        username: '非常骄傲的小李老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100003,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100004,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100005,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100006,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100007,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100008,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100009,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000010,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000011,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000012,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000013,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    }
                ]
            },
            {
                id: 2,
                label: '通用课程',
                type: 'common',
                courseData: [
                    {
                        id: 100001,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100002,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100003,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100004,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100005,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100006,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100007,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100008,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100009,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000010,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000011,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000012,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000013,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    }
                ]
            },
            {
                id: 3,
                label: '基础课程',
                type: 'basic',
                courseData: [
                    {
                        id: 100001,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100002,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100003,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100004,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100005,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100006,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100007,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100008,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100009,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000010,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000011,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000012,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000013,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    }
                ]
            },
            {
                id: 4,
                label: '免费课程',
                type: 'free',
                courseData: [
                    {
                        id: 100001,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100002,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100003,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100004,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100005,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100006,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100007,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100008,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100009,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000010,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000011,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000012,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000013,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    }
                ]
            },
            {
                id: 5,
                label: '直播课程',
                type: 'live',
                courseData: [
                    {
                        id: 100001,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100002,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100003,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100004,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100005,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100006,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100007,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100008,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100009,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000010,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000011,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000012,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000013,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    }
                ]
            },
            {
                id: 6,
                label: '视频课程',
                type: 'video',
                courseData: [
                    {
                        id: 100001,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100002,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100003,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100004,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100005,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100006,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100007,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100008,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100009,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000010,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000011,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000012,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000013,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    }
                ]
            },
            {
                id: 7,
                label: '个人展示',
                type: 'show',
                courseData: [
                    {
                        id: 100001,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100002,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100003,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100004,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100005,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100006,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100007,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100008,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 100009,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000010,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000011,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000012,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    },
                    {
                        id: 1000013,
                        courseName: '三节棍教学视频',
                        username: '小王老师',
                        coverUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        date: 1589617657251,
                    }
                ]
            }
        ]
        return(
            <div id='homePage'>
                <Header 
                    user={{src:''}}
                />
                <div className='swiper'>
                    <Carousel autoplay>
                        {
                            swiperImgUrl.map((item, index) => (
                                <div key={index}>
                                    <img src={item} width='100%' height='100%' />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
                <div className='container'>
                    
                    <div className='nav'>
                        <Anchor offsetTop={100}>
                            <Link href="#VIP" title="VIP课程" />
                            <Link href="#common" title="通用课程" />
                            <Link href="#basic" title="基础课程" />
                            <Link href="#free" title="免费课程" />
                            <Link href="#live" title="直播课程" />
                            <Link href="#video" title="视频课程" />
                            <Link href="#show" title="个人展示" />
                        </Anchor>
                    </div>

                    <div className='courses'>
                        {
                            data.map(item=>(
                                <List
                                    id={item.type}
                                    key={item.type}
                                    grid={{ gutter: 16, column: 4 }}
                                    dataSource={item.courseData}
                                    header={
                                        <div>
                                            <span className='label'>{item.label}</span>
                                            <RouterLink to={`/allType?id=${item.id}`}>查看更多<RightOutlined /></RouterLink>
                                        </div>
                                    }
                                    renderItem={item => (
                                    <List.Item style={{marginTop: '40px'}}>
                                        <Link to='/coursePage'>
                                            <Card
                                                hoverable
                                                cover={
                                                    <img
                                                        src={item.coverUrl}
                                                    />
                                                }
                                            >
                                                <Meta 
                                                    title={
                                                        <Tooltip title={item.courseName}  placement="topLeft">
                                                            <span>{item.courseName}</span>
                                                        </Tooltip>
                                                    } 
                                                    description={
                                                        <div>
                                                            <div>{item.username}</div>
                                                            <span style={{marginTop: '8px',float: 'right'}}>{moment(item.date).format("YYYY-MM-DD HH:mm")}</span>
                                                        </div>
                                                    } 
                                                />
                                            </Card>
                                        </Link>
                                    </List.Item>
                                    )}
                                />
                            ))
                        }
                    </div>

                </div>
                <Footer />
                <BackTop />
            </div>
        )
    }
}