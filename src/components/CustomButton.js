import React from 'react';

function CustomButton({ label, onClick, className, disabled }) {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default CustomButton;
