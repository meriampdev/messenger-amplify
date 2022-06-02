import React, { useState, useContext } from 'react';
import './compose.css';
import { MessengerContext } from "context/messenger"

export default function Compose(props) {
  const messenger = useContext(MessengerContext)
  const [message, setMessage] = useState("")

  const onSend = () => {
    let messageObj = {
      text: message,
      sentAt: new Date().getTime(),
      sentBy: messenger?.data?.user?.email
    }
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