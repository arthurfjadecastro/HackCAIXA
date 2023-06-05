import React, { useEffect, useState } from "react";
import { NonEmptyValidator } from "./Validations";
import MonetaryMaskDecorator from "./Masks/MonetaryMaskDecorator";
import UniformTextField from "./UniformTextField";

const Monetary = ({ helperText, onBlur, value, onChange, type}) => {
  const [textValueByHelperText, setValue] = useState("");
  useEffect(() => {
    const numericValue = parseInt(value.replace(/[^0-9.-]+/g, "").replace(".", ""), 10); // Remova o ponto antes de converter o valor




    if (numericValue < 200 || numericValue > 10000) {
      setValue("Valor deve estar entre R$ 200,00 e R$ 10.000,00");
    } else {
      setValue("");
    }
  }, [value]);

  return (
    <React.Fragment>
          <MonetaryMaskDecorator onChange={onChange}>
            <UniformTextField
              autoFocus
              value={value}
              InputProps={{
                onBlur: onBlur,
              }}
              variant="standard"
              allowNegative={false}
              placeholder="R$ 00.000"
              label={"Valor Solicitado"}
              helperText={textValueByHelperText ? textValueByHelperText : helperText}
              error={textValueByHelperText ? textValueByHelperText : helperText}
              type={type}
              maxLength={16}
              // fractionSize={2}
              thousandSeparator={"."}
              // decimalScale={2}
              // fixedDecimalScale={true}
            />
          </MonetaryMaskDecorator>
    </React.Fragment>
  );
};

export default (props) => <NonEmptyValidator {...props} Children={Monetary} />;

