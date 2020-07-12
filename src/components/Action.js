import React from "react";

const Action = (props) => {
  return (
    <div>
      <button onClick={props.onMakeDecision} disabled={!props.hasOption}>
        What should i do?
      </button>
    </div>
  );
};

export default Action;
