import React from 'react'
import { message, Form, Input, Button, Upload, Row, Col, Tooltip, Select, DatePicker, Alert } from 'antd';
import {
    UploadOutlined,
    LoadingOutlined,
    PlusOutlined
} from '@ant-design/icons';
import './index.less'

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 10 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 10 },
};

const {TextArea} = Input
const { Option } = Select;

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

export default class UploadVideo extends React.Component{
    state = {
        loading: false,
    };
    onFinish = values => {
        console.log('Success:', values);
    };
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    DatePickerOnChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }
    DatePickerOnOk = value => {
        console.log('onOk: ', value);
    }
    render(){
        let user = null;
        if(sessionStorage.getItem('user') !== null){
            user = JSON.parse(sessionStorage.getItem('user'))
        }
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">选择封面</div>
            </div>
        );
        const uploadProps = {
            action: `video/uploadVideo?userId=${user.id}`,
            listType: 'picture',
            name: 'video',
            previewFile(file) {
              console.log('你上传的文件是:', file);
              return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
                method: 'POST',
                body: file,
              })
                .then(res => res.json())
                .then(({ thumbnail }) => thumbnail);
            },
        }

        const { imageUrl } = this.state;

        return(
            <div id='uploadVideo'>
                <Form
                    {...layout}
                    name="basic"
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
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

                    <Form.Item
                        label="视频封面设置"
                        name="chooseVideoImg"
                        rules={[{ required: true, message: '请设置视频封面!' }]}
                    >
                        <Upload
                            name="videoCover"
                            listType="picture-card"
                            className="videoImg-uploader"
                            showUploadList={false}
                            action={`video/uploadVideoCoverUrl?userId=${user.id}`}
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        label="视频名称"
                        name="videoName"
                        rules={[{ required: true, message: '请输入视频名称!' }]}
                    >
                        <Input placeholder='请输入视频名称'/>
                    </Form.Item>

                    {this.props.isTeacher === false ? (
                        <Form.Item
                            label="视频标签"
                            name="videoTypes"
                            rules={[{ required: true, message: '请选择视频标签!' }]}
                        >
                            <Select
                                style={{ width: '100%' }}
                                placeholder="请选择视频标签"
                                showSearch
                                optionFilterProp="children"
                                // onChange={onChange}
                                // onFocus={onFocus}
                                // onBlur={onBlur}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {this.props.videoTypesData.map(item => (
                                    <Option  value={item.value} label={item.label} key={item.value}>
                                        {item.label}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    ) : null}

                    <Form.Item
                        label="视频标签"
                        name="videoTags"
                        rules={[{ required: true, message: '请选择视频标签!' }]}
                    >
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="请选择合适的视频标签"
                            // defaultValue={['china']}
                            // onChange={handleChange}
                            optionLabelProp="label"
                        >
                            {this.props.videoTagsData.map(item => (
                                <Option  value={item.value} label={item.label} key={item.value}>
                                    {item.label}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="简介"
                        name="briefIntroduction"
                        rules={[{ required: true, message: '请输入视频简介!' }]}
                    >
                        <TextArea 
                            placeholder='给你的视频简单的几句话，让大家能够快速地对其有所了解'
                            autoSize={{ minRows: 3 }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="发布时间"
                        name="releaseTime"
                    >
                        <DatePicker 
                            showTime
                            format='YYYY-MM-DD HH:mm'
                            onChange={this.DatePickerOnChange} 
                            onOk={this.DatePickerOnOk} 
                            placeholder="请选择发布时间"
                        />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            确定上传
                        </Button>
                    </Form.Item>
                </Form>
                <section className='tips'>
                    <Row gutter={1}>
                        <Col offset={6}>
                            <a href='#'>禁止上传的视频内容</a>
                        </Col>
                        <Col>
                            <Tooltip title="视频格式允许上传的格式为mp4, flv, avi, rmvb, mkv, ts">
                                <span>视频格式</span>
                            </Tooltip>
                        </Col>
                        <Col>
                            <Tooltip title="上传的视频最大不允许超过xG，时长不允许超过x小时">
                                <span>视频大小</span>
                            </Tooltip>
                        </Col>
                        <Col>
                            <Tooltip title="如果用户没有选择发布时间，则默认为审核通过后直接发布">
                                <span>关于视频发布时间</span>
                            </Tooltip>
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}