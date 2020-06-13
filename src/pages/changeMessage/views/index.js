import React from 'react'
import moment from 'moment';
import { Form, Input, Button, DatePicker, Radio, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import './index.less'
import { actionTypes } from '../../../common/actionTypes';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
};
const dateFormat = 'YYYY/MM/DD';
const { TextArea } = Input;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
  
function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('仅支持JPG/PNG图片！');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('图片必须小于2MB！');
    }
    return isJpgOrPng && isLt2M;
}

export default class ChangeMessage extends React.Component{
    state = {
        loading: false,
        formData: {}
    };

    formRef = React.createRef();

    componentDidMount(){
        this.setState({
            formData: this.formRef.current.getFieldsValue(
                ['id', 'uid', 'avatarUrl', 'name', 'account', 'birthday', 'sex', 'autograph']
            )
        })
        this.setState({
            imageUrl: JSON.parse(sessionStorage.getItem('user')).avatarUrl
        })
    }

    // 判断表单数据是否发生改变，注意该方法的使用前提是两个对象的属性顺序相同
    isFormDateChanged(obj, newObj){
        for(let k in obj){
            if(obj[k] !== newObj[k]){
                return true
            }
        }
        return false
    }

    onFinish = values => {
        const { actions, user } = this.props
        let newValues = Object.assign({}, values, {birthday: values.birthday.format("x")})
        if(this.isFormDateChanged(this.state.formData, values))
            actions.updateUser(newValues)
    };
    
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    sexChange = e => {
        console.log('radio checked', e.target.value);
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
            message.success('用户头像已经更新成功！')
            let name = info.file.name
            let imageType = name.slice(name.indexOf('.'))
            let user = JSON.parse(sessionStorage.getItem('user'))
            user.avatarUrl = `./resources/images/${user.id}${imageType}`
            sessionStorage.setItem('user', JSON.stringify(user))
        }
    };

    render(){
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        const { reducer: {loginMessage}, user } = this.props
        // 设置表单初始化的值
        let formData = Object.assign({}, user, {
            birthday: moment(moment(user.birthday).format(dateFormat), dateFormat),
        })
        return(
            <div id='changeMessage'>
                <Form
                    {...layout}
                    name="basic"
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    initialValues={formData}
                    ref={this.formRef}
                >
                    <Form.Item
                        label="ID"
                        name="id"
                        // hidden
                    >
                        <Input disabled />
                    </Form.Item>

                    {/* <Form.Item
                        label="UID"
                        name="uid"
                    >
                        <Input disabled/>
                    </Form.Item> */}

                    <Form.Item
                        label="头像"
                        name="avatarUrl"
                    >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            data={{userId: formData.id}}
                            action={`user/updateAvatarUrl`}
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange.bind(this)}
                        >
                            {
                                imageUrl ? 
                                    <img src={imageUrl} alt="avatar" style={{ width: '100%' }}/> : 
                                    uploadButton
                            }
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        label="昵称"
                        name="name"
                        rules={[{ required: true, message: '请输入昵称!' }]}
                    >
                        <Input placeholder="请输入昵称" />
                    </Form.Item>

                    <Form.Item
                        label="手机号"
                        name="account"
                        rules={[{ required: true, message: '请输入手机号!' }]}
                    >
                        <Input placeholder="请输入手机号" />
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
                        <Radio.Group onChange={this.sexChange}>
                            <Radio value={1}>男</Radio>
                            <Radio value={2}>女</Radio>
                            <Radio value={3}>保密</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        name="autograph"
                        label="个人说明"
                    >
                        <TextArea autoSize={{minRows: 1}} placeholder="请输入内容" />
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