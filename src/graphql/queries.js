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
          recentMessageId
        }
        messages {
          nextToken
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
      recentMessageId
      recentMessage {
        id
        conversationId
        reactions {
          nextToken
        }
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
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      conversationId
      reactions {
        items {
          id
          messageId
          authorId
          reaction
          createdAt
          updatedAt
        }
        nextToken
      }
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
        reactions {
          nextToken
        }
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
  }
`;
export const getMessageReaction = /* GraphQL */ `
  query GetMessageReaction($id: ID!) {
    getMessageReaction(id: $id) {
      id
      messageId
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
      reaction
      createdAt
      updatedAt
    }
  }
`;
export const listMessageReactions = /* GraphQL */ `
  query ListMessageReactions(
    $filter: ModelMessageReactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessageReactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        messageId
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
        reaction
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
          nextToken
        }
      }
      nextToken
    }
  }
`;
