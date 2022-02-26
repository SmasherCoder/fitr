import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from '../../utils/queries';

import { useWorkoutContext } from '../../utils/GlobalState';

const DayView = () => {

    const [state, dispatch] = useWorkoutContext();

    const { username: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
        variables: {username: userParam}
    });

    const user =  data?.user || {};



    console.log(user);
    console.log(state);

    return (
        <div className='day'>
            <ul>
            { !loading ? (
            state.currentDay ? (
                <>
                <p>{state.currentDay}</p>
                {user.workouts.map((workout) => (
                    workout.scheduled === state.currentDay ? (
                        <div>
                        {workout.exercises.map((exercise) => (
                            <li>{exercise.exerciseBody}</li>
                        ))}
                        </div>
                    ):(<li></li>
                    )
                ))}
                </>
            ): (
                <li>Select the Day you would like to view</li>
            )
            ): (<></>)}
            <button>Add to Workout</button>
            <button>Edit Workout</button>
          </ul>
        </div>
      )
}

export default DayView;

{/* <div className='day'>
<ul>
    { !loading ? (
        !state.currentDay ? (
            user.workouts.map((workout) => (
                workout.scheduled === state.currentDay ? (
                    workout.exercises.map((exercise) => (
                        <li>{exercise.exerciseBody}</li>
                    ))
                ):(<li></li>
                )
            ))
        ): (
            <li>Select the Day you would like to view</li>
        ) : ( <></>)) }</ul>
        <button>"Add to Workout"</button>
        <button>Edit Workout</button>
</div> */}