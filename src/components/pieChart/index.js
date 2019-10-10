import React from 'react'
import echarts from 'echarts';

const initPieChart = (persons) => {
    /**男女比例的数据 */
    let maleNum = persons.filter((item, index, arr) => item.sex === 1).length
    let femaleNum = persons.filter((item, index, arr) => item.sex === 2).length
    let sexData = []
    if (maleNum > 0) {
        sexData.push({ value: maleNum, name: "男" })
    }
    if (femaleNum > 0) {
        sexData.push({ value: femaleNum, name: "女" })
    }

    /**年龄的比例 */
    let ageNum1 = persons.filter(item => item.age <= 20).length
    let ageNum2 = persons.filter(item => item.age <= 40 && item.age > 20).length
    let ageNum3 = persons.filter(item => item.age <= 60 && item.age > 40).length
    let ageNum4 = persons.filter(item => item.age > 60).length
    let ageData = []
    if (ageNum1 > 0) {
        ageData.push({ value: ageNum1, name: "20以下" })
    }
    if (ageNum2 > 0) {
        ageData.push({ value: ageNum2, name: "20-40" })
    }
    if (ageNum3 > 0) {
        ageData.push({ value: ageNum3, name: "40-60" })
    }
    if (ageNum4 > 0) {
        ageData.push({ value: ageNum4, name: "60以上" })
    }

    let sexChart = echarts.init(document.getElementById('pieChart-sex'))
    let ageChart = echarts.init(document.getElementById('pieChart-age'))
    let sexOptions = setOption(sexData, '男女比例')
    let ageOptions = setOption(ageData, '年龄分布')
    sexChart.setOption(sexOptions)
    ageChart.setOption(ageOptions)
}
const setOption = (data, titleText) => {
    return {
        title: {
            text: titleText,
            left: "center"
        },
        series: [
            {
                name: '比例',
                type: 'pie',
                data: data,
                label: {
                    normal: {
                        formatter: "{d}% \n{b}",
                    }
                }
            }
        ]
    }
}

export default class PieChart extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { persons } = this.props
        initPieChart(persons)
    }
    componentWillReceiveProps(nextProps) {
        let { persons } = this.props
        let newPersons = nextProps.persons.toString()
        if (persons.toString() !== newPersons) {
            persons = nextProps.persons
        }
        initPieChart(persons)
    }
    render() {
        return (
            <div className="pie-react" style={{ display: 'flex' }}>
                <div id="pieChart-sex" style={{ width: "400px", height: "300px" }} />
                <div id="pieChart-age" style={{ width: "400px", height: "300px" }} />
            </div>
        )
    }
}