import React from "react";
// import { CpfValidator, NonEmptyValidator } from "../Inputs/Validations";
// import {UniformTextField} from "../Inputs";
import { TextField } from "@mui/material";
import InputMask from 'react-input-mask';
import UniformTextField from "./UniformTextField";
import { NonEmptyValidator } from "./Validations";
import CellPhoneNumberValidator from "./Validations/CellPhoneNumberValidator";





const MASK_CELPHONE = "(99) 9 9999-9999";

const CellPhoneNumber = ({ helperText, onBlur, value, onChange, type}) => {
  
  return (
    <React.Fragment>
     <InputMask
      type={type}
      mask={MASK_CELPHONE}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    >
            {() => (
              <UniformTextField 
                type={type}
                error={helperText}
                id="standard-helperText"
                label="Celular"
                helperText={helperText}
                variant="standard"
              />
            )}
          </InputMask>
        
    </React.Fragment>
  );
};
const Wrapper = (props) => (
  <CellPhoneNumberValidator {...props} Children={CellPhoneNumber} />
);
export default (props) => <NonEmptyValidator {...props} Children={Wrapper} />;

// export default CellPhoneNumber;