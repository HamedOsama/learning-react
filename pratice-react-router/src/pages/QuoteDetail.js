import React, { useEffect } from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'

import HighlightedQuotes from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner';
// const DUMMY_QUOTES = [
//   { id: 'q1', author: 'Hamed', text: 'JS Dragon.' },
//   { id: 'q2', author: 'Ahmed', text: 'PHP for ultimate beginners.' },
// ]

function QuoteDetail() {
  const params = useParams();
  const { quoteId } = params;
  const match = useRouteMatch();
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId])

  if (status === 'pending')
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  if (error)
    return <p className='centered focused'>{error}</p>

  if (!loadedQuote.text) {
    return <p>No quote found!</p>
  }
  return (
    <div>
      <HighlightedQuotes text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.url} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </div>
  )
}

export default QuoteDetail