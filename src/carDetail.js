import React, { createContext, useContext, useEffect, useState } from 'react';

import { CarContext } from './allDetails';
import { MobContext } from './mobile';
import { AuthContext } from './Auth';

import {db} from './firebase';
import firebase from 'firebase';

import Carousel from 'react-elastic-carousel';

import './index.css';
import './CarDetail.scss';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


export const CarDetail = props => {

  const num = props.match.params.id;


  const {value} = useContext(CarContext);

  const [allDetails, setAlldetails] = value;

  const [screen,setScreen] = useContext(MobContext);

  const { val } = useContext(AuthContext)
  const [flag, setFlag] = val;


  console.log(screen);
  console.log(allDetails);
  console.log(num);

  

  // let cond;
  // allDetails.map((item,index) => {
  //   return index != num ? null 
  //   : 
  //   cond = item.data.color.some(obj => {
  //     return obj.col == "" || obj.colname == "";
  //   })
  // });
  // console.log(cond);
  


  const [all, setAll] = useState({col: '', colname: '',img:'',head:'',subhead:'',descrip:'',spechead:'',specsub:''});

  const handleChange = (e) => {
    const val = e.target.value;
    const name= e.target.name;
    setAll((prev) => ({
      ...prev,
      [name]: val
    }));

    console.log(all);
  };


  
  const handleSubmit = (e) => {
    e.preventDefault();
    let attributes = all;


    /*FOR SPECS ARRAY START*/
    let specVal;
    allDetails.map((item,index) => index!=num?null: specVal = item.data.specs.map(obj => obj.head));
    console.log(specVal);

    let specVal1;
    allDetails.map((item,index) => index!=num?null: specVal1 = item.data.specs.map(obj=> obj.subhead.map(ite => ite.para)));
    console.log(specVal1);
    
    let specArr = [];
    let specObj = {};
    let sub = [];

    for(var i=0;i<specVal.length;i++){
      for(var j=0;j<specVal1[i].length;j++){

        sub.push({
          para:specVal1[i][j]
        })
      }

      console.log(sub);

      specObj = {
        head: specVal[i],
        subhead: sub
      }
      specArr.push(specObj);
      sub=[];
    }
    console.log(specArr);






    for(var i=0;i<1;i++){
      let flag=false;
      for(var j=0;j<specArr.length;j++){
        if(attributes.spechead == specArr[j].head){
          
          
          // let specLen = {
          //   para:attributes.specsub
          // }
          // specArr[j].subhead.push(specLen);
          // console.log(specArr[j].subhead);

          specArr[j] = {
            head: specArr[j].head,
            subhead: [...specArr[j].subhead,{
              para: attributes.specsub
            }]
          };

          flag=true;
        }
        else{
          continue;
        }
      }

      if(flag==false){
        specObj = {
          head: attributes.spechead,
          subhead: [{
            para: attributes.specsub
          }]
        };


        if(specObj.head == "" || specObj.subhead[0].para==""){
          break;
        }
        else{
        specArr.push(specObj);
        }
      }
    }

  
    console.log(specArr);

    /*FOR SPECS ARRAY END*/
    



    if(attributes.col == "" || attributes.colname == ""){

    }
    else{
      db.collection("CarDetails").doc(`${num}`).update({
        color: firebase.firestore.FieldValue.arrayUnion({
          col: attributes.col,
          colname: attributes.colname
        })
      })
    }



    if(attributes.img == ""){

    }
    else{
      db.collection("CarDetails").doc(`${num}`).update({
        items: firebase.firestore.FieldValue.arrayUnion({
          img: attributes.img
        })
      }).then(() => {
        alert("Image Added Successfully!");
      })
    }


    if(attributes.head == "" || attributes.subhead == ""){

    }
    else{
      db.collection("CarDetails").doc(`${num}`).update({
        side: firebase.firestore.FieldValue.arrayUnion({
          head: attributes.head,
          subhead: attributes.subhead
        })
      })
    }


    if(attributes.descrip==""){

    }
    else{
      db.collection("CarDetails").doc(`${num}`).update({
        ['details.descrip']: firebase.firestore.FieldValue.arrayUnion({
            para: attributes.descrip
        })
      
      })
    }



    // if(attributes.spechead == "" || attributes.specsub == ""){

    // }
    // else{

      
    //   let flag=false;

    //   if(flag==false){
    //   db.collection("CarDetails").doc(`${num}`).update({
    //     specs: firebase.firestore.FieldValue.arrayUnion({
    //       head: attributes.spechead,
    //       subhead: [{
    //         para: attributes.specsub
    //       }]
    //     })
    //   })
    // }

    // }



    if(attributes.spechead == "" || attributes.specsub == ""){

    }
    else{
    db.collection("CarDetails").doc(`${num}`).update({
      specs: specArr
    }).then((success) => {
    alert(success);
    })
  }



  
    setAll({col: '', colname: '',img:'',head:'',subhead:'',descrip:'',spechead:'',specsub:''});
    document.getElementById("addDetails").style.display = "none";
    document.getElementById("addBut").style.display = "";
  };
  

  const handleClick = () => {
    document.getElementById("addDetails").style.display = "block";
    document.getElementById("addBut").style.display = "none";
  };

  const handleCancel = () => {
    setAll({col: '', colname: '',img:'',head:'',subhead:'',descrip:'',spechead:'',specsub:''});
    document.getElementById("addDetails").style.display = "none";
    document.getElementById("addBut").style.display = "";
  };




  const handleDeleteImg = (img) =>{
    db.collection("CarDetails").doc(`${num}`).update({
      items: firebase.firestore.FieldValue.arrayRemove({
        img:img
      })
    })
  }

  const handleDeletePara = (para) =>{
    db.collection("CarDetails").doc(`${num}`).update({
      ['details.descrip']: firebase.firestore.FieldValue.arrayRemove({
        para: para
    })
    })
  }

  const handleDeleteColor = (col,colname) =>{
    db.collection("CarDetails").doc(`${num}`).update({
      color: firebase.firestore.FieldValue.arrayRemove({
        col: col,
        colname:colname
    })
    })
  }

  const handleDeleteSide = (head,subhead) =>{
    db.collection("CarDetails").doc(`${num}`).update({
      side: firebase.firestore.FieldValue.arrayRemove({
        head: head,
        subhead:subhead
    })
    })
  }

  const handleDeleteSpecs = (head,subhead) =>{
    db.collection("CarDetails").doc(`${num}`).update({
      specs: firebase.firestore.FieldValue.arrayRemove({
        head: head,
        subhead:subhead
    })
    })
  }



   return (  
    <main>
    
    {flag == true ? 
    <div className="add-details-button-container">
    <Button variant="contained" color="primary" className="add-details-button" onClick={handleClick} id="addBut">Add Details</Button>
    </div>
    :
    null
    }

    <div id="addDetails" className="add-details-container">
      <h1 className="add-details-heading">ADD DETAILS OF THE CAR!</h1>
      <p>(Only fill those fields that you want to add, leave others empty)</p>
      <p>(Where there are two fields, both are required otherwise it will not be added)</p>
      <div className="add-details-form-container">
        <form className="add-details-form" onSubmit={handleSubmit}>
          <div className="form-division">
            <div>
              <h3>COLORS</h3>
              <input type="text" name="col" value={all.col || ""} placeholder="Enter color code..." onChange={handleChange}/>
              <br></br>
              <input type="text" name="colname" value={all.colname || ""} placeholder="Enter color name..." onChange={handleChange}/>
              <br></br>
              <h3>ADD IMAGE TO CAROUSEL</h3>
              <input type="text" name="img" value={all.img || ""} placeholder="Enter image link..." onChange={handleChange}/>
              <br></br>
              <h3>SIDETAB</h3>
              <input type="text" name="head" placeholder="Enter Heading" value={all.head || ""} onChange={handleChange}/>
              <br></br>
              <input type="text" name="subhead" placeholder="Enter Sub-heading" value={all.subhead || ""} onChange={handleChange}/>
              <br></br>
            </div>
            <div>
              <h3>DESCRIPTION</h3>
              <textarea cols={screen > 800 ? "60" : "40"} rows="10" name="descrip" placeholder="Enter Description..." value={all.descrip || ""} onChange={handleChange} id="textarea"></textarea>
              <br></br>
              <h3>SPECS AND FEATURES</h3>
              <input type="text" name="spechead" placeholder="Enter Heading" value={all.spechead || ""} onChange={handleChange}/>
              <br></br>
              <textarea cols={screen > 800 ? "60" : "40"} rows="10" name="specsub" placeholder="Enter sub-heading" value={all.specsub || ""} onChange={handleChange} id="textarea"></textarea>
              {/* <input type="text" name="specsub" placeholder="Enter Sub-heading" value={all.specsub || ""} onChange={handleChange}/> */}
            </div>
          </div>
          <div className="add-details-buttons-container">
            <input type="submit" value="SUBMIT" />
            <input type="button" value="CANCEL" onClick={handleCancel}/>
          </div>
        </form>
      </div>
    </div>




     
      <div className="main-container">
        <div className="main-container-left">


          {/* CAROUSEL STARTS */}
          <div className="carousel-container">
            <h3 className="carousel-heading">IMAGE CAROUSEL</h3>
               {allDetails.map((item,index) => {
                
                return(
                  <>
                  {index != num? null :
                  <Carousel>
                    
                    {
                    item.data.items.map(obj => {
                      
                    return (
                      <div>
                        {flag == true ? 
                        <div className="carousel-delete">
                          <button className="carousel-delete-button" id="xBut" onClick={()=>handleDeleteImg(obj.img)}>X</button>
                        </div>
                        :
                        null
                        }
                        <img key={obj.id} src={obj.img} className="carousel-image" />
                      </div>
                    );
                    })}
                  </Carousel>
                  }
                  </>
                  );
                })   
                }
          </div>
          {/* CAROUSEL ENDS */}



          {/* DESCRIPTION STARTS */}
          <div className="description-container">
            
            <h3 className="description-heading">DESCRIPTION</h3>
            {allDetails.map((item,index)=>{          
                return (
                  <>
                  {index != num?null:
                  item.data.details.descrip.map(obj => {
                    return (
                      <div>
                        {flag == true ? 
                        <div className="description-delete">
                          <button className="description-delete-button" id="xBut1" onClick={()=>handleDeletePara(obj.para)}>X</button>
                        </div>
                        :
                        null
                        }
                        <p className="description-paragraph">{obj.para}</p>
                      </div>
                    );
                  })}
                    
                  </>
                );
            })
            }
            
          </div>
          {/* DESCRIPTION ENDS */}

          <br></br>


        {/* COLORS STARTS */}
        <div className="colors-container">
            <h3 className="colors-heading">COLORS</h3>

            <div className="colors-division">

              {allDetails.map((item,index) => {
                    return (
                    <>
                    {index != num?null:
                    item.data.color.map(obj => {
                      return (
                        <div className="color-name-container">
                          {flag == true ? 
                          <div className="color-delete">
                            <button className="color-delete-button" id="xBut1" onClick={()=>handleDeleteColor(obj.col,obj.colname)}>X</button>
                          </div>
                          :
                          null
                          }
                          <FiberManualRecordIcon style={{color: obj.col,fontSize:90}}></FiberManualRecordIcon>
                          <p className="color-name">{obj.colname}</p>
                        </div>
                      );
                    })}
                    
                    </>
                );
              })
                }

            </div>
        </div>
        {/* COLORS ENDS */}


          <br></br>



        {/* SPECS AND FEATURES STARTS */}
          <div className="specs-container">
            <h3 className="specs-heading">SPECS AND FEATURES</h3>

            <div className="specs-division">

                {allDetails.map((item,index) => {
                  return (
                    <>
                    {index != num ? null :
                    item.data.specs.map(obj => {
                      return (
                        <>
                        {flag == true ? 
                        <div className="specs-delete">
                          <button className="specs-delete-button" id="xBut1" onClick={()=>handleDeleteSpecs(obj.head,obj.subhead)}>X</button>
                        </div>
                        :
                        null
                        }
                        <h4 className="specs-subheading">{obj.head}</h4>
                        {obj.subhead.map(para => {
                          return (
                            <>
                            
                            <p className="specs-paragraph">{para.para}</p>
                            </>
                          );
                        })}
                        </>
                      );
                    })}
                    </>
                  );
                })}

            </div>

          </div>
          {/* SPECS AND FEATURES ENDS */}
          

        </div>

        <div className="main-container-right">
          
          
          {/* SIDETAB STARTS */}
          <div className="sidetab-container">
            <h3 className="sidetab-heading">SIDETAB</h3>
          </div>
          <div className="sidetab-heading-separator">

          </div>
           {allDetails.map((item,index) => {
                    return (
                    <>
                    {index != num ? null :
                    item.data.side.map(obj => {
                      return (
                        <div>
                          <div className="sidetab-container">
                            {flag == true ? 
                            <div className="sidetab-delete">
                              {/* <button style={{color:'red',border:'none',fontSize:14,position:'absolute',backgroundColor:'transparent'}} id="xBut1" onClick={()=>handleDeleteSide(obj.head,obj.subhead)}>X</button> */}
                              <DeleteForeverIcon className="sidetab-delete-button" onClick={()=>handleDeleteSide(obj.head,obj.subhead)}></DeleteForeverIcon>
                            </div>
                            :
                            null
                            }
                            <p className="sidetab-heading">{obj.head}</p>
                          </div>
                          <p className="sidetab-subheading">{obj.subhead}</p>
                        </div>
                      );
                    })}
                    
                    </>
                    );
                })
            
            }

            {/* SIDETAB ENDS */}
        </div>

      </div>
      
    </main>
  );
}
