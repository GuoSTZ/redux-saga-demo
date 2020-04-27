import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd';

import './index.less'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
};
const tailLayout = {
    wrapperCol: { offset: 8 },
};


export default class CheckPhoneStep extends React.Component{

    render(){
        return (
            <div id='checkPhoneStep'>
                <Form
                    // {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="手机号"
                        name="phone"
                        labelCol={{span: 8}}
                        wrapperCol={{span: 12}}
                        rules={[{ required: true, message: '请输入手机号!' }]}
                    >
                        <Input placeholder="请输入手机号" />
                    </Form.Item>

                    <Row>
                        <Col span={16}>
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
                        <Col span={3} offset={1}>
                            <Form.Item
                                name="checkCode"
                            >
                                <Button style={{width: '100%'}}>获取验证码</Button>
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>
            </div>
        )
    }
}