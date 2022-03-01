import React from 'react';
import { ADD_FRIEND } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import FriendList from '../components/FriendList';
import { useParams } from 'react-router-dom';
import { useWorkoutContext } from '../utils/GlobalState';

import WeekView from '../components/WeekView';
import DayView from '../components/DayView';
import AddWorkout from '../components/AddWorkout';
import EditWorkout from '../components/EditWorkout';

const Profile = () => {
  
  const [addFriend] = useMutation(ADD_FRIEND);

  const  { username: userParam } = useParams();

  const { loading, data } =useQuery(QUERY_USER, {
    variables: {username: userParam}
  });

  const user = data?.user || {};
  
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
    {!loading ? (
      <>
      <WeekView />

      <DayView />

      <div className="col-12 col-lg-3 mb-3">
          <FriendList
          username={user.username}
          followCount={user.followCount}
          follow={user.follow}
          />
        </div>
      </> ) : (
        <></>
    )}
      <AddWorkout />
      {/* <EditWorkout /> */}
    </div>

    
  )
}

export default Profile;