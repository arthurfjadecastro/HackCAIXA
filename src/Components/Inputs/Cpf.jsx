import React from "react";
// import { CpfValidator, NonEmptyValidator } from "../Inputs/Validations";
// import {UniformTextField} from "../Inputs";
import { TextField } from "@mui/material";
import InputMask from 'react-input-mask';
import UniformTextField from "./UniformTextField";




const CPFMask = "999.999.999-99";

const Cpf = ({}) => {
  
  return (
    <React.Fragment>
     <InputMask
            mask={CPFMask}
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