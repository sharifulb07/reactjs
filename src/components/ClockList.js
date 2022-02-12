import Clock from "./Clock";


function ClockList ({quantity=[]}){

    return(

        <div>

            {quantity.map((key, index)=> <Clock key={Math.random()}/>)}

        </div>

    )
}


export default ClockList;