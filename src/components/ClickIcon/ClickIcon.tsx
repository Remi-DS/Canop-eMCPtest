import React from 'react';
import './ClickIcon.css';

export type ClickIconTheme = 'Prospect' | 'Client';
export type ClickIconStyle = '--default' | '--ghost';
export type ClickIconState = '--default' | '--hover' | '--active' | '--disabled';
export type ClickIconSize = 'S' | 'XS';

export interface ClickIconProps {
  theme?: ClickIconTheme;
  style?: ClickIconStyle;
  state?: ClickIconState;
  size?: ClickIconSize;
  icon?: React.ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
  className?: string;
}

export const ClickIcon: React.FC<ClickIconProps> = ({
  theme = 'Prospect',
  style = '--default',
  state = '--default',
  size = 'S',
  icon,
  ariaLabel = 'Action',
  onClick,
  className = '',
}) => {
  const isDisabled = state === '--disabled';
  const themeSlug = theme.toLowerCase();
  const styleSlug = style.replace('--', '');
  const stateSlug = state.replace('--', '');
  const sizeSlug = size.toLowerCase();

  const cls = [
    'click-icon',
    `click-icon--${themeSlug}`,
    `click-icon--style-${styleSlug}`,
    `click-icon--${stateSlug}`,
    `click-icon--size-${sizeSlug}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={cls}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      type="button"
      aria-label={ariaLabel}
    >
      <span className="click-icon__inner" aria-hidden="true">
        {icon ?? '⚙'}
      </span>
    </button>
  );
};

export default ClickIcon;
