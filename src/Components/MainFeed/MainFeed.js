import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import PostStream from './PostStream/PostStream';
import UserInfo from './UserInfo/UserInfo';
import SuggestedUsers from './SuggestedUsers/SuggestedUsers';


const mainFeed = () => {
  return (
    <div className="mainFeed">
      <div className="userData">
        <UserInfo />
        <AboutMe />
      </div>
      <div className="Suggestions">
        <SuggestedUsers />
      </div>
      <PostStream />
    </div>
  )
}

export default mainFeed;