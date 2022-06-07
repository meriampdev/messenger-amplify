import { useState, useEffect } from "react"
import { Box, Flex, Tooltip, Text, useDisclosure } from "@chakra-ui/react"
import { API } from 'aws-amplify';
import { onMessageReactionCreated, onMessageReactionRemoved } from "graphql/subscriptions"
import { AllReaction } from "./AllReaction"

export const Reactions = ({initial, messageId}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [reactions, setReactions] = useState(initial)

  useEffect(() => {
    setReactions(initial)
  }, [initial])

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

    let subOnRemove = API.graphql({
      query: onMessageReactionRemoved,
      variables: {
        messageId: messageId
      }
    })
    .subscribe({
      next: messageData => {
        let {id} = messageData?.value?.data?.onMessageReactionRemoved
        setReactions(prev => (prev.filter((f) => f?.id !== id)))
      }
    })

    return () => {
      subscription.unsubscribe()
      subOnRemove.unsubscribe()
    }
  }, [messageId])

  const groupByReaction = () => {
    const group = {}
    reactions?.forEach((reaction) => {
      let author = reaction?.author?.username
      let id = reaction?.id
      let obj = group[reaction?.reaction]?.length > 0 ? [...group[reaction?.reaction], { author, id }] : [{ author, id }]
      group[reaction?.reaction] = [...new Set(obj)] 
    })

    let groupsArray = Object.keys(group).map((emoji, i) => {
      return { emoji: emoji, authors: group[emoji] }
    })

    return groupsArray
  }

  const groupEmoji = () => {
    let names = reactions?.map((item) => item?.author?.username)
    let authors = [...new Set(names)] 
    let groupsArray = groupByReaction()

    return (
      <Tooltip 
        hasArrow
        placement="top"
        label={authors?.map((author) => {
          return (
            <div key={author}>
              {author}
            </div>
          )
        }) }
        borderRadius="md"
      >
        <Flex fontSize={16} alignItems="center">
        {
          groupsArray?.length > 3 ?
            <>
            <Text>{groupsArray[0].emoji}</Text>
            <Text>{groupsArray[1].emoji}</Text>
            <Text color="#000" fontSize={10}>+{reactions?.length - 2}</Text>
            </>
          : groupsArray?.map((reaction) => {
            return (
              <Text key={reaction?.emoji}>
                {reaction?.emoji} 
              </Text>
            )
          })
        }
        { (reactions?.length > 1 && !(groupsArray?.length > 3)) 
          && <Text fontSize={12} ml={1}>{reactions.length}</Text> 
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
      zIndex={1}
    >
      <Flex>
        <Box 
          onClick={onOpen}
          cursor="pointer"
          bg="#FFF"
          borderRadius="full"
          px={1}
          boxShadow="0 2px 4px rgba(0,0,0,0.1)"
          fontSize={14}
        >
          {groupEmoji()}
        </Box>
        <AllReaction 
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          all={reactions}
          grouped={groupByReaction()}
        />
      </Flex>
    </Box>
  )
}