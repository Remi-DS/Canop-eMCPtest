import React from 'react';
import './GhostButton.css';

export type GhostButtonTheme = 'Prospect' | 'Client';
export type GhostButtonDevice = '--desk' | '--mob';
export type GhostButtonState = '--default' | '--hover' | '--active';

export interface GhostButtonProps {
  theme?: GhostButtonTheme;
  device?: GhostButtonDevice;
  state?: GhostButtonState;
  label?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconSrc?: string;
  onClick?: () => void;
  className?: string;
}

export const GhostButton: React.FC<GhostButtonProps> = ({
  theme = 'Prospect',
  device = '--desk',
  state = '--default',
  label = 'Lien',
  iconLeft = false,
  iconRight = false,
  iconSrc,
  onClick,
  className = '',
}) => {
  const themeSlug = theme.toLowerCase();
  const deviceSlug = device === '--desk' ? 'desk' : 'mob';
  const stateSlug = state.replace('--', '');

  const cls = [
    'ghost-btn',
    `ghost-btn--${themeSlug}`,
    `ghost-btn--${deviceSlug}`,
    `ghost-btn--${stateSlug}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={cls}
      onClick={onClick}
      type="button"
    >
      <div className="ghost-btn__container">
        {iconSrc ? (
          <img src={iconSrc} alt="" className="ghost-btn__custom-icon" />
        ) : (
          iconLeft && <span className="ghost-btn__icon" aria-hidden="true">←</span>
        )}
        <span className="ghost-btn__label">{label}</span>
        {iconRight && <span className="ghost-btn__icon" aria-hidden="true">→</span>}
      </div>
      {theme === 'Prospect' && <div className="ghost-btn__bar" />}
    </button>
  );
};

export default GhostButton;
