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
    uploadTeachingVideo: '2',
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
        const uploadProps = {
            action: '//jsonplaceholder.typicode.com/posts/',
            listType: 'picture',
            previewFile(file) {
              console.log('你上传的文件是:', file);
              // Your process logic. Here we just mock to the same file
              return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
                method: 'POST',
                body: file,
              })
                .then(res => res.json())
                .then(({ thumbnail }) => thumbnail);
            },
        }
        const videoTagsData = [
            {
                value: '标签1',
                label: '标签1'
            },
            {
                value: '标签2',
                label: '标签2'
            },
            {
                value: '标签3',
                label: '标签3'
            },
            {
                value: '标签4',
                label: '标签4'
            },
            {
                value: '标签5',
                label: '标签5'
            },
            {
                value: '标签6',
                label: '标签6'
            },
            {
                value: '标签7',
                label: '标签7'
            },
            {
                value: '标签8',
                label: '标签8'
            },
            {
                value: '标签9',
                label: '标签9'
            },
            {
                value: '标签10',
                label: '标签10'
            },
        ]
        const videoTypesData = [
            {
                value: '类别1',
                label: '类别1'
            },
            {
                value: '类别2',
                label: '类别2'
            },
            {
                value: '类别3',
                label: '类别3'
            },
        ]
        switch(page){
            case PAGES.uploadPersonalVideo:
                return <UploadVideo 
                            uploadProps={uploadProps} 
                            videoTagsData={videoTagsData} 
                            videoTypesData={videoTypesData}/>

            case PAGES.uploadTeachingVideo:
                return <UploadVideo 
                            uploadProps={uploadProps} 
                            videoTagsData={videoTagsData} 
                            videoTypesData={videoTypesData}
                            isTeacher={false}/>
            
            case PAGES.dataCenter:
                return <DataCenter />
            
            case PAGES.commentsManagement:
                return <CommentsManagement/>
        }
    }
    render(){
        const {reducer: { page }} = this.props
        return(
            <div id='videoUpload'>
                <Header 
                    user={{src:''}}
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
                            <Menu.Item key="2">
                                <DesktopOutlined />
                                <span>教学视频上传</span>
                            </Menu.Item>
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