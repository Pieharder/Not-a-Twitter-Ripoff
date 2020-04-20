import React from "react";
import Post from "./Post/Post";

const masterPostList = [
  {
    name: "bob",
    content: <img className="postPic" src='https://i.imgur.com/Aou2YAV.png' alt='post' />
  },
  {
    name: "Todd",
    content: "I have no idea how to react"
  },
  {
    name: "Donald Trump",
    content: "It's almost like the United States has no President - we are a rudderless ship heading for a major disaster. Good luck everyone!"
  },
  {
    name: "Mr PoopyButtHole",
    content: <img className="postPic" src='https://i.imgur.com/7m2W6RD.jpg' alt='post' />
  }
];

function PostStream() {
  return (
    <React.Fragment>
      <div className="postStream">
        <hr/>
        {masterPostList.map((post, index) =>
          <Post name={post.name}
          content={post.content}
          key={index}/>
        )}
      </div>
    </React.Fragment>
  );
}

export default PostStream;