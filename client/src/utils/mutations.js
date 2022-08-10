import { gql } from '@apollo/client';
//to login user
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
//to create user
export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
//to delete user
export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      _id
      name  
    }
  }
`;