
import React from 'react'
import Form from './componentes/Form'
// import Example from './componentes/Example';
// import Form from './componentes/Form'

import Time from './componentes/Time'



export default class App extends React.Component{



    render(){
        return (
            <div>
                <Time />
                <br />
                <Form />
            </div>
        )
    }

}
