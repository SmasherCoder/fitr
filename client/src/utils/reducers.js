import { useReducer } from 'react';

import { 
  LOAD_WORKOUTS,
  LOAD_FRIENDS,
  ADD_WORKOUT,
  // UPDATE_WORKOUT,
  // REMOVE_WORKOUT,
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
          workout: [...state.workout, action.workout]
        }

  default:
    return state;

}
};


export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}