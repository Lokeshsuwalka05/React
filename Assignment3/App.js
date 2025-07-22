import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement=>object=>Html Element(render)

//create element by using react
// const heading =React.createElement("h1",{id:"heading"},"I am an h1 tag");

//create element by using jsx
// jsx(transpile Before it reaches the js)-Parcel-Babel(it is a transpiler or javascript compiler)

//jsx=>React.createElement=>object=>Html Element(render)
const heading1 = (
  <h1 id="heading1">Hello Lokesh is here with the help of JSX</h1>
);

//React Functional Component

const HeadingComponent = () => {
  return (
    <div id="child">
      <h1 id="heading1">
        Hello Lokesh is here with the help of HeadingComponent
      </h1>
      <h2 id="heading2">
        Hello Lokesh is here with the help of HeadingComponent
      </h2>
    </div>
  );
};

//component composition
const HeadingComponent1 = () => {
  return (
    <div id="parent">
      <HeadingComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading1);
root.render(<HeadingComponent1 />);
