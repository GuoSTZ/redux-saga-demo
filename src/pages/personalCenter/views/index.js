import React from 'react'
import { Menu, Button, Affix, message } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import Header from '../../../components/header'
import { ChangeMessageContainer } from '../../changeMessage/container'
import { BrowsingHistoryContainer } from '../../browsingHistory/container'
import { ChangePasswordContainer } from '../../changePassword/container'
import { MyCourseContainer } from '../../myCourse/container'
import { HomeworkUploadContainer } from '../../homeworkUpload/container'
import { MyWorkContainer } from '../../myWork/container'

import './index.less'

const PAGES = {
    changeMessage: '1',
    changePassword: '2',
    myCourse: '3',
    homeworkUpload: '4',
    myWork: '5',
    browsinghistory: '7',
    authentication: '8'
}



export default class PersonalCenter extends React.Component{

    state = {
        collapsed: false,
    };
    
    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };

    click = ({ item, key, keyPath, domEvent }) => {
        const {actions} = this.props
        actions.changePage(key);
    }

    authentication = user => {
        const { actions } = this.props
        actions.authentication({userId: user.id})
        message.success("教师资格认证成功啦！")
    }

    renderPage(user){
        const {reducer: {page}} = this.props
        switch(page){
            case PAGES.changeMessage:
                return <ChangeMessageContainer user={user}/>
            case PAGES.changePassword:
                return <ChangePasswordContainer user={user} />
            case PAGES.myCourse:
                return <MyCourseContainer user={user} />
            case PAGES.homeworkUpload:
                return <HomeworkUploadContainer user={user} />
            case PAGES.myWork:
                return <MyWorkContainer />
            case PAGES.browsinghistory:
                return <BrowsingHistoryContainer />
            case PAGES.authentication:
                return <Button type="primary" onClick={() => this.authentication(user)}>教师资格认证</Button>
        }
        
    }
    
    render() {
        const { reducer: { page } } = this.props
        let user = null
        if(sessionStorage.getItem('user') !== null){
            user = JSON.parse(sessionStorage.getItem('user'))
        }
        return (
            <div id='personalCenter'>
                <Header 
                    user={user}
                />
                <main>
                    <Affix offsetTop={80}>
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
                                    <span>修改信息</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <DesktopOutlined />
                                    <span>修改密码</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <ContainerOutlined />
                                    <span>我的课程</span>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <ContainerOutlined />
                                    <span>我的作业</span>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <ContainerOutlined />
                                    <span>我的作品</span>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <ContainerOutlined />
                                    <span>我的消息</span>
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <ContainerOutlined />
                                    <span>观看历史</span>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <ContainerOutlined />
                                    <span>教师认证</span>
                                </Menu.Item>
                            </Menu>
                            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                            </Button>
                        </nav>
                    </Affix>
                    <div className='pages'>
                        {this.renderPage(user)} 
                    </div>
                </main>
            </div>
        );
    }
}