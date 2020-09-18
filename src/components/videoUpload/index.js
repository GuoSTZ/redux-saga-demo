import React from 'react'
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;


const VideoUpload = ({ name, multiple, action, data, onChange, accept, previewFile }) => (
    <Dragger
        name = {name}
        multiple = {multiple}
        action = {action}
        data = {data}
        onChange = {onChange}
        accept = {accept}
        previewFile = {previewFile}
    >
        <p className="ant-upload-drag-icon">
            <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击上传或拖动文件到此处</p>
        <p className="ant-upload-hint">
            当前仅支持单次上传
        </p>
    </Dragger>
)

export default VideoUpload