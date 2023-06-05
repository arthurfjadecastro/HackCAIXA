import React from "react";
// import { CpfValidator, NonEmptyValidator } from "../Inputs/Validations";
// import {UniformTextField} from "../Inputs";
import { TextField } from "@mui/material";
import InputMask from 'react-input-mask';
import UniformTextField from "./UniformTextField";




const MASK_CELPHONE = "(99) 9 9999-9999";

const CellPhoneNumber = ({}) => {
  
  return (
    <React.Fragment>
     <InputMask
            mask={MASK_CELPHONE}
          >
            {() => (
              <UniformTextField 
              id="standard-helperText"
              label="Celular"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="standard"/>
            )}
          </InputMask>
        
    </React.Fragment>
  );
};

// const Foo = (props) => <CellPhoneNumberValidator {...props} Children={Cpf} />;
// export default (props) => <NonEmptyValidator {...props} Children={Foo} />;
export default CellPhoneNumber;