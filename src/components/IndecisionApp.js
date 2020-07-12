import React from "react";
import AddOption from "./AddOptions";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionalModal from "./OptionalModal";

class IndecisionApp extends React.Component {
  state = {
    options: ["option 1", "option 2", "option 3"],
    selectedOption: undefined,
  };

  onCloseModal = () => {
    this.setState(() => {
      return {
        selectedOption: undefined,
      };
    });
  };

  onhandleDeleteOptions = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  };

  onhandleRemoveAll = () => {
    this.setState(() => {
      return {
        options: [],
      };
    });
  };

  onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    this.setState(() => {
      return {
        selectedOption: option,
      };
    });
  };

  onhandleAddOption = (option) => {
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
  };

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
        <OptionalModal
          selectedOption={this.state.selectedOption}
          onCloseModal={this.onCloseModal}
        />
      </div>
    );
  }
}

export default IndecisionApp;
