/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      createdAt
      updatedAt
      username
      email
      displayName
      photo
      conversations {
        items {
          id
          createdAt
          updatedAt
          email
          displayName
          photo
          conversationId
          conversation {
            id
            createdAt
            updatedAt
            name
            initiator
            members
            messages {
              nextToken
            }
            recentMessageId
          }
          recentMessageId
          recentMessage {
            id
            conversationId
            authorId
            author {
              id
              createdAt
              updatedAt
              username
              email
              displayName
              photo
            }
            content
            type
            read
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        username
        email
        displayName
        photo
        conversations {
          items {
            id
            createdAt
            updatedAt
            email
            displayName
            photo
            conversationId
            conversation {
              id
              createdAt
              updatedAt
              name
              initiator
              members
              recentMessageId
            }
            recentMessageId
            recentMessage {
              id
              conversationId
              authorId
              content
              type
              read
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUserConversation = /* GraphQL */ `
  query GetUserConversation($id: ID!) {
    getUserConversation(id: $id) {
      id
      createdAt
      updatedAt
      email
      displayName
      photo
      conversationId
      conversation {
        id
        createdAt
        updatedAt
        name
        initiator
        members
        messages {
          items {
            id
            conversationId
            authorId
            author {
              id
              createdAt
              updatedAt
              username
              email
              displayName
              photo
            }
            content
            type
            read
            createdAt
            updatedAt
          }
          nextToken
        }
        recentMessageId
      }
      recentMessageId
      recentMessage {
        id
        conversationId
        authorId
        author {
          id
          createdAt
          updatedAt
          username
          email
          displayName
          photo
          conversations {
            items {
              id
              createdAt
              updatedAt
              email
              displayName
              photo
              conversationId
              recentMessageId
            }
            nextToken
          }
        }
        content
        type
        read
        createdAt
        updatedAt
      }
    }
  }
`;
export const listUserConversations = /* GraphQL */ `
  query ListUserConversations(
    $filter: ModelUserConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserConversations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        email
        displayName
        photo
        conversationId
        conversation {
          id
          createdAt
          updatedAt
          name
          initiator
          members
          messages {
            items {
              id
              conversationId
              authorId
              content
              type
              read
              createdAt
              updatedAt
            }
            nextToken
          }
          recentMessageId
        }
        recentMessageId
        recentMessage {
          id
          conversationId
          authorId
          author {
            id
            createdAt
            updatedAt
            username
            email
            displayName
            photo
            conversations {
              nextToken
            }
          }
          content
          type
          read
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      createdAt
      updatedAt
      name
      initiator
      members
      messages {
        items {
          id
          conversationId
          authorId
          author {
            id
            createdAt
            updatedAt
            username
            email
            displayName
            photo
            conversations {
              nextToken
            }
          }
          content
          type
          read
          createdAt
          updatedAt
        }
        nextToken
      }
      recentMessageId
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        name
        initiator
        members
        messages {
          items {
            id
            conversationId
            authorId
            author {
              id
              createdAt
              updatedAt
              username
              email
              displayName
              photo
            }
            content
            type
            read
            createdAt
            updatedAt
          }
          nextToken
        }
        recentMessageId
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      conversationId
      authorId
      author {
        id
        createdAt
        updatedAt
        username
        email
        displayName
        photo
        conversations {
          items {
            id
            createdAt
            updatedAt
            email
            displayName
            photo
            conversationId
            conversation {
              id
              createdAt
              updatedAt
              name
              initiator
              members
              recentMessageId
            }
            recentMessageId
            recentMessage {
              id
              conversationId
              authorId
              content
              type
              read
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      content
      type
      read
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        conversationId
        authorId
        author {
          id
          createdAt
          updatedAt
          username
          email
          displayName
          photo
          conversations {
            items {
              id
              createdAt
              updatedAt
              email
              displayName
              photo
              conversationId
              recentMessageId
            }
            nextToken
          }
        }
        content
        type
        read
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userByUsername = /* GraphQL */ `
  query UserByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        username
        email
        displayName
        photo
        conversations {
          items {
            id
            createdAt
            updatedAt
            email
            displayName
            photo
            conversationId
            conversation {
              id
              createdAt
              updatedAt
              name
              initiator
              members
              recentMessageId
            }
            recentMessageId
            recentMessage {
              id
              conversationId
              authorId
              content
              type
              read
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const userByEmail = /* GraphQL */ `
  query UserByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        username
        email
        displayName
        photo
        conversations {
          items {
            id
            createdAt
            updatedAt
            email
            displayName
            photo
            conversationId
            conversation {
              id
              createdAt
              updatedAt
              name
              initiator
              members
              recentMessageId
            }
            recentMessageId
            recentMessage {
              id
              conversationId
              authorId
              content
              type
              read
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
