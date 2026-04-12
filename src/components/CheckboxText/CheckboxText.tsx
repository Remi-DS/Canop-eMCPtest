import React from 'react';
import { Checkbox, type CheckboxProps } from '../Checkbox/Checkbox';
import { ItemMessage } from '../ItemMessage/ItemMessage';
import './CheckboxText.css';

export interface CheckboxTextProps {
  theme?: 'Prospect' | 'Client';
  device?: '--desk' | '--mob';
  state?: '--unselected' | '--hover' | '--selected' | '--error' | '--hover_error';
  text?: string;
  errorMessage?: string;
  className?: string;
  onClick?: () => void;
}

export const CheckboxText: React.FC<CheckboxTextProps> = ({
  theme = 'Prospect',
  device = '--desk',
  state = '--unselected',
  text = 'Label',
  errorMessage = 'Titre du message',
  className = '',
  onClick
}) => {
  const isError = state === '--error' || state === '--hover_error';

  // Map CheckboxText state → Checkbox atom state (1:1)
  const checkboxState: CheckboxProps['state'] = state;

  const containerClass = [
    'checkbox-text-container',
    theme.toLowerCase(),
    device.replace('--', ''),
    state.replace('--', ''),
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={containerClass}
      type="button"
      onClick={onClick}
      aria-pressed={state === '--selected'}
    >
      {/* Atome 1: Checkbox */}
      <Checkbox theme={theme} state={checkboxState} />

      {/* Contenu textuel */}
      <div className="checkbox-text-content">
        <span className="checkbox-text-label">{text}</span>

        {/* Atome 2: ItemMessage (conditionnel, uniquement en cas d'erreur) */}
        {isError && (
          <ItemMessage
            theme={theme}
            device={device}
            status="--error"
            text={errorMessage}
          />
        )}
      </div>
    </button>
  );
};

export default CheckboxText;
