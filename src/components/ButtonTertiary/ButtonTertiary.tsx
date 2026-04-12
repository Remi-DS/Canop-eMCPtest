import React from 'react';
import './ButtonTertiary.css';

export type ButtonTertiaryTheme = 'Prospect' | 'Client';
export type ButtonTertiaryDevice = '--desk' | '--mob';
export type ButtonTertiaryState = '--default' | '--hover' | '--active' | '--disabled';

export interface ButtonTertiaryProps {
  theme?: ButtonTertiaryTheme;
  device?: ButtonTertiaryDevice;
  state?: ButtonTertiaryState;
  label?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ButtonTertiary: React.FC<ButtonTertiaryProps> = ({
  theme = 'Prospect',
  device = '--desk',
  state = '--default',
  label = 'Tertiary',
  iconLeft = false,
  iconRight = false,
  onClick,
  className = '',
}) => {
  const isDisabled = state === '--disabled';
  const themeSlug = theme.toLowerCase();
  const deviceSlug = device === '--desk' ? 'desk' : 'mob';
  const stateSlug = state.replace('--', '');

  const cls = [
    'btn-tertiary',
    `btn-tertiary--${themeSlug}`,
    `btn-tertiary--${deviceSlug}`,
    `btn-tertiary--${stateSlug}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={cls}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      type="button"
    >
      {iconLeft && <span className="btn-tertiary__icon" aria-hidden="true">←</span>}
      <span className="btn-tertiary__label">{label}</span>
      {isDisabled ? (
        <span className="btn-tertiary__spinner" aria-hidden="true" />
      ) : (
        iconRight && <span className="btn-tertiary__icon" aria-hidden="true">→</span>
      )}
    </button>
  );
};

export default ButtonTertiary;
