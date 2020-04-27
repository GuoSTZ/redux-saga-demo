import React from 'react'

// 引入 ECharts 主模块 (按需加载)
import echarts from 'echarts/lib/echarts';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import ReactEcharts from 'echarts-for-react';

const HtChart = ( {option, style} ) => (
    <ReactEcharts option={option} style={style}/>
)

export default HtChart