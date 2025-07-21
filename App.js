// import React from "react";
// import ReactDOM from "react-dom/client";
// // EC-1: Example Code for creating nested HTML tags in React
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [
//         React.createElement(
//             "div",
//             { id: "child1" },
//             React.createElement("h1", { id: "Child-1-h1" }, "This is h1 tag of child-1")
//         ),
//         React.createElement(
//             "div",
//             { id: "child2" },
//             React.createElement("h1", { id: "Child-2-h1" }, "This is h1 tag of child-2")
//         ),
//         React.createElement("div", { id: "child3" }, "Child 3")
//     ]
// );

// const element = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello, React"
// );

// console.log(element);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// // export default element;

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello, React");

const jsxHeading = <h1 id="heading">Hello, React from JSX</h1>;

const Title = () => (
  <div>
    <h1>Title Component</h1>
    <h2>Subtitle of Title Component</h2>
  </div>
);

//React Functional component
//Component composition
const HeadingComponent = () => (
  <div id="container">
    <h1>Hello from Function Component</h1>
    <Title />
  </div>
);

// shorthand syntax
// const HeadingComponet = () => <h1>Hello from Function Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
//rendering the component
root.render(<HeadingComponent />);
