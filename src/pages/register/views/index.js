import React from 'react'
import { Form, Input, Button, Row, Col, Steps, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less'

const { Step } = Steps;
const steps = [
    {
      title: '短信验证',
      content: '输入手机号并完成短信验证',
    },
    {
      title: '资料填写',
      content: '请完善您的个人资料',
    },
    {
      title: '注册完成',
      content: '注册成功，您已经成为本平台的用户',
    },
];

export default class RegisterPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
    }

    // 下一步
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    // 上一步
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    // 注册信息提交
    onFinish = values => {
        console.log('Success:', values);
    };

    render(){
        const { current } = this.state;
        return(
            // <div id='registerPage'>
            //     <header>
            //         <img src='../../resources/register/title.jpg' />
            //     </header>
            //     <main>
            //         <div class='container'>

            //             <div className='formTitle'>
            //                 用户注册
            //             </div>

            //             <Form 
            //                 name='user'
            //                 onFinish={this.onFinish}>
            //                 <Form.Item
            //                     name='username'
            //                     wrapperCol={{span: 24}}
            //                     rules={[{ required: true, message: '用户名不能为空！' }]}>
            //                     <Input 
            //                         placeholder='请输入用户名' 
            //                         prefix={<UserOutlined />}
            //                     />
            //                 </Form.Item>

            //                 <Form.Item
            //                     name='password'
            //                     wrapperCol={{span: 24}}
            //                     rules={[{ required: true, message: '密码不能为空！' }]}>
            //                     <Input.Password 
            //                         autoComplete='new-password' 
            //                         placeholder='请输入密码'
            //                         prefix={<LockOutlined />}
            //                     />
            //                 </Form.Item>

            //                 <Form.Item
            //                     name='rePassword'
            //                     wrapperCol={{span: 24}}
            //                     rules={[{ required: true, message: '确认密码不能为空！' }]}>
            //                     <Input.Password 
            //                         placeholder='请再次输入密码'
            //                         prefix={<LockOutlined />}
            //                     />
            //                 </Form.Item>

            //                 <Form.Item wrapperCol={{span: 24}}>
            //                     <Button 
            //                         type="primary" 
            //                         htmlType="submit" 
            //                         style={{width: '100%',height: '40px',fontSize: '15px'}}>
            //                         注册
            //                     </Button>
            //                 </Form.Item>

            //             </Form>
                        
            //         </div>
            //     </main>
            // </div>
            <div>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">
                    {steps[current].content}
                </div>
                <div className="steps-action">
                    {current > 0 && (
                        <Button style={{ margin: 8 }} onClick={() => this.prev()}>
                            上一步
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            下一步
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('注册完成，即将返回登录页面!')}>
                            完成
                        </Button>
                    )}
                </div>
            </div>
        )
    }
}