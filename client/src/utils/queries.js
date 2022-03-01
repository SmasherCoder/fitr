import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      workouts {
        _id
        description
        createdAt
        scheduled
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
        scheduled
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

query Me {
  me {
    _id
    username
    email
    workouts {
      scheduled
      exercises {
        createdAt
        exerciseBody
        _id
      }
      createdAt
      username
      description
      _id
    }
    follow {
      username
    }
    followCount
  }
}
`;

export const QUERY_WORKOUT = gql`
  query workout($id: ID!) {
    workout(_id: $id) {
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

export const QUERY_ALL_WORKOUTS = gql `
{
  allWorkouts {
    description
    createdAt
    username
    scheduled
    exercises {
      exerciseBody
      createdAt
    }
  }
}`

export const QUERY_ALL_EXERCISES = gql`
  {
    allExercises {
      _id
      exerciseBody
    }
  }
`;

export const QUERY_EXERCISES = gql`
  query exercises($username: String!) {
    exercises(username: $username) {
      _id
      exerciseBody
    }
  }
`;

export const QUERY_EXERCISE = gql`
  query exercise($_id: ID!) {
    exercise(_id: $_id) {
      exerciseBody
      _id
    }
  }
`
