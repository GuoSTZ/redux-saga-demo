import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less'

export default class LoginPage extends React.Component{
    componentDidMount(){
        const { actions } = this.props
        actions.fetchCheckCode(this.createCode(4))
    }
    onFinish = values => {
        const { reducer: {checkCode} } = this.props
        if(checkCode.toLowerCase() === values.checkCode){
            console.log('验证码正确')
        }
        console.log('Success:', values);
    };
    // 生成验证码
    createCode(codeLength) {
        let code = "";
        // let codeReg = '[0-9][a-z][A-Z]{4}'
        let random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D',
                'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
                'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
                'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
        for (let i = 0; i < codeLength; i++) {
            let index = Math.floor(Math.random() * random.length);
            code += random[index];
        }
        return code;
    }
    refreshCheckCode(){
        const { actions } = this.props
        actions.fetchCheckCode(this.createCode(4))
    }
    render(){
        const { reducer: {checkCode} } = this.props
        return(
            <div id="loginPage">
                <header>
                    <img src='../../resources/login/title.jpg' />
                </header>
                <main className="container">
                    <img src='./resources/login/bg.png' />
                    <div className="formBox">

                        <div className="formTitle">
                            用户登录
                        </div>

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

                            <Row>
                                <Col span={17}>
                                    <Form.Item
                                        name="checkCode"
                                        rules={[{ required: true, message: '请输入验证码！' }]}>
                                        <Input placeholder="请输入验证码"/>
                                    </Form.Item>
                                </Col>
                                <Col span={6} offset={1}>
                                    <Form.Item
                                        name="checkCodeImg">
                                        <div className="checkCodeImg" onClick={this.refreshCheckCode.bind(this)}>{checkCode}</div>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item 
                                name="remember" 
                                valuePropName="checked">
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{span: 24}}>
                                <Button 
                                    type="primary" 
                                    htmlType="submit" 
                                    style={{width: '100%',height: '40px',fontSize: '15px'}}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>

                        <div className="register">
                            <Link to="/register/">没有账号？前往注册</Link>
                        </div>

                    </div>
                </main>
                <footer>
                    @auther guosheng
                </footer>
            </div>
        )
    }
}