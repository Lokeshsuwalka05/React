  // const heading=React.createElement("h1",{id:"heading"},"hello world form React");
  const root=ReactDOM.createRoot(document.getElementById("root"));
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