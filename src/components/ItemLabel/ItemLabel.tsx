import React from 'react';
import './ItemLabel.css';
import { GhostButton } from '../GhostButton/GhostButton';

export interface ItemLabelProps {
  label?: string;
  description?: string;
  afficheDescription?: boolean;
  afficherLienInfo?: boolean;
  champObligatoire?: boolean;
  device?: '--mob' | '--desk';
  style?: '--default' | '--modify';
  theme?: 'Prospect' | 'Client';
  className?: string;
  onActionClick?: () => void;
}

export const ItemLabel: React.FC<ItemLabelProps> = ({
  label = 'Label',
  description = 'Description',
  afficheDescription = true,
  afficherLienInfo = true,
  champObligatoire = true,
  device = '--desk',
  style = '--default',
  theme = 'Prospect',
  className = '',
  onActionClick,
}) => {
  const deviceClass = device === '--desk' ? 'desk' : 'mob';
  const styleClass = style === '--default' ? 'default' : 'modify';
  const themeClass = theme.toLowerCase();

  return (
    <div className={`ds-item-label ds-item-label--${deviceClass} ds-item-label--${styleClass} ds-item-label--${themeClass} ${className}`}>
      <div className="ds-item-label__content">
        <div className="ds-item-label__header">
          <div className="ds-item-label__title-group">
            <span className="ds-item-label__title">{label}</span>
            {champObligatoire && <span className="ds-item-label__mandatory">*</span>}
          </div>
          
          {style === '--default' && afficherLienInfo && (
            <GhostButton 
              theme={theme} 
              device={device} 
              label="En savoir plus" 
              iconSrc="/assets/info-outline.svg"
              onClick={onActionClick}
              className="ds-item-label__info-btn"
            />
          )}
        </div>

        {afficheDescription && description && (
          <p className="ds-item-label__description">{description}</p>
        )}
      </div>

      {style === '--modify' && (
        <div className="ds-item-label__actions">
          <GhostButton 
            theme={theme} 
            device={device} 
            label="Modifier" 
            onClick={onActionClick}
            className="ds-item-label__modify-btn"
          />
        </div>
      )}
    </div>
  );
};

export default ItemLabel;
