import React, { useContext } from 'react';
import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  Text,
} from '@chakra-ui/react'
import { MessengerContext } from "context/messenger"
import { API, graphqlOperation } from 'aws-amplify';
import { deleteMessageReaction } from 'graphql/mutations';

const ReactionItem = ({ author, emoji, id }) => {
  const messenger = useContext(MessengerContext)
  const isMine = author === messenger?.data?.user?.username

  const handleDelete = async () => {
    await API.graphql(graphqlOperation(deleteMessageReaction, { input: { id } }))
  }

  return (
    <Flex 
      alignItems="center" 
      justifyContent="space-between" 
      w="100%" 
      py={1}
      px={1}
      borderRadius="md"
      pointerEvents={!isMine ? 'none' : 'all'}
      cursor="pointer"
      _hover={{
        bg: "#0000000a"
      }}
      onClick={handleDelete}
    >
      <Flex flexDir="column" alignItems="flex-start" gridGap={0}>
        <Text>{author}</Text>
        {isMine && <Text fontSize={10}>Click to remove</Text>}
      </Flex>
      <Text fontSize={25}>{emoji}</Text>
    </Flex>
  )
}

export const AllReaction = (props) => {
  const messenger = useContext(MessengerContext)
  const userId = messenger?.data?.user?.me?.id
  const { isOpen, onClose, all, grouped } = props
  const allSorted = all.sort((x, y) => {
    const isMineX = x?.author?.id === userId
    const isMineY = y?.author?.id === userId
    return Number(isMineY) - Number(isMineX)
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          <Text textAlign="center" fontSize={16}>Message reactions</Text>
        </ModalHeader>
        <ModalBody>
          <Box>
            <Tabs variant='soft-rounded' colorScheme='green'>
              <TabList>
                <Tab>All {all.length}</Tab>
                {grouped.map((item) => {
                  return (
                    <Tab key={item?.emoji}>
                      <Text fontSize={22}>{item?.emoji}</Text>
                      <Text fontSize={16} ml={1}>{item?.authors?.length}</Text>
                    </Tab>
                  )
                })}
              </TabList>
              <TabPanels>
                <TabPanel>
                  {allSorted?.map((item) => {
                    return (
                      <ReactionItem 
                        key={item?.id}
                        author={item?.author?.username}
                        emoji={item?.reaction}
                        id={item?.id}
                      />
                    )
                  })}
                </TabPanel>
                {grouped.map((item) => {
                  let authorsSorted = item?.authors.sort((x, y) => {
                    const isMineX = x?.id === userId
                    const isMineY = y?.id === userId
                    return Number(isMineY) - Number(isMineX)
                  });
                  return (
                    <TabPanel key={'tab'+item?.emoji}>
                      {authorsSorted?.map((author, i) => {
                        return (
                          <ReactionItem 
                            key={item?.emoji+author?.author+i}
                            author={author?.author}
                            emoji={item?.emoji}
                            id={author?.id}
                          />
                        )
                      })}
                    </TabPanel>
                  )
                })}
              </TabPanels>
            </Tabs>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}