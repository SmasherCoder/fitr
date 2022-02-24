import { useReducer } from 'react';

import { 
  LOAD_WORKOUTS,
  LOAD_FRIENDS,
<<<<<<< HEAD
  LOAD_USERS,
  UPDATE_SELECTED_DAY
=======
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  REMOVE_WORKOUT,
  // ADD_FRIEND,
  // REMOVE_FRIEND
>>>>>>> 21825f72a04640699f1494fb24f8661322c4df95
  }  from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_WORKOUTS:
      return {
        ...state,
<<<<<<< HEAD
        workouts: [...action.workouts]
      };

    case LOAD_FRIENDS: 
      return {
        ...state,
        friends: [...action.friends]
      };

    case LOAD_USERS:
      return {
        ...state,
        users: [...action.users]
      };

    case UPDATE_SELECTED_DAY: {

      return {
        ...state,
        currentDay: action.day
      };

    }
  }
};

export function useWorkoutReducer(initialState) {
  return useReducer(reducer, initialState);
}
=======
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
>>>>>>> 21825f72a04640699f1494fb24f8661322c4df95
