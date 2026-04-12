import React from 'react';
import './Tag.css';

export type TagStyle = '--info' | '--success' | '--warning' | '--error' | '--neutral';

export interface TagProps {
  theme?: 'Prospect' | 'Client';
  device?: '--desk' | '--mob';
  style?: TagStyle;
  text?: string;
  className?: string;
}

const STYLE_COLORS: Record<TagStyle, { text: string; bg: string; border: string }> = {
  '--info':    { text: '#00008f', bg: '#f5f5fb', border: '#00008f' },
  '--success': { text: '#188038', bg: '#f6faf7', border: '#188038' },
  '--warning': { text: '#bf4a13', bg: '#fdf8f6', border: '#bf4a13' },
  '--error':   { text: '#e50000', bg: '#fdf8f6', border: '#e50000' },
  '--neutral': { text: '#5c5c5c', bg: '#f5f5f5', border: '#5c5c5c' },
};

// Client theme has white background
const CLIENT_BG = 'white';

export const Tag: React.FC<TagProps> = ({
  theme = 'Prospect',
  device = '--desk',
  style = '--info',
  text = 'Texte',
  className = '',
}) => {
  const colors = STYLE_COLORS[style];
  const bg = theme === 'Client' ? CLIENT_BG : colors.bg;
  const borderRadius = theme === 'Client' ? '4px' : '4px';

  const cls = [
    'tag',
    `tag--${theme.toLowerCase()}`,
    `tag--${device.replace('--', '')}`,
    `tag--${style.replace('--', '')}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <span
      className={cls}
      style={{
        background: bg,
        borderColor: colors.border,
        color: colors.text,
        borderRadius,
      }}
    >
      {text}
    </span>
  );
};

export default Tag;
