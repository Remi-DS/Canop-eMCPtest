import React from 'react';
import './Spinner.css';

export interface SpinnerProps {
  /** Thème visuel (Exactement comme Figma) */
  theme?: 'Prospect' | 'Client';
  /** Taille du spinner (Exactement comme Figma) */
  size?: '--24' | '--32' | '--40';
  /** Couleur du spinner (Exactement comme Figma) */
  color?: '--primary' | '--secondary' | '--tertiary';
  /** Animation / État (utilisé pour la rotation initiale ou variante) */
  animation?: '1' | '2' | '3' | '4';
  /** Classe CSS additionnelle */
  className?: string;
  /** Label pour l'accessibilité */
  ariaLabel?: string;
}

/**
 * Composant Spinner (Atome) - Version Pixel Perfect
 * Reproduit exactement les structures SVG Prospect et Client de Figma.
 */
export const Spinner: React.FC<SpinnerProps> = ({
  theme = 'Prospect',
  size = '--40',
  color = '--primary',
  animation = '1',
  className = '',
  ariaLabel = 'Chargement en cours...',
}) => {
  const classes = [
    'axa-spinner',
    `axa-spinner--theme-${theme}`,
    `axa-spinner--${size}`,
    `axa-spinner--color-${color}`,
    `axa-spinner--anim-${animation}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Structure SVG différenciée selon le thème
  if (theme === 'Client') {
    return (
      <div className={classes} role="status" aria-label={ariaLabel}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Client Background: Donut shape path */}
          <path
            className="axa-spinner__bg"
            d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM2.4 12C2.4 17.3019 6.69807 21.6 12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.3019 2.4 12 2.4C6.69807 2.4 2.4 6.69807 2.4 12Z"
            fill="currentColor"
          />
          {/* Client Foreground: Specific curved segment shape */}
          <g transform="translate(12, 12) rotate(-90) translate(-9.5, -6)">
             <path
              className="axa-spinner__path"
              d="M19.0534 0C19.0534 2.21307 18.4414 4.38303 17.2851 6.26998C16.1288 8.15693 14.4732 9.68737 12.5013 10.6921C10.5295 11.6968 8.31816 12.1366 6.11191 11.963C3.90567 11.7894 1.79041 11.009 -1.3285e-08 9.7082L1.41068 7.76656C2.84301 8.80721 4.53522 9.4315 6.30022 9.57041C8.06521 9.70932 9.83425 9.35743 11.4117 8.55366C12.9892 7.74989 14.3137 6.52555 15.2388 5.01599C16.1638 3.50643 16.6534 1.77045 16.6534 0H19.0534Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
    );
  }

  // Prospect Theme: Simple arc on a circle
  return (
    <div className={classes} role="status" aria-label={ariaLabel}>
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          className="axa-spinner__bg"
          cx="8"
          cy="8"
          r="6.5"
          stroke="currentColor"
        />
        <path
          className="axa-spinner__path"
          d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
