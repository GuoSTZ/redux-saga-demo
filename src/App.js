import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import { LoginPageContainer } from './pages/login/container'
import  { RegisterPageContainer }  from './pages/register/container'
import VideoPage from './pages/video/views/index'
import OperationCenter from './pages/operationCenter/views/index'
import HomePage from './pages/homePage/views'
import AllType from './pages/allType/views/index'
import { PersonalCenterContainer } from './pages/personalCenter/container'
import DataStatistics from './pages/works/dataStatistics/views/index'
import './App.less'


const App = () => (
  <div>
    {/* <Router>
		  <div>
        <Route exact path="/" component={LoginPageContainer} />
        <Route path="/register" component={RegisterPageContainer} />
      </div>
		</Router> */}
    {/* <VideoPage /> */}
    <OperationCenter />
    {/* <HomePage /> */}
    {/* <PersonalCenterContainer /> */}
    {/* <DataStatistics /> */}
    {/* <AllType /> */}
  </div>
);

export default App;
