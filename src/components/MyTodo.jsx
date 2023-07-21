import React from "react";

const baseUrl = "https://i.imgur.com/";
const person = {
  name: "Gregorio y. Zara",
  immageId: "yXOvdOS",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const MyTodo = () => {
  return (
    <div style={person.theme}>
      <h1>{person.name} </h1>

      <img src={baseUrl + person.immageId + person.imageSize+'.jpg'} alt={person.name} />


<ul>
    <li>Improve the videophone</li>
    <li>prepare aeronautics lectures </li>
    <li>Work on the alcohol -fuelled engine</li>
</ul>

    </div>
  );
};

export default MyTodo;
