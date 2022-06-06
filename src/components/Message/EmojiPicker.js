import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  useDisclosure
} from "@chakra-ui/react"
import Picker from 'emoji-picker-react';

export const EmojiPicker = ({ onEmojiClick }) => {
  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <Popover 
      placement="auto" 
      autoFocus={false}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <PopoverTrigger>
        <i className={`reaction ion-ios-happy`}  />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody p={1}>
          <Picker 
            onEmojiClick={(e, value) => {
              onClose()
              onEmojiClick(e, value)
            }} 
            disableSkinTonePicker={true}
            pickerStyle={{
              boxShadow: 'none',
              border: 0,
              width: '100%'
            }}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}