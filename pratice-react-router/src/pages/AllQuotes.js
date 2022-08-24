import React from 'react'

import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Hamed', text: 'JS Dragon.' },
  { id: 'q2', author: 'Ahmed', text: 'PHP for ultimate beginners.' },
]
function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes