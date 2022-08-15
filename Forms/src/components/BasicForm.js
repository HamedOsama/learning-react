import React from 'react'

import useInput from '../hooks/use-input'
const BasicForm = (props) => {

  const {
    value: enteredFname,
    isValid: enteredFnameIsValid,
    hasError: fNameHasError,
    onChangeHandler: onChangeFnameHandler,
    onBlurHandler: onBlurFnameHandler,
    resetInputHandler: resetFnameInput
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredLname,
    isValid: enteredLnameIsValid,
    hasError: lNameHasError,
    onChangeHandler: onChangeLnameHandler,
    onBlurHandler: onBlurLnameHandler,
    resetInputHandler: resetLnameInput
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    onChangeHandler: onChangeEmailHandler,
    onBlurHandler: onBlurEmailHandler,
    resetInputHandler: resetEmailInput
  } = useInput(value => value.includes('@'))


  const fNameClasses = !fNameHasError ? 'form-control' : 'form-control invalid'
  const lNameClasses = !lNameHasError ? 'form-control' : 'form-control invalid'
  const emailClasses = !emailHasError ? 'form-control' : 'form-control invalid'
  return (
    <form>
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
