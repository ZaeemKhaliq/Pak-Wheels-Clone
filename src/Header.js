import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';


import { MobContext } from './mobile';
import { AuthContext } from './Auth';

import { auth } from './firebase';
import {db} from './firebase';
import firebase from 'firebase';

import './index.css';
import './dropdown.css';


import {GrMenu} from 'react-icons/gr';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


function Header(){

    const [screen,setScreen] = useContext(MobContext);

    const { val } = useContext(AuthContext);
    const [flag,setFlag] = val;
    console.log(flag);

    const history = useHistory();

    const logoutClick = (event) => {
      event.preventDefault();
      auth.signOut().then(() => {
        console.log("User signed out");
        history.push('/');
      })
    }



    const headstyle = {
      width: '100%',
      backgroundColor: '#3B5FC7',
      height: 100,
      display: 'flex'
    };
    const headButton = {
      backgroundColor: 'transparent',
      color: 'white', 
      border: '2px solid black'
    };

    
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl1, setAnchorEl1] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const [anchorEl3, setAnchorEl3] = useState(null);


    const buttons = [{
      id:1,
      dropid:anchorEl,
      text: "New Cars",
      details: [{
        elem: "Find New Cars"
      },{
        elem: "Car Comparison"
      },{
        elem: "Reviews"
      }]
    },
    {
      id:2,
      dropid:anchorEl1,
      text: "Used Cars",
      details: [{
        elem: "Find Used Cars"
      },{
        elem: "Sell used car"
      },{
        elem: "Reviews"
      }]
    },
    {
      id:3,
      dropid:anchorEl2,
      text: "Bikes",
      details: [{
        elem: "Find New bikes"
      },{
        elem: "Find Used bikes"
      },{
        elem: "Reviews"
      }]
    },
    {
      id:4,
      dropid:anchorEl3,
      text: "Guide",
      details: [{
        elem: "Blog"
      },{
        elem: "Forum"
      },{
        elem: "Videos"
      }]
    }];

    const handleClick = (id,event) => {
      if(id==1){
        setAnchorEl(event.currentTarget);
      }
      else if(id==2){
        setAnchorEl1(event.currentTarget);
      }
      else if(id==3){
        setAnchorEl2(event.currentTarget);
      }
      else if(id==4){
        setAnchorEl3(event.currentTarget);
      }
      console.log(anchorEl);
    };

    const handleClose = (id) => {
      if(id==1){
        setAnchorEl(null);
      }
      else if(id==2){
        setAnchorEl1(null);
      }
      else if(id==3){
        setAnchorEl2(null);
      }
      else if(id==4){
        setAnchorEl3(null);
      }
    };
   


    
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show1");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbttn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show1')) {
            openDropdown.classList.remove('show1');
          }
        }
      }
    }


    
    return (
      <div style={headstyle}>
        <div style={{flex: '0.4'}}>
          <Link to="/">
            {screen > 800 ? 
                <img src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-b8b4c00b25fde9cc8f514dc4947c266a.svg" 
              alt="pakwheels"
              style={{height:'70%',width:'70%'}} />
          :
                <img style={{height:'100%',width:'100%'}} src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-b8b4c00b25fde9cc8f514dc4947c266a.svg" 
              alt="pakwheels"/>
            }
          </Link>
        </div>
        <div style={{alignSelf: 'center', flex: '0.6',justifyContent: screen > 800 ? 'space-around' : 'flex-end', display: 'flex'}}>
          



        {screen > 800 ? 
          buttons.map(item => {
            return (
              <div>
            
                <Button variant="contained" style={headButton} aria-controls="simple-menu" aria-haspopup="true" onClick={(e)=>handleClick(item.id,e)}>
                  {item.text}
                  <ArrowDropDownIcon style={{position: 'relative',left: 10}} />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={item.dropid}
                  keepMounted
                  open={Boolean(item.dropid)}
                  onClose={()=>handleClose(item.id)}
                >
                  {item.details.map(obj => {
                    return (
                      <MenuItem onClick={()=>handleClose(item.id)}>{obj.elem}</MenuItem>
                    );
                  })}
                </Menu>

              </div>
              
            );
          })
          :
          <div class="drop">
            <button onClick={myFunction} class="dropbttn"><GrMenu/></button>
            <div id="myDropdown" class="dropdown-content1">
              <a href="#">NEW CARS</a>
              <a href="#">USED CARS</a>
              <a href="#">BIKES</a>
              <a href="#">GUIDE</a>
            </div>
          </div>
          }

          <div>
            <Link to="/authenticate" style={{textDecoration:'none'}}>
              {flag == false ? 
              <Button style={headButton} variant="contained" className="login-button">LOGIN</Button> 
              :
              <Button style={headButton} variant="contained" className="logout-button" onClick={logoutClick}>LOGOUT</Button>
              }
            </Link>
          </div>

          
        </div>
      </div>
    );
  }

  export default withRouter(Header);