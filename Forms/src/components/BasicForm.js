import React from 'react'

import useInput from '../hooks/use-input'

const isNotEmpty = value => value.trim() !== '';

const BasicForm = (props) => {

  const {
    value: enteredFname,
    isValid: enteredFnameIsValid,
    hasError: fNameHasError,
    onChangeHandler: onChangeFnameHandler,
    onBlurHandler: onBlurFnameHandler,
    resetInputHandler: resetFnameInput
  } = useInput(isNotEmpty)

  const {
    value: enteredLname,
    isValid: enteredLnameIsValid,
    hasError: lNameHasError,
    onChangeHandler: onChangeLnameHandler,
    onBlurHandler: onBlurLnameHandler,
    resetInputHandler: resetLnameInput
  } = useInput(isNotEmpty)

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    onChangeHandler: onChangeEmailHandler,
    onBlurHandler: onBlurEmailHandler,
    resetInputHandler: resetEmailInput
  } = useInput(value => value.includes('@'))

  let formIsValid = false;
  if (enteredFnameIsValid && enteredLnameIsValid && enteredEmailIsValid)
    formIsValid = true;

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid)
      return;

    console.log(enteredFname)
    console.log(enteredLname)
    console.log(enteredEmail)
    resetFnameInput()
    resetLnameInput()
    resetEmailInput()
  }

  const fNameClasses = !fNameHasError ? 'form-control' : 'form-control invalid'
  const lNameClasses = !lNameHasError ? 'form-control' : 'form-control invalid'
  const emailClasses = !emailHasError ? 'form-control' : 'form-control invalid'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={fNameClasses}>
          <label htmlFor='fname'>First Name</label>
          <input
            type='text'
            id='fname'
            value={enteredFname}
            onChange={onChangeFnameHandler}
            onBlur={onBlurFnameHandler}
          />
          {fNameHasError && <p className='error-text'>First name Must Not Be Empty</p>}
        </div>
        <div className={lNameClasses}>
          <label htmlFor='lname'>Last Name</label>
          <input
            type='text'
            id='lname'
            value={enteredLname}
            onChange={onChangeLnameHandler}
            onBlur={onBlurLnameHandler}
          />
          {lNameHasError && <p className='error-text'>Last name Must Not Be Empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='text'
          id='email'
          value={enteredEmail}
          onChange={onChangeEmailHandler}
          onBlur={onBlurEmailHandler}
        />
        {emailHasError && <p className='error-text'>Email Must Be Valid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
