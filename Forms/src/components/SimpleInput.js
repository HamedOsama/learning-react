import { useState } from 'react';

import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const {
    value: enteredName,
    hasError: nameInputIsInvalid,
    onChangeHandler: onChangeNameHandler,
    onBlurHandler: onBlurNameHandler,
    isValid: enteredNameIsValid,
    resetInputHandler
  } = useInput(value => value.trim() !== '')
  // console.log(enteredName)
  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid

  const enteredEmailIsValid = enteredEmail.includes('@');
  const EmailInputIsInvalid = enteredEmailTouched && !enteredEmailIsValid

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid)
    formIsValid = true

  // }, [enteredNameIsValid])
  // const onChangeNameHandler = (e) => {
  //   setEnteredNameTouched(true);
  //   setEnteredName((prev) => e.target.value)
  // }

  const onChangeEmailHandler = (e) => {
    setEnteredEmailTouched(true);
    setEnteredEmail((prev) => e.target.value)
  }
  // const onBlurNameHandler = (e) => {
  //   setEnteredNameTouched(true);
  // }
  const onBlurEmailHandler = (e) => {
    setEnteredEmailTouched(true);
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    // setEnteredNameTouched(true);
    if (!formIsValid) {
      return;
    }
    console.log(enteredName);
    resetInputHandler()
    // setEnteredName('')
    // setEnteredNameTouched(false);
    setEnteredEmail('')
    setEnteredEmailTouched(false);
  }
  const nameClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid'
  const emailClasses = !EmailInputIsInvalid ? 'form-control' : 'form-control invalid'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          type='text'
          id='name'
          onChange={onChangeNameHandler}
          onBlur={onBlurNameHandler}
        />
        {nameInputIsInvalid && <p className='error-text'>Name Must Not Be Empty.</p>}
      </div>


      <div className={emailClasses}>
        <label htmlFor='email'>E-mail</label>
        <input
          value={enteredEmail}
          type='text'
          id='email'
          onChange={onChangeEmailHandler}
          onBlur={onBlurEmailHandler}
        />
        {EmailInputIsInvalid && <p className='error-text'>Mail must be valid.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
