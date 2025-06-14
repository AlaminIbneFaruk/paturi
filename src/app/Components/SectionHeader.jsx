import React from 'react';
import PropTypes from 'prop-types';
import { GiHotMeal } from "react-icons/gi";

const SectionHeader = ({ 
  title, 
  subtitle, 
  align = 'center', 
  titleSize = 'text-5xl', 
  subtitleSize = 'text-lg',
  className = '',
  titleClassName = "text-orange-800 font-bold",
  subtitleClassName = "text-orange-600"
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`mb-12 ${className} ${alignmentClasses[align]}`}>
      
      {subtitle && (
        <p className={`text-gray-600 ${subtitleSize} flex items-center justify-center gap-4 text-center ${subtitleClassName} mb-4`}>
          <span><GiHotMeal /></span><span>{subtitle}</span><span><GiHotMeal /></span>
        </p>
      )}
      {title && (
        <h2 className={`font-bold ${titleSize} text-gray-800 mb-2 ${titleClassName}`}>
          {title}
        </h2>
      )}
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  titleSize: PropTypes.string,
  subtitleSize: PropTypes.string,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  subtitleClassName: PropTypes.string
};

export default SectionHeader;