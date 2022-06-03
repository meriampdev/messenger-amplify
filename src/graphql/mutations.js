/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteUserConversationWhere = /* GraphQL */ `
  mutation DeleteUserConversationWhere($filter: ConversationFilterInput!) {
    deleteUserConversationWhere(filter: $filter) {
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
export const deleteMessagesWhere = /* GraphQL */ `
  mutation DeleteMessagesWhere($filter: ConversationFilterInput!) {
    deleteMessagesWhere(filter: $filter) {
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
export const createUserConversation = /* GraphQL */ `
  mutation CreateUserConversation(
    $input: CreateUserConversationInput!
    $condition: ModelUserConversationConditionInput
  ) {
    createUserConversation(input: $input, condition: $condition) {
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
export const updateUserConversation = /* GraphQL */ `
  mutation UpdateUserConversation(
    $input: UpdateUserConversationInput!
    $condition: ModelUserConversationConditionInput
  ) {
    updateUserConversation(input: $input, condition: $condition) {
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
export const deleteUserConversation = /* GraphQL */ `
  mutation DeleteUserConversation(
    $input: DeleteUserConversationInput!
    $condition: ModelUserConversationConditionInput
  ) {
    deleteUserConversation(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
