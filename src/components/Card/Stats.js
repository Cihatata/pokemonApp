import React from 'react';

const Stats = ({stat}) => {
  return (
    <div className="stat-wrapper">
      <div className="pokemon-stat-key">
        {stat.stat.name}
      </div>
      <div className="pokemon-stat-value">
        {stat.base_stat}
      </div>
    </div>
  );
};

export default Stats;
