import React from 'react';
import './ButtonSecondary.css';

export type ButtonSecondaryTheme = 'Prospect' | 'Client';
export type ButtonSecondaryDevice = '--desk' | '--mob';
export type ButtonSecondaryStyle = '--default' | '--inverse';
export type ButtonSecondaryState = '--default' | '--hover' | '--active' | '--disabled';

export interface ButtonSecondaryProps {
  theme?: ButtonSecondaryTheme;
  device?: ButtonSecondaryDevice;
  style?: ButtonSecondaryStyle;
  state?: ButtonSecondaryState;
  label?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  theme = 'Prospect',
  device = '--desk',
  style = '--default',
  state = '--default',
  label = 'Secondary',
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
    'btn-secondary',
    `btn-secondary--${themeSlug}`,
    `btn-secondary--${deviceSlug}`,
    `btn-secondary--style-${styleSlug}`,
    `btn-secondary--${stateSlug}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={cls}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      type="button"
    >
      {iconLeft && <span className="btn-secondary__icon" aria-hidden="true">←</span>}
      <span className="btn-secondary__label">{label}</span>
      {isDisabled ? (
        <span className="btn-secondary__spinner" aria-hidden="true" />
      ) : (
        iconRight && <span className="btn-secondary__icon" aria-hidden="true">→</span>
      )}
    </button>
  );
};

export default ButtonSecondary;
