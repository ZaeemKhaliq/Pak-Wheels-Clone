import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import {CarDetail} from './carDetail';
import AddCar from './addCar';
import {AllDetails} from './allDetails'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

function Main(){
  return (
    
    <Router>
      <div>
        <AllDetails>
          <Header />
          
          <Switch>
          
            
              <Route path="/" exact component={Body}/>
              <Route path="/carDetail/:id" component={CarDetail}/>
            

          </Switch>
          
          <Footer />
        </AllDetails>
      </div>
    </Router>
  );
}

ReactDOM.render(<Main/>, document.getElementById('root'));