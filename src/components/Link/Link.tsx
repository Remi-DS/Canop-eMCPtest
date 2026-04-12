import React from 'react';
import './Link.css';

export type LinkTheme = 'Prospect' | 'Client';
export type LinkDevice = '--desk' | '--mob';
export type LinkStyle = 'Default' | 'Underline' | 'Inverse';
export type LinkState = '--default' | '--hover' | '--active';

export interface LinkProps {
  theme?: LinkTheme;
  device?: LinkDevice;
  style?: LinkStyle;
  state?: LinkState;
  label?: string;
  href?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  theme = 'Prospect',
  device = '--desk',
  style = 'Underline',
  state = '--default',
  label = 'Lien',
  href = '#',
  iconLeft = false,
  iconRight = false,
  className = '',
}) => {
  const themeSlug = theme.toLowerCase();
  const deviceSlug = device === '--desk' ? 'desk' : 'mob';
  const styleSlug = style.toLowerCase();
  const stateSlug = state.replace('--', '');

  const cls = [
    'ds-link',
    `ds-link--${themeSlug}`,
    `ds-link--${deviceSlug}`,
    `ds-link--style-${styleSlug}`,
    `ds-link--${stateSlug}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <a
      className={cls}
      href={href}
      target={style === 'Default' ? '_blank' : undefined}
      rel={style === 'Default' ? 'noopener noreferrer' : undefined}
    >
      {iconLeft && <span className="ds-link__icon ds-link__icon--left" aria-hidden="true" />}
      <span className="ds-link__label">{label}</span>
      {iconRight && <span className="ds-link__icon ds-link__icon--right" aria-hidden="true" />}
    </a>
  );
};

export default Link;
