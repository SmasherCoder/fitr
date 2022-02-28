import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const CREATE_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_EXERCISE = gql`
  mutation addExercise($exerciseBody: String!) {
    addExercise(exerciseBody: $exerciseBody) {
      _id
      exerciseBody
      createdAt
    }
  }
`;

export const CREATE_WORKOUT = gql`
  mutation addWorkout($description: String!, $exercises: [ID]!, $scheduled: String!) {
    addWorkout(description: $description, exercises: $exercises, scheduled: $scheduled) {
      description
      createdAt
      username
      scheduled
      exercises {
        exerciseBody
        createdAt
      }
    }
  }

`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($id: ID!) {
    removeFriend(id: $id) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`;

export const REMOVE_WORKOUT = gql`
  mutation RemoveWorkout($workoutId: ID!) {
    removeWorkout(workoutId: $workoutId) {
      _id
    }
  }
`