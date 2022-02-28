import { useReducer } from 'react';

import { 
  TOGGLE_ADD_WORKOUT,
  TOGGLE_EDIT_WORKOUT,
  UPDATE_SELECTED_DAY
  }  from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_ADD_WORKOUT: {
      return {
        ...state,
        addModalOpen: !state.addModalOpen
      }
    }

    case TOGGLE_EDIT_WORKOUT: {
      return {
        ...state,
        editModalOpen: !state.editModalOpen,
        selectedWorkout: action.selectedWorkout
      }
    }

    // case UPDATE_SELECTED_WORKOUT: {
    //   return {
    //     ...state,
    //     selectedWorkout: action.selectedWorkout
    //   }
    // }

    case UPDATE_SELECTED_DAY: {

      return {
        ...state,
        currentDay: action.day
      }
    }

      default: 
      return state;
    }
  }

export function useWorkoutReducer(initialState) {
  return useReducer(reducer, initialState);
}
