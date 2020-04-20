import React from "react";
import Post from "./Post/Post";

const masterPostList = [
  {
    name: "bob",
    content: <img className="postPic" src='https://i.imgur.com/Aou2YAV.png' alt='post' />
  },
  {
    name: "Todd on React",
    content: <img className="postPic" src='https://i.imgur.com/PZcZHVf.png' alt='post' />
  },
  {
    name: "Donald Trump",
    content: <img className="postPic" src='https://i.chzbgr.com/full/9159664384/hE0B2ABEB/trump-memes-meme-of-donald-trump-pulling-a-little-flag-out-of-his-nose' alt='post' />
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