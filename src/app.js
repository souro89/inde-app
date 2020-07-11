class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["option 1", "option 2", "option 3"],
    };
    this.onhandleRemoveAll = this.onhandleRemoveAll.bind(this);
    this.onMakeDecision = this.onMakeDecision.bind(this);
    this.onhandleAddOption = this.onhandleAddOption.bind(this);
    this.onhandleDeleteOptions = this.onhandleDeleteOptions.bind(this);
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      console.log("saving Data");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  onhandleDeleteOptions(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  }

  onhandleRemoveAll() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  onMakeDecision() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    console.log(option);
  }

  onhandleAddOption(option) {
    if (!option) {
      return "Enter a valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Value already exsists";
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }

  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOption={this.state.options.length > 0}
          onMakeDecision={this.onMakeDecision}
        />
        <Options
          options={this.state.options}
          onhandleRemoveAll={this.onhandleRemoveAll}
          onhandleDeleteOptions={this.onhandleDeleteOptions}
        />
        <AddOption onhandleAddOption={this.onhandleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.onMakeDecision} disabled={!props.hasOption}>
        What should i do?
      </button>
    </div>
  );
};

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

const Option = (props) => {
  return (
    <div>
      <p>{props.option}</p>
      <button
        onClick={() => {
          props.onhandleDeleteOptions(props.option);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.state = {
      error: "",
    };
  }

  handleOnSubmit(e) {
    e.preventDefault();

    let option = e.target.elements.option.value;
    let error = this.props.onhandleAddOption(option);

    this.setState(() => {
      return {
        error,
      };
    });

    if (!error) {
      e.target.elements.option = "";
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.error}</p>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="option"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
