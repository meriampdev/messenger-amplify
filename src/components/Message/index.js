import React, { useContext } from 'react';
import './message.css';
import { 
  Avatar, 
  Box, 
  Text, 
  HStack, 
} from "@chakra-ui/react"
import moment from 'moment';
import { MessengerContext } from "context/messenger"
import { API, graphqlOperation } from 'aws-amplify';
import { createMessageReaction } from 'graphql/mutations';
import { EmojiPicker } from "./EmojiPicker"
import { Reactions } from "./Reactions"

export default function Message(props) {
  const {
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp
  } = props;
  const messenger = useContext(MessengerContext)

  const onEmojiClick = async (event, emojiObject) => {
    let reactionData = {
      messageId: data?.id,
      authorId: messenger?.data?.user?.me?.id,
      reaction: emojiObject.emoji
    }
    await API.graphql(graphqlOperation(createMessageReaction, { input: reactionData }))
  };

  const friendlyTimestamp = moment(data.createdAt).format('LLLL');
  return (
    <HStack w="100%" mb={(endsSequence) ? "1vw" : ""}>
      {!isMine &&
        <Avatar visibility={startsSequence ? 'visible' : 'hidden'} name={data?.author?.username} size="xs" />
      }
      <Box 
        w="100%"
        className={[
          'message',
          `${isMine ? 'mine' : ''}`,
          `${startsSequence ? 'start' : ''}`,
          `${endsSequence ? 'end' : ''}`
        ].join(' ')}
      >
        {
          showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        }
        {(!isMine && (startsSequence)) && <Text fontSize="xs" opacity={0.7}>{data?.author?.username}</Text>}
        <Box 
          className="bubble-container"
          pos="relative"
        >
          <Box
            className="bubble"
            pos="relative"
          >
            <Box 
              title={friendlyTimestamp} 
              dangerouslySetInnerHTML={{
                __html: data?.content
              }}
            />
            <Reactions messageId={data?.id} initial={data?.reactions?.items} />
          </Box>
          
          {!isMine && 
            <Box className="reaction-button" alignSelf="flex-end" ml={3}>
              <EmojiPicker onEmojiClick={onEmojiClick}  />
            </Box>
          }
        </Box>
      </Box>
    </HStack>
  );
}