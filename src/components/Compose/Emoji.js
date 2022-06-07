import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import { Box } from "@chakra-ui/react"
import ToolbarButton from 'components/ToolbarButton';

export const Emoji = () => {
  const [openEmojiPicker, setEmojiPicker] = useState(false)

  const onEmojiClick = (event, emojiObject) => {
    pasteHtmlAtCaret(emojiObject.emoji)
  };

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
    <>
    <ToolbarButton onClick={() => setEmojiPicker(!openEmojiPicker)} icon="ion-ios-happy" />
    {openEmojiPicker && 
      <Box pos="fixed" right="1vw" bottom="4vw">
        <Picker 
          onEmojiClick={onEmojiClick} 
          disableSkinTonePicker={true}
        />
      </Box>
    }
    </>
  )
}