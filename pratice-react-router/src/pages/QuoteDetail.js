import React, { useEffect } from 'react'
import { useParams, Route, Link, Routes } from 'react-router-dom'

import HighlightedQuotes from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner';

function QuoteDetail() {
  const params = useParams();
  const { quoteId } = params;

  // const match = useMatch();
  // console.log(match);
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
  const loadCommentBtn = <div className='centered'>
    <Link className='btn--flat' to={`comments`}>Load Comments</Link>
  </div>
  return (
    <div>
      <HighlightedQuotes text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route path='/' element={loadCommentBtn} />
        <Route path={`comments`} element={<Comments />} />
      </Routes>
    </div>
  )
}

export default QuoteDetail