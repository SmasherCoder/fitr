import { gql } from '@apollo.client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      email
      password
      workouts {
        description
        createdAt
        exercises {
          exerciseBody
          createdAt
        }
      }
      follow {
        username
      }
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  {
    users {
      _id
      username
      email
      workouts {
        description
        createdAt
        exercises {
          exerciseBody
          createdAt
        }
      }
      follow {
        username
      }
    }
  }
`

export const QUERY_ME = gql`
  me {
    username
    email
    password
    workouts {
      description
      createdAt
      exercises {
        exerciseBody
        createdAt
      }
    }
    follow {
      username
    }
  }
`;

export const QUERY_WORKOUT = gql`
  query workout($id: ID!) {
    description
    createdAt
    username
    exercises {
      exerciseBody
      createdAt
    }
  }
`;

export const QUERY_ALL_EXERCISES = gql`
  {
    allExercises {
      _id
      exerciseBody
      username
    }
  }
`;

export const QUERY_EXERCISES = gql`
  query exercises($username: String!) {
    exercises(username: $username) {
      _id
      username
      exerciseBody
    }
  }
`;

export const QUERY_EXERCISE = gql`
  query exercise($_id: ID!) {
    exercise(_id: $_id) {
      exerciseBody
      _id
      username
    }
  }
`
