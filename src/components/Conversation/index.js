import React, {useEffect, useState, useContext, useCallback} from 'react';
import './conversation.css';
import { Box, Center, Spinner } from "@chakra-ui/react"
import InfiniteScroll from 'react-infinite-scroll-component'
import Compose from 'components/Compose';
import Toolbar from 'components/Toolbar';
import ToolbarButton from 'components/ToolbarButton';
import Message from 'components/Message';
import moment from 'moment';
import { API, graphqlOperation } from 'aws-amplify'
import { MessengerContext } from "context/messenger"
import { createMessage, updateConversation } from "graphql/mutations"
import { messagesByConversation } from "graphql/queries"
import { onMessageCreated } from "graphql/subscriptions"

export default function Conversation(props) {
  const messenger = useContext(MessengerContext)
  const [messages, setMessages] = useState([])
  const [nextToken, setNextToken] = useState('-')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let subscription
    if(!!messenger?.data?.currentConvo?.id) {
      setMessages([])
      getMessages(true)
      subscription = API.graphql({
        query: onMessageCreated,
        variables: {
          conversationId: messenger?.data?.currentConvo?.id 
        }
      })
      .subscribe({
        next: messageData => {
          let data = messageData?.value?.data?.onMessageCreated
          setMessages(prev => [ data, ...prev ])
        }
      })
    }
    
    return () => subscription && subscription.unsubscribe();

  // eslint-disable-next-line
  }, [messenger?.data?.currentConvo?.id]);

  const getMessages = useCallback(async (fresh) => {
    if(isLoading || !messenger?.data?.currentConvo?.id) return

    let payload = { 
      conversationId: messenger?.data?.currentConvo?.id, 
      limit: 15, 
      sortDirection: "DESC" 
    }
    if(nextToken && nextToken !== '-' && !fresh) {
      payload = { ...payload, nextToken }
    }

    setIsLoading(true)
    let res = await API.graphql(graphqlOperation(messagesByConversation, payload))
    setIsLoading(false)

    let items = res?.data?.messagesByConversation?.items ?? []
    if(items?.length > 0) {
      setNextToken(res?.data?.messagesByConversation?.nextToken)
      setMessages(prev => (prev.concat(items)))
    }
  }, [isLoading, nextToken, messenger?.data?.currentConvo?.id])

  const handleSend = async (content) => {
    const messageData = {
      conversationId: messenger?.data?.currentConvo?.id,
      content: content,
      type: "text",
      authorId: messenger?.data?.user?.me?.id,
      read: false
    }

    try {
      let newmessage = await API.graphql(graphqlOperation(createMessage, { input: messageData }))
      let payload = { 
        id: messenger?.data?.currentConvo?.id, 
        recentMessageId: newmessage?.data?.createMessage?.id 
      }
      await API.graphql(graphqlOperation(updateConversation, { input: payload }))
    } catch(e) {
      console.log('error create message', e)
    }
  }

  const renderMessages = () => {
    if(!messages || messages?.length <= 0) return 

    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let next = messages[i - 1];
      let current = messages[i];
      let previous = messages[i + 1];
      let isMine = current.authorId === messenger?.data?.user?.me?.id;
      let currentMoment = moment(current.createdAt);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.createdAt);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.authorId === current.authorId;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.createdAt);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.authorId === current.authorId;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={current?.id}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  }

  return(
    <Box 
      id="message-list" 
      height="100%" 
      bg="#FFF"
    >
      <Box w="100%">
        <Toolbar
          className="with-shadow"
          title=""
          rightItems={[<ToolbarButton key="info" icon="ion-ios-information-circle-outline" />]}
        />
      </Box>
      <Box px={2} py={4} h="84vh" maxH="84vh" minH="84vh" overflow="hidden">
        <Box 
          h="100%" 
          id="messages-container" 
          overflow="auto" 
          display="flex" 
          flexDir="column-reverse"
        >  
          {messages?.length > 0 && 
            <InfiniteScroll
              dataLength={messages.length}
              hasMore={!!nextToken}
              next={getMessages}
              inverse={true}
              scrollableTarget="messages-container"
              style={{ display: "flex", flexDirection: "column-reverse" }}
              loader={
                <Center w="100%" key={0}>
                  <Spinner size="sm" />
                </Center>
              }
            >
              {renderMessages()}
            </InfiniteScroll>
          }
        </Box>
      </Box>
      <Compose handleSend={handleSend} />
    </Box>
  );
}