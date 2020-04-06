import React from 'react'
import './index.less'

export default class HomePage extends React.Component{
    componentDidMount(){

    }
    render(){
        return(
            <div>
                <header>

                </header>
                <main>
                    <nav>
                        <ul>
                            <li>免费教学视频</li>
                            <li>收费教学视频</li>
                            <li>直播</li>
                        </ul>
                    </nav>
                    <div className="container">
                        <ul>
                            <li>
                                <header className="title">
                                    <h2>免费教学视频</h2>
                                    <a>更多</a>
                                </header>
                                <ul className="videos">
                                    <li>
                                        <div>
                                            <a>
                                                <img src="" />
                                            </a>
                                        </div>
                                        <a>视频名称</a>
                                        <a>授课教师</a>
                                    </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </li>
                            <li>收费教学视频</li>
                            <li>直播</li>
                        </ul>
                    </div>
                </main>
            </div>
        )
    }
}