import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    onChangeHandler: onChangeNameHandler,
    onBlurHandler: onBlurNameHandler,
    resetInputHandler: resetNameInput,
  } = useInput(value => value.trim() !== '')
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: EmailInputIsInvalid,
    onChangeHandler: onChangeEmailHandler,
    onBlurHandler: onBlurEmailHandler,
    resetInputHandler: resetEmailInput,
  } = useInput(value => value.includes('@'))
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid)
    formIsValid = true

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetNameInput()
    resetEmailInput()
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
