// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';
// import AuthContext, { AuthContextProvider } from './store/auth-context';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const userToken = window.localStorage.getItem('isLoggedIn')
  // useEffect(() => {
  //   if (userToken === 'true') {
  //     setIsLoggedIn(true)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   window.localStorage.setItem('isLoggedIn', 'true');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   window.localStorage.setItem('isLoggedIn', 'false');
  //   setIsLoggedIn(false);
  // };
  const ctx = useContext(AuthContext)
  return (
    // <AuthContext.Provider
    //   value={
    //     {
    //       isLoggedIn: isLoggedIn,
    //       onLogout: logoutHandler,
    //     }
    //   }>
    //   <MainHeader />
    //   <main>
    //     {!isLoggedIn && <Login onLogin={loginHandler} />}
    //     {isLoggedIn && <Home onLogout={logoutHandler} />}
    //   </main>
    // </AuthContext.Provider>


    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
