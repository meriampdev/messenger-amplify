import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import { Box } from "@chakra-ui/react"
import ToolbarButton from 'components/ToolbarButton';
import './compose.css';

export default function Compose(props) {
  const [openEmojiPicker, setEmojiPicker] = useState(false)

  const onEmojiClick = (event, emojiObject) => {
    pasteHtmlAtCaret(emojiObject.emoji)
  };

  const onSend = (content) => {
    let message = content?.trim()
    props.handleSend(message)
    const area = document.getElementById('compose-input');
    while (area.firstChild) {
      area.removeChild(area.firstChild);
    }
  }

  const pasteHtmlAtCaret = (html) => {
    var sel, range;
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            // Range.createContextualFragment() would be useful here but is
            // non-standard and not supported in all browsers (IE9, for one)
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            
            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type !== "Control") {
        // IE < 9
        document.selection.createRange().pasteHTML(html);
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

        <Box alignSelf="flex-end" justifyContent="flex-end">
          <ToolbarButton icon="ion-ios-attach" />
          <ToolbarButton onClick={() => setEmojiPicker(!openEmojiPicker)} icon="ion-ios-happy" />
          {openEmojiPicker && 
            <Box pos="fixed" right="1vw" bottom="4vw">
              <Picker 
                onEmojiClick={onEmojiClick} 
                disableSkinTonePicker={true}
              />
            </Box>
          }
        </Box>
      </div>
    </Box>
  );
}