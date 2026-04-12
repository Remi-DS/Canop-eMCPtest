import React from 'react';
import './ItemMessage.css';

export interface ItemMessageProps {
  device?: '--mob' | '--desk';
  status?: '--sucess' | '--error' | '--warning';
  text?: string;
  theme?: 'Prospect' | 'Client';
  className?: string;
}

// Inline SVGs reconstructed for the atom (Success, Error, Warning)
const SuccessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22ZM10.5 17L6 12.5L7.4 11.1L10.5 14.2L16.6 8.1L18 9.5L10.5 17Z" fill="currentColor"/>
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="currentColor"/>
  </svg>
);

const WarningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L1 21H23L12 2ZM12 6.1L19.5 19H4.5L12 6.1ZM11 10H13V14H11V10ZM11 16H13V18H11V16Z" fill="currentColor"/>
  </svg>
);

export const ItemMessage: React.FC<ItemMessageProps> = ({
  device = '--desk',
  status = '--sucess',
  text = 'Titre du message',
  theme = 'Prospect',
  className = ''
}) => {
  // Generate classes dynamically based on props
  const styleStr = status.replace('--', '');
  const deviceStr = device.replace('--', '');
  const themeStr = theme.toLowerCase();
  
  const containerClass = `item-message-container ${themeStr} ${deviceStr} ${styleStr} ${className}`.trim();
  
  // Icon size logic matching the Figma node rules
  const iconSize = theme === 'Prospect' 
    ? (device === '--desk' ? 24 : 20) 
    : 16;
  
  const renderIcon = () => {
    switch(status) {
      case '--error': return <ErrorIcon />;
      case '--warning': return <WarningIcon />;
      case '--sucess':
      default:
        return <SuccessIcon />;
    }
  };

  return (
    <div className={containerClass}>
      <div 
        className="item-message-icon" 
        style={{ width: iconSize, height: iconSize }}
      >
        {renderIcon()}
      </div>
      <div className="item-message-text">
        {text}
      </div>
    </div>
  );
};

export default ItemMessage;
