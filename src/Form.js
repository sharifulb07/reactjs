import { render } from '@testing-library/react';
import React from 'react';


export default class Form extends React.Component{


    state={
        title:'javascript',
        text:'JavaScript is awesome ',

        library:'react',

        isAwesome:true,
    }

 
    submitHandler=(e)=>{

        const {title,text, library,isAwesome}=this.state;
        e.preventDefault();
        console.log(title, text,library,isAwesome);

    }

    handleChange=(e)=>{

        if(e.target.type==='text'){
            this.setState({
                title:e.target.value,
               
            });
            


        }else if(e.target.type==='textarea'){
            this.setState({
                text:e.target.value,
                
               
            });
            

        }
        else if(e.target.type==='select-one'){
            this.setState({
                library:e.target.value,
                
               
            });


            console.log(e.target.value);
           

        }
        else if(e.target.type==='checkbox'){
            this.setState({
                isAwesome:e.target.checked,
                
               
            });


            console.log(e.target.value);
           

        }
        
        
        else{
            console.log('Nothing is coming ');
        }


      
    }
    render(){

        const {title,text, library,isAwesome}=this.state;
        return(
            
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder='Enter your title here ' value={title} onChange={this.handleChange}>

                    </input>
                    <br></br>

                        <textarea name="text" value={text} onChange={this.handleChange}></textarea>

                        <br></br>

                        <select value={library} onChange={this.handleChange}>
                            <option value='React'>React</option>
                            <option value='Angular'>Angular</option>
                        </select>

                    <br>
                    </br>

                    <input type="checkbox" value={isAwesome} onChange={this.handleChange}></input>

                    <br></br>

                    <input type="submit"></input>

                </form>
            </div>
        );
    }
}