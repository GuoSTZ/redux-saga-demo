import React from 'react'
import moment from 'moment';
import { Form, Input, Button, DatePicker, Radio } from 'antd';

import './index.less'

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
};
const dateFormat = 'YYYY/MM/DD';
const { TextArea } = Input;

export default class ChangeMessage extends React.Component{
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
            <div id='changeMessage'>
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
                        label="UID"
                        name="uid"
                    >
                        <Input disabled/>
                    </Form.Item>

                    <Form.Item
                        label="昵称"
                        name="username"
                        rules={[{ required: true, message: '请输入昵称!' }]}
                    >
                        <Input placeholder="请输入昵称" />
                    </Form.Item>

                    <Form.Item
                        label="手机号"
                        name="phone"
                        rules={[{ required: true, message: '请输入手机号!' }]}
                    >
                        <Input placeholder="请输入手机号"/>
                    </Form.Item>
                    <Form.Item 
                        label="出生日期" 
                        name="birthday"
                        defaultValue={moment('2015/01/01', dateFormat)}
                        format={dateFormat}
                        rules={[{ required: true, message: '请选择日期!' }]}
                    >
                        <DatePicker 
                            placeholder="日期选择"
                        />
                    </Form.Item>

                    <Form.Item
                        name="sex"
                        label="性别"
                        rules={[{ required: true, message: '请选择性别!' }]}
                    >
                        <Radio.Group onChange={this.sexChange} value={1}>
                            <Radio value={1}>男</Radio>
                            <Radio value={2}>女</Radio>
                            <Radio value={3}>保密</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        name="autograph"
                        label="个人说明"
                    >
                        <TextArea autoSize={{minRows: 1}} placeholder="请输入内容"/>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" style={{width: 160}}>
                            修改
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}