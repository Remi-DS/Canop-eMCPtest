import React from 'react';
import './Radio.css';

export interface RadioProps {
  theme?: 'Prospect' | 'Client';
  state?: '--unselected' | '--hover' | '--selected' | '--error' | '--hover_error';
  className?: string;
  onClick?: () => void;
}

export const Radio: React.FC<RadioProps> = ({
  theme = 'Prospect',
  state = '--unselected',
  className = '',
  onClick,
}) => {
  const isSelected = state === '--selected';
  const isError = state === '--error' || state === '--hover_error';
  const isClickable = !isError;

  const stateClass = state.replace('--', 'state-');

  const cls = [
    'radio',
    `radio--${theme.toLowerCase()}`,
    stateClass,
    className,
  ].filter(Boolean).join(' ');

  const Tag = isClickable ? 'button' : 'div';

  return (
    <Tag
      className={cls}
      onClick={isClickable ? onClick : undefined}
      type={isClickable ? 'button' : undefined}
      aria-checked={isSelected}
      role="radio"
    >
      {isSelected && <span className="radio__dot" />}
    </Tag>
  );
};

export default Radio;
