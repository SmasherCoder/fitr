import React, { useState } from 'react';
import { useMutation, useQuery} from '@apollo/client';
import { CREATE_EXERCISE,  } from '../../utils/mutations';
import { useParams } from 'react-router-dom';
import { QUERY_WORKOUT } from '../../utils/queries';
import { useWorkoutContext } from '../../utils/GlobalState';
import { TOGGLE_EDIT_WORKOUT } from '../../utils/actions';

const EditWorkout = () => {
  
  const [state, dispatch] = useWorkoutContext();

  const [workoutState, setWorkoutState] = useState({ description: '', scheduled: '', exercise1: '', exercise2: '', exercise3: '', exercise4: '', exercise5: '' });

  const { loading, data } = useQuery(QUERY_WORKOUT, {
    variables: { id: state.selectedWorkout}
  });

  let loaded;

  const closeModal = () => {
    dispatch({ type: TOGGLE_EDIT_WORKOUT});
}

  const handleWorkoutChange = (event) => {
    const { name, value } = event.target;

    setWorkoutState({
      ...workoutState,
      [name]: value,
    });
  };

  const editWorkout = () => {

  }

  const loadWorkout = (id) => {
    console.log(id);
    setWorkoutState({
      description: '',
      scheduled: '', 
      exercise1: '',
      exercise2: '', 
      exercise3: '', 
      exercise4: '', 
      exercise5: '' 
    })
  }
  
  loadWorkout(data);

  if (!state.editModalOpen) {
    return (
      <></>
    )
  };

  return (<div className="add-modal">
  <h3>Create a new workout</h3>
  <form onSubmit={editWorkout}>
    <div>
      <label for="description">Workout description:</label>
      <input type='text' id='description' name='description' onChange={handleWorkoutChange}></input>
    </div>
    <div>
      <label for="scheduled">Select day of week</label>
      <select name="scheduled" name="scheduled" onChange={handleWorkoutChange}>
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

export default EditWorkout;