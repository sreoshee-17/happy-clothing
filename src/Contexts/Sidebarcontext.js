import React, {useState, createContext} from "react";
export const Sidebarcontext = createContext()
const SidebarProvider = ({children}) =>{
  const[isOpen, setisOpen] = useState(false);
  const handleClose = () => {
    setisOpen(false);
  };
  return <Sidebarcontext.Provider value={{isOpen, setisOpen, handleClose}}
  >{children}</Sidebarcontext.Provider>
};
export default SidebarProvider;