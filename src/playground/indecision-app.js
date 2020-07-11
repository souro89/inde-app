let count = 0;

const app = {
  title: "Indecision App",
  subtitle: "Something",
  options: [],
};

const formSubmit = (e) => {
  e.preventDefault();
  if (e.target.elements.option.value) {
    app.options.push(e.target.elements.option.value);
    e.target.elements.option.value = "";
  }
  render();
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  console.log(option);
};

var appRoot = document.getElementById("app");

const render = () => {
  const templateTwo = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>
        What Should I Do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ol>
      <form onSubmit={formSubmit}>
        <input type="text" name="option"></input>
        <button>Submit</button>
      </form>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

render();
