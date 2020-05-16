import React from 'react'
import { Select } from 'antd'
import { Link } from 'react-router-dom'

import GpChart from '../../../components/gpChart/index'
import { 
    RightOutlined,
} from '@ant-design/icons';
import './index.less'

const { Option } = Select;
export default class CommentManagement extends React.Component{
    onChange(value) {
        console.log(`selected ${value}`);
    }
      
    onBlur() {
        console.log('blur');
    }
    
    onFocus() {
        console.log('focus');
    }
      
    onSearch(val) {
        console.log('search:', val);
    }
    render(){
        const lineOption = {
            title: {
                text: '七天内最近视频的评论量变化'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['4.26', '4.27', '4.28', '4.29', '4.30', '5.1', '5.2']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                }
            ]
        };        
        const videoOption = [
            {
                label: '视频名称1',
                value: '视频名称1',
                key: '视频id1'
            },
            {
                label: '视频名称2',
                value: '视频名称2',
                key: '视频id2'
            },
            {
                label: '视频名称3',
                value: '视频名称3',
                key: '视频id3'
            },
            {
                label: '视频名称4',
                value: '视频名称4',
                key: '视频id4'
            },
            {
                label: '视频名称5',
                value: '视频名称5',
                key: '视频id5'
            },
            {
                label: '视频名称6',
                value: '视频名称6',
                key: '视频id6'
            },
        ]
        const barOption = {
            title: {
                text: '视频名称1',
                left: 'center'
            },
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['4.26', '4.27', '4.28', '4.29', '4.30', '5.1', '5.2'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '评论量',
                    type: 'bar',
                    barWidth: '40%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        }
        return(
            <section id='commentsManagement'>
                <section className='dataShow'>
                    <GpChart option={lineOption}/>
                </section>
                <section className='videoSelect'>
                    <Select
                        showSearch
                        placeholder="---当前默认显示为最新投稿视频的评论量统计图---"
                        optionFilterProp="children"
                        style={{width: 360}}
                        onChange={this.onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onSearch={this.onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {videoOption.map( item => (
                            <Option value={item.value} key={item.key}>{item.label}</Option>
                        ))}
                    </Select>

                    <section className='videoDetail'>
                        <section className='img'>
                            <a>
                                <img src='http://guostz.gitee.io/graduationprojectresource/resource/images/browsingHistory/群星.jpg' width={160} height={90} />
                            </a>
                        </section>
                        <section className='message'>
                            <section>【5.3】视频名称</section>
                            <section className='data'>
                                <span>播放量：123</span>
                                <span>点赞量：233</span>
                                <span>评论量：666</span>
                            </section>
                        </section>
                        <section className='commentsLink'>
                            <Link to='/videoPage'>前往视频页面<RightOutlined /></Link>
                        </section>
                    </section>

                    <GpChart option={barOption} />
                </section>
            </section>
        )
    }
}