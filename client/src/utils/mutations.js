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

export const CREATE_EXERCISE = `
  mutation addExercise($exerciseBody: String!) {
    addExercise(exerciseBody: $exerciseBody) {
      exerciseBody
      username
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
        username
        createdAt
      }
    }
  }

`;