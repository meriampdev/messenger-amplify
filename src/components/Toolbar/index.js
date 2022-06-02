import React from 'react';
import './toolbar.css';

export default function Toolbar(props) {
    const { title, leftItems, rightItems, className } = props;
    return (
      <div className={`toolbar ${className ?? ""}`}>
        <div className="left-items">{ leftItems }</div>
        <h1 className="toolbar-title">{ title }</h1>
        <div className="right-items">{ rightItems }</div>
      </div>
    );
}