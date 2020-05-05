import React from 'react'
import { Steps, Button, message, Result } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

import ChangePasswordStep from './steps/changePasswordStep'
import CheckPhoneStep from './steps/checkPhoneStep'

import './index.less'

const { Step } = Steps;

// class ChangePasswordDone extends React.Component{
//     render(){
//         return(
//             <div id='changePasswordDone'>
//                 <div className='icon'>
//                     <CheckCircleTwoTone twoToneColor="#52c41a"style={{fontSize: 80}} />
//                 </div>
//                 <p>您的密码已经修改成功</p>
//                 <p>即将跳转登录页面</p>
//             </div>
//         )
//     }
// }

const steps = [
    {
      title: '手机验证',
      content: <CheckPhoneStep />,
    },
    {
      title: '密码修改',
      content: <ChangePasswordStep />,
    },
    {
      title: '修改完成',
      content: <Result
                    status="success"
                    title="您的密码已经修改成功"
                    subTitle="即将跳转登录页面"
                />
    },
];

export default class ChangePassword extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
    }
    
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    
    render() {
        const { current } = this.state;
        return (
            <div id='changePassword'>
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
                    <Button type="primary" onClick={() => message.success('设置完成!')}>
                        完成
                    </Button>
                    )}
                </div>
            </div>
        );
    }
}