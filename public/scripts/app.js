"use strict";

var count = 0;

var addOne = function addOne() {
  count++;
  renderCountApp();
};

var subOne = function subOne() {
  count--;
  renderCountApp();
};

var reset = function reset() {
  count = 0;
  renderCountApp();
};

var appRoot = document.getElementById("app");

var renderCountApp = function renderCountApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count : ",
      count,
      " "
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: subOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCountApp();
