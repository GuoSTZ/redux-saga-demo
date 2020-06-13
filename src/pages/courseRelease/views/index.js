import React from 'react'
import { Steps, Button, message, Form, Input, Upload, Row, Col, Select } from 'antd';
import {
    UploadOutlined,
    LoadingOutlined,
    PlusOutlined
} from '@ant-design/icons';

import './index.less'
import moment from 'moment';

const { Step } = Steps;
const { Option } = Select;

let user = null
if(sessionStorage.getItem('user') !== null){
    user = JSON.parse(sessionStorage.getItem('user'))
}

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

const UploadButton = ({loading}) => (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">上传</div>
    </div>
);

const CreateCourse = ({createTime, handleChange2, imageUrl, loading, handleChange, handleSelectChange}) => (
    <>
        <Form.Item
            label="课程名称"
            name="courseName"
            labelCol={{span: 4}}
            wrapperCol={{span: 16}}
            rules={[
                { required: true, message: '请输入课程名称!' },
                { max: 20, message: '课程名称超出字数限制'},
            ]}
        >
            <Input placeholder="请确认你的课程名称，最多不能超出20字"/>
        </Form.Item> 
        <Form.Item
            label="课程类型"
            name="courseType"
            labelCol={{span: 4}}
            wrapperCol={{span: 16}}
            rules={[{ required: true, message: '请选择课程类型!' }]}
        >
            <Select
                mode="multiple"
                onChange={ handleSelectChange }
                placeholder="请选择课程类型"
            >
                <Option value={1}>VIP课程</Option>
                <Option value={3}>基础课程</Option>
                <Option value={2}>进阶课程</Option>
                <Option value={6}>视频课程</Option>
                <Option value={5}>直播课程</Option>
            </Select>
        </Form.Item>
        
        <Form.Item
            label="课程封面设置"
            name="courseCoverUrl"
            labelCol={{span: 4}}
            wrapperCol={{span: 16}}
            rules={[{ required: true, message: '请设置视频封面!' }]}
        >
            <Upload
                name="CourseCover"
                listType="picture-card"
                className="videoImg-uploader"
                showUploadList={false}
                action={`course/uploadCourseCover`}
                data={{
                    userId: user.id,
                    createTime: moment().format('x')
                }}
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : <UploadButton loading={loading} />}
            </Upload>
        </Form.Item> 

        <Form.Item
            label="课程价格"
            name="coursePrice"
            labelCol={{span: 4}}
            wrapperCol={{span: 16}}
            rules={[{ required: true, message: '请填入课程价格!' }]}
        >
            <Input placeholder="为你的课程定个价，若免费，则填入0"/>
        </Form.Item>
        
        <Form.Item
            label="课程简介"
            name="courseIntroduction"
            labelCol={{span: 4}}
            wrapperCol={{span: 16}}
            rules={[
                { required: true, message: '请输入课程简介!' },
                { max: 200, message: '课程简介超出字数限制'},
            ]}
        >
            <Input.TextArea autoSize={{minRows: 2, maxRows: 6}} placeholder="在这里输入课程介绍，简单说明一下你的课程，最多输入200字"/>
        </Form.Item>
    </>
)


const UploadVideo = ({createTime, handleChange2}) => {
    const uploadProps = {
        name: 'video',
        action: 'course/uploadVideo',
        listType: 'picture',
        data: {
            userId: user.id,
            // createTime: createTime,
            createTime: 1592060277942,
        },
        onChange: handleChange2
    }
    return (
        <>
            <Form.Item
                label="视频名称"
                name="videoName"
                labelCol={{span: 4}}
                wrapperCol={{span: 16}}
                rules={[
                    { required: true, message: '请输入视频名称!' },
                    { max: 20, message: '最大长度不能超出20字' }
                ]}
            >
                <Input placeholder="请输入课程名称，不要超出20字"/>
            </Form.Item> 

            <Form.Item
                label="视频标签"
                name="videoTags"
                labelCol={{span: 4}}
                wrapperCol={{span: 16}}
                rules={[{ required: true, message: '请选择视频标签!' }]}
            >
                <Select
                    mode="multiple"
                    placeholder="请选择课程标签"
                >
                    <Option value={1}>标签1</Option>
                    <Option value={2}>标签2</Option>
                    <Option value={3}>标签3</Option>
                    <Option value={4}>标签4</Option>
                    <Option value={5}>标签5</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="上传视频"
                name="chooseVideo"
                labelCol={{span: 4}}
                wrapperCol={{span: 16}}
                rules={[{ required: true, message: '请上传视频!' }]}
            >
                <Upload {...uploadProps}>
                    <Button>
                        <UploadOutlined /> 选择视频
                    </Button>
                </Upload>
            </Form.Item>

            <Form.Item
                label="视频简介"
                name="videoIntroduction"
                labelCol={{span: 4}}
                wrapperCol={{span: 16}}
                rules={[
                    { required: true, message: '请输入视频简介!' },
                    { max: 20, message: '最大长度不能超出200字' }
                ]}
            >
                <Input.TextArea autoSize={{minRows: 2, maxRows: 6}} placeholder="请输入视频简介，不要超出200字"/>
            </Form.Item>
            <Form.Item
                label="备用字段1"
                name="beiyong"
                labelCol={{span: 4}}
                wrapperCol={{span: 16}}
            >
                <Input placeholder="当前为备选字段，暂时保留"/>
            </Form.Item>
        </>
    )
}

const steps = [
    {
      title: '课程创建',
      content: (createTime, handleChange2, imageUrl, loading, handleChange, handleSelectChange) => (
        <CreateCourse
            imageUrl={imageUrl} 
            loading={loading} 
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}/>
        ),
    },
    {
      title: '教学视频上传',
      content: (createTime, handleChange2) => (<UploadVideo createTime={createTime} handleChange2={handleChange2}/>),
    },
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
        console.log(sessionStorage, '****')
    }
    
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    courseSubmit = () => {
        const { actions } = this.props
        this.formRef.current.validateFields().then(values => {
            this.setState({
                formData: Object.assign({},values)
            })
            actions.courseSubmit(Object.assign({}, values, {
                id: this.state.courseId,
                date: moment().format('x'),
                coverUrl: this.state.coverUrl,
                teacherId: user.id
            }));
            actions.courseTypeSubmit({
                typeList: values.courseType.join("-"), 
                courseId: this.state.courseId
            })
            this.next()
        })
    }

    videoSubmit = () => {
        const {actions} = this.props
        this.formRef.current.validateFields().then(values => {
            this.setState({
                formData: Object.assign({},values)
            })
            console.log(this.state.videoUrl, 'this.state.videoUrl')
            actions.videoSubmit(Object.assign({}, values, {
                id: this.state.videoId,
                videoUrl: this.state.videoUrl,
                courseId: this.state.courseId,
                date: moment().format('x'),
                coverUrl: this.state.coverUrl, // 课程下的视频和课程的封面相同
                userId: user.id,
            }));
            actions.videoTagSubmit({
                tagList: values.videoTags.join("-"),
                videoId: this.state.videoId,
            })
        })
        message.success('课程创建完成')
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({
                createTime: moment().format('x')
            })
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
            // 获取返回的课程id，方便后续的更新使用
            this.setState({
                courseId: info.file.response.id,
                createTime: info.file.response.date,
                coverUrl: info.file.response.coverUrl,
            })
        }
    };

    handleChange2 = info => {
        if (info.file.status === 'done') {
            console.log(info.file.response.videoUrl, '----------------------')
            // 获取返回的视频id，方便后续的更新使用
            this.setState({
                videoId: info.file.response.id,
                videoUrl: info.file.response.videoUrl,
            })
        }
    };

    handleSelectChange = values => {
        if(values[values.length-1] === 6){
            let result = values.indexOf(5)
            if(result !== -1){
                this.formRef.current.setFieldsValue({"courseType": this.state.courseType})
                message.warning("当前已选类型中存在直播课程，不可选视频课程")
                return;
            }
        }
        if(values[values.length-1] === 5){
            let result = values.indexOf(6)
            if(result !== -1){
                this.formRef.current.setFieldsValue({"courseType": this.state.courseType})
                message.warning("当前已选类型中包含视频课程，不可选直播课程")
                return;
            }
        }
        if(values[values.length-1] === 3){
            let result = values.indexOf(2)
            if(result !== -1){
                this.formRef.current.setFieldsValue({"courseType": this.state.courseType})
                message.warning("当前已选类型中存在进阶课程，不可选基础课程")
                return;
            }
        }
        if(values[values.length-1] === 2){
            let result = values.indexOf(3)
            if(result !== -1){
                this.formRef.current.setFieldsValue({"courseType": this.state.courseType})
                message.warning("当前已选类型中包含基础课程，不可选进阶课程")
                return;
            }
        }
        this.setState({
            courseType: values
        })
    }

    
    
    render() {
        const { current, imageUrl, loading, createTime } = this.state;

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
                    <div className="steps-content" style={{marginTop: 40}}>
                        {steps[current].content(createTime, this.handleChange2, imageUrl, loading, this.handleChange, this.handleSelectChange)}
                    </div>
                </Form>
                <Row>
                    <Col offset={4}>
                        <div className="steps-action" style={{marginBottom: 40}}>
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
                            {/* {current > 0 && (
                                <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                                    返回上一步
                                </Button>
                            )} */}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}