import React from "react";
import "./frame.css";

const Frame = ({
  value,
  initialInstallment,
  valueFirstInitialInstallment,
  lastInstallment,
  installments,
}) => {
  return (
    <div className="frame">
      <div className="text-container">
        <p className="value">{value}</p>
        <p className="installment">
          1ª prestação - R$ {valueFirstInitialInstallment}
        </p>
        <p className="last-installment">
          Última prestação - R$ {lastInstallment}
        </p>
        <p className="installments">Parcelas - {installments}x</p>
      </div>
    </div>
  );
};

export default Frame;
