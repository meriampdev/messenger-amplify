import React, { useState } from 'react';
import './compose.css';

export default function Compose(props) {
  const [message, setMessage] = useState("")

  const onSend = () => {
    props.handleSend(message)
    setMessage("")
  }

  const onKeyUp = (e) => {
    if(e?.key === "Enter") {
      onSend()
    }
  }

  return (
    <div className="compose">
      <div className="compose-bar">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e?.target?.value)}
          onKeyUp={onKeyUp}
        />

        <div>
          {props.rightItems}
        </div>
      </div>
    </div>
  );
}