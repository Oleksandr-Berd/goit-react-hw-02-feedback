import React from 'react';
import PropTypes from 'prop-types';




const StatisticsSection = ({ title }) => (
  <div className="feedback">
    <p className="text__feedback">{title}</p>
  </div>
);

StatisticsSection.prototype = {
  title: PropTypes.string.isRequired
}

export default StatisticsSection;
