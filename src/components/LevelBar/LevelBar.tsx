import React from 'react';
import './LevelBar.css';

export interface LevelBarProps {
  device?: 'Desktop' | 'Mobile';
  state?: 'Unselected' | 'Selected' | 'Hovered';
  theme?: 'Client' | 'Prospect'; 
  className?: string;
  onClick?: () => void;
}

export const LevelBar: React.FC<LevelBarProps> = ({
  device = 'Desktop',
  state = 'Selected',
  theme = 'Prospect',
  className = '',
  onClick,
}) => {
  const deviceClass = device === 'Desktop' ? 'desk' : 'mob';
  const stateClass = state.toLowerCase();
  const themeClass = theme.toLowerCase();

  return (
    <div
      role={onClick ? 'button' : 'presentation'}
      tabIndex={onClick ? 0 : undefined}
      className={`level-bar level-bar--${deviceClass} level-bar--${stateClass} level-bar--${themeClass} ${className}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          onClick();
        }
      }}
      aria-label={`Level bar ${state}`}
    />
  );
};

export default LevelBar;
