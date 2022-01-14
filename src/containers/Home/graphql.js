import gql from 'graphql-tag'

const GET_AUTHORS = gql`
  query authors {
    authors {
      id
      firstName
      lastName
    }
}
`

const ADD_AUTHOR = gql`
  mutation addAuthor($added: AddAuthorInput!) {
    addAuthor(input: $added) {
    firstName
    lastName
    }
  }
`

export { GET_AUTHORS, ADD_AUTHOR }
