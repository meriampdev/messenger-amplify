import React, {useEffect, useState, useContext} from 'react';
import './conversation.css';
import { Box, VStack } from "@chakra-ui/react"
import Compose from 'components/Compose';
import Toolbar from 'components/Toolbar';
import ToolbarButton from 'components/ToolbarButton';
import Message from 'components/Message';
import moment from 'moment';
import { API, graphqlOperation } from 'aws-amplify'
import { MessengerContext } from "context/messenger"
import { createMessage, updateConversation } from "graphql/mutations"
import { listUserConversations } from "graphql/queries"
import { onMessageCreated } from "graphql/subscriptions"

export default function Conversation(props) {
  const messenger = useContext(MessengerContext)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    let subscription
    if(messenger?.data?.currentConvo?.id) {

      if(messenger?.data?.currentConvo?.messages?.items?.length > 0) {
        setMessages(messenger?.data?.currentConvo?.messages?.items)
      }
      
      getMessages()
      subscription = API.graphql({
        query: onMessageCreated,
        variables: {
          conversationId: messenger?.data?.currentConvo?.id 
        }
      })
      .subscribe({
        next: messageData => {
          let data = messageData?.value?.data?.onMessageCreated
          setMessages(prev => [ ...prev, data ])
        }
      })
    }
    
    return () => subscription && subscription.unsubscribe();

  // eslint-disable-next-line
  }, [messenger?.data?.currentConvo?.id]);

  const getMessages = async () => {
    let filter = {
      and: [
        {conversationId: { eq: messenger?.data?.currentConvo?.id }},
        {email: { eq: messenger?.data?.user?.me?.email } }
      ]
    }
    let res = await  API.graphql(graphqlOperation(listUserConversations, { filter: filter }))
    let items = res?.data?.listUserConversations?.items ?? []
    if(items?.length > 0) {
      let mlist = items[0].messages?.items
      setMessages(mlist)
    }
  }

  const handleSend = async (content) => {
    const messageData = {
      conversationId: messenger?.data?.currentConvo?.id,
      content: content,
      type: "text",
      authorId: messenger?.data?.user?.me?.id
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
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
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
          key={i}
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

    setTimeout(() => {
      var objDiv = document.getElementById("messages");
      objDiv.scrollTo(0, objDiv.scrollHeight)
    }, 100)
    return tempMessages;
  }

    return(
      <VStack id="message-list" height="100%" spacing={0}>
        <Box w="100%">
          <Toolbar
            className="with-shadow"
            title=""
            rightItems={[<ToolbarButton key="info" icon="ion-ios-information-circle-outline" />]}
          />
        </Box>
        <Box id="messages" flex={1} maxH="100%" w="100%" overflow="scroll" bg="#FFF" px={2}>
          <Box>
            {renderMessages()}
          </Box>
        </Box>  
        <Box w="100%">
          <Compose handleSend={handleSend} />
        </Box>
      </VStack>
    );
}