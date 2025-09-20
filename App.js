import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child", key:"childkey" }, [
    React.createElement("h1",{id:"h1tag", key:"h1key"}, "I am an h1 tag"),
    React.createElement("h2", {id:"h2tag", key:"h2key"}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key:"child2key" }, [
    React.createElement("h1",{id:"h1tag", key:"h1key"}, "I am an h1 tag"),
    React.createElement("h2", {id:"h2tag", key:"h2key"}, "I am an h2 tag"),
  ])
]

);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);