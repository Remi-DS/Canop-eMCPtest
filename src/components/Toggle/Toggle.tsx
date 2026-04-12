import React from 'react';
import './Toggle.css';

export interface ToggleProps {
  theme?: 'Prospect' | 'Client';
  style?: '--default' | '--disabled';
  state?: '--unselected' | '--selected';
  className?: string;
  onClick?: () => void;
}

export const Toggle: React.FC<ToggleProps> = ({
  theme = 'Prospect',
  style = '--default',
  state = '--unselected',
  className = '',
  onClick,
}) => {
  const isSelected = state === '--selected';
  const isDisabled = style === '--disabled';

  const cls = [
    'toggle',
    `toggle--${theme.toLowerCase()}`,
    `toggle--${style.replace('--', '')}`,
    isSelected ? 'toggle--selected' : 'toggle--unselected',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={cls}
      type="button"
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      role="switch"
      aria-checked={isSelected}
    >
      <span className="toggle__handle" />
    </button>
  );
};

export default Toggle;
