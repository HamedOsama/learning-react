import React from 'react'
import { useParams, Route, Link } from 'react-router-dom'

import HighlightedQuotes from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'
const DUMMY_QUOTES = [
  { id: 'q1', author: 'Hamed', text: 'JS Dragon.' },
  { id: 'q2', author: 'Ahmed', text: 'PHP for ultimate beginners.' },
]

function QuoteDetail() {
  const params = useParams();
  const quoteId = params.quoteId;

  const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId);
  if (!quote) {
    return <p>No quote found!</p>
  }
  return (
    <div>
      <HighlightedQuotes text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quoteId}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`/quotes/${quoteId}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  )
}

export default QuoteDetail