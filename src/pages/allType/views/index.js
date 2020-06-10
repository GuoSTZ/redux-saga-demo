import React from 'react'
import { Radio, Tag, BackTop, Pagination, List, Card, Drawer, Button } from 'antd';
import Header from '../../../components/header'
import Footer from '../../../components/footer'

import './index.less'

const { CheckableTag } = Tag;
const { Meta } = Card

export default class AllType extends React.Component{
    state = {
        selectedTags: [],
        selectedTagStyle: {},
        visible: false,
    };

    componentDidMount(){
        const { actions, location: {search} } = this.props
        let str = 'id='
        if(search !== ''){
            actions.fetchType( {typeId: search.slice(search.indexOf(str) + str.length, search.length)} )
        }
    }
    
    handleChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        this.setState({ 
            selectedTags: nextSelectedTags 
        });
    }
    onChange = checkedValues => {
        console.log('checked = ', checkedValues);
    }
    closeTag = index => {
        let selectedTags = this.state.selectedTags
        selectedTags.splice(index, 1)
        this.setState({
            selectedTags: selectedTags
        })
    }
    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
    closeDrawer = () => {
        this.setState({
          visible: false,
        });
    };

    render(){
        const options = [
            { id: 8, label: '正在直播', value: 8 },  // 状态，检查有什么课程正在直播
            { id: 1, label: 'VIP课程', value: 1 },   // 可以理解为需要付费的课程
            { id: 2, label: '通用课程', value: 2 },  // 通用课程
            { id: 3, label: '基础课程', value: 3 },  // 基础课程
            { id: 4, label: '免费课程', value: 4 },  // 可以理解为不需要付费的课程
            { id: 5, label: '直播课程', value: 5 },  // 以直播的形式进行教学
            { id: 6, label: '视频课程', value: 6 },  // 以视频的形式进行教学
            { id: 7, label: '个人视频', value: 7 },  // 学员自行上传的视频
        ];
        const tagsFromServer = [
            '标签一', '标签二', '标签三', '标签四',
            '标签五', '标签六', '标签七', '标签八',
            '标签九', '标签十', '标签十一', '标签十二',
            '标签十三', '标签十四', '标签十五', '标签十六',
            '标签十七', '标签十八', '标签十九', '标签二十',
            '标签二十一', '标签二十二', '标签二十三', '标签二十四',
        ];
        const courseData = [
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            },
            {
                courseName: '三节棍教学视频',
                teacher: '小王老师'
            }
        ];
        const {location: {search}} = this.props
        let radioDefaultValue = search.slice(search.indexOf('id=') + 'id='.length, search.length)
        return(
            <section id='allType'>
                <Header 
                    user={{src:''}}
                />
                <main>
                    <section>
                        <Button type="primary" onClick={this.showDrawer} className='selectedTagBtn'>
                            查看当前已选标签
                        </Button>
                    </section>

                    <section className='types'>
                        <Tag style={{ marginRight: 8 }} color="#87d068">全部标签</Tag>
                        {tagsFromServer.map(tag => (
                            <CheckableTag
                                key={tag}
                                checked={this.state.selectedTags.indexOf(tag) > -1}
                                onChange={ checked => this.handleChange(tag, checked) }
                            >
                                {tag}
                            </CheckableTag>
                        ))}
                    </section>

                    <section className='courses'>
                        <section className='category'>
                            <span>课程类别</span>
                            <Radio.Group options={options} onChange={this.onChange} defaultValue={parseInt(radioDefaultValue)} />
                        </section>
                        <section className='container'>
                            <List
                                grid={{ gutter: 16, column: 5 }}
                                dataSource={courseData}
                                renderItem={item => (
                                <List.Item style={{marginTop: '40px'}}>
                                    <Card
                                        hoverable
                                        cover={
                                            <img
                                            alt="video"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                            />
                                        }
                                    >
                                        <Meta title={item.courseName} description={item.teacher} />
                                    </Card>
                                </List.Item>
                                )}
                            />

                            <Pagination defaultCurrent={1} total={200} />

                        </section>
                    </section>
                
                    <Drawer
                        title="当前已选标签"
                        placement="left"
                        closable={false}
                        onClose={this.closeDrawer}
                        visible={this.state.visible}
                        className='allType-selectedTags'
                    >
                        <section style={this.state.selectedTagStyle} className='selectedTags'>
                            {this.state.selectedTags.length === 0 ? <Tag closable>无</Tag> :null}
                            {this.state.selectedTags.map((item, index) => (
                                <Tag closable onClose={() => this.closeTag(index)} key={item}  color="#108ee9">
                                    {item}
                                </Tag>
                            ))}
                        </section>
                    </Drawer>
                </main>

                <Footer />  

                <BackTop />
            </section>
        )
    }
}