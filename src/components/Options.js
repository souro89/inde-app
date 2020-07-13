import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className=".widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.onhandleRemoveAll}
        >
          Remove All
        </button>
      </div>
      {props.options.length === 0 && (
        <p className="widget__message">Please add an option to begin</p>
      )}
      {props.options.map((op, index) => (
        <Option
          onhandleDeleteOptions={props.onhandleDeleteOptions}
          key={op}
          count={index + 1}
          option={op}
        />
      ))}
    </div>
  );
};

export default Options;
