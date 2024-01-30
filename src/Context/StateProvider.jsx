import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();


export const StateProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);
    const [idRoomChat, setIdRoomChat] = useState(null);
    const [showSearchFriends, setShowSearchFriends] = useState(false);

    

  
    const state = {
      theme,
      setTheme,
      idRoomChat,
      setIdRoomChat,
      showSearchFriends,
      setShowSearchFriends,
    };
  
    return <StateContext.Provider value={state}>{children}</StateContext.Provider>;
  };
  
  export const useStateValue = () => useContext(StateContext);