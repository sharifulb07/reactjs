export function toCelsius(Fahrenheit){
    return ((Fahrenheit-32)*5)/9; 

}

export function toFahrenheit(Celcius){
    return (Celcius*9)/5+32;
}



export function Converter(temperature, ConvertTo){
    const input=parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }

    const output=ConvertTo(input);
    const rounded=Math.round(output*1000)/1000;
    return rounded.toString();

}