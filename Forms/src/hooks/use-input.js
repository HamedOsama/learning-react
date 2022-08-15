import { useState } from 'react'

const useInput = (validateValueFun) => {
  const [enteredInput, setEnteredInput] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValueFun(enteredInput)
  const hasError = isTouched && !isValid


  const onChangeHandler = (e) => {
    // setEnteredEmailTouched(true);
    setEnteredInput((prev) => e.target.value)
  }
  const onBlurHandler = (e) => {
    setIsTouched(true);
  }
  const resetInputHandler = () => {
    setEnteredInput('');
    setIsTouched(false);
  }
  return {
    value: enteredInput,
    hasError,
    isValid,
    onChangeHandler,
    onBlurHandler,
    resetInputHandler,
    // setEnteredInput,
    // setIsTouched,
  }
}

export default useInput;