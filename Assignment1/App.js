  // const heading=React.createElement("h1",{id:"heading"},"hello world form React");
  const root=ReactDOM.createRoot(document.getElementById("root"));
  // It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. This root is the place where all React code will run.

      // <div id="parent">
      //      <div id="child1">
      //         <h1></h1>
      //         <h2></h2>
      //      </div>
      //      <div id="child2">
      //         <h1></h1>
      //         <h1></h1>
      //      </div>
      // </div>
  const parent=React.createElement("div",{id:"parent"},
        [React.createElement("div",{id:"child"},
          [React.createElement("h1",{},"i am an h1 tag"),
           React.createElement("h2",{},"i am an h2 tag")]
        ),
        React.createElement("div",{id:"child"},
          [React.createElement("h1",{},"i am an h1 tag"),
            React.createElement("h2",{},"i am an h2 tag")]
        )
        ]

  );
  root.render(parent);
  // In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.