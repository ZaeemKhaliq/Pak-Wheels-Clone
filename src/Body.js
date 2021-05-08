import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {db} from './firebase';
import { AllDetails, CarContext } from './allDetails';
import firebase from 'firebase';
import Fade from 'react-reveal/Fade';
import { useConfirm } from 'material-ui-confirm';
import ReactPaginate from 'react-paginate';

export default function Body(props){

    const {value,value2} = useContext(CarContext);
    const [screen,setScreen] = value2;
    // console.log(screen);

    
    const body = {
        margin: '50px auto',
        width:'999px',
        border:'1px solid black',
        display: 'flex',
        justifyContent: 'start',
        flexWrap: 'wrap'
    };

    const divstyle = {
        maxWidth:'250px',
        margin: '50px 41px',
        backgroundColor: 'white'
    }
    const pstyle = {
        margin: 0,
        textAlign: 'center',
        
    }
    const pstyle1 = {
        margin: 0,
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold'
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

    const ids = {
        1: 1,
        2: 2
    };
    
    const mobBody = {
        border:'1px solid black',
        display: 'flex',
        width: 320,
        flexWrap: 'wrap',
        margin: '50px auto'
    }



    const [car, setCar] = useState([]);
    const [delVal, setDelVal] = useState([]);

    useEffect(() => {
        // db.collection('Cars').get().then((snapShot) => {
        //     let c = [];
        //     snapShot.forEach((doc) => {
        //         let temp = {
        //             data: doc.data(),
        //             id:doc.id
        //         };
        //     c.push(temp);
        //     })

        //     setCar(c);
        // })
        
        db.collection("Cars")
			.onSnapshot((snapShot)=>{
				setCar(snapShot.docs.map(doc => 
					({
                        id:doc.id,
                        data:doc.data()})
                        ))
					
			})

        db.collection("DelArray")
			.onSnapshot((snapShot)=>{
				setDelVal(snapShot.docs.map(doc => 
					({
                        id:doc.id,
                        data:doc.data()})
                        ))
					
			})        

            
    },[]);


    const len = Object.keys(car).length;
    const lenInString = len.toString();
    // console.log(car);
    // console.log(len);
    // console.log(lenInString);

    

    // const [cars, setCars] = useState([{
    //     img: 'https://cache4.pakwheels.com/system/car_generation_pictures/4962/medium/Honda_Civic_Facelift_2019.jpg?1555253134',
    //     nam: 'Honda Civic 2021',
    //     price: 'PKR 37-47 lacs',
    //     linkto: `/carDetail/${ids[1]}`
    // },{
    //     img: 'https://cache2.pakwheels.com/system/car_generation_pictures/5260/medium/alto.jpg?1595597920',
    //     nam: 'Suzuki Alto 2021',
    //     price: 'PKR 12-16 lacs',
    //     linkto: `/carDetail/${ids[2]}`
    // },{
    //     img: 'https://cache2.pakwheels.com/system/car_generation_pictures/5261/medium/city.jpg?1595597984',
    //     nam: 'Honda City 2021',
    //     price: 'PKR 24-28 lacs'
    // },{
    //     img: 'https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674',
    //     nam: 'Toyota Corolla 2021',
    //     price: 'PKR 32-40 lacs'
    // },{
    //     img: 'https://cache3.pakwheels.com/system/car_generation_pictures/4564/medium/Suzuki_Cultus_2017_(1).jpg?1493101375',
    //     nam: 'Suzuki Cultus 2021',
    //     price: 'PKR 18-22 lacs'
    // },]);
    


    const [all, setAll] = useState({img:'',nam:'',price:''});

    const handleChange = (e) => {
        const val= e.target.value;
        const name=e.target.name;
        setAll((prev) => ({...prev,[name]:val}));
        console.log(all);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // setCar((prev) => [...prev,{carImg:all.img,carNam:all.nam,carPrice:all.price}]);

        let attributes = all;



    console.log(delVal);

    let delArr = [];
    delVal.map(item => delArr = item.data.val);
    console.log(delArr);

    let flag;

    if(delArr.length > 0){
        flag = true;
    }
    else{
        flag = false;
    }

    console.log(flag);




    if(flag==true){
        let popVal = delArr.pop();
        console.log(popVal);
        db.collection("Cars").doc(`${popVal}`).set({
            carImg: attributes.img,
            carNam: attributes.nam,
            carPrice: attributes.price,
            linkto: `/carDetail/${popVal}`
        }).then((err) => {
            db.collection("CarDetails").doc(`${popVal}`).set({
                color: [],
                items: [],
                side: [],
                details: {descrip:[]},
                specs:[]
            })
        }).then(() => {
            db.collection("DelArray").doc('0').update({
                val: firebase.firestore.FieldValue.arrayRemove(popVal)
            })
        })
    }
    else{
        db.collection("Cars").doc(`${len}`).set({
            carImg: attributes.img,
            carNam: attributes.nam,
            carPrice: attributes.price,
            linkto: `/carDetail/${len}`
        }).then((err) => {
            db.collection("CarDetails").doc(`${len}`).set({
                color: [],
                items: [],
                side: [],
                details: {descrip:[]},
                specs:[]
            })
        })
    }



        setAll({img:'',nam:'',price:''});
        document.getElementById("addCar").style.display = 'none';
        document.getElementById("addBut").style.display = '';
    };


    const confirm = useConfirm();

    const handleDelete = (id,name) => {

        

        confirm({description: `Delete this car? (${name})`}).then(() => {
            db.collection("Cars").doc(id).delete().then((err) => {
                db.collection("CarDetails").doc(id).delete()
            }).then(()=>{
                db.collection("DelArray").doc('0').update({
                    val: firebase.firestore.FieldValue.arrayUnion(id)
                })
            })
        }).catch(() =>{

        })



        // if (window.confirm("Are you sure you want to delete?")){
        // db.collection("Cars").doc(id).delete().then((err) => {
        //     db.collection("CarDetails").doc(id).delete()
        // }).then(()=>{
        //     db.collection("DelArray").doc('0').update({
        //         val: firebase.firestore.FieldValue.arrayUnion(id)
        //     })
        // })
        // }
        // else{

        // }

    };



    const handleClick = () => {
        document.getElementById("addCar").style.display = 'block';
        document.getElementById("addBut").style.display = 'none';
    };

    const handleCancel = () => {
        document.getElementById("addCar").style.display = 'none';
        document.getElementById("addBut").style.display = '';
        setAll({});
    };


    const [pageNumber,setPageNumber] = useState(0);

    const carsPerPage = 6;
    const pagesVisited = pageNumber * carsPerPage;

    const displayCars = car.slice(pagesVisited, pagesVisited + carsPerPage).map(item => {
        return (
            
            <div style={divstyle}>
                    
                   
                        <div style={{textAlign:'right'}}>
                            <button style={{position:'absolute',color:'white',border:'none',fontSize:18}} onClick={()=>handleDelete(item.id,item.data.carNam)} id="xBut">X</button>
                        </div>
                        <img style={{width:'250px'}} src={item.data.carImg} />
                        <Link to={item.data.linkto}>
                            <p style={pstyle}>{item.data.carNam}</p>
                            </Link>
                        <p style={pstyle1}>{item.data.carPrice}</p>
                   
                        
            </div>
            
        );
    })

    const pageCount = Math.ceil(car.length / carsPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    
    return (
        <main>
        <h1 style={{textAlign:'center',fontWeight:'bold'}}>FEATURED CARS</h1>

        <div style={{textAlign: 'center'}}>
            <Button variant="contained" color="primary" style={{backgroundColor: '#3B5FC7'}} onClick={handleClick} id="addBut">Add a new car</Button>
        </div>
        
        <div style={screen>800?{width:999, margin:'50px auto', border:'1px solid black',display:'none'}:{width:'auto', margin:'50px auto', border:'1px solid black',display:'none'}} id="addCar">
        

            <h2 style={{textAlign:'center'}}>ADD A NEW CAR</h2>
            <form style={{margin:'30px 30px'}} onSubmit={handleSubmit}>
                <h3>IMAGE</h3>
                <input type="text" name="img" placeholder="Enter link of image of car..." onChange={handleChange} value={all.img || ""}/>
                <h3>NAME</h3>
                <input type="text" name="nam" placeholder="Enter name of car..." onChange={handleChange} value={all.nam || ""}/>
                <h3>PRICE</h3>
                <input type="text" name="price" placeholder="Enter price of car..." onChange={handleChange} value={all.price || ""}/>
                <br></br>
                <br></br>
                <br></br>
                <div style={{display: 'flex',justifyContent:'space-around'}}>
                    <input type="submit" value="ADD THE CAR" style={inputButton}/>
                    <input type="button" value="CANCEL" onClick={handleCancel} style={inputButton}/>
                </div>
            </form>
        </div>



        {screen > 800 ? 
        <div style={body}>
            
            {displayCars}
            <div style={{width:'100%',marginTop: '15px'}}>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    />
            </div>
        </div>
        : 

        <div style={mobBody}>


            {displayCars}
            <div style={{width:'100%'}}>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    />
            </div>

        </div>
        }
        </main>
    );
}