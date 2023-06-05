import isString from "./isString";

const isNonEmptyString = (value) => {
  // console.log(value)
  if (!isString(value)) return false;
  if (value.trim().length === 0) return false;
  return true;
};

export default isNonEmptyString;