import React from 'react';
import './Spinner.css';

export interface SpinnerProps {
  /** Thème visuel (influence l'épaisseur du trait) */
  theme?: 'prospect' | 'client';
  /** Taille du spinner */
  size?: 'sm' | 'md' | 'lg';
  /** Couleur du spinner */
  color?: 'primary' | 'secondary' | 'inverse';
  /** Classe CSS additionnelle */
  className?: string;
  /** Label pour l'accessibilité */
  ariaLabel?: string;
}

/**
 * Composant Spinner (Atome)
 * Permet d'indiquer un état de chargement.
 */
export const Spinner: React.FC<SpinnerProps> = ({
  theme = 'prospect',
  size = 'md',
  color = 'primary',
  className = '',
  ariaLabel = 'Chargement en cours...',
}) => {
  const classes = [
    'axa-spinner',
    `axa-spinner--theme-${theme}`,
    `axa-spinner--${size}`,
    `axa-spinner--color-${color}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div 
      className={classes} 
      role="status" 
      aria-label={ariaLabel}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Background circle (track) */}
        <circle
          className="axa-spinner__bg"
          cx="8"
          cy="8"
          r="6"
          stroke="currentColor"
          strokeOpacity="0.2"
        />
        {/* Foreground animated path (arc) */}
        <path
          className="axa-spinner__path"
          d="M14 8C14 11.3137 11.3137 14 8 14 4.68629 14 2 11.3137 2 8"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
