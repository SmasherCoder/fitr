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
