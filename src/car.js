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
  img: 'https://cache4.pakwheels.com/system/car_generation_pictures/4962/original/Honda_Civic_Facelift_2019.jpg?1555253134'
},{
  id: 2,
  img: 'https://cache3.pakwheels.com/system/car_generation_pictures/4946/original/civic_1.5_rs_turbo.png?1555053346'
},{
  id: 3,
  img: 'https://cache4.pakwheels.com/system/car_generation_pictures/4947/original/civic_1.8_exterior.png?1555053346'
},{
  id: 4,
  img: 'https://cache2.pakwheels.com/system/car_generation_pictures/4948/original/civic_RS_turbo.jpg?1555053347'
},{
  id: 5,
  img: 'https://cache3.pakwheels.com/system/car_generation_pictures/4303/original/Honda_Civic_2016_Interior_Photos_(5).jpg?1479886538'
}];

const color = [{
  col: '#152076',
  name: 'Brilliant Blue Metallic'
},{
  col: '#C72C3C',
  name: 'Ralley Red'
},{
  col: '#999286',
  name: 'Lunar Silver Metallic'
},{
  col: '#514B43',
  name: 'Urban titanium'
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
  subhead: 'PKR 37-47 lacs'
},{
  head: 'MAKE',
  subhead: 'HONDA'
},{
  head: 'MODEL',
  subhead: 'CIVIC 2021'
},{
  head: 'RATINGS',
  subhead: '6.0/10.0'
},];

export default function Car(){
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
            <p>The 10th Generation Honda Civic introduces a new design language as well as a range of cleaner, 
            more powerful and more efficient engines. Honda Civic 2021 is a front engine, front wheel drive, 
            subcompact sedan also known as Civic X. The Honda Civic 2021 is available in 2 variants in Pakistan 1.8 Litre 
            and 1.8-Liter VTI Oriel while globally it is sold in 4 variants LX, EX, EX-T and EX-L. 
            The Honda Civic 2021 price in Pakistan is between PKR 3,729,000 To 4,699,000.
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
                <p style={{fontSize: 14}}>Honda Civic 2021 exterior specifications include a brand new and 
                more aggressive design language. Honda Civic 2021 front end houses sleek HIDs with integrated 
                LED daytime running lights, a trapezium grille integrated into the design of the headlights with c
                hrome accents and triple air intakes. Honda Civic sloping rear end houses aggressively designed angular 
                C-shaped side swept taillights.Options include Modulo kit, door edge guards and door visors.</p>

                <h4>Interior</h4>
                <p style={{fontSize: 14}}>The Honda Civic 2021 interior comprises of black and polished silver 
                plastic trim pieces. Honda Civic front and rear seats trims are available in a combination of black, 
                grey and ivory fabric. Standard features include, automatic climate control, 12-Volt power outlet, 
                4-speaker 160 watt audio system, 5.0-inch multi-information display, traction control, 
                electronic stability control, power door mirrors, push button start and keyless entry. 
                Options include leather seats, cruise control and navigation.</p>

                <h4>Engine</h4>
                <p style={{fontSize: 14}}>The 10th Generation Honda Civic is offered with a selection of 2 Engines</p>
                <p style={{fontSize: 14}}>1.5 Litre DOHC 16 Valve Earth Dream Technology Engine</p>
                <p style={{fontSize: 14}}>1.8 Litre SOHC 16 Valve Engine</p>
                <p style={{fontSize: 14}}>Honda halted the production of 1.5 litre Engine due to some engine malfunctioning but it is 
                expected that Honda will resume the production in 2021.</p>

                <h4>Colors</h4>
                <p style={{fontSize: 14}}>The Honda Civic is offered in a choice of 7 colors</p>

                <p style={{fontSize: 14}}>Urban Titanium, Brilliant Blue Metallic, Crystal Black, Lunar Silver Metallic, Rallye Red, 
                Taffeta White and Modern Steel Metallic</p>

                <h4>Specifications</h4>
                <p style={{fontSize: 14}}>Honda Civic 2021 Specs are as follow:</p>

                <p style={{fontSize: 14}}>1.5 Litre DOHC 16 Valve Earth Dream Technology Engine 170 bhp_@_5500 RPM, 220 Nm of torque_@_1700 RPM</p>
                <p style={{fontSize: 14}}>1.8 Litre SOHC 16 Valve Engine 138 bhp_@_6500RPM, 169 Nm of torque_@_4300 RPM</p>
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
