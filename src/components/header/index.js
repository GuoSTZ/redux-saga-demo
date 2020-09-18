import React from 'react'
import { Avatar, Input, Select, Affix, Popover } from 'antd';
import { UserOutlined, SearchOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './index.less'

const { Option } = Select;

const defineAvatarUrl = 'http://guostz.gitee.io/graduationprojectresource/resource/images/coursePage/1.jpg'

const PopoverContent = () => (
    <section>
        <section><Link to={`/personalCenter`}>个人中心</Link></section>
        <section><Link to={`/OperationCenter`}>操作中心</Link></section>
        <section><Link to={`/`} onClick={()=>{sessionStorage.removeItem('user');sessionStorage.removeItem('userAccount')}}>登出</Link></section>
    </section>
)

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
                    <li><Link to='/homePage'>首页</Link></li>   {/* 会显示部分的课程 */}
                    <li><Link to='/allType'>全部课程</Link></li>  {/* 这里面会显示所有的课程，以及进行搜索的条件分类 */}
                    <li><Link to='/homePage'>关于社区</Link></li> {/* 这里显示社区的操作帮助，以及简单的社区介绍等文本资料 */}
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
                <Link to="/personalCenter"><MailOutlined style={{ fontSize: 18, color: "#000" }}/></Link>
            </div>

            <div className='avatar'>
                {user.avatarUrl !== '' ? (
                    <Popover content={PopoverContent} trigger="hover" placement="bottom">
                        <Avatar 
                            size="small" 
                            src={`${user.avatarUrl}`}
                            icon={<UserOutlined />}
                        />
                    </Popover>
                ) : (
                    <Avatar size="small" icon={<UserOutlined />} />
                )}

                {
                    <Link to={user.name === '游客'? `/`:`/personalPage`}> 
                        { user.name} 
                    </Link>
                }
            </div>
        </header>
    </Affix>
)

export default Header