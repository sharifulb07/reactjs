import React from "react";
import BoiledVerdict from "./BoiledVerdict";


const scalNames={
    c:'Celcius',
    f:'Fahrenheit',
}

export default function TemperatureInput({temperature,scale, onTemperatureChange}){

   
        return(

            <div>

                <fieldset>
                    <legend>Enter Tempearature in {scalNames[scale]} </legend>

                    <input type="text" value={temperature} onChange={(e)=>onTemperatureChange(e,scale)}></input>
                </fieldset>

                <BoiledVerdict celcius={parseFloat(temperature)} />

            </div>

        );


}