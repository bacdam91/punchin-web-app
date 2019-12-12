import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";

import CalendarBody from "./components/CalendarBody";
import "@fortawesome/fontawesome-free/css/all.css";

import "./css/main.css";
import "./css/shift.css";
import "./css/calendar.css";

ReactDOM.render(<CalendarBody />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
