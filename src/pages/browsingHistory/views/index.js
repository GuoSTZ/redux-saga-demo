import React from 'react'
import { Timeline, Empty } from 'antd'
import { Link } from 'react-router-dom';
import moment from 'moment'
import './index.less'

export default class BrowsingHistory extends React.Component{
    componentDidMount(){
        const {actions} = this.props
        actions.fetchHistory({userId: JSON.parse(sessionStorage.getItem('user')).id})
        console.log(moment(3600000).utcOffset(0).format('HH:mm:ss'))
    }

    renderTimeLine = (timeLineItems) => {
        return timeLineItems.map( (item, index) => (
                <Timeline.Item label={moment(item.browsingTime).format('YYYY-MM-DD HH:MM')} key={index}>
                    <section className='container'>
                        <a>
                            <img src={item.videoCoverUrl} width={160} height={90} />
                        </a>
                        <section>
                            <section>
                                <span>{item.videoName}</span>
                                <span>{item.userName}</span>
                            </section>
                            <section>
                                <section className='process'>
                                    <span>已看</span>
                                    <span  style={{marginLeft: 10}}>
                                        {
                                            item.process > 3600000 ? 
                                            moment(item.process).utcOffset(0).format('HH:mm:ss') :
                                            moment(item.process).utcOffset(0).format('mm:ss')
                                        }
                                    </span>
                                </section>
                                {/* <p>{item.type}</p> */}
                            </section>
                        </section>
                    </section>
                </Timeline.Item>
            )
        )

    }



    
    render(){
        const { reducer: { timeLineItems } } = this.props
        return(
            <section id='browsingHistory'>
                <section className='title'>
                    时间记录
                </section>
                {
                    timeLineItems.length !== 0 ? (
                        <Timeline mode='left' className='timeLine'>
                            {this.renderTimeLine(timeLineItems)}
                        </Timeline>
                    ) : (
                        <Empty
                            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                            imageStyle={{
                            height: 60,
                            }}
                            description={
                                <span>
                                    当前无浏览历史，<Link to='/homePage'>前往首页查看课程</Link>
                                </span>
                            }
                      >
                      </Empty>
                    )
                }
                
            </section>
        )
    }
}