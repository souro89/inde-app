class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["option 1", "option 2", "option 3"],
    };
    this.onhandleRemoveAll = this.onhandleRemoveAll.bind(this);
    this.onMakeDecision = this.onMakeDecision.bind(this);
    this.onhandleAddOption = this.onhandleAddOption.bind(this);
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
        />
        <AddOption onhandleAddOption={this.onhandleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onMakeDecision}
          disabled={!this.props.hasOption}
        >
          What should i do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onhandleRemoveAll}>Remove All</button>
        {this.props.options.map((op) => (
          <Option key={op} option={op} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.option}</p>
      </div>
    );
  }
}

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
