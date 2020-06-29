import React from 'react'
import { message, Menu  } from 'antd';
import {
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
} from '@ant-design/icons';

import Header from '../../../components/header/index'
import UploadVideo from '../../uploadVideo/views/index'
import Footer from '../../../components/footer/index'
import DataCenter from '../../dataCenter/views/index'
import CommentsManagement from '../../commentsManagement/views/index'
import { CourseReleaseContainer } from '../../courseRelease/container'
import { UploadVideoContainer } from '../../uploadVideo/container'

import './index.less'

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

// 页面常量设置
const PAGES = {
    uploadPersonalVideo: '1',
    courseRelease: '2',
    dataCenter: '3',
    commentsManagement: '4'
}

export default class OperationCenter extends React.Component{
    state = {
        collapsed: false,
        loading: false,
    };
    onFinish = values => {
        console.log('Success:', values);
    };
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    click = ({ item, key, keyPath, domEvent }) => {
        const {actions} = this.props
        actions.changePage(key);
    }
    renderPage = () => {
        const {reducer: { page }} = this.props

        switch(page){
            case PAGES.uploadPersonalVideo:
                return <UploadVideoContainer />

            case PAGES.courseRelease:
                return <CourseReleaseContainer />
            
            case PAGES.dataCenter:
                return <DataCenter />
            
            case PAGES.commentsManagement:
                return <CommentsManagement/>
        }
    }
    render(){
        const {reducer: { page }} = this.props
        let user = null;
        if(sessionStorage.getItem('user') !== null){
            user = JSON.parse(sessionStorage.getItem('user'))
        }
        return(
            <div id='videoUpload'>
                <Header 
                    user={user}
                />
                <main>
                    <nav>
                        <Menu
                            defaultSelectedKeys={page}
                            // defaultOpenKeys={['sub1']}
                            mode="inline"
                            // theme="dark"
                            inlineCollapsed={this.state.collapsed}
                            onClick={ this.click }
                        >
                            <Menu.Item key="1">
                                <PieChartOutlined />
                                <span>个人视频上传</span>
                            </Menu.Item>
                            {console.log(user)}
                            {
                                user.authority === 1 ? null :
                                (
                                    <Menu.Item key="2">
                                        <DesktopOutlined />
                                        <span>课程发布</span>
                                    </Menu.Item>
                                )
                            }

                            <Menu.Item key="3">
                                <ContainerOutlined />
                                <span>数据中心</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <ContainerOutlined />
                                <span>评论管理</span>
                            </Menu.Item>
                        </Menu>
                    </nav>
                    <section className='contentBox'>
                        {this.renderPage()}
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}