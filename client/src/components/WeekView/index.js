import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from '../../utils/queries';

import { useWorkoutContext } from '../../utils/GlobalState';
import { UPDATE_SELECTED_DAY } from '../../utils/actions';




const WeekView = () => {

  const [state, dispatch] = useWorkoutContext();

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: {username: userParam}
  });

  const user =  data?.user || {};

  const updateDay = (day) => {
    dispatch({
      type: UPDATE_SELECTED_DAY,
      day: day
    });
  }


  if (!user.username) {
    return <div className='day-header'>User not found</div>
  }
  
  return (
    <div className='week'>
      {days.map(day => (
        <div key={day} className='day' onClick={() => {updateDay(day)}}>
          <div className='day-header'>
            {day}
          </div>
          <div className='day-body'>
            { !loading ? (
            user.workouts.map((workout) => (
              workout.scheduled === day ? (
              <p className='workout' key={workout.description}>
                {workout.description}
              </p>
              ) : (
              <></>
                )
            ))) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </div>
  )
};

export default  WeekView;