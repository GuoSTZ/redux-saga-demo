import React from 'react'
import { Empty, Tag, Avatar, Button, Pagination, Space, Popover, Tooltip, Form, Input, List, Typography } from 'antd';
import Video from '../../../components/video'
import CourseComment from '../../../components/courseComment'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import CommentEditor from '../../../components/commentEditor'
import moment from 'moment'
import './index.less'

import { 
    StopOutlined, 
    CommentOutlined,
    LikeOutlined,
    StarOutlined,
    ShareAltOutlined,
    QqOutlined,
    WechatOutlined,
    WeiboOutlined,
    FacebookOutlined
} from '@ant-design/icons';


const { TextArea } = Input;

export default class VideoPage extends React.Component{
    formRef = React.createRef()

    componentDidMount(){
        const { actions, history } = this.props
        actions.fetchVideoMessage({id: parseInt(sessionStorage.getItem('videoId'))});
        actions.fetchComments({id: parseInt(sessionStorage.getItem('videoId'))});
    }
    componentWillUnmount(){
        
    }

    renderChildComment(array){
        return array.map(item=>(
            <CourseComment commentOption={item} key={item.id}>
            </CourseComment>
        ))
    }
    editorOnchange = () => {
        console.log('editorOnchange')
    }
    editorSubmitting = () => {
        console.log('editorSubmitting')
    }
    editorOnSubmit = () => {
        console.log('editorOnSubmit')
    }
    saveHistory(values){
        const {actions} = this.props
        actions.saveHistory(values)
    }
    commentSubmit = values => {
        const {actions} = this.props
        if(values.content === undefined){
            return;
        }
        actions.saveComment(Object.assign({}, values, {
            date: moment().format('x'),
            userId: parseInt(JSON.parse(sessionStorage.getItem('user')).id),
            videoId: parseInt(sessionStorage.getItem('videoId'))
        }))
        this.formRef.current.resetFields()
    }
    render(){
        const { reducer: { comments, videoMessage } } = this.props
        const popoverContent = (
            <section>
                <Space size={20}>
                    <Tooltip title="分享到QQ">
                        <QqOutlined style={{fontSize: 22, cursor: 'pointer'}}/>
                    </Tooltip>
                    <Tooltip title="分享到微信">
                        <WechatOutlined style={{fontSize: 22, color: 'rgb(0, 241, 0)', cursor: 'pointer'}}/>
                    </Tooltip>
                    <Tooltip title="分享到微博">
                        <WeiboOutlined style={{fontSize: 22, color: 'rgb(236, 1, 26)', cursor: 'pointer'}}/>
                    </Tooltip>
                    <Tooltip title="分享到FaceBook">
                        <FacebookOutlined style={{fontSize: 22, color: 'rgb(72, 98, 163)', cursor: 'pointer'}}/>
                    </Tooltip>
                    
                </Space>
            </section>
        )

        const data = [
            'Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];

        let user = null
        if(sessionStorage.getItem('user') !== null){
            user = JSON.parse(sessionStorage.getItem('user'))
        }
        return (
            <section id='videoPage'>
                <Header 
                    user={user}
                />
                <main>
                    <section className='title'>

                        <section>
                            <Tag color="#2db7f5" seyle={{fontSize: '18px'}}>视频课程</Tag>
                            <span className='videoTitle'>{videoMessage.name}</span>
                            <section className='videoData'>
                                <span>{moment(videoMessage.date).format('YYYY-MM-DD HH:MM')}</span>
                                <span>播放量</span> {videoMessage.viewNum || 0}
                                <span>评论</span> {videoMessage.commentNum}
                            </section>
                            <p><StopOutlined style={{color: '#f00'}}/> 作者原创，未经允许，不准转载</p>
                        </section>
                        <section>
                            <Avatar size={64} src={`${videoMessage.userAvatarUrl}`} />
                            <section className='userMessage'>
                                <p>{videoMessage.userName}</p>
                                <p>{videoMessage.userAutograph || '用户很懒，什么都不想写'}</p>
                                <Button type="primary" style={{width: '70%'}}>关注</Button>
                            </section>
                        </section>

                    </section>

                    <Video 
                        src={videoMessage.videoUrl}
                        saveHistory={this.saveHistory.bind(this)}
                    />

                    <section className='videoAction'>
                        <Space size={40}>
                            <section>
                                <LikeOutlined style={{fontSize: 26}} />
                                <span className='likeNum'>{videoMessage.likeNum}</span>
                            </section>
                            <section>
                                <StarOutlined style={{fontSize: 26}} />
                                <span className='collectNum'>{videoMessage.collectNum}</span>
                            </section>
                            <section>
                                <Popover content={popoverContent} placement='right'>
                                    <ShareAltOutlined style={{fontSize: 26}} />
                                </Popover>
                            </section>
                        </Space>
                    </section>

                    <section style={{display: 'flex'}}>
                        <section className='videoMessage'>
                            <section className='tags'>
                                <Tag color="gold">标签一</Tag>
                                <Tag color="gold">标签二</Tag>
                                <Tag color="gold">标签三</Tag>
                            </section>
                            <section className='briefIntroduction'>
                                {videoMessage.autograph || "视频暂无简介"}
                            </section>
                        </section>
                        <section className='videoHonor'>
                            <section><span>作品荣誉</span></section>
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        </section>
                    </section>

                    <section className='userModule'>

                        <section className='content'>
                            <section className='title'>
                                <span>{videoMessage.commentNum}</span>
                                <span>评论<CommentOutlined style={{marginLeft: '4px'}} /></span>
                                <Pagination 
                                    size="small" 
                                    defaultPageSize={100} 
                                    showSizeChanger={false} 
                                    total={1023} 
                                    hideOnSinglePage={true} 
                                />
                            </section>
                            <section>
                                <section className='commentAction'>
                                    <Avatar size={54} src={`${user.avatarUrl}`} />
                                    <section>
                                        <Form
                                            name='commentForm'
                                            onFinish={this.commentSubmit}
                                            ref={this.formRef}
                                        >
                                            <Form.Item
                                                name='id'
                                                hidden
                                            >
                                                <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name='content'
                                            >
                                                <TextArea autoSize={{minRows: 2,maxRows: 2}} placeholder="留下你的评论"/>
                                            </Form.Item>
                                            <Form.Item>
                                                <Button type='primary' htmlType='submit'>发表评论</Button>
                                            </Form.Item>
                                        </Form>
                                    </section>
                                    
                                </section>
                                {
                                    comments !== undefined ? comments.map((item, index) => (
                                        <CourseComment commentOption={item} key={index}>
                                            {
                                                item.userReplyList !== undefined ?  this.renderChildComment(item.userReplyList) : null
                                            }
                                        </CourseComment>
                                    )) : (
                                        <Empty
                                            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                                            imageStyle={{
                                                height: 100,
                                            }}
                                            description={
                                                <span>
                                                    暂无评论，留下首评吧！
                                                </span>
                                            }
                                        >
                                        </Empty>
                                    )
                                }
                                {
                                    comments !== undefined && (
                                        <section>
                                            <Pagination 
                                                // size="small" 
                                                defaultPageSize={100} 
                                                showSizeChanger={false} 
                                                total={1023} 
                                                hideOnSinglePage={true}
                                                style={{position: 'absolute', left: '25%',bottom: 8}}
                                            />
                                        </section>
                                    )
                                }
                            </section>
                        </section>

                        <section className='ranking'>
                            <section className='similarVideo'>
                                <List
                                    header={<div style={{color: '#000', fontSize: 20}}>相似视频推荐</div>}
                                    bordered={false}
                                    dataSource={data}
                                    renderItem={(item, index) => (
                                        <List.Item>
                                            {item}
                                        </List.Item>
                                    )}
                                />
                            </section>
                            <section className='viewsVideo'>
                                <List
                                    header={<div style={{color: '#000', fontSize: 20}}>观看榜前十</div>}
                                    bordered={false}
                                    dataSource={data}
                                    renderItem={(item, index) => (
                                        <List.Item>
                                            <Typography.Text mark>{`[No.${index+1}]`}</Typography.Text> {item}
                                        </List.Item>
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