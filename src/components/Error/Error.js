import React from "react";

const Error = ({ message }) => {
  return (
    <div class="alert alert-danger mt-2" role="alert">
      {message}
    </div>
  );
};

export default Error;
