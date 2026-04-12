import React from 'react';
import './Icon.css';

export type IconSize = 'XS' | 'S' | 'M' | 'L';
export type IconState = 'primary' | 'secondary' | 'disabled' | 'error' | 'warning' | 'success';
export type IconStyle = 'with-bg' | 'without-bg';
export type IconTheme = 'Prospect' | 'Client';

export interface IconProps {
  size?: IconSize;
  state?: IconState;
  style?: IconStyle;
  theme?: IconTheme;
  className?: string;
  iconSrc?: string; // URL of the SVG icon to display
  children?: React.ReactNode; // Alternative: pass SVG as child
}

export const Icon: React.FC<IconProps> = ({
  size = 'M',
  state = 'primary',
  style = 'with-bg',
  theme = 'Prospect',
  className = '',
  iconSrc,
  children,
}) => {
  const sizeClass = size.toLowerCase();
  const stateClass = state.toLowerCase();
  const styleClass = style.toLowerCase();
  const themeClass = theme.toLowerCase();

  return (
    <div 
      className={`ds-icon ds-icon--${sizeClass} ds-icon--${stateClass} ds-icon--${styleClass} ds-icon--${themeClass} ${className}`}
    >
      <div className="ds-icon__inner">
        {iconSrc ? (
          <img src={iconSrc} alt="" className="ds-icon__svg" />
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Icon;
