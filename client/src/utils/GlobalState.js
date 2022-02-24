import React, { createContext, useContext } from "react";
import { useWorkoutReducer } from './reducers';

const WorkoutContext = createContext();
const { Provider } = WorkoutContext;

const WorkoutProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useWorkoutReducer({
    users: [],
    workouts: [],
    friends: [],
    currentDay: ''
    
  });

  return <Provider value={[state, dispatch]} {...props} />
};

const useWorkoutContext = () => {
  return useContext(WorkoutContext);
}

export { WorkoutProvider, useWorkoutContext };