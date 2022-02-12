import React, { Component } from 'react'

export default class Form extends Component {

    state={
        title:'JavaScript',
        text:'JavaScript is awesome in the section ',
        email:'Shariful01944180957@gmail.com',
        list:"React",
        isAwesome:true,
    }

    handleChange=(e)=>{

            if(e.target.type==='text'){
                
                this.setState({
                    title:e.target.value,
                })
            }else if(e.target.type==='textarea'){
                this.setState({
                    text:e.target.value,
                })
            }else if(e.target.type==='email'){
                this.setState({
                    email:e.target.value,
                })
            } else if(e.target.type==='select-one'){
                this.setState({
                    list:e.target.value,
                })
            } else if(e.target.type==='checkbox'){
                this.setState({
                    isAwesome:e.target.checked,
                })
            }else{
               
                console.log('Nothing is here  now man ');
            }

    }
    submitHandler=(e)=>{
        const {title,text,email, list,isAwesome }=this.state;

        e.preventDefault();
        console.log(title, text, email, list, isAwesome);

    }

  render() {
      const {title,text,email, list,isAwesome }=this.state;
    return (
      <div>
          <form onSubmit={this.submitHandler}>
             
              <input type="text" 
              placeholder='Enter your Title' 
              value={title} onChange={this.handleChange}  ></input><br /><br />
                <textarea name="text" value={text} onChange={this.handleChange}></textarea><br />
                <input type="email" placeholder='Enter your E-mail here' value={email}
                
                onChange={this.handleChange}
                ></input><br /><br />
                <select value={list} onChange={this.handleChange}>
                    <option>React</option>
                    <option>Vue</option>
                    <option>Angular</option>
                </select>
                
                <br />
                <br />

                <input type="checkbox" onChange={this.handleChange} checked={ isAwesome} />
                <br />
                <br />
                <input type="submit" />

          </form>

      
      </div>
    )
  }
}
