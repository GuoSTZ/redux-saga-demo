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
        return (
            <div id='checkPhoneStep'>
                <Form
                    name="checkPhone"
                    initialValues={{ remember: true }}
                    ref={this.props.phoneRef}
                >

                    <Form.Item
                        label="ID"
                        name="id"
                        hidden
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="手机号"
                        name="phone"
                        labelCol={{span: 8}}
                        wrapperCol={{span: 12}}
                        rules={[
                            { required: true, message: '请输入手机号!' },
                            { min: 11, message: '请输入正确的手机号码'},
                            { max: 11, message: '请输入正确的手机号码'}
                        ]}
                    >
                        <Input placeholder="请输入手机号" />
                    </Form.Item>

                    <Row>
                        <Col span={16}>
                            <Form.Item
                                label="验证码"
                                name="checkCodeInput"
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
                                <Button style={{width: '100%'}} onClick={this.props.getCheckCode}>
                                    {
                                        this.renderSec(this.props.sec)
                                    }
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>
            </div>
        )
    }
}