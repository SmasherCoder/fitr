import React from 'react';
// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';
import FriendList from '../components/FriendList';
import { Link } from 'react-router-dom';
//import components of our workouts and friends

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_WORKOUTS, QUERY_ME } from '../utils/queries';

//import queries from utils

const Home = () => {
  const { loading, data } = useQuery(QUERY_ALL_WORKOUTS);
  const { data: userData } = useQuery(QUERY_ME);
  const workouts = data?.allWorkouts;

  const loggedIn = Auth.loggedIn();


  
  return (
    <main>
      <div className="flex-row justify-space-between">
        
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className='workoutList'>
              {workouts.map(workout => (
                <div className='workoutListItem' key={workout}>
                  <div className='itemHeader'>
                    {workout.description} by <Link to={`/profile/${workout.username}`}>{workout.username}</Link>
                  </div>
                  {/* <div className='itemBody'>
                    {workout.exercises.map(exercise => (
                      <div className='exercise'>
                        {exercise.exerciseBody}
                      </div>
                    ))}
                  </div> */}
                </div>
              ))}
            </div>
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              followCount={userData.me.followCount}
              follow={userData.me.follow}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
