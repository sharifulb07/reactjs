import React from "react";



const withCounter =(OriginalComponent)=>{
    class newComponent extends React.Component{
        state={
            count:0,
        };
    
        increamentCount=()=>{
            this.setState((prestate)=>({count:prestate.count+1}));
        };

        render(){
            const {count}=this.state;
            return <OriginalComponent count={count} increamentCount={this.increamentCount} />;
        }

    }

    return newComponent;
}

export default withCounter;