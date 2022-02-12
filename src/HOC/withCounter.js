import React from "react";



const withCounter =(OriginalComponent)=>{
    class NewComponent extends React.Component{

        state={
            count:0,
        }
    
        clickHandle =()=>{
            this.setState((prevState)=>({count:prevState.count+1}));
        };


        render(){
            const {count}=this.state;
            return <OriginalComponent count={count} clickHandle={this.clickHandle}/>
        }

    }

    return NewComponent;
}

export default withCounter;