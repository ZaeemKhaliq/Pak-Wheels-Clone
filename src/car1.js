import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Carousel from 'react-elastic-carousel';

const bodydiv = {
  width: 999,
  border: '1px solid black',
  margin: '50px auto',
  display: 'flex',
  paddingBottom: 100
}

const items = [{
  id: 1,
  img: 'https://cache2.pakwheels.com/system/car_generation_pictures/5260/original/alto.jpg?1595597920'
},{
  id: 2,
  img: 'https://cache2.pakwheels.com/system/car_generation_pictures/4986/original/Alto_2019_Exterior-2.jpg?1560326905'
},{
  id: 3,
  img: 'https://cache4.pakwheels.com/system/car_generation_pictures/4989/original/Alto_2019_Exterior-5.jpg?1560326906'
},{
  id: 4,
  img: 'https://cache2.pakwheels.com/system/car_generation_pictures/5164/original/Suzuki-Alto-Seats.Brandsynario.jpg?1592890014'
},{
  id: 5,
  img: 'https://cache2.pakwheels.com/system/car_generation_pictures/5169/original/All-you-Need-to-Know-about-Suzuki-Alto-660cc-2019-Autodeals-7.jpg?1592890617'
}];

const color = [{
  col: '#2a52be',
  name: 'Cerulean Blue'
},{
  col: '#474a51',
  name: 'Graphite Grey'
},{
  col: '#ceccb8',
  name: 'Sand Beige'
},{
  col: '#1e272c',
  name: 'Pearl Black'
},];

const sidetab = {
  backgroundColor: 'rgb(59, 95, 199)',
  height: 50,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const p = {
  textAlign: 'center', 
  color:'white', 
  fontWeight: 'bold', 
  margin:0
}

const side = [{
  head: 'PRICE',
  subhead: 'PKR 12-16 lacs'
},{
  head: 'MAKE',
  subhead: 'SUZUKI'
},{
  head: 'MODEL',
  subhead: 'ALTO 2021'
},{
  head: 'RATINGS',
  subhead: '6.0/10.0'
},];

export default function Car1(){
  return (
    <main>
      <h1 style={{textAlign:'center'}}>OVERVIEW</h1>
      <div style={bodydiv}>
        <div style={{flex:'0.7'}}>

          <div style={{textAlign: 'center'}}>
          <Carousel>   
          {items.map(item => {
          return (
          <img style={{width: '80%'}} key={item.id} src={item.img} />
          );
          })}
          </Carousel>
            
          </div>

          <div style={{width:'95%',margin:'0 auto'}}> 
            <p>Suzuki has launched new Suzuki Alto 2021 in Pakistan The car comes equipped with a 660cc engine and 
                with both the auto and manual transmission. It has a length of 3,395 mm, 1,475 mm width 
                and 1,490 mm height. Moreover, it has a wheelbase of 2,460 mm. Suzuki Alto Price in Pakistan is 
                PKR 1,198,000 To 1,633,000. </p>
            <p>Alto VX comes with Power Steering, Keyless Entry, Central Door Locking and without AC and Power Windows. 
                Suzuki Alto VXR comes with 2 Air Bags, Power Steering, Keyless Entry and Central Door locking. 
                Suzuki Alto VXL comes with ABS, Auto Gear Shift (AGS), 2 Airbags, Air Conditioner and 
                many other prominent features.
            </p>
          </div>

          <br></br>

          <div style={{width:'95%',margin:'0 auto'}}>
            <h3>COLORS</h3>

            <div style={{display:'flex',justifyContent:'space-around'}}>

              {color.map(item => {
                return (
                  <div style={{textAlign: 'center'}}>
                    <FiberManualRecordIcon style={{color: item.col,fontSize:90}}></FiberManualRecordIcon>
                    <p style={{margin:0}}>{item.name}</p>
                  </div>
                );
              })}

            </div>
          </div>

          <br></br>

          <div style={{width:'95%',margin:'0 auto'}}>
            <h3>SPECS AND FEATURES</h3>

            <div style={{width:'95%',margin:'0 auto'}}>
                <h4>Exterior</h4>
                <p style={{fontSize: 14}}>Suzuki Alto 2021 is a small and economical helps it maneuver through 
                urban traffic. The rear lights are integrated into the bumper and the headlights and turn signals are 
                integrated into one unit. The size of the front grille is small and it is the same on all three models. 
                Colored door mirrors and handles are only offered in the VXL variant. Moreover, retractable mirrors are 
                also only available in the VXL variant.</p>

                <h4>Interior</h4>
                <p style={{fontSize: 14}}>Suzuki Alto 2021 is a small and economical helps it maneuver through 
                urban traffic. The rear lights are integrated into the bumper and the headlights and turn signals are 
                integrated into one unit. The size of the front grille is small and it is the same on all three models. 
                Colored door mirrors and handles are only offered in the VXL variant. Moreover, retractable mirrors are 
                also only available in the VXL variant.</p>

                <h4>Engine</h4>
                <p style={{fontSize: 14}}>The Alto 2021 comes with a new R06A engine which is more efficient and powerful. 
                The new Alto has a 3-cylinder 660cc engine capable of producing up to 39 and 56 of torque. 
                Moreover, Alto 2021 has a multipoint injection fuel distribution system. The engine is paired either a 
                5-speed manual transmission or AGS (Auto Gear Shift).</p>

                <h4>Colors</h4>
                <p style={{fontSize: 14}}>You can get your new Alto 660cc in seven different colors. 
                These include solid white, silky silver, sand beige, pearl red, pearl black, graphite and cerulean blue. 
                A variety of the Suzuki Alto 2021 will be appealing to a wide number of consumers across Pakistan. </p>

                <h4>Mileage</h4>
                <p style={{fontSize: 14}}>Due to a smaller and more efficient engine, the Suzuki Alto 2021 is 
                expected to return high mileage per . This is crucial as the Alto 660cc is being targeted a class of 
                society that values economical cars. Estimated mileage stands between 18 to 20 Km per which is amazing.</p>
            </div>

          </div>
          

        </div>

        <div style={{flex:'0.3',backgroundColor: '#F7F7F7'}}>


          {side.map(item => {
            return (
              <div>
              <div style={sidetab}>
                <p style={p}>{item.head}</p>
              </div>
              <p style={{textAlign: 'center',fontSize: 22,fontWeight:'bold'}}>{item.subhead}</p>
              </div>
            );
          })}

          


        </div>

      </div>
    </main>
  );
}
