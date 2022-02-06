

import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";



function App() {
  
return (
  <div className="app">

  <Counter>
    {(counter, incrementCount)=> (
      <ClickCounter count={counter} incrementCount={incrementCount}>

      </ClickCounter>
    )}
  </Counter>
  <Counter>
    {(counter, incrementCount)=> (
      <HoverCounter count={counter} incrementCount={incrementCount}>

      </HoverCounter>
    )}
  </Counter>





  </div>



);

}

export default App;
