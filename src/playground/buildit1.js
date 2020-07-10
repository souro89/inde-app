const appRoot = document.getElementById("app");

let buttonText = "Show It";

const ontoggle = () => {
  if (buttonText === "Show It") {
    buttonText = "Hide It";
  } else {
    buttonText = "Show It";
  }

  render();
};

const render = () => {
  const template = (
    <div>
      <h1> Visibility Toggle </h1>
      <button onClick={ontoggle}>{buttonText}</button>
      {buttonText === "Hide It" ? <p>hey there this is a tip</p> : ""}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
