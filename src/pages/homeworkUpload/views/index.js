import React from 'react'

import VideoUpload from '../../../components/videoUpload/index'
import Header from '../../../components/header/index'

// 视频上传参数配置
const option = {
    // 发到后台的文件参数名
    name: 'file',
    // 是否支持多选文件
    multiple: true,
    // 上传的地址
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

export default class HomeworkUpload extends React.Component{


    render(){
        return(
            <div id='homeworkUpload'>
                <VideoUpload {...option} />
            </div>
        )
    }
}