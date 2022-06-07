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
        recentMessageId
        recentMessage {
          id
          conversationId
          reactions {
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
                authpool
                conversations {
                  nextToken
                }
              }
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
            authpool
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
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
        userConversation {
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
                authpool
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
            userConversation {
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
                userConversation {
                  id
                  createdAt
                  updatedAt
                  email
                  displayName
                  photo
                  conversationId
                }
                conversationUserConversationId
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
            conversationUserConversationId
          }
          messages {
            items {
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
                authpool
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
        }
        conversationUserConversationId
      }
      messages {
        items {
          id
          conversationId
          reactions {
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
                authpool
                conversations {
                  nextToken
                }
              }
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
            authpool
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
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
        nextToken
      }
    }
  }
`;
export const deleteMessagesWhere = /* GraphQL */ `
  mutation DeleteMessagesWhere($filter: ConversationFilterInput!) {
    deleteMessagesWhere(filter: $filter) {
      id
      conversationId
      reactions {
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
            authpool
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
                }
              }
              nextToken
            }
          }
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
        authpool
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
                  authpool
                }
                content
                type
                read
                createdAt
                updatedAt
              }
              userConversation {
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
                }
              }
              conversationUserConversationId
            }
            messages {
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
                  authpool
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
      authpool
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
            recentMessage {
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
                authpool
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
            userConversation {
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
                userConversation {
                  id
                  createdAt
                  updatedAt
                  email
                  displayName
                  photo
                  conversationId
                }
                conversationUserConversationId
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
            conversationUserConversationId
          }
          messages {
            items {
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
                authpool
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
      authpool
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
            recentMessage {
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
                authpool
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
            userConversation {
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
                userConversation {
                  id
                  createdAt
                  updatedAt
                  email
                  displayName
                  photo
                  conversationId
                }
                conversationUserConversationId
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
            conversationUserConversationId
          }
          messages {
            items {
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
                authpool
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
      authpool
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
            recentMessage {
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
                authpool
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
            userConversation {
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
                userConversation {
                  id
                  createdAt
                  updatedAt
                  email
                  displayName
                  photo
                  conversationId
                }
                conversationUserConversationId
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
            conversationUserConversationId
          }
          messages {
            items {
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
                authpool
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
        recentMessageId
        recentMessage {
          id
          conversationId
          reactions {
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
                authpool
                conversations {
                  nextToken
                }
              }
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
            authpool
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
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
        userConversation {
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
                authpool
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
            userConversation {
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
                userConversation {
                  id
                  createdAt
                  updatedAt
                  email
                  displayName
                  photo
                  conversationId
                }
                conversationUserConversationId
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
            conversationUserConversationId
          }
          messages {
            items {
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
                authpool
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
        }
        conversationUserConversationId
      }
      messages {
        items {
          id
          conversationId
          reactions {
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
                authpool
                conversations {
                  nextToken
                }
              }
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
            authpool
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
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
        nextToken
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
        recentMessageId
        recentMessage {
          id
          conversationId
          reactions {
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
                authpool
                conversations {
                  nextToken
                }
              }
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
            authpool
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
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
        userConversation {
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
                authpool
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
            userConversation {
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
                userConversation {
                  id
                  createdAt
                  updatedAt
                  email
                  displayName
                  photo
                  conversationId
                }
                conversationUserConversationId
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
            conversationUserConversationId
          }
          messages {
            items {
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
                authpool
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
        }
        conversationUserConversationId
      }
      messages {
        items {
          id
          conversationId
          reactions {
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
                authpool
                conversations {
                  nextToken
                }
              }
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
            authpool
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
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
        nextToken
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
        recentMessageId
        recentMessage {
          id
          conversationId
          reactions {
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
                authpool
                conversations {
                  nextToken
                }
              }
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
            authpool
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
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
        userConversation {
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
                authpool
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
            userConversation {
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
                userConversation {
                  id
                  createdAt
                  updatedAt
                  email
                  displayName
                  photo
                  conversationId
                }
                conversationUserConversationId
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
            conversationUserConversationId
          }
          messages {
            items {
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
                authpool
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
        }
        conversationUserConversationId
      }
      messages {
        items {
          id
          conversationId
          reactions {
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
                authpool
                conversations {
                  nextToken
                }
              }
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
            authpool
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
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
      members
      recentMessageId
      recentMessage {
        id
        conversationId
        reactions {
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
              authpool
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
          authpool
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
                userConversation {
                  id
                  createdAt
                  updatedAt
                  email
                  displayName
                  photo
                  conversationId
                }
                conversationUserConversationId
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
            nextToken
          }
        }
        content
        type
        read
        createdAt
        updatedAt
      }
      userConversation {
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
            reactions {
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
                  authpool
                }
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
              authpool
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
            content
            type
            read
            createdAt
            updatedAt
          }
          userConversation {
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
                  authpool
                }
                content
                type
                read
                createdAt
                updatedAt
              }
              userConversation {
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
                }
              }
              conversationUserConversationId
            }
            messages {
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
                  authpool
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
          conversationUserConversationId
        }
        messages {
          items {
            id
            conversationId
            reactions {
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
                  authpool
                }
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
              authpool
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
            content
            type
            read
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      conversationUserConversationId
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
      recentMessageId
      recentMessage {
        id
        conversationId
        reactions {
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
              authpool
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
          authpool
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
                userConversation {
                  id
                  createdAt
                  updatedAt
                  email
                  displayName
                  photo
                  conversationId
                }
                conversationUserConversationId
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
            nextToken
          }
        }
        content
        type
        read
        createdAt
        updatedAt
      }
      userConversation {
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
            reactions {
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
                  authpool
                }
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
              authpool
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
            content
            type
            read
            createdAt
            updatedAt
          }
          userConversation {
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
                  authpool
                }
                content
                type
                read
                createdAt
                updatedAt
              }
              userConversation {
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
                }
              }
              conversationUserConversationId
            }
            messages {
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
                  authpool
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
          conversationUserConversationId
        }
        messages {
          items {
            id
            conversationId
            reactions {
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
                  authpool
                }
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
              authpool
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
            content
            type
            read
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      conversationUserConversationId
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
      recentMessageId
      recentMessage {
        id
        conversationId
        reactions {
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
              authpool
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
          authpool
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
                userConversation {
                  id
                  createdAt
                  updatedAt
                  email
                  displayName
                  photo
                  conversationId
                }
                conversationUserConversationId
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
            nextToken
          }
        }
        content
        type
        read
        createdAt
        updatedAt
      }
      userConversation {
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
            reactions {
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
                  authpool
                }
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
              authpool
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
            content
            type
            read
            createdAt
            updatedAt
          }
          userConversation {
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
                  authpool
                }
                content
                type
                read
                createdAt
                updatedAt
              }
              userConversation {
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
                }
              }
              conversationUserConversationId
            }
            messages {
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
                  authpool
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
          conversationUserConversationId
        }
        messages {
          items {
            id
            conversationId
            reactions {
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
                  authpool
                }
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
              authpool
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
            content
            type
            read
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      conversationUserConversationId
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
      reactions {
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
            authpool
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
                }
              }
              nextToken
            }
          }
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
        authpool
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
                  authpool
                }
                content
                type
                read
                createdAt
                updatedAt
              }
              userConversation {
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
                }
              }
              conversationUserConversationId
            }
            messages {
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
                  authpool
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
      reactions {
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
            authpool
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
                }
              }
              nextToken
            }
          }
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
        authpool
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
                  authpool
                }
                content
                type
                read
                createdAt
                updatedAt
              }
              userConversation {
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
                }
              }
              conversationUserConversationId
            }
            messages {
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
                  authpool
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
      reactions {
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
            authpool
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
                }
              }
              nextToken
            }
          }
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
        authpool
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
                  authpool
                }
                content
                type
                read
                createdAt
                updatedAt
              }
              userConversation {
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
                }
              }
              conversationUserConversationId
            }
            messages {
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
                  authpool
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
export const createMessageReaction = /* GraphQL */ `
  mutation CreateMessageReaction(
    $input: CreateMessageReactionInput!
    $condition: ModelMessageReactionConditionInput
  ) {
    createMessageReaction(input: $input, condition: $condition) {
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
        authpool
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
                  authpool
                }
                content
                type
                read
                createdAt
                updatedAt
              }
              userConversation {
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
                }
              }
              conversationUserConversationId
            }
            messages {
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
                  authpool
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
          nextToken
        }
      }
      reaction
      createdAt
      updatedAt
    }
  }
`;
export const updateMessageReaction = /* GraphQL */ `
  mutation UpdateMessageReaction(
    $input: UpdateMessageReactionInput!
    $condition: ModelMessageReactionConditionInput
  ) {
    updateMessageReaction(input: $input, condition: $condition) {
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
        authpool
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
                  authpool
                }
                content
                type
                read
                createdAt
                updatedAt
              }
              userConversation {
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
                }
              }
              conversationUserConversationId
            }
            messages {
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
                  authpool
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
          nextToken
        }
      }
      reaction
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessageReaction = /* GraphQL */ `
  mutation DeleteMessageReaction(
    $input: DeleteMessageReactionInput!
    $condition: ModelMessageReactionConditionInput
  ) {
    deleteMessageReaction(input: $input, condition: $condition) {
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
        authpool
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
                  authpool
                }
                content
                type
                read
                createdAt
                updatedAt
              }
              userConversation {
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
                  conversationUserConversationId
                }
                messages {
                  nextToken
                }
              }
              conversationUserConversationId
            }
            messages {
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
                  authpool
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
          nextToken
        }
      }
      reaction
      createdAt
      updatedAt
    }
  }
`;
