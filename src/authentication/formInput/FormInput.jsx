import React, { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="form">
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        style={{
          padding: "10px 0px",
          borderRadius: "10PX",
          paddingLeft: "10px",
          outline: "none",
        }}
      />
      <span className="errorMessage">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
