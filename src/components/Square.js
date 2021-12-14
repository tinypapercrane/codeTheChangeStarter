import React from "react";

const Square = ({ key, value, onClick }) => {
  let classN = value !== null ? "squares selected" : "squares";
  return (
    <button className={classN} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
