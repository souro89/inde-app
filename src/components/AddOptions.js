import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: "",
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    let option = e.target.elements.option.value;
    let error = this.props.onhandleAddOption(option);

    this.setState(() => {
      return {
        error,
      };
    });

    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        <p className="add-option-error">{this.state.error}</p>
        <form className="add-option" onSubmit={this.handleOnSubmit}>
          <input
            className="add-option__input"
            type="text"
            name="option"
          ></input>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
