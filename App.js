
// EC-1: Example Code for creating nested HTML tags in React
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


const element = React.createElement(
    "h1",
    { id: "heading" },
    "Hello, React"
);

console.log(element);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);