import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import { LoginPageContainer } from './pages/login/container'
import  RegisterPage  from './pages/register/views/index.js'
import './App.less'

const App = () => (
  <div>
    <Router>
		  <div>
        <Route exact path="/" component={LoginPageContainer} />
        <Route path="/register" component={RegisterPage} />
      </div>
		</Router>
  </div>
);

export default App;
