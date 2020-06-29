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
    'http://guostz.gitee.io/graduationprojectresource/resource/images/homePage/2.jpg',
    'http://guostz.gitee.io/graduationprojectresource/resource/images/homePage/3.jpg',
    'http://guostz.gitee.io/graduationprojectresource/resource/images/homePage/5.jpg',
]

const typeData = [
    {
        value: 1,
        label: 'VIP课程',
        type: "VIP",
    },
    {
        value: 2,
        label: '进阶课程',
        type: "advance",
    },
    {
        value: 3,
        label: '基础课程',
        type: "basic",
    },
    {
        value: 4,
        label: '免费课程',
        type: "free",
    },
    {
        value: 5,
        label: '直播课程',
        type: "live",
    },
    {
        value: 6,
        label: '视频课程',
        type: "video",
    },
    {
        value: 7,
        label: '个人视频',
        type: "show",
    },
]

export default class HomePage extends React.Component{
    componentWillMount(){
        const {actions} = this.props
        actions.isKeyExist({account: sessionStorage.getItem('userAccount')})
    }
    componentDidMount(){
        const {actions} = this.props
        window.onbeforeunload = e => {
            // actions.isKeyExist({account: sessionStorage.getItem('userAccount')})
        }

        actions.fetchNewCourseMessageByTypeId()
        actions.fetchNewVideoMessageByCourseId({courseId: 0})
    }
    componentWillUnmount(){
    }
    renderType(type){
        for( let item of typeData ){
            if(item.value === type + 1){
                return item.label
            }
        }
    }
    render(){
        let user = null;
        if(sessionStorage.getItem('user') !== null){
            user = JSON.parse(sessionStorage.getItem('user'))
        }
        const { reducer: { loginMessage, newCourseMessage, newVideoMessage } } = this.props
        const data = newCourseMessage.concat([newVideoMessage])
        console.log(data, 'data')
        return(
            <div id='homePage'>
                <Header 
                    user={user || loginMessage}
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
                            <Link href="#advance" title="进阶课程" />
                            <Link href="#basic" title="基础课程" />
                            <Link href="#free" title="免费课程" />
                            <Link href="#live" title="直播课程" />
                            <Link href="#video" title="视频课程" />
                            <Link href="#show" title="个人视频" />
                        </Anchor>
                    </div>

                    <div className='courses'>
                        {
                            data.map((item, index)=>(
                                <List
                                    key={index}
                                    id={typeData[index].type}
                                    grid={{ gutter: 16, column: 4 }}
                                    dataSource={item}
                                    header={
                                        <div>
                                            <span className='label'>{this.renderType(index)}</span>
                                            <RouterLink to={`/allType`} onClick={()=>{sessionStorage.setItem('typeId', index+1)}}>查看更多<RightOutlined /></RouterLink>
                                        </div>
                                    }
                                    renderItem={ item => (
                                        <List.Item style={{marginTop: '40px'}}>
                                            <RouterLink 
                                                to={item.courseId == 0 ? `/videoPage` : `coursePage`} 
                                                onClick={
                                                    () => {
                                                        if(item.courseId == 0){
                                                            sessionStorage.setItem('videoId', item.id)
                                                        } else{
                                                            sessionStorage.setItem('courseId', item.id)
                                                        }
                                                    }
                                                }
                                            >
                                                <Card
                                                    hoverable
                                                    cover={
                                                        <img
                                                            width={272}
                                                            height={168}
                                                            src={item.coverUrl}
                                                        />
                                                    }
                                                >
                                                    <Meta 
                                                        title={
                                                            <Tooltip title={item.name}  placement="topLeft">
                                                                <span>{item.name}</span>
                                                            </Tooltip>
                                                        } 
                                                        description={
                                                            <div>
                                                                <div>{item.teacherName ||  item.userName}</div>
                                                                <span style={{marginTop: '8px',float: 'right'}}>{moment(item.date).format("YYYY-MM-DD HH:mm")}</span>
                                                            </div>
                                                        } 
                                                    />
                                                </Card>
                                            </RouterLink>
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