import React from 'react';
import './frame.css';

const Frame = () => {
  return (
    <div className="frame">
      <div className="text-container">
        <p>R$ 50.000,00</p>
        <p>1ª prestação R$ 2.400,00</p>
        <p>Última prestação R$ 600,00</p>
        <p>3,70% ao mês</p>
      </div>
    </div>
  );
};

export default Frame;
