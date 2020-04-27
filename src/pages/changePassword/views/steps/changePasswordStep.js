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
        // console.log( this )
    }
    onFinish = values => {
        console.log('Success:', values);
      };
    
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    sexChange = e => {
        console.log('radio checked', e.target.value);
    };
    render(){
        return(
            <div id='changePasswordStep'>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="ID"
                        name="id"
                        hidden
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="原密码"
                        name="oldPassword"
                        rules={[{ required: true, message: '请输入原密码!' }]}
                    >
                        <Input placeholder="请输入原密码" />
                    </Form.Item>

                    <Form.Item
                        label="新密码"
                        name="newPassword"
                        rules={[{ required: true, message: '请输入新密码!' }]}
                    >
                        <Input placeholder="请输入新密码"/>
                    </Form.Item>

                    <Form.Item
                        label="确认新密码"
                        name="reNewPassword"
                        rules={[{ required: true, message: '请再次输入新密码!' }]}
                    >
                        <Input placeholder="请再次输入新密码"/>
                    </Form.Item>

                    {/* <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" style={{width: 160}}>
                            提交
                        </Button>
                    </Form.Item> */}
                </Form>
            </div>
        )
    }
}