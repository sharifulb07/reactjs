import {useState,  createContext } from "react";


const MyContext = createContext();


const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const handleUserName=(newName)=>{
        setUser(newName);
    }


  return (
    <MyContext.Provider value={{user,handleUserName}}>
      {children}
    </MyContext.Provider>
  )
}

export { ContextProvider, MyContext };
