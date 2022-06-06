import { useState, useEffect } from "react"
import { Box, Flex, Tooltip, Text } from "@chakra-ui/react"
import { API } from 'aws-amplify';
import { onMessageReactionCreated } from "graphql/subscriptions"

export const Reactions = ({initial, messageId}) => {
  const [reactions, setReactions] = useState(initial)

  useEffect(() => {
    let subscription = API.graphql({
      query: onMessageReactionCreated,
      variables: {
        messageId: messageId
      }
    })
    .subscribe({
      next: messageData => {
        setReactions(prev => ([ ...prev, messageData?.value?.data?.onMessageReactionCreated ]))
      }
    })

    return () => subscription.unsubscribe()
  }, [messageId])

  const groupEmoji = () => {
    const group = {}
    reactions?.forEach((reaction) => {
      let author = reaction?.author?.username
      let obj = group[reaction?.reaction]?.length > 0 ? [...group[reaction?.reaction], author] : [author]
      group[reaction?.reaction] = [...new Set(obj)] 
    })

    let groupsArray = Object.keys(group).map((emoji, i) => {
      return { emoji: emoji, authors: group[emoji] }
    })

    return (
      <Tooltip 
        hasArrow
        placement="top"
        label={groupsArray?.map((reaction, i) => {
          return (
            <div key={`e${i}`}>
              {reaction?.authors?.map((author) => <div key={reaction?.emoji+author}>{author} {reaction?.emoji}</div>)}
            </div>
          )
        }) }
        borderRadius="md"
      >
        <Flex fontSize={13} alignItems="center">
        {
          groupsArray?.length > 3 ?
            <>
            <Text>{groupsArray[0].emoji}</Text>
            <Text>{groupsArray[1].emoji}</Text>
            <Text color="#000" fontSize={10}>+{reactions?.length - 2}</Text>
            </>
          : groupsArray?.map((reaction) => <Text key={reaction?.emoji}>{reaction?.emoji}</Text>)
        }
        </Flex>
      </Tooltip>
    )
  }

  return (
    <Box
      pos="absolute" 
      bottom={-4}
      right={0}
      fontSize={18}
    >
      <Flex>
        <Box 
          cursor="pointer"
          bg="#FFF"
          borderRadius="full"
          px={1}
          boxShadow="0 2px 4px rgba(0,0,0,0.1)"
          fontSize={14}
        >
          {groupEmoji()}
        </Box>
      </Flex>
    </Box>
  )
}