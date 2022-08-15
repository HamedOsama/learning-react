import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT')
    return { value: action.val, isValid: action.val.includes('@') }
  if (action.type === 'INPUT_BLUR')
    return { value: state.value, isValid: state.value.includes('@') }
  return { value: '', isValid: false }
}
const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT')
    return { value: action.val, isValid: action.val.trim().length > 6 }
  if (action.type === 'INPUT_BLUR')
    return { value: state.value, isValid: state.value.trim().length > 6 }
  return { value: '', isValid: false }
};
const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null })
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null })


  const ctx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const checkForm = setTimeout(() => {
      console.log('validating');
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 500)
    return () => {
      clearTimeout(checkForm);
      console.log('CLEAN UP');
    }
  }, [emailState.isValid, passwordState.isValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value })
    // setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value })
    // setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" })
    // setEmailIsValid(emailState.isValid);
  };

  const validatePasswordHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" })
    // setPasswordIsValid(passwordState.isValid);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid)
      ctx.onLogin(emailState.value, passwordState.value);
    else if (!emailState.isValid)
      emailInputRef.current.focus()
    else if (!passwordState.isValid)
      passwordInputRef.current.focus()
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          type="email"
          label="E-mail"
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          type="password"
          label="Password"
          isValid={passwordState.isValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        {/* <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
