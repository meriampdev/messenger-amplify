import React from 'react';
import './compose.css';
import { Box } from "@chakra-ui/react"
import { Emoji } from "./Emoji"
import { AttachFile } from "./AttachFile"

export default function Compose(props) {

  const onSend = (content) => {
    let message = content?.trim()
    props.handleSend(message)
    const area = document.getElementById('compose-input');
    while (area.firstChild) {
      area.removeChild(area.firstChild);
    }
  }

  return (
    <Box className="compose">
      <div className="compose-bar">
        <Box
          id="compose-input"
          className="editable-div"
          placeholder="Type message..."
          flex={1}
          onKeyDown={(e) => {
            if(e?.shiftKey && e?.key === "Enter") {
              return 
            } else if(e?.key === "Enter") {
              e?.preventDefault()
              onSend(e.target.innerHTML)
            }
          }}
          contentEditable={true}
          _focus={{ outline: 'none' }}
          bg="#f4f4f8"
          borderRadius="30px"
          p={3}
          w="100%"
        />

        <Box 
          alignSelf="flex-end" 
          justifyContent="flex-end"
          display="flex"
          alignItems="center"
        >
          <AttachFile />
          <Emoji />
        </Box>
      </div>
    </Box>
  );
}