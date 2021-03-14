import React from 'react';
import ReactDOM from 'react-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer(){

    const footstyle = {
        width: '100%',
        backgroundColor: 'black',
        height: 100,
        display: 'flex',
        position: 'relative'
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


    return (
        <div style={footstyle}>
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
    );
}