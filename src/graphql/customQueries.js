export const getUserAndConversations = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        createdAt
        updatedAt
        conversations(limit: 20) {
          items {
            id
            name
          }
        }
      }
      nextToken
    }
  }
`