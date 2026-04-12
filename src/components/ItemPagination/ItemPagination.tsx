import React from 'react';
import './ItemPagination.css';

export interface ItemPaginationProps {
  state?: 'active' | 'default' | 'disabled';
  label?: string;
  theme?: 'Prospect' | 'Client';
  className?: string;
  onClick?: () => void;
}

export const ItemPagination: React.FC<ItemPaginationProps> = ({
  state = 'default',
  label = '1',
  theme = 'Prospect',
  className = '',
  onClick,
}) => {
  const themeClass = theme.toLowerCase();
  const stateClass = state === 'active' ? 'active' : state === 'disabled' ? 'disabled' : 'default';

  const handleClick = () => {
    if (state !== 'disabled' && onClick) {
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={state === 'disabled' ? -1 : 0}
      className={`ds-item-pagination ds-item-pagination--${themeClass} ds-item-pagination--${stateClass} ${className}`}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      aria-current={state === 'active' ? 'page' : undefined}
      aria-disabled={state === 'disabled'}
    >
      <span className="ds-item-pagination__text">
        {state === 'disabled' ? '...' : label}
      </span>
    </div>
  );
};

export default ItemPagination;
