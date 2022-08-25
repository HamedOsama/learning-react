import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api'
import LoadingSpinner from '../UI/LoadingSpinner';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { quoteId } = params;
  // console.log(quoteId)
  const { sendRequest, status, data: loadedComments, error } = useHttp(getAllComments, true)


  useEffect(() => {
    sendRequest(quoteId);
    // console.log(1)
  }, [sendRequest, quoteId])

  const onAddedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
    setIsAddingComment(false)
  }, [sendRequest, quoteId])

  let comments;
  // console.log(loadedComments)
  // console.log(status)
  if (status === 'pending') {
    comments = <div className='centered'>
      <LoadingSpinner />
    </div>
  }
  if (error)
    return <p className='centered focused'>{error}</p>
  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className='centered'>No comments were added yet!</p>
    console.log(comments)
  }
  if (status === 'completed' && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />
  }
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm id={quoteId} onAddedComment={onAddedCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
