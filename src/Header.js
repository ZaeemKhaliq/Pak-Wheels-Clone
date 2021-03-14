import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './index.css'
import { Link } from 'react-router-dom';

export default function Header(){
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
    const ulstyle = {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        color: 'white',
        backgroundColor: 'rgb(59, 95, 199)',
        display: 'none',
        position: 'absolute'
    };
    const link = {
      textDecoration: 'none',
      color: 'white'
    };
    const listitem = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 40
    };

    
    function buttonClick(val) {
      
      if(val===1){
      document.getElementById("dropdown").classList.toggle("show");
     
      }
      if(val===2){
      document.getElementById("dropdown1").classList.toggle("show"); 
      
      }
      if(val===3){
      document.getElementById("dropdown2").classList.toggle("show");
  
      }
      if(val===4){
      document.getElementById("dropdown3").classList.toggle("show");
     
      }
     
    }
   



    // window.onclick = function(event) {
    //   if (!event.target.matches('.dropbtn')) {
    //     var dropdowns = document.getElementsByClassName("dropdown-content");
    //     var i;
    //     for (i = 0; i < dropdowns.length; i++) {
    //       var openDropdown = dropdowns[i];
    //       if (openDropdown.classList.contains('show')) {
    //         openDropdown.classList.remove('show');
    //       }
    //     }
    //   }
    // }
    
    
    return (
      <div style={headstyle}>
        <div style={{flex: '0.4'}}>
          <Link to="/"><img src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-b8b4c00b25fde9cc8f514dc4947c266a.svg" 
          alt="pakwheels"
          style={{height:'70%',width:'70%'}} /></Link>
        </div>
        <div style={{alignSelf: 'center', flex: '0.6',justifyContent: 'space-around', display: 'flex'}}>
          
          <div>
            <Button variant="contained" style={headButton} onClick={()=>buttonClick(1)} className="dropbtn">New Cars 
              <ArrowDropDownIcon style={{position: 'relative',left: 10}} />
              
              <div>
                  <ul id="dropdown" className="dropdown-content">
                      <li style={listitem} id="listitem"><a href="#" style={link}>Find New Cars</a></li>
                      <li style={listitem} id="listitem"><a href="#" style={link}>Car Comparison</a></li>
                      <li style={listitem} id="listitem"><a href="#" style={link}>Reviews</a></li>
                  </ul>
              </div>
            </Button>
          </div>
          
          <div>
            <Button variant="contained" style={headButton} onClick={()=>buttonClick(2)} className="dropbtn">Used Cars
              <ArrowDropDownIcon style={{position: 'relative',left: 10}} />
              <div>
                  <ul id="dropdown1" className="dropdown-content">
                      <li style={listitem} id="listitem"><a href="#" style={link}>Find Used Cars</a></li>
                      <li style={listitem} id="listitem"><a href="#" style={link}>Sell your used car</a></li>
                      <li style={listitem} id="listitem"><a href="#" style={link}>Reviews</a></li>
                  </ul>
              </div>
            </Button>
          </div>
          
          <div>
            <Button variant="contained" style={headButton} onClick={()=>buttonClick(3)} className="dropbtn">Bikes
              <ArrowDropDownIcon style={{position: 'relative',left: 10}} />
              <div>
                  <ul id="dropdown2" className="dropdown-content">
                      <li style={listitem} id="listitem"><a href="#" style={link}>Find New Bikes</a></li>
                      <li style={listitem} id="listitem"><a href="#" style={link}>Find Used Bikes</a></li>
                      <li style={listitem} id="listitem"><a href="#" style={link}>Sell your bike</a></li>
                  </ul>
              </div>
            </Button>
          </div>
          
          <div>
            <Button variant="contained" style={headButton} onClick={()=>buttonClick(4)} className="dropbtn">Guide
              <ArrowDropDownIcon style={{position: 'relative',left: 10}} />
              <div>
                  <ul id="dropdown3" className="dropdown-content">
                      <li style={listitem} id="listitem"><a href="#" style={link}>Blog</a></li>
                      <li style={listitem} id="listitem"><a href="#" style={link}>Forum</a></li>
                      <li style={listitem} id="listitem"><a href="#" style={link}>Videos</a></li>
                  </ul>
              </div>
            </Button>
          </div>
          
        </div>
      </div>
    );
  }