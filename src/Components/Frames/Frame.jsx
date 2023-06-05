import React from 'react';
import './frame.css';

const Frame = ({value,initialInstallment, valueFirstInitialInstallment,lastInstallment, installments}) => {
  return (
    <div className="frame">
      <div className="text-container">
        <p>{value}</p>
        <p>{initialInstallment}ª prestação - R$ {valueFirstInitialInstallment}</p>
        <p>Última prestação R$ {lastInstallment}</p>
        <p>Parcelas {installments}</p>
      </div>
    </div>
  );
};

export default Frame;
