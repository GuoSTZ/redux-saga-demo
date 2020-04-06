import React from 'react'
import { Form, Input, Button, Checkbox, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default class ModalPart extends React.Component{
    state = { visible: false };
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render(){
        return (
            <div>
                <div className="register">
                    <a href='#'  onClick={this.showModal}>没有账号？前往注册</a>
                </div>
                <Modal
                    title="用户注册"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="注册"
                    cancelText="返回"
                >
                    <Form 
                        name="user"
                        onFinish={this.onFinish}>
                        <Form.Item
                            name="username"
                            wrapperCol={{span: 24}}
                            rules={[{ required: true, message: '用户名不能为空！' }]}>
                            <Input 
                                placeholder="请输入用户名" 
                                prefix={<UserOutlined />}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            wrapperCol={{span: 24}}
                            rules={[{ required: true, message: '密码不能为空！' }]}>
                            <Input.Password 
                                autoComplete="new-password" 
                                placeholder="请输入密码"
                                prefix={<LockOutlined />}
                            />
                        </Form.Item>

                        <Form.Item
                            name="rePassword"
                            wrapperCol={{span: 24}}
                            rules={[{ required: true, message: '密码不能为空！' }]}>
                            <Input.Password 
                                placeholder="请再次输入密码"
                                prefix={<LockOutlined />}
                            />
                        </Form.Item>

                    </Form>
                </Modal>
            </div>
        )
    }
}