
import { getImageUrl } from './utils';


const Employee = ({person,size}) => {
    console.log(getImageUrl(person));
  return (
    
    <div>
      <img src={getImageUrl(person)} alt={person.name} className='avatar' width={size} height={size} />
    </div>
  )
}

export default Employee
