// Cpf.jsx
import React from "react";
import { TextField } from "@mui/material";
import InputMask from "react-input-mask";
import UniformTextField from "./UniformTextField";
import { CpfValidator, NonEmptyValidator } from "./Validations";

const CPFMask = "999.999.999-99";

const Cpf = ({ helperText, onBlur, value, onChange }) => {
  return (
    <InputMask
      type={"cpf"}
      mask={CPFMask}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    >
      {() => (
        <UniformTextField
          type={"cpf"}
          error={helperText}
          id="standard-helperText"
          label="CPF"
          // value={value}
          helperText={helperText}
          variant="standard"
        />
      )}
    </InputMask>
  );
};

// export default Cpf;
const Foo = (props) => <CpfValidator {...props} Children={Cpf} />;
export default (props) => <NonEmptyValidator {...props} Children={Foo} />;