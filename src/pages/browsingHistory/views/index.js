import React from 'react'
import { Timeline } from 'antd'

import './index.less'

export default class BrowsingHistory extends React.Component{
    componentDidMount(){
        // console.log( this )
    }

    renderTimeLine = () => {
        // const { reducer: { timeLineItems } } = this.props 
        const timeLineItems = [
            {
                browsingTime: '2015-09-01 09:50',
                courseImgSrc: 'http://guostz.gitee.io/graduationprojectresource/resource/images/browsingHistory/群星.jpg',
                courseName: '视频的名称',
                courseMaker: '视频作者',
                process: '视频已看进度',
                type: '视频类别'
            },
            {
                browsingTime: '2015-09-01 09:49',
                courseImgSrc: 'http://guostz.gitee.io/graduationprojectresource/resource/images/browsingHistory/群星.jpg',
                courseName: '视频的名称',
                courseMaker: '视频作者',
                process: '视频已看进度',
                type: '视频类别'
            },
            {
                browsingTime: '2015-09-01 09:49',
                courseImgSrc: 'http://guostz.gitee.io/graduationprojectresource/resource/images/browsingHistory/群星.jpg',
                courseName: '视频的名称',
                courseMaker: '视频作者',
                process: '视频已看进度',
                type: '视频类别'
            },
            {
                browsingTime: '2015-09-01 09:18',
                courseImgSrc: 'http://guostz.gitee.io/graduationprojectresource/resource/images/browsingHistory/群星.jpg',
                courseName: '视频的名称',
                courseMaker: '视频作者',
                process: '视频已看进度',
                type: '视频类别'
            },
        ]
        return timeLineItems.map( (item, index) => (
                <Timeline.Item label="2015-09-01 09:50" key={index}>
                    <div className='container'>
                        <a>
                            <img src={item.courseImgSrc} width={160} height={90} />
                        </a>
                        <div>
                            <div>
                                <p>{item.courseName}</p>
                                <p>{item.courseMaker}</p>
                            </div>
                            <div>
                                <p>{item.process}</p>
                                <p>{item.type}</p>
                            </div>
                        </div>
                    </div>
                </Timeline.Item>
            )
        )

    }



    
    render(){
        return(
            <div id='browsingHistory'>
                <div className='title'>
                    时间记录
                </div>
                <Timeline mode='left' className='timeLine'>
                    {this.renderTimeLine()}
                </Timeline>
            </div>
        )
    }
}