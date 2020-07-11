class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnAdd = this.handleOnAdd.bind(this);
    this.handleOnSub = this.handleOnSub.bind(this);
    this.handleOnReset = this.handleOnReset.bind(this);
    this.state = {
      count: 0,
    };
  }

  handleOnAdd() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  handleOnSub() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  handleOnReset() {
    console.log("reset");
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleOnAdd}>+1</button>
        <button onClick={this.handleOnSub}>-1</button>
        <button onClick={this.handleOnReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
