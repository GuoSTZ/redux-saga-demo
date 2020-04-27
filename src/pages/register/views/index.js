import React from 'react'
import { Form, Input, Button, Row, Col, DatePicker, Radio } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
import moment from 'moment';

import './index.less'

const dateFormat = 'YYYY/MM/DD';

export default class RegisterPage extends React.Component{
    constructor(props) {
        super(props)
    }

    onFinish  = value => {
        const { actions } = this.props
        console.log(this)
        actions.register(value)
    }

    render(){
        return(
            <div id='registerPage'>
                <header>
                    <img src='http://guostz.gitee.io/graduationprojectresource/resource/images/loginPage/title.jpg' />
                </header>
                <main>
                    <div className='container'>

                        <div className='formTitle'>
                            用户注册
                        </div>

                        <Form
                            name='user'
                            onFinish={this.onFinish}>

                            <Form.Item
                                label="昵称"
                                name='username'
                                labelCol={{span: 7}}
                                wrapperCol={{span: 12}}
                                rules={[{ required: true, message: '昵称不能为空！' }]}>
                                <Input 
                                    placeholder='请输入昵称' 
                                    prefix={<UserOutlined />}
                                />
                            </Form.Item>

                            <Form.Item
                                label="密码"
                                name='password'
                                labelCol={{span: 7}}
                                wrapperCol={{span: 12}}
                                rules={[{ required: true, message: '密码不能为空！' }]}>
                                <Input.Password 
                                    autoComplete='new-password' 
                                    placeholder='请输入密码'
                                    prefix={<LockOutlined />}
                                />
                            </Form.Item>

                            <Form.Item
                                label='确认密码'
                                name='rePassword'
                                labelCol={{span: 7}}
                                wrapperCol={{span: 12}}
                                rules={[{ required: true, message: '确认密码不能为空！' }]}>
                                <Input.Password 
                                    placeholder='请再次输入密码'
                                    prefix={<LockOutlined />}
                                />
                            </Form.Item>

                            
                            <Form.Item 
                                label="出生日期" 
                                name="birthday"
                                defaultValue={moment('2020/04/28', dateFormat)}
                                format={dateFormat}
                                labelCol={{span: 7}}
                                wrapperCol={{span: 12}}
                            >
                                <DatePicker 
                                    placeholder="日期选择"
                                />
                            </Form.Item>

                            <Form.Item
                                name="sex"
                                label="性别"
                                labelCol={{span: 7}}
                                wrapperCol={{span: 12}}
                            >
                                <Radio.Group onChange={this.sexChange} value={1}>
                                    <Radio value={1}>男</Radio>
                                    <Radio value={2}>女</Radio>
                                    <Radio value={3}>保密</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label="手机号"
                                name="phone"
                                labelCol={{span: 7}}
                                wrapperCol={{span: 12}}
                                rules={[{ required: true, message: '请输入手机号!' }]}
                            >
                                <Input 
                                    placeholder="请输入手机号"
                                    prefix={<PhoneOutlined />}
                                />
                            </Form.Item>

                            <Row>
                                <Col span={14}>
                                    <Form.Item
                                        label="验证码"
                                        name="checkCode"
                                        labelCol={{span: 12}}
                                        wrapperCol={{span: 12}}
                                        rules={[{ required: true, message: '请输入验证码!' }]}
                                    >
                                        <Input placeholder="请输入验证码"/>
                                    </Form.Item>
                                </Col>
                                <Col span={4} offset={1}>
                                    <Form.Item
                                        name="checkCode"
                                    >
                                        <Button style={{width: '100%'}}>获取验证码</Button>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item wrapperCol={{span: 12,offset: 7}}>
                                <Button 
                                    type="primary" 
                                    htmlType="submit" 
                                    style={{width: '100%',height: '40px',fontSize: '15px'}}>
                                    注册
                                </Button>
                            </Form.Item>

                        </Form>
                        
                    </div>
                </main>
            </div>
        )
    }
}