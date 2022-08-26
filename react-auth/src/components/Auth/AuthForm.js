import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import classes from './AuthForm.module.css';
// import { authActions } from '../../store/auth-slice';
import { loginActionHandler } from '../../store/auth-slice';
const AuthForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const signupHandler = async (email, password) => {
    setIsLoading(true);
    const req = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEyeUpB0IDtUIjg4Iy8qcgPFCMUPvX0jY', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setIsLoading(false);
    const resData = await req.json();
    console.log(resData)
    if (!req.ok) {
      let errorMessage = 'Signup failed!';
      if (resData && resData.error && resData.error.message) {
        errorMessage = resData.error.message.toLowerCase();
      }
      alert(errorMessage);
    }
  }
  const loginHandler = async (email, password) => {
    const req = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDEyeUpB0IDtUIjg4Iy8qcgPFCMUPvX0jY', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const resData = await req.json();
    console.log(resData);
    if (!resData.error) {
      // dispatch(loginHandler({
      //   id: resData.idToken,
      //   expiresIn: resData.expiresIn
      // }));
      console.log(1)
      dispatch(loginActionHandler(
        {
          id: resData.idToken,
          expireTime: new Date(new Date().getTime() + (+resData.expiresIn * 1000)).toISOString(),
        }
      ));
      history.replace('/')
    }
    else {
      let errorMessage = 'Login failed!';
      if (resData && resData.error && resData.error.message) {
        errorMessage = resData.error.message.toLowerCase();
      }
      alert(errorMessage);
    }
  }
  const submitHandler = (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (isLogin) {
      loginHandler(email, password);
    }
    else {
      signupHandler(email, password);
    }
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailInputRef} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={passwordInputRef} type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button onClick={submitHandler}>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <button disabled={true}>loading...</button>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
