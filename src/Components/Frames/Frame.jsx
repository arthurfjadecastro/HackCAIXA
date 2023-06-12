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
      <h2 className="title">Valor Total Solicitado </h2> 
      <div className="text-container">
        <p className="value">{value},00</p>
        <p className="installment">
          1ª prestação:<span style={{ color: "#FF6600" }}>R$ {valueFirstInitialInstallment}    </span> 
        </p>
        <p className="last-installment">
          Última prestação:<span style={{ color: "#FF6600" }}>R$ {lastInstallment}    </span>
        </p>
        <p className="installments">Parcelas:<span style={{ color: "#FF6600" }}>R$ {installments}x   </span>  </p>
      </div>
    </div>
  );
};

export default Frame;