import React from 'react'
import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'

function NewQuote() {
  const history = useHistory();
  const addQuoteHandler = QuoteData => {
    console.log(QuoteData);
    history.push('/quotes');
  }
  return <QuoteForm onAddQuote={addQuoteHandler} />
}

export default NewQuote