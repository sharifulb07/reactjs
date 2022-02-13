
import ClickCounter from './components/ClickCounter'

import HoverCounter from './components/HoverCounter';
import Counter from './components/Counter';



function App(){
  return  (<div className='app'>
  
 
    <Counter>

    {(count, incrementCount)=> 
    <ClickCounter count={count} incrementCount={incrementCount} /> }

    </Counter>
    

<Counter>

{(count, incrementCount)=> 
    <HoverCounter count={count} incrementCount={incrementCount} /> }

</Counter>
    
    
    </div>);

  
}


export default App;