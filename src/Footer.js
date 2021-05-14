import React, { useContext, useEffect, useState } from 'react';

import { MobContext } from './mobile';

import './Footer.scss';

import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';


export default function Footer(){

    const [screen,setScreen] = useContext(MobContext);

      const [date, setDate] = useState('');

      useEffect(()=>  {
        var d = new Date();
        var n = d.getFullYear();
        setDate(n);
      },[]);


    return (
        <>
        {screen > 800 ? 
        <div className="footer-container">
            <div style={{display:'flex',flex:'1'}}>
                <div className="footer-left">
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Locations</p>
                </div>
                <div className="footer-right">
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

        <div className="footer-container">
            <div style={{display:'flex',flex:'1',flexDirection:'column'}}>
                <div className="footer-left">
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Locations</p>
                </div>
                <div className="footer-right">
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