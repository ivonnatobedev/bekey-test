import React from 'react';

const exerciseComponent = ({item}) => {
  return (
    <li className="exercise-item">
      {item.label}
    </li>
  );
};

export default exerciseComponent;