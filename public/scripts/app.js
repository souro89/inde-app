"use strict";

var count = 0;

var app = {
  title: "Indecision App",
  subtitle: "Something",
  options: []
};

var formSubmit = function formSubmit(e) {
  e.preventDefault();
  if (e.target.elements.option.value) {
    app.options.push(e.target.elements.option.value);
    e.target.elements.option.value = "";
  }
  render();
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNumber = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNumber];
  console.log(option);
};

var appRoot = document.getElementById("app");

var render = function render() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "button",
      { disabled: app.options.length == 0, onClick: onMakeDecision },
      "What Should I Do?"
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (o) {
        return React.createElement(
          "li",
          { key: o },
          o
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: formSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Submit"
      )
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

render();
