"use strict";

console.log("App.js is running");

var template = React.createElement(
  "p",
  { id: "p1" },
  "This is JSX app.js!"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
