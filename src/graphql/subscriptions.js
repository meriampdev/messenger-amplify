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
  }
`;
export const onMessageCreated = /* GraphQL */ `
  subscription OnMessageCreated($conversationId: ID!) {
    onMessageCreated(conversationId: $conversationId) {
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
  }
`;
export const onMessageReactionCreated = /* GraphQL */ `
  subscription OnMessageReactionCreated($messageId: ID!) {
    onMessageReactionCreated(messageId: $messageId) {
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
  }
`;
export const onMessageReactionRemoved = /* GraphQL */ `
  subscription OnMessageReactionRemoved($messageId: ID!) {
    onMessageReactionRemoved(messageId: $messageId) {
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
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
  }
`;
export const onCreateMessageReaction = /* GraphQL */ `
  subscription OnCreateMessageReaction {
    onCreateMessageReaction {
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
  }
`;
export const onUpdateMessageReaction = /* GraphQL */ `
  subscription OnUpdateMessageReaction {
    onUpdateMessageReaction {
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
  }
`;
export const onDeleteMessageReaction = /* GraphQL */ `
  subscription OnDeleteMessageReaction {
    onDeleteMessageReaction {
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
  }
`;
