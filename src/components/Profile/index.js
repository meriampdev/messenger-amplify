import { useContext, useState } from "react"
import {
  Heading,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  IconButton,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom"
import { EditIcon } from "@chakra-ui/icons"
import { MessengerContext } from "context/messenger"

export const Profile = () => {
  const navigage = useNavigate()
  const messenger = useContext(MessengerContext)
  const { me } = messenger?.data?.user
  // eslint-disable-next-line
  const [file, setFile] = useState(null)
  const [previewString, setPreview] = useState(null)

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0] 
      setFile(file)
      // s3UploadImage(file)
      const reader = new FileReader();
      reader.onload = (readerEvt) => {
        let binaryString = URL.createObjectURL(file)
        setPreview(binaryString)
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  return (
    <Center py={6} h="100vh">
      <Button
        pos="fixed"
        top="1vw"
        left="1vw"
        onClick={() => {
          navigage("/")
        }}
      >
        Home
      </Button>
      <Box
        maxW={'30vw'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'10vw'}
          w={'full'}
          src="https://stg.skettt.com/OGP_ALL.png"
          objectFit={'cover'}
        />
        <Center>
          <Box pos="relative" boxSize="20vw" borderRadius="100%">
            <Flex justify={'center'} mt={-12}>
              <Box boxSize="20vw">
                <Image 
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  src={previewString ?? "/image_placeholder.jpeg"}
                  borderRadius="100%"
                  border="2px solid white"
                />
              </Box>
            </Flex>
            <Box
              pos="absolute"
              bottom="5vw"
              right="3vw"
            >
              <IconButton
                borderRadius="full"
                bg="transparent"
                aria-label='Search database'
                icon={<EditIcon fontSize={23} color="green" />}
              />
            </Box>
            <Input
              cursor="pointer"
              onChange={onSelectFile}
              type="file"
              height="100%"
              width="100%"
              pos="absolute"
              bottom="5vw"
              right="3vw"
              opacity="0"
              aria-hidden="true"
              accept="image/*"
            />
          </Box>
        </Center>
        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {me?.displayName ?? me?.username}
            </Heading>
            <Text color={'gray.500'}>{me?.email}</Text>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Save Changes
          </Button>
        </Box>
      </Box>
    </Center>
  );
}