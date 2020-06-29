import React from 'react'
import { Steps, Button, message, Result } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

import ChangePasswordStep from './steps/changePasswordStep'
import CheckPhoneStep from './steps/checkPhoneStep'

import { withRouter } from 'react-router-dom'

import './index.less'

const { Step } = Steps;

class ChangePassword extends React.Component{
    state = {
        current: 0,
    };
    formRef = React.createRef();
    
    componentDidMount(){
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });

    }
    
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    checkPhone = () => {
        this.formRef.current.validateFields().then(values => {
            this.next()
        })
        .catch(errorInfo => {
            message.error('请确保手机验证信息填写完整')
        })
    }

    changePassword = () => {
        const { actions, history } = this.props
        this.formRef.current.validateFields().then(values => {
            actions.fetchPassword(Object.assign({},values,{id: this.props.user.id}))
            this.next()
            setTimeout(()=>{
                history.push('/')
            },1000)
        })
        .catch(errorInfo => {
            message.error('请确保密码信息填写完成')
        })
    }

    getCheckCode = () => {
        const { actions } = this.props
        actions.getCheckCode()
    }

    render() {
        const { current } = this.state;
        const { reducer: {sec} } = this.props
        const steps = [
            {
              title: '手机验证',
              content: <CheckPhoneStep sec={sec} phoneRef={this.formRef} getCheckCode={this.getCheckCode}/>,
            },
            {
              title: '密码修改',
              content: <ChangePasswordStep  passwordRef={this.formRef}/>,
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
                    {current === 1 && (
                        <Button style={{ margin: 8 }} onClick={() => this.prev()}>
                            上一步
                        </Button>
                    )}
                    {current === 0 && (
                        <Button type="primary" onClick={this.checkPhone}>
                            下一步
                        </Button>
                    )}
                    {current === 1 && (
                    <Button type="primary" onClick={this.changePassword}>
                        完成
                    </Button>
                    )}
                </div>
            </div>
        );
    }
}

export default withRouter(ChangePassword)