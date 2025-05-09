import { useId } from "react"

const UniqueId = () => {
    const id=useId();
    const emailId=useId();
    console.log(id);
    
  return (
    <div>
      <label htmlFor={`${id}-name`}>Name</label>
      <input type="text" id={`${id}-name`} />

      <br />

      <label htmlFor={`${emailId}-email`}>Email</label>
      <input type="text" id={`${emailId}-email`} />


    </div>
  )
}

export default UniqueId
