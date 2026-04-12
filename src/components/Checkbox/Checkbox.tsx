import React from 'react';
import './Checkbox.css';

export interface CheckboxProps {
  state?: '--unselected' | '--hover' | '--selected' | '--error' | '--hover_error';
  theme?: 'Prospect' | 'Client';
  className?: string;
  onClick?: () => void;
}

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10.8L3.2 8L2.26667 8.93333L6 12.6667L14 4.66667L13.0667 3.73334L6 10.8Z" fill="white"/>
  </svg>
);

export const Checkbox: React.FC<CheckboxProps> = ({
  state = '--unselected',
  theme = 'Prospect',
  className = '',
  onClick
}) => {
  const isSelected = state === '--selected';
  
  // Construction des classes CSS
  const containerClass = `checkbox-container ${theme.toLowerCase()} ${state.replace('--', '')} ${className}`.trim();

  return (
    <button className={containerClass} onClick={onClick} type="button" aria-checked={isSelected}>
      {isSelected && (
        <span className="checkbox-icon">
          <CheckIcon />
        </span>
      )}
    </button>
  );
};

export default Checkbox;
