import { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { Box, Input, HStack, Text } from "@chakra-ui/react"
import { validateEmail } from "utils/validateEmail"
import { arrayHasDuplicates } from "utils/arrayHelpers"

const Pill = ({ text, ...rest }) => {
  return (
    <Box
      border="1px solid #e2e2e2"
      borderRadius="full"
      p="0.5vw 1vw"
      {...rest}
    >
      {text}
    </Box>
  )
}

const emailcheck = validateEmail()
export const Recipient = forwardRef((props, ref) => {
  const [value, setValue] = useState("")
  const [validEmail, setValidEmail] = useState(false)
  const [recipients, setRecipients] = useState([])
  const inputReference = useRef(null);

  function getRecipients() {
    return recipients
  }

  useImperativeHandle(ref, () => ({ getRecipients }));

  const handleChangeInput = (e) => {
    let input = e?.target?.value
    setValue(input)
    let valid = emailcheck.test(input)
    let duplicate = arrayHasDuplicates(recipients.concat([input]))
    if(valid && !duplicate) {
      setValidEmail(valid)
    } else {
      setValidEmail(false)
    }
  }

  const handleBackspace = () => {
    if(recipients.length > 0) {
      let newlist = recipients.splice(0, recipients.length - 1)
      setRecipients(newlist)
    }
  }

  const handleAddRecipient = () => {
    setRecipients(prev => prev.concat([value]))
    setValue("")
    setValidEmail(false)
    inputReference.current.focus()
  }

  return (
    <Box boxShadow="0 0 4px rgba(0,0,0,0.2)" px="1vw">
      <HStack>
        <Text>To:</Text>
        <HStack>
          {recipients?.map((text) => <Pill key={text} text={text} />)}
        </HStack>
        <Box pos="relative" flex="1"> 
          <Input 
            placeholder="Email Address"
            ref={inputReference}
            value={value}
            onChange={handleChangeInput}
            onKeyDown={(e) => {
              if(e?.key === "Enter") {
                if(validEmail) {
                  handleAddRecipient()
                }
              } else if(!value && (e?.key === "Delete" || e?.key === "Backspace")) {
                handleBackspace()
              }
            }}
            autoFocus={true}
            _focus={{ outline: 'none' }}
            minH="4vw"
            borderRadius="0"
            borderWidth="0"
            w="100%"
          />
          {validEmail && 
            <Box pos="absolute" bottom="-3vw">
              <Pill 
                text={value} 
                bg="#e2e2e2"
                cursor="pointer"
                _hover={{ bg: "#e8e8e8" }}
                onClick={handleAddRecipient}
              />
            </Box>
          }
        </Box>
      </HStack>
    </Box>
  )
})