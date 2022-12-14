import { useState, useReducer } from 'react'

const initialInputState = {
  value: '',
  isTouched: false
}
const inputStateReducer = (state, action) => {
  if (action.type === 'SET_VALUE')
    return {
      value: action.value,
      isTouched: state.isTouched
    }
  if (action.type === 'BLUR')
    return {
      value: state.value,
      isTouched: true
    }
  if (action.type === 'RESET')
    return initialInputState
  return initialInputState
}
const useInput = (validateValueFun) => {
  const [inputState, dispatchInput] = useReducer(inputStateReducer, initialInputState)
  const isValid = validateValueFun(inputState.value)
  const hasError = inputState.isTouched && !isValid


  const onChangeHandler = (e) => {
    dispatchInput({
      type: 'SET_VALUE',
      value: e.target.value,
    })
  }
  const onBlurHandler = (e) => {
    dispatchInput({ type: 'BLUR' })
  }
  const resetInputHandler = () => {
    dispatchInput({ type: 'RESET' })
  }
  return {
    value: inputState.value,
    hasError,
    isValid: inputState.isValid,
    onChangeHandler,
    onBlurHandler,
    resetInputHandler,
  }
}

export default useInput;