import React from 'react';
import './ItemTabBar.css';

export interface ItemTabBarProps {
  /** Texte de l'onglet */
  text?: string;
  /** Thème visuel (Prospect ou Client) */
  theme?: 'Prospect' | 'Client';
  /** Support (Desktop ou Mobile) */
  device?: 'desk' | 'mob';
  /** État interactif */
  state?: 'default' | 'hover' | 'selected';
  /** Fonction de clic */
  onClick?: () => void;
  /** Classe CSS additionnelle */
  className?: string;
}

/**
 * Composant Item Tab Bar (Atome)
 * Élément de navigation permettant de basculer entre différentes vues.
 */
export const ItemTabBar: React.FC<ItemTabBarProps> = ({
  text = 'Mes contrats',
  theme = 'Prospect',
  device = 'desk',
  state = 'default',
  onClick,
  className = '',
}) => {
  const classes = [
    'axa-item-tab-bar',
    `axa-item-tab-bar--theme-${theme}`,
    `axa-item-tab-bar--${device}`,
    `axa-item-tab-bar--state-${state}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      onClick={onClick}
      role="tab"
      aria-selected={state === 'selected'}
      tabIndex={state === 'selected' ? 0 : -1}
    >
      <span className="axa-item-tab-bar__text">{text}</span>
    </button>
  );
};
