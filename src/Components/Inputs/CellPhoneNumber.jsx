import React from "react";
// import { CpfValidator, NonEmptyValidator } from "../Inputs/Validations";
// import {UniformTextField} from "../Inputs";
import { TextField } from "@mui/material";
import InputMask from 'react-input-mask';
import UniformTextField from "./UniformTextField";




const MASK_CELPHONE = "(99) 9 9999-9999";

const Cpf = ({}) => {
  
  return (
    <React.Fragment>
     <InputMask
            mask={MASK_CELPHONE}
          >
            {() => (
              <UniformTextField/>
            )}
          </InputMask>
        
    </React.Fragment>
  );
};

// const Foo = (props) => <CpfValidator {...props} Children={Cpf} />;
// export default (props) => <NonEmptyValidator {...props} Children={Foo} />;
export default Cpf;