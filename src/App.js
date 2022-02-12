
import Text from "./composition/Text";
import Emoji from "./Inheritance/Emoji";
import Bracket from "./composition/Bracket";

function App(){
  return (
  <Emoji>

    {({addEmoji}) => 
    <Bracket>
    
    {({addBracket})=><Text addEmoji={addEmoji} addBracket={addBracket} />}
    
    </Bracket> }

  </Emoji>
  );
}


export default App;