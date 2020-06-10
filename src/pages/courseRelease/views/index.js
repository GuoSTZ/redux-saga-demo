import React from 'react'
import { Steps, Button, message, Form, Input, Upload } from 'antd';
import {
    UploadOutlined,
    LoadingOutlined,
    PlusOutlined
} from '@ant-design/icons';

import './index.less'

const { Step } = Steps;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

const UploadButton = (loading) => (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">上传</div>
    </div>
);

const CreateCourse = (imageUrl, loading) => (
    <>
        <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item> 
        <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="视频封面设置"
            name="chooseVideoImg"
            rules={[{ required: true, message: '请设置视频封面!' }]}
        >
            <Upload
                name="videoImg"
                listType="picture-card"
                className="videoImg-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                // onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : <UploadButton loading={loading} />}
            </Upload>
        </Form.Item>
    </>
)

const UploadVideo = () => {
    const uploadProps = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        previewFile(file) {
          console.log('你上传的文件是:', file);
          // Your process logic. Here we just mock to the same file
          return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
            method: 'POST',
            body: file,
          })
            .then(res => res.json())
            .then(({ thumbnail }) => thumbnail);
        },
    }
    return (
        <>
            <Form.Item
                label="上传视频"
                name="chooseVideo"
                rules={[{ required: true, message: '请上传视频!' }]}
            >
                <Upload {...uploadProps}>
                    <Button>
                        <UploadOutlined /> 选择视频
                    </Button>
                </Upload>
            </Form.Item>
        </>
    )
}

const steps = [
    {
      title: '课程创建',
      content: (imageUrl) => (<CreateCourse imageUrl={imageUrl}/>),
    },
    {
      title: '教学视频上传',
      content: () => (<UploadVideo />),
    }
];

export default class CourseRelease extends React.Component{
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            formData: {},
            // imageUrl: '',
            loading: false,
        };
    }

    componentDidMount(){
        console.log(this.formRef.current)
    }
    
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    courseSubmit(){
        this.formRef.current.validateFields().then(values => {
            this.setState({
                formData: Object.assign({},values)
            })
            this.next()
        })
        .catch(errorInfo => {
            message.error('请确保课程的所有信息已填写完成')
        })
    }

    videoSubmit(){
        this.formRef.current.validateFields().then(values => {
            this.setState({
                formData: Object.assign({},values)
            })
        })
        .catch(errorInfo => {
            message.error('请确保视频的所有信息已填写完成')
        })
        message.success('课程创建完成')
    }
    
    render() {
        const { current, imageUrl, loading } = this.state;
        return (
            <div id='courseRelease'>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <Form
                    name='course'
                    onFinish={this.onFinish}
                    ref={this.formRef}
                >
                    <div className="steps-content">
                            {steps[current].content(imageUrl, loading)}
                    </div>
                </Form>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={this.courseSubmit.bind(this)}>
                            创建课程
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={this.videoSubmit.bind(this)}>
                            视频上传
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                            返回上一步
                        </Button>
                    )}
                </div>
            </div>
        );
    }
}