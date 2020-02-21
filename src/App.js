import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageWrapper from './components/PageWrapper/PageWrapper';
import Home from './components/Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Template from './Template/Template';
import Blog from './components/Pages/Blog/Blog';


function App() {
  return (

   
      <Router>

      <Route
          exact={true}
          path='/'
          render={props =>(
            <PageWrapper>
              <Blog {...props} />
            </PageWrapper>
          )}
        /> 

      </Router>
   
  );
}

export default App;
