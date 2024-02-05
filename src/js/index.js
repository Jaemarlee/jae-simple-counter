//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack boundle
import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.css";

//import your own components
import Home from "./component/Home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
