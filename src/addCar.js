import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './addCar.css';
import {CarContext} from './allDetails';

export default function AddCar(){

    const body = {
        width: 999,
        margin: '50px auto',
        border: '1px solid black'
    };

    const [allDetails, setAlldetails] = useContext(CarContext);


    const [img, setImg] = useState('');
    const [col, setCol] = useState('');
    const [colname, setColname] = useState('');
    const [subhead, setSubhead] = useState('');
    const [descrip, setDescrip] = useState('');

    const updateImg = (e) =>{
        setImg(e.target.value);
    };
    const updateCol = (e) =>{
        setCol(e.target.value);
    };
    const updateColname = (e) =>{
        setColname(e.target.value);
    };
    const updateSubhead = (e) =>{
        setSubhead(e.target.value);
    };
    const updateDescrip = (e) =>{
        setDescrip(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAlldetails((prev) => ({...prev,
            3:{
                items: [{
                    id:1,
                    img: img
                }],
                color: [{
                    col: col,
                    colname: colname
                }],
                side: [{
                    head: 'PRICE',
                    subhead: subhead
                },{
                    head: 'MAKE',
                    subhead: subhead
                },{
                    head: 'MODEL',
                    subhead: subhead
                },{
                    head: 'RATINGS',
                    subhead: subhead
                }],
                details:{
                    descrip: [{
                        para: descrip
                    }]
                },
                specs:[{
                    head: 'Exterior',
                    subhead:[{
                        para: ''
                    }]
                }]
            }
        }));
    };

    return (
        <div>
            <h1 style={{textAlign:'center'}}>ADD A NEW CAR</h1>
            <div style={body}>
                <form style={{margin:'40px 40px'}} onSubmit={handleSubmit}>
                    <h3>PICTURE</h3>
                    <input type="text" placeholder="Enter link of picture..." name="img" onChange={updateImg}/>
                    <h3>COLOR</h3>
                    <input type="text" placeholder="Enter hexcode of color..." name="col" onChange={updateCol}/>
                    <input type="text" placeholder="Enter name of color..." name="colname" onChange={updateColname}/>
                    <h3>PRICE</h3>
                    <input type="text" placeholder="Enter price in PKR..." name="subhead" onChange={updateSubhead}/>
                    <h3>MAKE</h3>
                    <input type="text" placeholder="Enter company name..." name="subhead"/>
                    <h3>MODEL</h3>
                    <input type="text" placeholder="Enter year and name of car..." name="subhead"/>
                    <h3>RATINGS</h3>
                    <input type="text" placeholder="Enter rating of car out of 10..." name="subhead"/>
                    <h3>DESCRIPTION</h3>
                    <input type="text" placeholder="Description of car..." name="descrip" onChange={updateDescrip}/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div style={{textAlign:'center'}}>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
}