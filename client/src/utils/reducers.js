import { useReducer } from 'react';

import { 
  LOAD_WORKOUTS,
  LOAD_FRIENDS,
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  REMOVE_WORKOUT,
  // ADD_FRIEND,
  // REMOVE_FRIEND
  }  from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_WORKOUTS:
      return {
        ...state,
        workouts: [...action.workouts],
      };

    case LOAD_FRIENDS:
      return {
        ...state,
        friends: [...action.friends],
      };

      case ADD_WORKOUT:
        return {
          ...state,
          workoutOpen: true,
          workout: [...state.workout, action.workouts]
        };
      
      case UPDATE_WORKOUT:
        return {
          ...state,
          workoutOpen: true,
          workout: state.workout.map(workout => {
            if (action._id === workout._id) {
              workout.exercises = action.exercises
            }
            return workout
          })
        };

      case REMOVE_WORKOUT: 
      let newState = state.workout.filter(workouts => {
       return workouts._id !== action._id;
      });

      return {
        ...state,
        workoutOpen: newState.length > 0,
        workout: newState
      };

  default:
    return state;

}
};


export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}