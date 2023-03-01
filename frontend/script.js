console.log("hello");

const rootElement = document.querySelector("#root");

rootElement.insertAdjacentHTML("beforeend", `<h3>text from js</h3>`);
rootElement.insertAdjacentHTML("beforeend", `<h3>text from js2</h3>`);
