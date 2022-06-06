import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react"
import Picker from 'emoji-picker-react';

export const EmojiPicker = ({ onEmojiClick }) => {
  return (
    <Popover 
      placement="auto" 
      autoFocus={false}
    >
      <PopoverTrigger>
        <i className={`reaction ion-ios-happy`}  />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody p={1}>
          <Picker 
            onEmojiClick={onEmojiClick} 
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