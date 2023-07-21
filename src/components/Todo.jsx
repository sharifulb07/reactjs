import React from 'react'

const today=new Date();
function formateDate(date){
    return new Intl.DateTimeFormat('en-US', {weekday:'long'}).format(date);
}

const Todo = () => {
  return (
    <div>
      <h1>Welcome on {formateDate(today)}</h1>
    </div>
  )
}

export default Todo
