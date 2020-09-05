import React from "react";
import PropTypes from "prop-types";
const classname = require("classnames");

const TextInputGroup = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classname("form-control form-control-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.defaultProps = {
  type: "text",
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInputGroup;
