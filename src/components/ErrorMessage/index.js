import React from 'react';
import "./index.css";

const errorMessage = ({message}) => {
    return (
      <div className="error-message">
        {message}
      </div>
    );
};

export default errorMessage;