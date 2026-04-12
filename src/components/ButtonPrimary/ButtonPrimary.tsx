import React from 'react';
import './ButtonPrimary.css';

export type ButtonPrimaryTheme = 'Prospect' | 'Client';
export type ButtonPrimaryDevice = '--desk' | '--mob';
export type ButtonPrimaryStyle = '--default' | '--business' | '--inverse';
export type ButtonPrimaryState = '--default' | '--hover' | '--active' | '--disabled';

export interface ButtonPrimaryProps {
  theme?: ButtonPrimaryTheme;
  device?: ButtonPrimaryDevice;
  style?: ButtonPrimaryStyle;
  state?: ButtonPrimaryState;
  label?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  theme = 'Prospect',
  device = '--desk',
  style = '--default',
  state = '--default',
  label = 'Primary',
  iconLeft = false,
  iconRight = false,
  onClick,
  className = '',
}) => {
  const isDisabled = state === '--disabled';
  const themeSlug = theme.toLowerCase();
  const deviceSlug = device === '--desk' ? 'desk' : 'mob';
  const styleSlug = style.replace('--', '');
  const stateSlug = state.replace('--', '');

  const cls = [
    'btn-primary',
    `btn-primary--${themeSlug}`,
    `btn-primary--${deviceSlug}`,
    `btn-primary--style-${styleSlug}`,
    `btn-primary--${stateSlug}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={cls}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      type="button"
    >
      {iconLeft && <span className="btn-primary__icon btn-primary__icon--left" aria-hidden="true">←</span>}
      <span className="btn-primary__label">{label}</span>
      {isDisabled ? (
        <span className="btn-primary__spinner" aria-hidden="true" />
      ) : (
        iconRight && <span className="btn-primary__icon btn-primary__icon--right" aria-hidden="true">→</span>
      )}
    </button>
  );
};

export default ButtonPrimary;
