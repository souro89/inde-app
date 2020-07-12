import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      <button onClick={props.onhandleRemoveAll}>Remove All</button>
      {props.options.map((op) => (
        <Option
          onhandleDeleteOptions={props.onhandleDeleteOptions}
          key={op}
          option={op}
        />
      ))}
    </div>
  );
};

export default Options;
