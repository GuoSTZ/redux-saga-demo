import React from 'react'
import { Avatar, Input, Select, Affix  } from 'antd';
import { UserOutlined, SearchOutlined, MailOutlined } from '@ant-design/icons';

import './index.less'

const { Option } = Select;

const Header = ({user}) => (
    <Affix  offsetTop={0}>
        <header>
        
            <h1>
                <a href='#'>
                    {/* <img src='../../resources/login/title.jpg' /> */}
                    <img src='http://guostz.gitee.io/graduationprojectresource/resource/images/loginPage/title.jpg' />
                </a>
            </h1>

            <nav>
                <ul>
                    <li>首页</li>   {/* 会显示部分的课程 */}
                    <li>全部课程</li>  {/* 这里面会显示所有的课程，以及进行搜索的条件分类 */}
                    <li>关于社区</li> {/* 这里显示社区的操作帮助，以及简单的社区介绍等文本资料 */}
                </ul>
            </nav>

            <div className='search-box'>
                <Input 
                    placeholder="在社区中搜索" 
                    prefix={<SearchOutlined style={{color: '#ced4d9'}} />}
                />
            </div>
            
            <Select defaultValue="zh_CN" style={{ width: 120 }} onChange={()=>{console.log('**')}}>
                <Option value="zh_CN">中文简体</Option>
                <Option value="zh_TW">中文繁体</Option>
            </Select>

            <div className='mail'>
                <MailOutlined style={{ fontSize: 18 }}/>
            </div>

            <div className='avatar'>
                <Avatar 
                    size="small" 
                    icon={<UserOutlined />} 
                    src={user.src}
                />
                <a href='#'> { user.name || '游客'} </a>
            </div>
        </header>
    </Affix>
)

export default Header