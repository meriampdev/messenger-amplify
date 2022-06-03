/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUserConversationCreate = /* GraphQL */ `
  subscription OnUserConversationCreate($email: String) {
    onUserConversationCreate(email: $email) {
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
export const onUserConversationUpdate = /* GraphQL */ `
  subscription OnUserConversationUpdate($email: String) {
    onUserConversationUpdate(email: $email) {
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
export const onUserConversationDelete = /* GraphQL */ `
  subscription OnUserConversationDelete($email: String) {
    onUserConversationDelete(email: $email) {
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
export const onConversationCreated = /* GraphQL */ `
  subscription OnConversationCreated {
    onConversationCreated {
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
export const onConversationUpdated = /* GraphQL */ `
  subscription OnConversationUpdated($id: ID!) {
    onConversationUpdated(id: $id) {
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
export const onMessageCreated = /* GraphQL */ `
  subscription OnMessageCreated($conversationId: ID!) {
    onMessageCreated(conversationId: $conversationId) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserConversation = /* GraphQL */ `
  subscription OnCreateUserConversation {
    onCreateUserConversation {
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
export const onUpdateUserConversation = /* GraphQL */ `
  subscription OnUpdateUserConversation {
    onUpdateUserConversation {
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
export const onDeleteUserConversation = /* GraphQL */ `
  subscription OnDeleteUserConversation {
    onDeleteUserConversation {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
