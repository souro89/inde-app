console.log("App.js is running");

// var template = <p>This is JSX app.js!</p>;
var template = /*#__PURE__*/ React.createElement(
  "p",
  null,
  "This is React from App.js!"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
