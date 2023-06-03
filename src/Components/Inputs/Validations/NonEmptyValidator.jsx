import React from "react";
import OnBlurValidator from "./Base/OnBlurValidator";
import { isNonEmptyString } from "../../../Validations";

const TEXT_PRESENT_ERROR = "Esse campo é obrigatório.";

const NonEmptyValidator = (props) => {
  return (
    <OnBlurValidator
      {...props}
      predicate={isNonEmptyString}
      errorMessage={TEXT_PRESENT_ERROR}
      Children={props.Children}
    />
  );
};

export default NonEmptyValidator;
