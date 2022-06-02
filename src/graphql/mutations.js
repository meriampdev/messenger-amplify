/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
          name
          initiator
          owner
          members
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
          name
          initiator
          owner
          members
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
          name
          initiator
          owner
          members
        }
        nextToken
      }
    }
  }
`;
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      name
      initiator
      owner
      members
      membersUsers {
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
      messages {
        items {
          id
          conversationID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      name
      initiator
      owner
      members
      membersUsers {
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
      messages {
        items {
          id
          conversationID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      name
      initiator
      owner
      members
      membersUsers {
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
      messages {
        items {
          id
          conversationID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      conversationID
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
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      conversationID
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      conversationID
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
      createdAt
      updatedAt
    }
  }
`;
