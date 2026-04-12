import React from 'react';
import './ProgressBar.css';

export interface ProgressBarProps {
  theme?: 'Prospect' | 'Client';
  /** Valeur de 0 à 100 */
  value?: number;
  showPercentage?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  theme = 'Prospect',
  value = 0,
  showPercentage = false,
  className = '',
}) => {
  const clamped = Math.min(100, Math.max(0, value));
  const cls = ['progress-bar', `progress-bar--${theme.toLowerCase()}`, className].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showPercentage && (
        <span className="progress-bar__label">{clamped} %</span>
      )}
    </div>
  );
};

export default ProgressBar;
