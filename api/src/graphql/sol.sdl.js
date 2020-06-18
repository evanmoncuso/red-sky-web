export const schema = gql`
  type Sol {
    name: String!
    path: String!
    title: String!
  }

  type Query {
    getSols: [Sol!]!
  }
`
