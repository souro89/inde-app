let count = 0;

const addOne = () => {
  count++;
  renderCountApp();
};

const subOne = () => {
  count--;
  renderCountApp();
};

const reset = () => {
  count = 0;
  renderCountApp();
};

var appRoot = document.getElementById("app");

const renderCountApp = () => {
  const templateTwo = (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCountApp();
