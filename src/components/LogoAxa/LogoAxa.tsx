import React from 'react';
import './LogoAxa.css';

// SVG assets from Figma
const ASSETS = {
  SOLID_BLUE: "http://localhost:3845/assets/920161dc35fa02bb87b1d6de0209f43a1c01cde7.svg",
  OPEN_BLUE: "http://localhost:3845/assets/57d477173c087d11b7e0c5d94b6baa56a0589106.svg",
  OPEN_WHITE: "http://localhost:3845/assets/c90a69b22d68d016208dbc76b703e840973daf05.svg",
  SWITCH: "http://localhost:3845/assets/747769b8befff13c827cb3cd46483dabd0e16657.svg",
  WEALTH_INNER: "http://localhost:3845/assets/54784bff79388bc99b1d994755f9795409e9bbac.svg"
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
