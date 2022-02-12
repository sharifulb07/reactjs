import React from "react";

class Watch extends React.Component{

    state={date:new Date(), locale:"bn-BD"};





componentDidMount(){
    this.clockTimer=setInterval(() => this.tick(), 1000);
}


componentWillUnmount(){
    clearInterval(this.clockTimer)
}


handleClick=()=>{
    //e.preventDefault();
    
    this.setState({
        locale:'en-US',

    })
    console.log("button is clicked here");

}



    tick(){
        this.setState({
            date:new Date(),
        });
    }


    render(){
        // eslint-disable-next-line no-unused-vars
        const {date,locale}=this.state;
        return(
            <div>
                <h1 className="heading">
                    Hello all react learners at {this.state.date.toLocaleTimeString(locale)}
                    <span className="place"> at lockpur </span>
                
                </h1>

                <button onClick={ this.handleClick.bind( this,'en-US')}>Press me</button>
            </div>
        )
    }
}

export default Watch;