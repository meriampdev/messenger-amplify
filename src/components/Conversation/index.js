import React, {useEffect, useState, useContext} from 'react';
import './conversation.css';
import Compose from 'components/Compose';
import Toolbar from 'components/Toolbar';
import ToolbarButton from 'components/ToolbarButton';
import Message from 'components/Message';
import moment from 'moment';
import { API, graphqlOperation } from 'aws-amplify'
import { MessengerContext } from "context/messenger"
import { createMessage, updateConversation } from "graphql/mutations"
import { getUserConversation } from "graphql/queries"
import { onMessageCreated } from "graphql/subscriptions"

export default function Conversation(props) {
  const messenger = useContext(MessengerContext)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    let subscription
    if(messenger?.data?.currentConvo?.conversationId) {
      getMessages()
      subscription = API.graphql({
        query: onMessageCreated,
        variables: {
          conversationId: messenger?.data?.currentConvo?.conversationId 
        }
      })
      .subscribe({
        next: messageData => {
          setMessages(prev => [ ...prev, messageData?.value?.data?.onMessageCreated ])
        }
      })
    }
    
    return () => subscription && subscription.unsubscribe();

  // eslint-disable-next-line
  }, [messenger?.data?.currentConvo?.conversationId]);

  const getMessages = async () => {
    let res = await  API.graphql(graphqlOperation(getUserConversation, { id: messenger?.data?.currentConvo?.id }))
    let items = res?.data?.getUserConversation?.messages?.items ?? []
    if(items?.length > 0) {
      setMessages(items)
    }
  }

  const handleSend = async (content) => {
    const messageData = {
      conversationId: messenger?.data?.currentConvo?.conversationId,
      content: content,
      type: "text",
      authorId: messenger?.data?.user?.me?.id
    }

    try {
      let newmessage = await API.graphql(graphqlOperation(createMessage, { input: messageData }))
      let payload = { 
        id: messenger?.data?.currentConvo?.conversationId, 
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
      var objDiv = document.getElementById("content");
      objDiv.scrollTo(0, objDiv.scrollHeight)
    }, 100)
    return tempMessages;
  }

    return(
      <div id="message-list" className="message-list">
        <Toolbar
          className="with-shadow"
          title=""
          rightItems={[<ToolbarButton key="info" icon="ion-ios-information-circle-outline" />]}
        />

        <div className="message-list-container">{renderMessages()}</div>

        <Compose handleSend={handleSend} />
      </div>
    );
}