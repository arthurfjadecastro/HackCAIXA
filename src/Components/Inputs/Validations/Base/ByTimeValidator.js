import React, { useState, useEffect } from "react";

const ByTimeValidator = (props) => {
  const [timeoutID, setTimeoutID] = useState(null);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    clearTimeout(timeoutID);
    setTimeoutID(null);

    const isValid = props.predicate(props.value);

    if (props.value && !isValid) {
      const timeoutID = setTimeout(() => {
        setIsValid(false);
      }, 2000);
      setTimeoutID(timeoutID);
    } else {
      setIsValid(true);
    }
  }, [props.value]);

  if (isValid) {
    return <props.Children {...props} />;
  } else {
    return <props.Children {...props} helperText={props.errorMessage} />;
  }
};

export default ByTimeValidator;
