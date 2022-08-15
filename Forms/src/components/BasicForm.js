import React from 'react'

import useInput from '../hooks/use-input'
const BasicForm = (props) => {

  const {
    value: enteredFname,
    isValid: enteredFnameIsValid,
    hasError: FnameHasError,
    onChangeHandler: onChangeFnameHandler,
    onBlurHandler: onBlurFnameHandler,
    resetInputHandler: resetFnameInput
  } = useInput(value => value.trim() !== '')
  const fNameClasses = !FnameHasError ? 'form-control' : 'form-control invalid'
  return (
    <form>
      <div className='control-group'>
        <div className={fNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredFname}
            onChange={onChangeFnameHandler}
            onBlur={onBlurFnameHandler}
          />
          {FnameHasError && <p>First name Must Not Be Empty</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
