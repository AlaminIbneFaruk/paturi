import React from 'react';
import PropTypes from 'prop-types';

const HeroBanner = ({
  title,
  subtitle,
  description,
  buttonText = '',
  backgroundImage = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  minHeight = '70vh',
  buttonColor = 'bg-orange-600',
  textAlign = 'text-center'
}) => {
  return (
    <div
      className={`relative hero text-white`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: minHeight,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-0"></div>

      {/* Content */}
      <div className={`relative z-10 hero-content ${textAlign}`}>
        <div>
          {title && <h1 className="mb-5 text-5xl font-bold">{title}</h1>}
          {subtitle && <h2 className="text-4xl font-bold mb-8">{subtitle}</h2>}
          {description && <p className="mb-5 text-lg">{description}</p>}
          {buttonText && (
            <button className={`btn  ${buttonColor} border-none`}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

HeroBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  backgroundImage: PropTypes.string,
  minHeight: PropTypes.string,
  buttonColor: PropTypes.string,
  textAlign: PropTypes.oneOf(['text-left', 'text-center', 'text-right'])
};

export default HeroBanner;
