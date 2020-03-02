import React from "react";
import PropTypes from "prop-types";

const Error = ({ children }) => (
  <div>
    <span>{children}</span>
  </div>
);

Error.propTypes = {
  children: PropTypes.node.isRequired
};
export default Error;
