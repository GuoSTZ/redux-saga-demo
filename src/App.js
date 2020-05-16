import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';

import { LoginPageContainer } from './pages/login/container'
import  { RegisterPageContainer }  from './pages/register/container'
import { PersonalCenterContainer } from './pages/personalCenter/container'
import { OperationCenterContainer } from './pages/operationCenter/container'
import {VideoPageContainer} from './pages/video/container'
import {HomePageContainer} from './pages/homePage/container'

import AllType from './pages/allType/views/index'


import DataStatistics from './pages/works/dataStatistics/views/index'

import './App.less'


const App = () => (
  <div>
    <Router>
		  <div>
        <Route exact path="/" component={LoginPageContainer} />
        <Route path="/register" component={RegisterPageContainer} />
        <Route path="/personalCenter" component={PersonalCenterContainer} />
        <Route exact path="/operationCenter" component={OperationCenterContainer} />
        <Route exact path="/videoPage" component={VideoPageContainer} />
        <Route exact path="/homePage" component={HomePageContainer} />
      </div>
		</Router>
    {/* <VideoPage /> */}
    {/* <HomePage /> */}
    {/* <PersonalCenterContainer /> */}
    {/* <DataStatistics /> */}
    {/* <AllType /> */}
  </div>
);

export default App;
