"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: ["option 1", "option 2", "option 3"]
    };
    _this.onhandleRemoveAll = _this.onhandleRemoveAll.bind(_this);
    _this.onMakeDecision = _this.onMakeDecision.bind(_this);
    _this.onhandleAddOption = _this.onhandleAddOption.bind(_this);
    _this.onhandleDeleteOptions = _this.onhandleDeleteOptions.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var options = JSON.parse(localStorage.getItem("options"));
        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {}
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length != this.state.options.length) {
        console.log("saving Data");
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("component will unmount");
    }
  }, {
    key: "onhandleDeleteOptions",
    value: function onhandleDeleteOptions(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "onhandleRemoveAll",
    value: function onhandleRemoveAll() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "onMakeDecision",
    value: function onMakeDecision() {
      var randomNumber = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNumber];
      console.log(option);
    }
  }, {
    key: "onhandleAddOption",
    value: function onhandleAddOption(option) {
      if (!option) {
        return "Enter a valid option";
      } else if (this.state.options.indexOf(option) > -1) {
        return "Value already exsists";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision App";
      var subtitle = "Put your life in the hands of a computer";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOption: this.state.options.length > 0,
          onMakeDecision: this.onMakeDecision
        }),
        React.createElement(Options, {
          options: this.state.options,
          onhandleRemoveAll: this.onhandleRemoveAll,
          onhandleDeleteOptions: this.onhandleDeleteOptions
        }),
        React.createElement(AddOption, { onhandleAddOption: this.onhandleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.onMakeDecision, disabled: !props.hasOption },
      "What should i do?"
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.onhandleRemoveAll },
      "Remove All"
    ),
    props.options.map(function (op) {
      return React.createElement(Option, {
        onhandleDeleteOptions: props.onhandleDeleteOptions,
        key: op,
        option: op
      });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      props.option
    ),
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          props.onhandleDeleteOptions(props.option);
        }
      },
      "Remove"
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleOnSubmit = _this2.handleOnSubmit.bind(_this2);
    _this2.state = {
      error: ""
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleOnSubmit",
    value: function handleOnSubmit(e) {
      e.preventDefault();

      var option = e.target.elements.option.value;
      var error = this.props.onhandleAddOption(option);

      this.setState(function () {
        return {
          error: error
        };
      });

      if (!error) {
        e.target.elements.option = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleOnSubmit },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Submit"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
