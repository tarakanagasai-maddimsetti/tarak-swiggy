/*
<div>
  <div>
    <h1></h1>
    <h2></h2>
  </div>
  <div>
    <h1></h1>
    <h2></h2>
  </div>
</div>

*/

const parent = React.createElement(
  "div",
  { className: "parent" },
  [React.createElement(
    "div",
    { id: "child1" },
    [React.createElement("h1", {}, "This is H1 tag"),React.createElement("h2", {}, "This is H2 tag")]
  ),React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "This is H1 tag"),React.createElement("h2", {}, "This is H2 tag")]
  )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
