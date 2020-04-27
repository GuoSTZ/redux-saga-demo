import React from 'react'
import { Checkbox, Tag, BackTop, Pagination, List, Card, Drawer, Button, Affix } from 'antd';
import Header from '../../../components/header'
import Footer from '../../../components/footer'

import './index.less'

const { CheckableTag } = Tag;
const { Meta } = Card

export default class AllType extends React.Component{
    state = {
        selectedTags: [],
        selectedTagStyle: {},
        visible: false
    };
    
    handleChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
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
            { label: '正在直播', value: '正在直播' },  // 状态，检查有什么课程正在直播
            { label: 'VIP课程', value: 'VIP课程' },   // 可以理解为需要付费的课程
            { label: '通用课程', value: '通用课程' },  // 可以理解为基础课程
            { label: '免费课程', value: '免费课程' },  // 可以理解为不需要付费的课程
            { label: '直播课程', value: '直播课程' },  // 以直播的形式进行教学
            { label: '视频课程', value: '视频课程' },  // 以视频的形式进行教学
        ];
        const tagsFromServer = [
            '分类一', '分类二', '分类三', '分类四',
            '分类五', '分类六', '分类七', '分类八',
            '分类九', '分类十', '分类十一', '分类十二',
            '分类十三', '分类十四', '分类十五', '分类十六',
            '分类十七', '分类十八', '分类十九', '分类二十',
            '分类二十一', '分类二十二', '分类二十三', '分类二十四',
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
        return(
            <section id='allType'>
                <Header 
                    user={{src:''}}
                />
                <main>
                    <section>
                        <Button type="primary" onClick={this.showDrawer} className='selectedTagBtn'>
                            查看当前已选类别
                        </Button>
                    </section>

                    <section className='types'>
                        <Tag style={{ marginRight: 8 }} color="#87d068">全部分类</Tag>
                        {tagsFromServer.map(tag => (
                            <CheckableTag
                                key={tag}
                                checked={this.state.selectedTags.indexOf(tag) > -1}
                                onChange={checked => this.handleChange(tag, checked)}
                            >
                                {tag}
                            </CheckableTag>
                        ))}
                    </section>

                    <section className='courses'>
                        <section className='category'>
                            <span>课程类别</span>
                            <Checkbox.Group options={options} onChange={this.onChange} />
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

                            <Pagination defaultCurrent={6} total={200} />

                        </section>
                    </section>
                
                    <Drawer
                        title="当前已选类别"
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