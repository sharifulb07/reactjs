
import React from "react";

function Input({type, placeholder},ref){
    return <input ref={ref} type={type} placeholder={placeholder} />
}

const ForwardInput= React.forwardRef(Input);

export default ForwardInput;