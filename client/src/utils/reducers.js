import { LOAD_WORKOUTS,
  LOAD_FRIENDS,
  LOAD_USERS,
  UPDATE_SELECTED_DAY
  }  from "./actions";
import { useReducer } from 'react';

export const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_WORKOUTS:
      return {
        ...state,
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
