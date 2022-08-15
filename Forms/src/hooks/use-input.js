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

  return {
    value: enteredInput,
    isTouched,
    hasError,
    onChangeHandler,
    onBlurHandler
  }
}

export default useInput;