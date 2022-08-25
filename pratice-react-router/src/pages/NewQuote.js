import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api'

function NewQuote() {
  const navigate = useNavigate();
  const { sendRequest, status } = useHttp(addQuote);
  useEffect(() => {
    if (status === 'completed')
      navigate('/quotes')
    // history.push('/quotes');

  }, [status, navigate])
  const addQuoteHandler = QuoteData => {
    sendRequest(QuoteData)
  }
  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
}

export default NewQuote