import React from "react";
import ByTimeValidator from "./Base/ByTimeValidator";
import { isCPFValid } from "../../../Validations";

const TEXT_PRESENT_ERROR = "Inválido, informe um CPF válido";

const CpfValidator = (props) => {
  return (
    <ByTimeValidator
      {...props}
      predicate={isCPFValid}
      errorMessage={TEXT_PRESENT_ERROR}
      Children={props.Children}
    />
  );
};

export default CpfValidator;
