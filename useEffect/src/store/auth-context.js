import React, { useState, useEffect } from "react";


const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => { },
  onLogin: (email, password) => { },
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userToken = window.localStorage.getItem('isLoggedIn')
  useEffect(() => {
    if (userToken === 'true') {
      setIsLoggedIn(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const logoutHandler = () => {
    window.localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  }
  const loginHandler = () => {
    window.localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  }

  return <AuthContext.Provider
    value={{
      isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler
    }}>
    {
      props.children
    }
  </AuthContext.Provider>
}
export default AuthContext;