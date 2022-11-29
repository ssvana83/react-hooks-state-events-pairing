import React, {useState} from 'react'
import CommentCard from "./CommentCard"

function CommentsContainer(props) {
  const [showComments, setShowComments] = useState(true)

  const renderComments = props.comments.map((commentObj) => (
    <CommentCard key={commentObj.id} comment={commentObj.comment} user={commentObj.user} />
  ));

  const displayComments = showComments ? (
    <>
    <h2>{props.comments.length} Comments</h2>
    {renderComments}
    </>
    ) : null;

    function toggleShowComments() {
      console.log("clicked")
      setShowComments((currentShowComments) => !currentShowComments);
    }
  
  return (
    <div>
      <button onClick={toggleShowComments}>Hide Comments</button>
      {displayComments}
    </div>
  )
}

export default CommentsContainer;
