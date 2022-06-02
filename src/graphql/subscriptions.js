/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onConversationCreated = /* GraphQL */ `
  subscription OnConversationCreated {
    onConversationCreated {
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
export const onMessageCreated = /* GraphQL */ `
  subscription OnMessageCreated($conversationID: ID!) {
    onMessageCreated(conversationID: $conversationID) {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
