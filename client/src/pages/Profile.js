import React from 'react';
import { ADD_FRIEND } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import FriendList from '../components/FriendList';

import WeekView from '../components/WeekView';

const Profile = () => {
  const [addFriend] = useMutation(ADD_FRIEND);
  
  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id }
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="flex-row mb-3">
  <h2 className="bg-dark text-secondary p-3 display-inline-block">
    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
  </h2>

  {userParam && (
  <button className="btn ml-auto" onClick={handleClick}>
    Add Friend
  </button>
)}
</div>
      <WeekView />
      <div className="col-12 col-lg-3 mb-3">
          <FriendList
          username={user.username}
          friendCount={user.friendCount}
          friends={user.friends}
          />
        </div>

    </div>
  )
}

export default Profile;