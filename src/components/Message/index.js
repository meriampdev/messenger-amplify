import React, { useEffect, useContext, useState } from 'react';
import './message.css';
import { 
  Avatar, 
  Box, 
  Flex,
  Text, 
  HStack, 
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react"
import Picker from 'emoji-picker-react';
import moment from 'moment';
import { MessengerContext } from "context/messenger"
import { API, graphqlOperation } from 'aws-amplify';
import { createMessageReaction } from 'graphql/mutations';
import { onMessageReactionCreated } from "graphql/subscriptions"


export default function Message(props) {
  const {
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp
  } = props;
  const messenger = useContext(MessengerContext)
  const [reactions, setReactions] = useState(data?.reactions?.items)

  useEffect(() => {
    let subscription = API.graphql({
      query: onMessageReactionCreated,
      variables: {
        messageId: data?.id
      }
    })
    .subscribe({
      next: messageData => {
        setReactions(prev => ([ ...prev, messageData?.value?.data?.onMessageReactionCreated ]))
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  console.log('reactions', reactions)
  const onEmojiClick = async (event, emojiObject) => {
    let reactionData = {
      messageId: data?.id,
      authorId: messenger?.data?.user?.me?.id,
      reaction: emojiObject.emoji
    }
    let reaction = await API.graphql(graphqlOperation(createMessageReaction, { input: reactionData }))
    console.log('reaction', reaction)
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
            {reactions?.length > 0 &&
              <Box
                pos="absolute" 
                bottom={-2}
                right={0}
                fontSize={18}
              >
                <Flex>
                  {reactions?.map((reaction) => reaction?.reaction)}
                </Flex>
              </Box>
            }
          </Box>
          
          {!isMine && 
            <Box className="reaction-button" alignSelf="center" ml={3}>
              <Popover placement="auto" autoFocus={false}>
                <PopoverTrigger>
                  <i className={`reaction ion-ios-happy`}  />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverBody>
                    <Picker 
                      onEmojiClick={onEmojiClick} 
                      disableSkinTonePicker={true}
                    />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          }
        </Box>
      </Box>
    </HStack>
  );
}