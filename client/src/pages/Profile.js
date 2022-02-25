import React from 'react';
import { ADD_FRIEND } from '../utils/mutations';
import { useMutation } from '@apollo/client';

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
    </div>
  )
}

export default Profile;