import React from 'react'
import { message, Menu } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';

import VideoUpload from '../../../components/videoUpload/index'
import Header from '../../../components/header/index'

import './index.less'

export default class OperationCenter extends React.Component{
    state = {
        collapsed: false,
        uploadDisplay: 'block'
    };
    uploadOnChange = info =>{
        const { status } = info.file;
        if (status === 'uploading') {
            // this.setState({
            //     uploadDisplay: 'none'
            // })
            return
        }
        if (status === 'done') {
            message.success(`${info.file.name} 视频上传成功.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} 视频上传失败.`);
        }
    }
    render(){
        // 视频上传参数配置
        const option = {
            // 发到后台的文件参数名
            name: 'file',
            // 是否支持多选文件
            // multiple: true,
            // 上传的地址
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            accept: '.mp4,.flv,.mkv,.avi,.rmvb,.mkv,.m4v',
            onChange: this.uploadOnChange,
            previewFile: file => {
                console.log('Your upload file:', file);
                // Your process logic. Here we just mock to the same file
                return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
                  method: 'POST',
                  body: file,
                })
                  .then(res => res.json())
                  .then(({ thumbnail }) => thumbnail);
            },
        };
        return(
            <div id='videoUpload'>
                <Header 
                    user={{src:''}}
                />
                <main>
                    <nav>
                        <Menu
                            defaultSelectedKeys={['1']}
                            // defaultOpenKeys={['sub1']}
                            mode="inline"
                            // theme="dark"
                            inlineCollapsed={this.state.collapsed}
                            onClick={ this.click }
                        >
                            <Menu.Item key="1">
                                <PieChartOutlined />
                                <span>教学视频上传</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <DesktopOutlined />
                                <span>个人视频上传</span>
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
                    <div className='uploadBox'>
                        <div className='upload' style={{display: this.state.uploadDisplay}}>
                            <VideoUpload {...option} />
                        </div>
                    </div>
                </main>
                
            </div>
        )
    }
}