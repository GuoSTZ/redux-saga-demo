import React from 'react'
import { Form, Input, Button, Row, Col, DatePicker, Radio, Spin, message } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
import moment from 'moment';

import './index.less'

const dateFormat = 'YYYY/MM/DD';

export default class RegisterPage extends React.Component{
    formRef = React.createRef();

    onFinish  = values => {
        const { actions } = this.props
        actions.register(Object.assign({}, values, {registerTime: moment().format('x')}))
    }

    getCheckCode = () => {
        const { actions } = this.props
        actions.getCheckCode()
    }

    renderSec = sec => {
        if(sec === 1){
            return `重新获取`
        }
        if(sec > 1 && sec < 60){
            return `${sec}s后重新获取`
        }
        else {
            return `获取验证码`
        }
    }

    render(){
        const {actions, reducer: {sec, spinStatus, registerStatus}} = this.props
        // 下述写法不符合规范，仅为解决当前问题，后续需要修改
        if(!registerStatus){
            message.error('当前手机号已经被注册!')
            actions.changeRegisterStatus(true)
        }
        if(spinStatus){
            setTimeout(()=>{
                message.info('注册成功!')
                this.props.history.push('/')
            },1000)
        }
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
                        <Spin tip="正在注册，请稍后" spinning={spinStatus}>
                            <Form
                                name='user'
                                onFinish={this.onFinish}
                                ref={this.formRef}>

                                <Form.Item
                                    label="昵称"
                                    name='username'
                                    labelCol={{span: 7}}
                                    wrapperCol={{span: 12}}
                                    rules={[{ required: true, message: '昵称不能为空！' }]}>
                                    <Input 
                                        placeholder='请输入昵称'
                                        maxLength={12}
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
                                    rules={[
                                        { required: true, message: '确认密码不能为空！' },
                                        ({ getFieldValue }) => ({
                                            validator(rule, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject('请确认两次输入密码相同');
                                            },
                                        }),
                                    ]}>
                                    <Input.Password 
                                        placeholder='请再次输入密码'
                                        prefix={<LockOutlined />}
                                        onChange={this.rePasswordChange}
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
                                    rules={[
                                        { required: true, message: '请输入手机号!' },
                                    ]}
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
                                            <Button style={{width: '100%'}} onClick={this.getCheckCode}>
                                                {
                                                    this.renderSec(sec)
                                                }
                                            </Button>
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
                        </Spin>
                    </div>
                </main>
            </div>
        )
    }
}