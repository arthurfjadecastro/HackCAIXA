import React from "react";
import { NonEmptyValidator } from "./Validations";
import { handleKeyPress } from "./Events";
import MonetaryMaskDecorator from "./Masks/MonetaryMaskDecorator";
import UniformTextField from "./UniformTextField";

const Monetary = ({
  name,
  label,
  value,
  defaultValue,
  onChange,
  readOnly,
  formId,
  type,
  onBlur,
  helperText,
  key,
  disabled,
  multiline,
  autoComplete,
  isUnderline,
  variant,
  shrink,
  marginZero,
  maxLength,
  error,
  autoFocus,
  onKeyPress,
  removePrefix,
  removePrefixPlaceholder,
  fontSize,
  textAlign,
  theme: overrideTheme,
}) => {
  return (
    <React.Fragment>
          <MonetaryMaskDecorator onChange={onChange}>
            <UniformTextField
              autoFocus={autoFocus}
              error={error}
              maxLength={maxLength}
              marginZero={marginZero}
              value={value}
              multiline={multiline}
              InputLabelProps={{
                shrink: shrink,
              }}
              inputProps={{
                maxLength: maxLength,
                style: { fontSize: fontSize, textAlign: textAlign },
              }}
              InputProps={{
                onKeyPress: onKeyPress && handleKeyPress(onKeyPress),
                disabled: disabled,
                readOnly: readOnly,
                disableUnderline: isUnderline,
                onBlur: onBlur,
              }}
              variant={variant}
              fractionSize={2}
              thousandSeparator={"."}
              decimalSeparator={","}
              decimalScale={2}
              fixedDecimalScale={true}
              prefix={(!removePrefix && "R$") || " "}
              autoComplete={autoComplete}
              allowNegative={false}
              placeholder={
                (!removePrefixPlaceholder && "R$ 00.000,00") || "00.000,00"
              }
              label={label}
              helperText={helperText}
              type={type}
              defaultValue={defaultValue}
              name={name}
              key={key}
            />
          </MonetaryMaskDecorator>
    </React.Fragment>
  );
};

// export default (props) => <NonEmptyValidator {...props} Children={Monetary} />;

export default Monetary;
