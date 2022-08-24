import React from 'react'

import QuoteForm from '../components/quotes/QuoteForm'

function NewQuote() {
  const addQuoteHandler = QuoteData => {
    console.log(QuoteData)
  }
  return <QuoteForm onAddQuote={addQuoteHandler} />
}

export default NewQuote