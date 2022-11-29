//import React, {useState} from 'react'
import video from "../data/video.js";
import VideoContainer from "./VideoContainer"
import CommentsContainer from "./CommentsContainer"
import {useState} from "react/cjs/react.development"


function App() {

  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  function handleVoteClick() {
    console.log('clicked')
  }
  

  return (
    <div className="App">
      <VideoContainer video={video} upvotes={upvotes} downvotes={downvotes} handleVoteClick={handleVoteClick}/>
      <CommentsContainer comments={video.comments} />
    </div>
  );
}

export default App;

