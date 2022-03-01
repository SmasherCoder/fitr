import React, { useState } from 'react';
import { useMutation,} from '@apollo/client';
import { CREATE_EXERCISE, CREATE_WORKOUT } from '../../utils/mutations';
import { useParams } from 'react-router-dom';
import { useWorkoutContext } from '../../utils/GlobalState';
import { TOGGLE_ADD_WORKOUT } from '../../utils/actions';

const AddWorkout = () => {
  const [state, dispatch] = useWorkoutContext();

  const [workoutState, setWorkoutState] = useState({ description: '', scheduled: '', exercise1: '', exercise2: '', exercise3: '', exercise4: '', exercise5: '' });

  const [createExercise] = useMutation(CREATE_EXERCISE);
  
  const [createWorkout] = useMutation(CREATE_WORKOUT);

  const { username: userParam } = useParams();

  const closeModal = () => {
    dispatch({ type: TOGGLE_ADD_WORKOUT});
}

  const handleWorkoutChange = (event) => {
    const { name, value } = event.target;

    setWorkoutState({
      ...workoutState,
      [name]: value,
    });
  };

  const addWorkout = async (event) => {
    event.preventDefault();
    const exercises = []
    console.log(workoutState);
    
    
    if (workoutState.exercise1) {
      console.log(workoutState.exercise1);
      try {
        const  { data }  = await createExercise({
          variables: { exerciseBody: workoutState.exercise1}
        })
        exercises.push(data.addExercise._id);
      } catch (e) {
        console.log(e);
      }
    }
    
    if (workoutState.exercise2) {
      console.log(workoutState.exercise2);
      try {
        const  { data }  = await createExercise({
          variables: { exerciseBody: workoutState.exercise2}
        })
        exercises.push(data.addExercise._id);
      } catch (e) {
        console.log(e);
      }
    }
    
    if (workoutState.exercise3) {
      console.log(workoutState.exercise3);
      try {
        const  { data }  = await createExercise({
          variables: { exerciseBody: workoutState.exercise3}
        })
        exercises.push(data.addExercise._id);
      } catch (e) {
        console.log(e);
      }
    }
    
    if (workoutState.exercise4) {
      console.log(workoutState.exercise4);
      try {
        const  { data }  = await createExercise({
          variables: { exerciseBody: workoutState.exercise4}
        })
        exercises.push(data.addExercise._id);
      } catch (e) {
        console.log(e);
      }
    }
    
    if (workoutState.exercise5) {
      console.log(workoutState.exercise5);
      try {
        const  { data }  = await createExercise({
          variables: { exerciseBody: workoutState.exercise5}
        })
        exercises.push(data.addExercise._id);
      } catch (e) {
        console.log(e);
      }
    } 
    
    try {
      const  { data }  = await createWorkout({
        variables: { 
          description: workoutState.description,
          scheduled: workoutState.scheduled,
          username: userParam,
          exercises: exercises
        }
      });
      console.log(data)
    } catch (e) {
      console.log(e);
    }
    window.location.reload();
  }

  if (!state.addModalOpen) {
    return (
      <></>
    )
  }

  return (<div className="add-modal">
  <h3>Create a new workout</h3>
  <form onSubmit={addWorkout}>
    <div>
      <label for="description">Workout description:</label>
      <input type='text' id='description' name='description' onChange={handleWorkoutChange}></input>
    </div>
    <div>
      <label for="scheduled">Select day of week</label>
      <select name="scheduled" name="scheduled" onChange={handleWorkoutChange}>
        <option value=''>Select a day</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
    </div>
    <div>
      <label for="exercise1">Exercise 1</label>
      <input type="text" id="exercise1" name="exercise1" onChange={handleWorkoutChange}></input>
    </div>
    <div>
      <label for="exercise2">Exercise 2</label>
      <input type="text" id="exercise2" name="exercise2" onChange={handleWorkoutChange}></input>
    </div>
    <div>
      <label for="exercise3">Exercise 3</label>
      <input type="text" id="exercise3" name="exercise3" onChange={handleWorkoutChange}></input>
    </div>
    <div>
      <label for="exercise4">Exercise 4</label>
      <input type="text" id="exercise4" name="exercise4" onChange={handleWorkoutChange}></input>
    </div>
    <div>
      <label for="exercise5">Exercise 5</label>
      <input type="text" id="exercise5" name="exercise5" onChange={handleWorkoutChange}></input>
    </div>
    <button type="submit">Add Workout</button>
    <button onClick={closeModal}>Close</button>
  </form>
</div>)
}

export default AddWorkout