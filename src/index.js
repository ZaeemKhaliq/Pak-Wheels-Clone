import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import { CarDetail } from './CarDetail';
import { AllDetails } from './allDetails';
import { Mobile } from './mobile';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import AuthForm from './Forms/AuthForm';
import Auth from './Auth';

import './index.css';



function Main(){
  

  return (
    
    <Router>
      <div>
        <Auth>
          
            <Mobile>
              <Header />
              
              <AllDetails>
                <Switch>
                
                  <Route path="/" exact component={Body}/>
                  <Route path="/carDetail/:id" component={CarDetail}/>
                  <Route path="/authenticate" component={AuthForm}/>
                  
                </Switch>
              </AllDetails>
              
              <Footer />
            </Mobile>
         
        </Auth>
      </div>
    </Router>
  );
}

ReactDOM.render(<Main/>, document.getElementById('root'));