console.log("App.js is running");

var user = {
  name: "Indecision App",
  age: 21,
  location: "cloud",
};

function getLocation(location) {
  if (location) {
    return <p>Location : {location}</p>;
  }
}

var template = (
  <div>
    <h1>{user.name ? user.name : "undefined"}</h1>
    {user.age >= 18 && <p>Age : {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
