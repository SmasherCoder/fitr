import { gql } from '@apollo.client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      email
      password
      workout {
        exercises {

        }
      }
      follow {

      }
    }
  }
`;

export const QUERY_ME = gql`
  me {
    username
    email
    password
    workout {
      exercises {

      }
    }
    follow {

    }
  }
`;