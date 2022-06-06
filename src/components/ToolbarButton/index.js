import React from 'react';
import './toolbarButton.css';

export default function ToolbarButton(props) {
    const { icon, ...rest } = props;
    return (
      <i className={`toolbar-button ${icon}`} {...rest} />
    );
}