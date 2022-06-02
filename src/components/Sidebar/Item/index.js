import React from 'react';
import './item.css';

export default function ConversationItem(props) {
  const { photo, name, text, members } = props.data;

  const getName = () => {
    let convoname = members?.filter((f) => f !== props?.me)

    return convoname
  }

  return (
    <div 
      onClick={props?.onClick}
      className={`conversation-list-item ${props.active ? 'active': ''}`}
    >
      <img className="conversation-photo" src={photo ?? "https://picsum.photos/200/300?random=1"} alt="conversation" />
      <div className="conversation-info">
        <h1 className="conversation-title">{ getName() }</h1>
        <p className="conversation-snippet">{ text }</p>
      </div>
    </div>
  );
}