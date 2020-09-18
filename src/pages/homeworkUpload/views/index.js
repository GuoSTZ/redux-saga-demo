import React from 'react'
import { message, List, Card, Modal, Button, Tag } from 'antd'
import VideoUpload from '../../../components/videoUpload/index'

import { Link } from 'react-router-dom'

import './index.less'

const { Meta } = Card;

export default class HomeworkUpload extends React.Component{
    state = { 
        visible: false 
    };
    componentDidMount(){
        const { actions } = this.props
        actions.fetchMyHomeworkMessage({userId: this.props.user.id});
    }

    showModal = id => {
        this.setState({
            visible: true,
            courseId: id,
        });
    };

    handleOk = e => {
        console.log(e);
        // 在这里调用C++项目，对视频开始做人体姿态识别操作
        this.setState({
            visible: false,
        });
        message.success("你的作业正在处理中，请稍后查看")
    };

    handleCancel = e => {
        console.log(e)
        this.setState({
            visible: false,
        })
    }

    render(){
        const { reducer: {myHomeworkMessage} } = this.props
        // 视频上传参数配置
        const option = {
            // 发到后台的文件参数名
            name: 'studentVideo',
            // 是否支持多选文件
            multiple: false,
            // 上传的地址
            action: '/course/uploadStudentVideo',
            onChange: info => {
                const { status } = info.file;
                if (status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (status === 'done') {
                    message.success(`${info.file.name} 上传成功.`);
                } else if (status === 'error') {
                    message.error(`${info.file.name} 上传失败.`);
                }
            },
        };
        return(
            <section id='homeworkUpload'>
                <List
                    grid={{ gutter: 12, column: 4 }}
                    dataSource={myHomeworkMessage}
                    renderItem={item => (
                        <List.Item style={{marginTop: '40px'}} onClick={item.status !== 0 ? null : () => this.showModal(item.courseId)}>
                            <Card
                                hoverable
                                cover={
                                    <img
                                        alt="video"
                                        width={272}
                                        height={168}
                                        src={item.courseCoverUrl}
                                    />
                                }
                            >
                                <Meta 
                                    title={item.courseName} 
                                    description={
                                        <section className='metaDesc'>
                                            <span>{item.teacherName}</span>
                                            {
                                                item.status === 0 ? (
                                                    <Tag color="magenta" style={{float: 'right'}}>未提交</Tag>
                                                ) : null
                                            }
                                            {
                                                item.status === 1 ? (
                                                    <Tag color="red"  style={{float: 'right'}}>视频处理中</Tag>
                                                ) : null
                                            }
                                            {
                                                item.status === 2 ? (
                                                    <Link 
                                                        to="/poseEstimation" 
                                                        style={{float: 'right'}}
                                                        onClick={()=>{sessionStorage.setItem('courseId', item.courseId)}}
                                                    >
                                                        查看结果
                                                    </Link>
                                                ) : null
                                            }

                                        </section>
                                    } 
                                />
                            </Card>
                        </List.Item>
                    )}
                />
                <Modal
                    title="作业上传"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={
                        <Button onClick={this.handleOk}>作业提交</Button> 
                    }
                >
                    <div>
                        <VideoUpload {...Object.assign({}, option, {data: {userId: this.props.user.id, courseId: this.state.courseId}})} />
                    </div>
                </Modal>
            </section>
        )
    }
}