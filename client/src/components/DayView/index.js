import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from '../../utils/queries';
import { REMOVE_WORKOUT } from '../../utils/mutations';

import { useWorkoutContext } from '../../utils/GlobalState';
import { TOGGLE_ADD_WORKOUT, TOGGLE_EDIT_WORKOUT } from '../../utils/actions';

const DayView = () => {

    const [state, dispatch] = useWorkoutContext();

    const { username: userParam } = useParams();

    const [removeWorkout] = useMutation(REMOVE_WORKOUT);

    const { loading, data } = useQuery(QUERY_USER, {
        variables: {username: userParam}
    });

    const user =  data?.user || {};

    const openAddModal = () => {
        dispatch({ type: TOGGLE_ADD_WORKOUT});
    }

    // const openEditModal = (id) => {
    //     console.log(id);
    //     dispatch({
    //         type: TOGGLE_EDIT_WORKOUT,
    //         selectedWorkout: id
    //     });
    // }

    const deleteWorkout = async (id) => {
        try {
            const  { data }  = await removeWorkout({
              variables: { workoutId: id}
            });
          } catch (e) {
            console.log(e);
          }
        window.location.reload();
    }

    console.log(user);
    console.log(state);

    return (
        <div className='selected-day'>
            <ul>
            { !loading ? (
            state.currentDay ? (
                <>
                <p>{state.currentDay}</p>
                {user.workouts.map((workout) => (
                    workout.scheduled === state.currentDay ? (
                        <div className='day-workout'>
                        <p>{workout.description}</p>
                        {workout.exercises.map((exercise) => (
                            <li>{exercise.exerciseBody}</li>
                        ))}
                        <button onClick={() => deleteWorkout(workout._id)}>Delete Workout</button>
                        </div>
                    ):(<li></li>
                    )
                ))}
                </>
            ): (
                <li>Select the Day you would like to view</li>
            )
            ): (<></>)}
             <br></br>
            <button onClick={openAddModal}>Add Workout</button>
            
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