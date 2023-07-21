import "./App.css";
import Packing from "./components/vegetables/Packing";





function App() {
  return (
  <div>
    Hello
   
   <Packing name={'Fulkopi'} packed={true} />
   <Packing name={'BadhaKopi'} packed={false} />
   <Packing name={'Hilsha'} packed={false} />
   <Packing name={'Kalpurush'} packed={true} />
   <Packing name={'FulkMan is mortalopi'} packed={false} />
  </div>
  
  )
}

export default App;
