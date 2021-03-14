import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Carousel from 'react-elastic-carousel';





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
    paddingBottom: 100
  }

const p = {
  textAlign: 'center', 
  color:'white', 
  fontWeight: 'bold', 
  margin:0
}

export const carProvider = createContext();

export function carDetail({ match }){
    const num = match.params.id;
    const allDetails = {
        1:{
        items:[{
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
            }],
        
        color:[{
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
          }],
        
        side:[{
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
          }],

        details:{
            descrip: [{
              para:`The 10th Generation Honda Civic introduces a new design language as well as a range of cleaner, 
            more powerful and more efficient engines. Honda Civic 2021 is a front engine, front wheel drive, 
            subcompact sedan also known as Civic X. The Honda Civic 2021 is available in 2 variants in Pakistan 1.8 
            Litre and 1.8-Liter VTI Oriel while globally it is sold in 4 variants LX, EX, EX-T and EX-L. 
            The Honda Civic 2021 price in Pakistan is between PKR 3,729,000 To 4,699,000.`    
          }]
          },

        specs:[{
          head: 'Exterior',
          subhead: [{
            para: `Honda Civic 2021 exterior specifications include a brand new and 
            more aggressive design language. Honda Civic 2021 front end houses sleek HIDs with integrated 
            LED daytime running lights, a trapezium grille integrated into the design of the headlights with c
            hrome accents and triple air intakes. Honda Civic sloping rear end houses aggressively designed angular 
            C-shaped side swept taillights.Options include Modulo kit, door edge guards and door visors.`}]
        },{
          head: 'Interior',
          subhead: [{
            para: `The Honda Civic 2021 interior comprises of black and polished silver 
            plastic trim pieces. Honda Civic front and rear seats trims are available in a combination of black, 
            grey and ivory fabric. Standard features include, automatic climate control, 12-Volt power outlet, 
            4-speaker 160 watt audio system, 5.0-inch multi-information display, traction control, 
            electronic stability control, power door mirrors, push button start and keyless entry. 
            Options include leather seats, cruise control and navigation.`}]
        },{
          head: 'Engine',
          subhead: [{
            para: `The 10th Generation Honda Civic is offered with a selection of 2 Engines`},
            {
            para: `1.5 Litre DOHC 16 Valve Earth Dream Technology Engine`},
            {
            para: `1.8 Litre SOHC 16 Valve Engine`},
            {
            para: `Honda halted the production of 1.5 litre Engine due to some engine malfunctioning but it is expected 
            that Honda will resume the production in 2021.`}]
        },{
          head: 'Colors',
          subhead: [{
            para: `The Honda Civic is offered in a choice of 7 colors`},
            {
            para: `Urban Titanium, Brilliant Blue Metallic, Crystal Black, Lunar Silver Metallic, Rallye Red, Taffeta White and 
            Modern Steel Metallic`}]
        },{
          head: 'Specifications',
          subhead: [{
            para: `Honda Civic 2021 Specs are as follow:`},
            {
            para: `1.5 Litre DOHC 16 Valve Earth Dream Technology Engine 170 bhp_@_5500 RPM, 220 Nm of torque_@_1700 RPM`},
            {
            para: `1.8 Litre SOHC 16 Valve Engine 138 bhp_@_6500RPM, 169 Nm of torque_@_4300 RPM`}]
        },]
        },
        


        2:{  
        items:[{
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
          }],
        
        color: [{
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
          }],
        
        side: [{
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
          }],

        details: {
            descrip: [{
                para: `Suzuki has launched new Suzuki Alto 2021 in Pakistan The car comes equipped with a 
            660cc engine and with both the auto and manual transmission. It has a length of 3,395 mm, 1,475 mm width and 
            1,490 mm height. Moreover, it has a wheelbase of 2,460 mm. Suzuki Alto Price in Pakistan is PKR 1,198,000 
            To 1,633,000.`},
                {
                para:`Alto VX comes with Power Steering, Keyless Entry, Central Door Locking and without AC and 
            Power Windows. Suzuki Alto VXR comes with 2 Air Bags, Power Steering, Keyless Entry and Central Door locking. 
            Suzuki Alto VXL comes with ABS, Auto Gear Shift (AGS), 2 Airbags, Air Conditioner and many other prominent 
            features.` }]  
          },

          specs:[{
            head: 'Exterior',
            subhead: [{
              para: `Suzuki Alto 2021 is a small and economical helps it maneuver through 
                urban traffic. The rear lights are integrated into the bumper and the headlights and turn signals are 
                integrated into one unit. The size of the front grille is small and it is the same on all three models. 
                Colored door mirrors and handles are only offered in the VXL variant. Moreover, retractable mirrors are 
                also only available in the VXL variant.`}]
          },{
            head: 'Interior',
            subhead: [{
              para: `Suzuki Alto 2021 is a small and economical helps it maneuver through 
            urban traffic. The rear lights are integrated into the bumper and the headlights and turn signals are 
            integrated into one unit. The size of the front grille is small and it is the same on all three models. 
            Colored door mirrors and handles are only offered in the VXL variant. Moreover, retractable mirrors are 
            also only available in the VXL variant.`}]
          },{
            head: 'Engine',
            subhead: [{
              para: `The Alto 2021 comes with a new R06A engine which is more efficient and powerful. 
            The new Alto has a 3-cylinder 660cc engine capable of producing up to 39 and 56 of torque. 
            Moreover, Alto 2021 has a multipoint injection fuel distribution system. The engine is paired either a 
            5-speed manual transmission or AGS (Auto Gear Shift).`}]
          },{
            head: 'Colors',
            subhead: [{
              para: `You can get your new Alto 660cc in seven different colors. 
            These include solid white, silky silver, sand beige, pearl red, pearl black, graphite and cerulean blue. 
            A variety of the Suzuki Alto 2021 will be appealing to a wide number of consumers across Pakistan.`}]
          },{
            head: 'Mileage',
            subhead: [{
              para: `Due to a smaller and more efficient engine, the Suzuki Alto 2021 is 
            expected to return high mileage per . This is crucial as the Alto 660cc is being targeted a class of 
            society that values economical cars. Estimated mileage stands between 18 to 20 Km per which is amazing.`}]
          },]
        }
        
        };
  
  
 
  
   return (  
    <main>
      <h1 style={{textAlign:'center'}}>OVERVIEW</h1>
     
      <div style={bodydiv}>
        <div style={{flex:'0.7'}}>

          <div style={{textAlign: 'center'}}>
            <Carousel>
                {allDetails[num].items.map(item => {
                return (
                <img style={{width: '80%'}} key={item.id} src={item.img} />
                );
                })
                }
                
            </Carousel>
          </div>



          <div style={{width:'95%',margin:'0 auto'}}>
            {allDetails[num].details.descrip.map(item=>{          
                return (
                  <>
                    <p>{item.para}</p>
                  </>
                );
            })
            }
          </div>

          <br></br>



        <div style={{width:'95%',margin:'0 auto'}}>
            <h3>COLORS</h3>

            <div style={{display:'flex',justifyContent:'space-around'}}>

              {allDetails[num].color.map(item => {
                    return (
                    <div style={{textAlign: 'center'}}>
                        <FiberManualRecordIcon style={{color: item.col,fontSize:90}}></FiberManualRecordIcon>
                        <p style={{margin:0}}>{item.name}</p>
                    </div>
                );
              })
                }

            </div>
        </div>


          <br></br>


          <div style={{width:'95%',margin:'0 auto'}}>
            <h3>SPECS AND FEATURES</h3>

            <div style={{width:'95%',margin:'0 auto'}}>

                {allDetails[num].specs.map(item => {
                  return (
                    <>
                    <h4>{item.head}</h4>
                    {item.subhead.map(obj => {
                      return (
                        <p>{obj.para}</p>
                      );
                    })}
                    </>
                  );
                })}

            </div>

          </div>
          

        </div>

        <div style={{flex:'0.3',backgroundColor: '#F7F7F7'}}>
            {allDetails[num].side.map(item => {
                    return (
                    <div>
                    <div style={sidetab}>
                        <p style={p}>{item.head}</p>
                    </div>
                    <p style={{textAlign: 'center',fontSize: 22,fontWeight:'bold'}}>{item.subhead}</p>
                    </div>
                    );
                })
            
            }
        </div>

      </div>
    </main>
  );
}
