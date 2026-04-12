import React from 'react';
import './Divider.css';

export interface DividerProps {
  theme?: 'Prospect' | 'Client';
  position?: 'Horizontal' | 'Vertical';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  theme = 'Prospect',
  position = 'Horizontal',
  className = '',
}) => {
  const cls = [
    'divider',
    `divider--${position.toLowerCase()}`,
    `divider--${theme.toLowerCase()}`,
    className
  ].filter(Boolean).join(' ');

  return <div className={cls} />;
};

export default Divider;
