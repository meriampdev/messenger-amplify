import React from 'react';
import { Avatar, Box, Text, HStack } from "@chakra-ui/react"
import moment from 'moment';
import './message.css';

export default function Message(props) {
    const {
      data,
      isMine,
      startsSequence,
      endsSequence,
      showTimestamp
    } = props;

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
          <div className="bubble-container">
            <Box 
              className="bubble" 
              title={friendlyTimestamp} 
              dangerouslySetInnerHTML={{
                __html: data?.content
              }}
            />
          </div>
        </Box>
      </HStack>
    );
}