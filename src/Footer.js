import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import {CarContext} from './allDetails';

export default function Footer(){

    const {value,value2} = useContext(CarContext);
    const [screen,setScreen] = value2;
    console.log(screen);

    const footstyle = {
        width: '100%',
        backgroundColor: 'black',
        display: 'flex',
        position: 'relative',
        flexDirection:'column'
      };

      const footleft ={
        flex:0.6,
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'space-around'
      };

      const footright = {
        flex:0.4,
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
      };


      const [date, setDate] = useState('');

      useEffect(()=>  {
        var d = new Date();
        var n = d.getFullYear();
        setDate(n);
      },[]);


    return (
        <>
        {screen > 800 ? 
        <div style={footstyle}>
            <div style={{display:'flex',flex:'1'}}>
                <div style={footleft}>
                    <p style={{color: 'white'}}>About Us</p>
                    <p style={{color: 'white'}}>Contact Us</p>
                    <p style={{color: 'white'}}>Locations</p>
                </div>
                <div style={footright}>
                <div>
                    <p style={{color: 'white'}}>Follow Us On</p>
                </div>

                <div>
                    <Button>
                        <FacebookIcon style={{color: 'rgb(66 103 178)'}} />
                    </Button>
                    <Button>
                        <TwitterIcon style={{color:'#00acee'}} />
                    </Button>
                    <Button>
                        <YouTubeIcon style={{color:'red'}} />
                    </Button>
                    <Button>
                        <InstagramIcon id="instagram"/>
                    </Button>
                </div>
            </div>
            </div>
            <div style={{backgroundColor:'black'}}>
                <p style={{color:'white',textAlign:'center'}}>Copyright ® {date}</p>
                <p style={{color:'white',textAlign:'center'}}>Created By <a href="https://github.com/ZaeemKhaliq" style={{color:'rgb(0, 172, 238)'}}>Zaeem Khaliq</a></p>
            </div>
        </div>
        :

        <div style={footstyle}>
            <div style={{display:'flex',flex:'1',flexDirection:'column'}}>
                <div style={footleft}>
                    <p style={{color: 'white'}}>About Us</p>
                    <p style={{color: 'white'}}>Contact Us</p>
                    <p style={{color: 'white'}}>Locations</p>
                </div>
                <div style={footright}>
                <div>
                    <p style={{color: 'white'}}>Follow Us On</p>
                </div>

                <div>
                    <Button>
                        <FacebookIcon style={{color: 'rgb(66 103 178)'}} />
                    </Button>
                    <Button>
                        <TwitterIcon style={{color:'#00acee'}} />
                    </Button>
                    <Button>
                        <YouTubeIcon style={{color:'red'}} />
                    </Button>
                    <Button>
                        <InstagramIcon id="instagram"/>
                    </Button>
                </div>
            </div>
            </div>
            <div style={{backgroundColor:'black'}}>
                <p style={{color:'white',textAlign:'center'}}>Copyright ® {date}</p>
                <p style={{color:'white',textAlign:'center'}}>Created By <a href="https://github.com/ZaeemKhaliq" style={{color:'rgb(0, 172, 238)'}}>Zaeem Khaliq</a></p>
            </div>
        </div>
        }
        </>
    );
}