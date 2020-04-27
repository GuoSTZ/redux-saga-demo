import React from 'react'

import { Alert, Form, Radio, Input  } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import BarChart from '../../../../components/works/htChart/index'
import HtMenu from '../../../../components/works/htMenu/index'
import HtDatePicker from '../../../../components/works/htDatePicker/index'

import './index.less'

export default class DataStatistics extends React.Component{
    state = {
        value: 1
    }
    onChange = e => {
        console.log(e)
        this.setState({
          value: e.target.value,
        });
    };
    handleClick(){
        console.log(this)
    }
    render(){
        const barChartOption = {
            color: ['#3BA1FF'],
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
                    data: ['10月', '11月', '12月', '01月', '02月', '03月', '04月', '05月', '06月', '07月','08月','09月',],
                    boundaryGap: true,
                    axisTick: {
                        alignWithLabel: true
                    },
                    offset:0,                    //---x轴相对于默认位置的偏移
                    axisLine: {                  //---坐标轴 轴线
                        show: true,              //---是否显示
                        lineStyle: {
                            color: '#D9D9D9',
                            width: 1,
                            type: 'solid',
                        },
                    },
                    axisTick: {                 //---坐标轴 刻度
                        show: true,             //---是否显示
                        inside: false,          //---是否朝内
                        lengt: 3,               //---长度
                        lineStyle:{
                            color: '#D9D9D9',   //---默认取轴线的颜色
                            width: 1,
                            type: 'solid',
                        },
                    },
                    axisLabel:{                 //---坐标轴 标签
                        show: true,             //---是否显示
                        inside: false,          //---是否朝内
                        rotate: 0,              //---旋转角度  
                        margin: 20,             //---刻度标签与轴线之间的距离
                        color: '#5A5A5A',       //---默认取轴线的颜色
                        fontSize : 14           //更改坐标轴文字大小
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine:{                  //---坐标轴 轴线
                        show: false,            //---是否显示
                        symbol:'none',          //---是否显示轴线箭头
                    },
                    axisTick: {                  //---坐标轴 刻度
                        show: false,             //---是否显示
                        inside: true,            //---是否朝内
                        lengt: 3,                //---长度
                        lineStyle:{
                            //color: '#D9D9D9',  //---默认取轴线的颜色
                            width: 1,
                            type: 'solid',
                        },
                    },
                    axisLabel:{                 //---坐标轴 标签
                        show: true,             //---是否显示
                        inside: false,          //---是否朝内
                        rotate: 0,              //---旋转角度  
                        margin: 20,             //---刻度标签与轴线之间的距离
                        color: '#5A5A5A',       //---默认取轴线的颜色
                    },
                    splitLine: {                //---grid 区域中的分隔线
                        show: true,             //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                        lineStyle: {
                            color: '#D9D9D9',
                            width: 1,
                            type: 'dashed',     //---类型
                        },
                    },
                },
            ],
            series: [
                {
                    name: '发送量波动',
                    type: 'bar',
                    barWidth: '40%',   // 柱状的宽度
                    data: [10, 52, 990, 334, 390, 330, 220, 800, 35, 320, 154, 600]
                }
            ]
        };
        const menuOption = {   
            // handleClick: () => {console.log(this)},
            selectedKeys: ['1'],
            mode: 'horizontal',
            menuData: [
                {
                    key: '1',
                    title: '',
                    disabled: false,
                    content: '发送量统计'
                },
                {
                    key: '2',
                    title: '',
                    disabled: false,
                    content: '延迟时间统计'
                },
                {
                    key: '3',
                    title: '',
                    disabled: false,
                    content: '失败原因分析'
                },
                {
                    key: '4',
                    title: '',
                    disabled: false,
                    content: '短链点击'
                },
            ]
        }
        const menuOption2 = {      
            selectedKeys: ['1'],
            mode: 'horizontal',
            menuData: [
                {
                    key: '1',
                    title: '',
                    disabled: false,
                    content: '发送量'
                },
                {
                    key: '2',
                    title: '',
                    disabled: false,
                    content: '到达率'
                }
            ]
        }
        return (
            <div>
                <HtMenu option={menuOption} {...this.props}/>
                <Alert message="仅支持查询三个月以内的数据" type="info" showIcon />
                <Form
                    name="basic"
                >
                    <Form.Item
                        label="模式"
                        name="date"
                    >
                        <Radio.Group name='date' onChange={this.onChange} value={this.state.value}>
                            <Radio value={1}>今日实时</Radio>
                            <Radio value={2}>历史数据</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        label="模式"
                        name="type"
                    >
                        <Radio.Group name='type' onChange={this.onChange} value={this.state.value}>
                            <Radio value={1}>按提交数查看</Radio>
                            <Radio value={2}>按计费条数查看</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
                <div>
                    <HtMenu option={menuOption2} style={{width: '400px'}}/>
                    <HtDatePicker picker='month' defaultValue='null' />
                    <BarChart option={barChartOption} style={{width: '800px'}} />
                </div>
            </div>
        )
    }
}