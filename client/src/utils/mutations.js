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
  mutation createUser($username: String!, $email: String, $password: String!) {
    createUser(username: $username, email: $email, password, $password) {

      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_EXERCISE = `
  mutation createExercise($exerciseBody: String!) {
    createExercise(exerciseBody: $exerciseBody) {
      exerciseBody
      username
      createdAt
    }
  }
`;

export const CREATE_WORKOUT = gql`
  mutation createWorkout($description: String!, $exercises: [ID]!) {
    createWorkout(description: $description, exercises: $exercises) {
      description
      createdAt
      username
      exercises {
        exerciseBody
        username
        createdAt
      }
    }
  }

`;