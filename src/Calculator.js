import React from "react";
import BoiledVerdict from "./BoiledVerdict";
import TemperatureInput from './TemperatureInput'

import { Converter, toCelsius, toFahrenheit } from "./lib/converter";


export default class Calculator extends React.Component{

   state={
       temperature:'',
       scale:'c',
   };

   handleChange=(e,scale)=>{
       this.setState({
           temperature:e.target.value,
           scale,
       })
   }

    render(){

   const {temperature,scale}=this.state;
   const celcius=scale==='f'?Converter(temperature,toCelsius):temperature;
   const fahrenheit=scale==='c'?Converter(temperature,toFahrenheit):temperature;
        
        return(

            <div>

                
                <TemperatureInput scale="c" temperature={celcius} onTemperatureChange={this.handleChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleChange} />
                

                <BoiledVerdict celcius={parseFloat(temperature)} />

            </div>

        );
    }
}