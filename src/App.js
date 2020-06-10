import React from 'react';
import { BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom';

import { LoginPageContainer } from './pages/login/container'
import { RegisterPageContainer }  from './pages/register/container'
import { PersonalCenterContainer } from './pages/personalCenter/container'
import { OperationCenterContainer } from './pages/operationCenter/container'
import { VideoPageContainer } from './pages/video/container'
import { HomePageContainer } from './pages/homePage/container'
import { AllTypeContainer } from './pages/allType/container'
import { CoursePageContainer } from './pages/coursePage/container'
import { PersonalPageContainer } from './pages/personalPage/container'


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
        <Route exact path="/allType" component={AllTypeContainer} />
        <Route exact path="/coursePage" component={CoursePageContainer} />
        <Route exact path="/personalPage" component={PersonalPageContainer} />
      </div>
		</Router>
  </div>
);

export default App;
