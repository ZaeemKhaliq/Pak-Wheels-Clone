import React, { createContext, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Carousel from 'react-elastic-carousel';
import {CarContext} from './allDetails'
import {db} from './firebase';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';


export const CarDetail = props => {

  /* STYLINGS */

const sidetab = {
  backgroundColor: 'rgb(59, 95, 199)',
  height: 50,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const bodydiv = {
    width: 999,
    border: '1px solid black',
    margin: '50px auto',
    display: 'flex',
    paddingBottom: 20
  }

const p = {
  textAlign: 'center', 
  color:'white', 
  fontWeight: 'bold', 
  margin:0
}

const inputButton = {
  height: 40,
  width: 300,
  fontSize: 18,
  backgroundColor: 'rgb(59, 95, 199)',
  color: 'white',
  border : '2px solid black',
  borderRadius: 3,
  cursor: 'pointer',
  fontFamily: 'Roboto',
  fontWeight: 'bold'
};


  const num = props.match.params.id;

  const [allDetails, setAlldetails] = useContext(CarContext);
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

    <div style={{textAlign: 'center'}}>
    <Button variant="contained" color="primary" style={{backgroundColor: '#3B5FC7',marginTop:50}} onClick={handleClick} id="addBut">Add Details</Button>
    </div>

    <div id="addDetails" style={{display:'none'}}>
      <h1 style={{textAlign:'center'}}>ADD DETAILS OF THE CAR!</h1>
      <p style={{textAlign:'center'}}>(Only fill those fields that you want to add, leave others empty)</p>
      <p style={{color:'red',textAlign:'center'}}>(Where there are two fields, both are required otherwise it will not be added)</p>
      <div style={bodydiv}>
        <form style={{margin:'30px 30px',width:'100%'}} onSubmit={handleSubmit}>
          <div style={{display:'flex',justifyContent:'space-between'}}>
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
              <textarea cols="60" rows="10" name="descrip" placeholder="Enter Description..." value={all.descrip || ""} onChange={handleChange} id="textarea"></textarea>
              <br></br>
              <h3>SPECS AND FEATURES</h3>
              <input type="text" name="spechead" placeholder="Enter Heading" value={all.spechead || ""} onChange={handleChange}/>
              <br></br>
              <textarea cols="60" rows="10" name="specsub" placeholder="Enter sub-heading" value={all.specsub || ""} onChange={handleChange} id="textarea"></textarea>
              {/* <input type="text" name="specsub" placeholder="Enter Sub-heading" value={all.specsub || ""} onChange={handleChange}/> */}
            </div>
          </div>
          <div style={{display: 'flex',justifyContent:'space-around',marginTop:50}}>
            <input type="submit" value="SUBMIT" style={inputButton}/>
            <input type="button" value="CANCEL" style={inputButton} onClick={handleCancel}/>
          </div>
        </form>
      </div>
    </div>




     
      <div style={bodydiv}>
        <div style={{flex:'0.7'}}>

          <div style={{textAlign: 'center'}}>
            
               {allDetails.map((item,index) => {
                
                return(
                  <>
                  {index != num? null :
                  <Carousel>
                    
                    {
                    item.data.items.map(obj => {
                      
                    return (
                      <div>
                        <div style={{textAlign:'right'}}>
                          <button style={{color:'white',border:'none',fontSize:18}} id="xBut" onClick={()=>handleDeleteImg(obj.img)}>X</button>
                        </div>
                        <img style={{width: '80%'}} key={obj.id} src={obj.img} />
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



          <div style={{width:'95%',margin:'0px 0px 0px 10px'}}>
            <h3>DESCRIPTION</h3>
            {allDetails.map((item,index)=>{          
                return (
                  <>
                  {index != num?null:
                  item.data.details.descrip.map(obj => {
                    return (
                      <div>
                        <div style={{textAlign:'right'}}>
                          <button style={{color:'red',border:'none',fontSize:14,height:14,width:18,position:'absolute',backgroundColor:'transparent'}} id="xBut1" onClick={()=>handleDeletePara(obj.para)}>X</button>
                        </div>
                        <p>{obj.para}</p>
                      </div>
                    );
                  })}
                    
                  </>
                );
            })
            }
          </div>

          <br></br>



        <div style={{width:'95%',margin:'0 auto'}}>
            <h3>COLORS</h3>

            <div style={{display:'flex',justifyContent:'space-around'}}>

              {allDetails.map((item,index) => {
                    return (
                    <>
                    {index != num?null:
                    item.data.color.map(obj => {
                      return (
                        <div style={{textAlign: 'center'}}>
                          <div style={{textAlign:'right'}}>
                            <button style={{color:'red',border:'none',fontSize:12,position:'absolute',backgroundColor:'transparent'}} id="xBut1" onClick={()=>handleDeleteColor(obj.col,obj.colname)}>X</button>
                          </div>
                          <FiberManualRecordIcon style={{color: obj.col,fontSize:90}}></FiberManualRecordIcon>
                          <p style={{margin:0}}>{obj.colname}</p>
                        </div>
                      );
                    })}
                    
                    </>
                );
              })
                }

            </div>
        </div>


          <br></br>


          <div style={{width:'95%',margin:'0 auto'}}>
            <h3>SPECS AND FEATURES</h3>

            <div style={{width:'95%',margin:'0 auto'}}>

                {allDetails.map((item,index) => {
                  return (
                    <>
                    {index != num ? null :
                    item.data.specs.map(obj => {
                      return (
                        <>
                        <div style={{textAlign:'right'}}>
                              <button style={{color:'red',border:'none',fontSize:14,position:'absolute',backgroundColor:'transparent'}} id="xBut1" onClick={()=>handleDeleteSpecs(obj.head,obj.subhead)}>X</button>
                            </div>
                        <h4>{obj.head}</h4>
                        {obj.subhead.map(para => {
                          return (
                            <>
                            
                            <p>{para.para}</p>
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
          

        </div>

        <div style={{flex:'0.3',backgroundColor: '#F7F7F7'}}>
           {allDetails.map((item,index) => {
                    return (
                    <>
                    {index != num ? null :
                    item.data.side.map(obj => {
                      return (
                        <div>
                          <div style={sidetab}>
                            <div style={{textAlign:'right'}}>
                              <button style={{color:'red',border:'none',fontSize:14,position:'absolute',backgroundColor:'transparent'}} id="xBut1" onClick={()=>handleDeleteSide(obj.head,obj.subhead)}>X</button>
                            </div>
                            <p style={p}>{obj.head}</p>
                          </div>
                          <p style={{textAlign: 'center',fontSize: 22,fontWeight:'bold'}}>{obj.subhead}</p>
                        </div>
                      );
                    })}
                    
                    </>
                    );
                })
            
            }
        </div>

      </div>
      
    </main>
  );
}
