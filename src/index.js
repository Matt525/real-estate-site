import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Discover from './Discover';
import Home_V1 from './Home_V1';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function Index() {
  return (

              <Router>
                  <div className="App">
                        <Switch>
                          <Route exact path="/">
                              <Home_V1 />
                          </Route>
                          <Route path="/discover">
                            <Discover />
                          </Route>
                        </Switch> 
                  </div>
              </Router>
  )
}

      
      ReactDOM.render(<Index />, document.getElementById('root'));

