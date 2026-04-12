import React from 'react';
import './LogoAxa.css';

// SVG assets from Figma
// SVG assets from Figma (relocated to public/assets for deployment)
const ASSETS = {
  SOLID_BLUE: "/assets/logo-axa-solid-blue.svg",
  OPEN_BLUE: "/assets/logo-axa-open-blue.svg",
  OPEN_WHITE: "/assets/logo-axa-open-white.svg",
  SWITCH: "/assets/logo-axa-switch.svg",
  WEALTH_INNER: "/assets/logo-axa-wealth-inner.svg"
};

export interface LogoAxaProps {
  type?: 'Solid blue' | 'Open blue' | 'Open white' | 'Wealth';
  className?: string;
  size?: number | string;
}

export const LogoAxa: React.FC<LogoAxaProps> = ({
  type = 'Solid blue',
  className = '',
  size = 48,
}) => {
  const containerStyle = {
    width: typeof size === 'number' ? `${size}px` : size,
    height: typeof size === 'number' ? `${size}px` : size,
  };

  const renderLogo = () => {
    switch (type) {
      case 'Open blue':
        return (
          <div className="ds-logo-axa__open-blue">
            <img src={ASSETS.SWITCH} alt="" className="ds-logo-axa__switch" />
            <img src={ASSETS.OPEN_BLUE} alt="AXA Logo" className="ds-logo-axa__base" />
          </div>
        );
      case 'Open white':
        return <img src={ASSETS.OPEN_WHITE} alt="AXA Logo" className="ds-logo-axa__base" />;
      case 'Wealth':
        return (
          <div className="ds-logo-axa__wealth">
            <img src={ASSETS.WEALTH_INNER} alt="AXA Wealth" className="ds-logo-axa__base" />
          </div>
        );
      case 'Solid blue':
      default:
        return <img src={ASSETS.SOLID_BLUE} alt="AXA Logo" className="ds-logo-axa__base" />;
    }
  };

  return (
    <div 
      className={`ds-logo-axa ds-logo-axa--${type.replace(' ', '-').toLowerCase()} ${className}`} 
      style={containerStyle}
    >
      {renderLogo()}
    </div>
  );
};

export default LogoAxa;
