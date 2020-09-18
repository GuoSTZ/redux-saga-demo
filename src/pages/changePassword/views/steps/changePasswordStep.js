import React from 'react'
import { Form, Input, Button } from 'antd';

import './index.less'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
};
const tailLayout = {
    wrapperCol: { offset: 8 },
};

export default class ChangePasswordStep extends React.Component{
    componentDidMount(){
    }
    render(){
        return(
            <div id='changePasswordStep'>
                <Form
                    {...layout}
                    name="changPassword"
                    initialValues={{ remember: true }}
                    ref={this.props.passwordRef}
                >
                    <Form.Item
                        label="ID"
                        name="id"
                        hidden
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="原密码"
                        name="oldPassword"
                        rules={[{ required: true, message: '请输入原密码!' }]}
                    >
                        <Input placeholder="请输入原密码" type='password' />
                    </Form.Item>

                    <Form.Item
                        label="新密码"
                        name="newPassword"
                        rules={[{ required: true, message: '请输入新密码!' }]}
                    >
                        <Input placeholder="请输入新密码" type='password' />
                    </Form.Item>

                    <Form.Item
                        label="确认新密码"
                        name="reNewPassword"
                        rules={[
                            { required: true, message: '请再次输入新密码!' },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('请确认两次输入密码相同');
                                },
                            }),
                        ]}
                    >
                        <Input placeholder="请再次输入新密码" type='password' />
                    </Form.Item>

                </Form>
            </div>
        )
    }
}