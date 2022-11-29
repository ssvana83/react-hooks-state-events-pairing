import React from 'react'

function CommentCard(props) {
  
  return (
    <div>
      <h3>{props.user}</h3>
      <p>{props.comment}</p>
    </div>

  )
}

export default CommentCard;
